import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React, { useMemo, useState } from 'react'


const usememoDemo = () => {
  const [count, setcount] = useState(0);
  const [item, setitem] = useState(10);


  const multicountmemo = useMemo(function multicount() {
    console.warn("multicount")
    return count * 5
  }, [count])



  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>



      <Text>{count}</Text>
      <TouchableOpacity onPress={() => setcount(count + 1)}>
        <Text>Add count</Text>
      </TouchableOpacity>


      <Text>{multicountmemo}</Text>



      <Text>{item}</Text>
      <TouchableOpacity onPress={() => setitem(item * 10)}>
        <Text>Add item</Text>
      </TouchableOpacity>
    </View>
  )
}


export default usememoDemo