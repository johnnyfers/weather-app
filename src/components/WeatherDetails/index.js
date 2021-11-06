import React from 'react'
import { View, Text } from 'react-native'
import { colors } from '../../utils/index'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './styles'

export default function WeatherDetails({ currentWeather, unitsSystem }) {
    const {
        main: {
            feels_like,
            humidity,
            pressure
        },
        wind: {
            speed
        }
    } = currentWeather

    const windSpeed = unitsSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h`

    return (
        <View style={styles.WeatherDetails}>
            <View style={styles.WeatherDetailsRow}>
                <View style={{ ...styles.WeatherDetailsBox, borderRightWidth: 1, borderRightColor: colors.BORDER_COLOR }}>
                    <View style={styles.WeatherDetailsRow}>
                        <FontAwesome5 name="temperature-low" size={25} color={colors.PRIMARY_COLOR} />
                        <View style={styles.WeatherDetailsItems}>
                            <Text>Feels Like :</Text>
                            <Text style={styles.textSecondary}>{feels_like} °</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.WeatherDetailsBox}>
                    <View style={styles.WeatherDetailsRow}>
                        <MaterialCommunityIcons name="water" size={30} color={colors.PRIMARY_COLOR} />
                        <View style={styles.WeatherDetailsItems}>
                            <Text>Humidity :</Text>
                            <Text style={styles.textSecondary}>{humidity} %</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ ...styles.WeatherDetailsRow, borderTopWidth: 1, borderTopColor: colors.BORDER_COLOR }}>
                <View style={{ ...styles.WeatherDetailsBox, borderRightWidth: 1, borderRightColor: colors.BORDER_COLOR }}>
                    <View style={styles.WeatherDetailsRow}>
                        <MaterialCommunityIcons name="weather-windy" size={30} color={colors.PRIMARY_COLOR} />
                        <View style={styles.WeatherDetailsItems}>
                            <Text>Wind Speed :</Text>
                            <Text style={styles.textSecondary}>{windSpeed}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.WeatherDetailsBox}>
                    <View style={styles.WeatherDetailsRow}>
                        <MaterialCommunityIcons name="speedometer" size={30} color={colors.PRIMARY_COLOR} />
                        <View style={styles.WeatherDetailsItems}>
                            <Text>Pressure :</Text>
                            <Text style={styles.textSecondary}>{pressure} hPa</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}