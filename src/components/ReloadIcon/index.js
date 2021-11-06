import React from 'react'
import { View, Platform, StyleSheet, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {colors} from '../../utils/index'
import { useNavigation } from '@react-navigation/native'

export default function ReloadIcon({load}) {
    const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'
    const navigation = useNavigation()
    
    function handleSignIn() {
        navigation.navigate('City')
    }
    
    return (
        <View style={styles.reloadIcon}>
            <Ionicons onPress={load} name={reloadIconName} size={24} color={colors.PRIMARY_COLOR} />
            <Text></Text>
            <Ionicons onPress={handleSignIn} name="ios-business-sharp" size={24} color={colors.PRIMARY_COLOR} />
        </View>
    )
}

const styles = StyleSheet.create({
    reloadIcon: {
        position: 'absolute',
        top: 50,
        right: 20
    }
})