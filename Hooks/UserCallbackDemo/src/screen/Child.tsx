import { View, Text } from 'react-native'
import React, { memo } from 'react'


const child = ({ Learning, count }) => {
    console.warn("child component");

    return (
        <View>
            <Text>UseCallback</Text>
        </View>
    )
}


export default memo(child);