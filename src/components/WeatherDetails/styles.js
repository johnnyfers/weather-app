import { StyleSheet } from 'react-native'

import { colors } from '../../utils/index'

const { BORDER_COLOR, SECONDARY_COLOR } = colors

export const styles = StyleSheet.create({
    WeatherDetails: {
        position: 'relative',
        bottom: 25,
        marginTop: 'auto',
        margin: 10,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 10
    },
    WeatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    WeatherDetailsBox: {
        flex: 1,
        padding: 20,
    },
    WeatherDetailsItems: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    textSecondary: {
        fontSize: 15,
        color: SECONDARY_COLOR,
        fontWeight: 'bold',
        margin: 7,
    }
})
