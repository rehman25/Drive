import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/HomeScreen';
import Payment from '../screens/Home/Payment';
import ChatScreen from '../screens/Home/ChatScreen';

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
        }}>
        <Stack.Screen name="Map" component={HomeScreen} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})