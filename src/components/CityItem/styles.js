import { StyleSheet } from 'react-native'
import { colors } from '../../utils/index'

export const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: colors.BORDER_COLOR,
        borderRadius: 8,
        padding: 20,
        marginBottom: 10
    },
    insideCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        borderLeftWidth: 3,
        borderLeftColor: colors.PRIMARY_COLOR,
    },
    textMain: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5
    }
})