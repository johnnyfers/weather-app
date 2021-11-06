import React from 'react'
import { View } from 'react-native'
import { Picker } from '@react-native-community/picker'

import { styles } from './styles'

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