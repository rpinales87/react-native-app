import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
const friends = [
  {name: 'friend #1', age: 20 },
  {name: 'friend #2', age: 45 },
  {name: 'friend #3', age: 22 },
  {name: 'friend #4', age: 16 },
  {name: 'friend #5', age: 10 }

]

  return (
  <FlatList
    // horizontal
    // showsHorizontalScrollIndicator={false}
    keyExtractor={(friend) => friend.name}
    data={friends}
    renderItem={({ item }) => {
    // element === { item : { name: 'friend #1' }, index: 0 }
      return (
        <Text style={styles.textStyle}>
          {item.name} - Age {item.age}
        </Text>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 25,
    // marginHorizontal: 50
  }
})

 export default ListScreen;
