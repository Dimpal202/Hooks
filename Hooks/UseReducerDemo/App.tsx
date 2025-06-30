import { View, Text, TouchableOpacity } from 'react-native'
import React, { act, useReducer } from 'react'


const initialstate = 5;
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE': {
      return state + 1;
    }
    case 'DECREASE': {
      return state - 1;
    }
    default: {
      return state;
    }
  }
}
const usereducerDemo = () => {


  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>{state}</Text>
        <TouchableOpacity onPress={() => dispatch({ type: "INCREASE" })} style={{ padding: 10, backgroundColor: "red", borderRadius: 10, marginHorizontal: 20 }}>
          <Text>Inc</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch({ type: "DECREASE" })} style={{ padding: 10, backgroundColor: "red", borderRadius: 10 }}>
          <Text>Dec</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default usereducerDemo