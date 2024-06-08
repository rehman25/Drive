import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';
const Header = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.head}>
    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
    <Entypo
      name="menu"
      size={24}
      style={styles.menuIcon}
     
    />
    </TouchableOpacity>
  
    <EvilIcons name="bell" size={20} style={styles.menuIcon} />
  </View>
  )
}

export default Header

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        zIndex: 9,
        left: 15,
        right: 15,
        backgroundColor: 'transparent',
      },
      menuIcon: {
        backgroundColor: '#FFFFFF',
        color: 'black',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
      },
})