import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

export default function WeatherInfo({ currentWeather }) {
    const {
        main: { temp },
        weather: [details],
        name
    } = currentWeather

    const { icon, description, main } = details
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        <View style={styles.weatherInfo}>
            <Text>{name}</Text>
            <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
            <Text style={styles.textPrimary}>{temp}°</Text>
            <Text style={styles.weatherDescription}>{description}</Text>
            <Text style={styles.textSecondary}>{main}</Text>
        </View>
    )
}
