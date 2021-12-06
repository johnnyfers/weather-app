import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { GEO_API_KEY } from 'react-native-dotenv'
import { useDispatch, useSelector } from 'react-redux';
import { citiesActions } from '../../store/cities-sclice'
import { CityItem } from '../../components/CityItem/index'
import { styles } from './styles'

const BASE_WEATHER_URL = 'http://192.168.0.101:3333/cities'

export default function City() {
    const dispatch = useDispatch()

    const { cities } = useSelector((state) => state.city)

    const [errorMessage, setErrorMEssage] = useState()
    const [cityName, setCityName] = useState()


    function cityNameInputHandler(value) {
        setCityName(value)
    }

    async function fetchDataByCityName() {
        try {
            const cityUrl = `${BASE_WEATHER_URL}?name=${cityName}`

            const response = await fetch(cityUrl)
            const results = await response.json()

            console.log('result >> ', results)


            dispatch(citiesActions.addCityToArray({
                data:
                {
                    city: cityName,
                    code: results[0].state_code,
                    country: results[0].country,
                    latitude: results[0].lat,
                    longitude: results[0].lng
                }
            }))

            console.log(cities)

        } catch (err) {
            console.log(err)
        }
    }

    async function fetchDataByLatLong() {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync()

            if (status !== 'granted') {
                setErrorMEssage('Access to location is needed to run the app')
                return
            }

            const location = await Location.getCurrentPositionAsync()
            const { latitude, longitude } = location.coords

            const cityUrl = `${BASE_WEATHER_URL}q=${latitude}+${longitude}&key=${GEO_API_KEY}`

            const response = await fetch(cityUrl)
            const result = await response.json()

            if (status.message == 'OK') {

                dispatch(citiesActions.addCityToArray({
                    data:
                    {
                        city: results[0].components.city,
                        code: results[0].components.state_code,
                        country: results[0].components.country,
                        latitude: results[0].geometry.lat,
                        longitude: results[0].geometry.lng
                    }
                }))
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Search</Text>
                </View>

                <Text style={styles.subtitle}>Type your location here: </Text>

                <TextInput
                    style={styles.input}
                    onChangeText={cityNameInputHandler}
                />

                <View style={styles.buttons}>
                    <RectButton
                        activeOpacity={0.7}
                        style={styles.button}
                        onPress={fetchDataByCityName}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </RectButton>
                    <RectButton
                        activeOpacity={0.7}
                        style={styles.button}
                        onPress={fetchDataByLatLong}
                    >
                        <MaterialCommunityIcons name="target" size={34} color="white" />
                    </RectButton>
                </View>

                <Text style={styles.searches}>Previous Searches</Text>

                <View>
                    {cities.length > 0 && cities.map((item) =>
                        <CityItem
                            key={Math.random()}
                            city={item.city}
                            code={item.code}
                            country={item.country}
                            latitude={item.latitude}
                            longitude={item.longitude}
                        />
                    )}
                </View>

            </View>
        </View>
    )
}
