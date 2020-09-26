import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ScrollViewScreen from "./components/ScrollViewScreen";
import CarFlatListScreen from "./components/CarFlatListScreen";
import UserListScreen from "./components/UserListScreen";

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Øvelse 4</Text>

      <ScrollViewScreen/>
      <CarFlatListScreen/>
      <UserListScreen/>

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
