import { useState,useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import ApiBtc from './components/ApiBtc';


export default function App() {
  return (
    <View style={styles.container}>
      <ApiBtc/>
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
