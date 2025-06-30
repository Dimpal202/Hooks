import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { warn } from 'console';


const App = () => {
  const [count, setcount] = useState(0);
  const [data, setdata] = useState(0);


  useEffect(() => {
    console.warn("hello", count)
  }, [count])



  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => setcount(count + 1)}>
        <Text>Add</Text>
      </TouchableOpacity>
      <Text>{data}</Text>
      <TouchableOpacity onPress={() => setdata(data + 1)}>
        <Text>Add</Text>
      </TouchableOpacity>


    </View>
  )
}


export default App