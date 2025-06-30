import { View, Text } from 'react-native'
import React from 'react'
import ChildB from '../screen/ChldB'


const ChildA = () => {
    return (
        <View>
            <ChildB />
            {/* <Text>hiiiiiii</Text> */}
        </View>
    )
}


export default ChildA