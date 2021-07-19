import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import { colors } from '../utils/index'

export default function City() {

    const CityItem = () => {
        return (
        <View style={styles.card}>
            <View style={styles.insideCard}>
                <View>
                    <Text style={styles.textMain}>
                        Rio de Janeiro
                    </Text>
                    <Text>
                        RJ, Brazil
                    </Text>
                </View>

                <Ionicons name="ios-arrow-forward" size={34} color={colors.PRIMARY_COLOR} />
            </View>
        </View>)
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Search</Text>
                </View>

                <Text style={styles.subtitle}>Type your location here: </Text>

                <TextInput style={styles.input} />

                <View style={styles.buttons}>
                    <RectButton activeOpacity={0.7} style={styles.button}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </RectButton>
                    <RectButton activeOpacity={0.7} style={styles.button}>
                        <MaterialCommunityIcons name="target" size={34} color="white" />
                    </RectButton>
                </View>

                <Text style={styles.searches}>Previous Searches</Text>

                {CityItem()}
                {CityItem()}
                {CityItem()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 40,
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    title: {
        justifyContent: 'center',
        width: '120%',
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
    },
    card:{
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
        paddingHorizontal: 14,
        borderLeftWidth: 3,
        borderLeftColor: colors.PRIMARY_COLOR,
    },
    textMain: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5
    }
})