import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { weatherActions } from '../../store/weather-slice'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import { colors } from '../../utils/index'
import { styles } from './styles'

export function CityItem(props) {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    function handleSignIn(latitude, longitude) {
        console.log(latitude, longitude)

        dispatch(weatherActions.setGeo({
            data: { latitude, longitude }
        }))

        return navigation.navigate('Weather')
    }

    return (
        <RectButton
            onPress={() => handleSignIn(props.latitude, props.longitude)}
            style={styles.card}>
            <View style={styles.insideCard}>
                <View>
                    <Text style={styles.textMain}>
                        {props.city}
                    </Text>
                    <Text>
                        {props.code}, {props.country}
                    </Text>
                </View>

                <Ionicons name="ios-arrow-forward" size={34} color={colors.PRIMARY_COLOR} />
            </View>
        </RectButton>)
}