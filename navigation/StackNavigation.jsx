import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../screens/Home/HomeScreen';
import Payment from '../screens/Home/Payment';
import ChatScreen from '../screens/Home/ChatScreen';


const Stack = createStackNavigator();
const StackNavigation = () => {
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
const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="ChatScreen" component={ChatScreen} /> */}
        {/* <Stack.Screen name="Payment" component={Payment} /> */}
        </Stack.Navigator>
  )
}
export {StackNavigation , HomeNavigation}

const styles = StyleSheet.create({})