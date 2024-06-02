import { View, Text } from 'react-native'
import React from 'react'
import {  DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';


const drawer = ({props}) => {
  return (
    <View>
       <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Close Drawer" onPress={() => props.navigation.closeDrawer()} />
    </DrawerContentScrollView>
    </View>
  )
}

export default drawer