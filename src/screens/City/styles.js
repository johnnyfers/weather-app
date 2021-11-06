import { StyleSheet } from 'react-native'
import { colors } from '../../utils/index'

export const styles = StyleSheet.create({
    container: {
        top: 40,
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    title: {
        justifyContent: 'center',
        width: '200%',
        height: 50,
        borderColor: colors.BORDER_COLOR,
        borderBottomWidth: 3,
        marginBottom: 10,
        marginHorizontal: -20,
        paddingHorizontal: 20
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
    },
    subtitle: {
        fontSize: 20,
        marginBottom: 30
    },
    input: {
        padding: 10,
        color: 'gray',
        width: '100%',
        height: 50,
        borderWidth: 0.5,
        borderColor: colors.BORDER_COLOR,
        borderRadius: 8,
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 15
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30

    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 140,
        height: 60,
        borderRadius: 8,
        backgroundColor: colors.PRIMARY_COLOR
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
    searches: {
        fontSize: 27,
        fontWeight: 'bold',
        marginBottom: 15
    }
})