import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // const HomeScreen = props => {
  // by defracturing you avoid using props.navigation later in the code
  // console.log('props.navigation in HomeScreen is', props.navigation)
  return (
  <View>
    <Text style={styles.text}>Hi there!</Text>
    <Button
      title="Go To Components Demo"
      onPress={() => navigation.navigate('Components')}
      // onPress={() => props.navigation.navigate('Components')}
      // by defracturing the props and only havin navigation as a param
      // we don't need to use props.navigation
    />
    <Button
      title="Go To List Demo"
      onPress={() => navigation.navigate('List')}
      // onPress={() => props.navigation.navigate('List')}
    />
    <Button
      title="Go To Image Demo"
      onPress={() => navigation.navigate('Image')}
      // onPress={() => props.navigation.navigate('Image')}
    />
    <Button
      title="Go To Counter Demo"
      onPress={() => navigation.navigate('Counter')}
      // onPress={() => props.navigation.navigate('Counter')}
    />
  </View>
)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
