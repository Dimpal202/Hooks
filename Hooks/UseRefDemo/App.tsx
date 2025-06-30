import { View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'


const App = () => {
  const [text, setText] = useState('');
  const [textColor, setTextColor] = useState('black');


  let inputRef = useRef(null)


  function handleInput() {
    console.warn("function call")


    // focus, color, value, dom ko manipulate karne k liye 

    // inputRef.current.setNativeProps({ text: '100' });
    // inputRef.current.focus()
    setTextColor('red');
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        ref={inputRef}
        style={{ height: 40, color: textColor }}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />


      <TouchableOpacity onPress={handleInput}>
        <Text>add</Text>
      </TouchableOpacity>
    </View>
  )
}


export default App