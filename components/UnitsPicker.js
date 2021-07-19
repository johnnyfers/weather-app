import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Picker } from '@react-native-community/picker'

export default function UnitsPicker({ unitsSystem, setUnitsSystem }) {
    return (
        <View style={styles.unitsSystem}>
            <Picker
                selectedValue={unitsSystem}
                onValueChange={(item) => setUnitsSystem(item)}>
                <Picker label="C°" value="metric" />
                <Picker label="F°" value="imperial" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    unitsSystem: {
        position: 'absolute',
        top: 0,
        height: 50,
        width: 100
    }
})