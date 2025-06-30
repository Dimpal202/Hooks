import { View, Text } from 'react-native'
import React, { createContext } from 'react'
import ChildA from './src/screen/ChldA';


const data = createContext();
const data1 = createContext();


const App = () => {

  const name = "dimpal"
  const gender = "female"


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </View>
  )
}


export default App
export { data, data1 }