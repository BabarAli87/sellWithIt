import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  console.log('App Executed')
  return (
    <View style={styles.container}>
      <Text>Hello React Native!</Text>
      <TouchableOpacity onPress={()=>console.log('image pressed')}>
      <Image 
      blurRadius={3}
      fadeDuration={1024}
      source={{
        width: 200,
        height:300,
        uri:'https://source.unsplash.com/random'}} />

      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
