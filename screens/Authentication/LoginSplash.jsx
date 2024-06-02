import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'
import Logo from '../../images/splashScreen/WelcomeScreen.png'
import { SubmitButton } from '../../assets/buttons/button'
import { OutlineButton } from '../../assets/buttons/button'
import { useNavigation } from '@react-navigation/native'


const LoginSplash = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('SignUp')
    }
  return (
    
    <View style={styles.container}>
    <>
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} />
            <View style={styles.textContainer}>
                <Text style={styles.textHead}>Welcome</Text>
                <Text>Have a better sharing experience</Text>
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <SubmitButton  text={'create an account'} buttonsty={styles.button} onPress={handleLogin} />
            <OutlineButton  text={'Login'} outbuttonsty={styles.outLineButton}/>
        </View>
        </>
    </View>
    
  )
}

export default LoginSplash

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:15,
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor:'#FFFF'
    },
    
    logo:{
        objectFit: 'contain',
        marginTop:25,
        width:250,
         
    },
    logoContainer:{
        flex: 0.6,
        // width:,
        margin:2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textContainer:{
        // flex: 0.1,
        // borderWidth:1
        marginTop:25,
    },
    textHead:{
        textAlign: 'center',
        fontSize:24,
        fontWeight:'500',
       
    },
    buttonContainer:{
        flex: 0.4,
        justifyContent: 'flex-end',
        paddingBottom:10,
        // justifyContent:"center",
        alignItems:"center"
        
    
    },
    button:{
        width: 325,
    },
    outLineButton:{
        marginTop:5,
        width: 325,

    }
})
