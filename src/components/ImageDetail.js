import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ imageSource, title, imageScore }) => {
  // by destructoring we just get what we need from props
  // console.log('props in image detail is', props)
  return (
  <View>
    <Image source={imageSource}/>
    <Text>{title}</Text>
    <Text>Image score - {imageScore}</Text>
  </View>
 )
}

const style = StyleSheet.create({})

export default ImageDetail
