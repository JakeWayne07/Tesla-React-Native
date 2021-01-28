import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>

      {/* <CarItem 
        name={"Model X"} 
        tagline={"Starting from $69,420"} 
        taglineCTA={"Touchless"}
        image={require('./assets/images/ModelX.jpeg')}
      /> */}

      <Header/>

      <CarsList/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
