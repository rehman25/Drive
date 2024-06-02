import { StyleSheet, Text, View , Image , useWindowDimensions   } from 'react-native'
import React from 'react'
import Theme from '../../assets/theme/theme'
// import Logo from '../../images/splashScreen/logo.png'
// import Data from './data'

const Carorsal = ( {item} ) => {

  const Width  = useWindowDimensions()
  return (
    
    <View style={[styles.container , {Width}]}>
        <Image source={item.image} style={[styles.image, {Width} ]} />
        <View style={{flex:0.1 , alignItems:"center",  }}>
             <Text style={styles.title}>{item.title}</Text>
             <Text style={styles.descriptions}>{item.descriptions}</Text>
        </View>
    </View>
    
  )
}

export default Carorsal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:1,
    // paddingHorizontal:69,
    

    // width:100,
  },
  image:{
    
    flex: 0.4, 
    justifyContent:"center",
    width: 338,
    height:100,
    resizeMode:'contain',
    borderWidth:1
  },
  title:{
    fontWeight:'600',
    fontSize:28,
    color: "#414141",
    textAlign:'center',
  },
  descriptions:{
    // paddingHorizontal:64,
    
    color: "#A0A0A0",
    textAlign:'center',
    fontWeight:'500',

  }


 
})