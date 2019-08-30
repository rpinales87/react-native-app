import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {
  // let counter = 0
  const [counter, setCounter] = useState(0)

  return (
    <View>
      <Button title="Increase" onPress={() => {
        // counter++
        // console.log('Increase counter is:', counter)
        setCounter(counter + 1)
      }} />
      <Button title="Decrease" onPress={() => {
        // counter--
        // console.log('Decrease counter is:', counter)
        setCounter(counter - 1)
      }} />
      <Text>Current Count: {counter}</Text>
    </View>
  )
}

const style = StyleSheet.create({})

export default CounterScreen
