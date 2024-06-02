import { StyleSheet, Text, View , Image} from 'react-native'
import React,{useEffect} from 'react'
import SucImage from '../../images/signup/suc.png'
import Theme from '../../assets/theme/Theme'
import { useNavigation } from '@react-navigation/native'

const Successfully = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('RegisterCar')
        }, 3000);
    }, [])
  return (
    <View style={styles.container}>
      <Image source={SucImage} style={{width:100,height:100}}/>
      <Text style={styles.head}>Successfully</Text>
      <Text style={styles.Para}>lorem ispum Dolor st Armet</Text>
    </View>
  )
}

export default Successfully

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFFFFF'
    },
    head:{
        ...Theme.driver_font_color,
        ...Theme.Font_family,
        fontWeight:"bold",
        fontSize:20,
        marginTop:15,
    },
    Para:{
        ...Theme.driver_font_color,
        ...Theme.Font_family,
        fontWeight:"200",
        fontSize:14,
        }
})