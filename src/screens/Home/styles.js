import { StyleSheet } from 'react-native'
import { colors } from '../../utils/index'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 360
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    title: {
        color: colors.PRIMARY_COLOR,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        lineHeight: 40
    },
    subtitle: {
        color: colors.PRIMARY_COLOR,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 30,
        lineHeight: 25
    },
    containerBTN: {
        width: '100%',
        height: 56,
        backgroundColor: colors.SECONDARY_COLOR,
        borderRadius: 8,
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleBTN: {
        flex: 1,
        color: colors.BORDER_COLOR,
        fontSize: 15,
        textAlign: 'center',
    },
    scrollTitle: {
        fontSize: 17,
        marginLeft: 10,
        marginBottom: 20,
        color: colors.PRIMARY_COLOR,
        fontWeight: 'bold'
    }
})