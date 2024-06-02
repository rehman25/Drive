import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import RegistImage from '../../images/carAdd/Register.png'
import Theme from '../../assets/theme/Theme'
import { SubmitButton } from '../../assets/buttons/button'
import { useNavigation } from '@react-navigation/native'



const RegisterCar = () => {
    const navigation = useNavigation();
    const NavigateLogin = () => {
      navigation.navigate('CarDetail')
  }
  return (
    <View style={styles.container}>
      <View style={styles.image}>
         <Image source={RegistImage}  />
          <Text style={styles.heading}>Register Your Car</Text>
          <Text style={styles.Para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      </View>
      <View style={styles.btncount}>
        <SubmitButton text={'Register Now'} buttonsty={styles.button}  onPress={NavigateLogin} />
      </View>
    </View>
  )
}

export default RegisterCar

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:15,
    },
    image:{
        flex:0.8,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    btncount:{
        flex:0.5,
        justifyContent:"flex-end"
    },
    heading:{
        ...Theme.Font_family,
        ...Theme.driver_font_color,
        fontWeight:"400",
        fontSize:24,
        marginTop:10,
        marginBottom:10,
        letterSpacing:1,
        
    },
    Para:{
        ...Theme.Font_family,
        ...Theme.driver_para_font_color,
        fontSize:14,
        letterSpacing:1,
        textAlign:"center",
        paddingHorizontal:20
    }
    
})