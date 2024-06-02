import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import MainNavigation from './navigation/MainNavigation';
import { Provider } from 'react-redux';
import store from './Store/store';
const App = () => {
  return (
    // <Provider store={store}>
      <MainNavigation/>
    // </Provider>
  )
}

export default App

const styles = StyleSheet.create({})