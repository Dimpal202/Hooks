import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import Child from './src/screen/Child'


const usecallbackDemo = () => {


  const [add, setadd] = useState(0);
  const [count, setcount] = useState(0);


  const Learning = useCallback(() => {


  }, [count])
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Child Learning={Learning} count={count} />
      <Text>{add}</Text>


      <TouchableOpacity onPress={() => setadd(add + 1)}>
        <Text>add item</Text>
      </TouchableOpacity>


      <Text>{count}</Text>


      <TouchableOpacity onPress={() => setcount(count + 1)}>
        <Text>add count</Text>
      </TouchableOpacity>
    </View>
  )
}


export default usecallbackDemo