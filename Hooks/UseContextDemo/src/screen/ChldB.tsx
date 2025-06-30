import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { data, data1 } from '../../App';



const ChildB = () => {
    const name = useContext(data);
    const gender = useContext(data1);


    return (
        <View>
            <Text>{`hi may name is ${name} and my gender is ${gender}`}</Text>
        </View>
    )
}


export default ChildB