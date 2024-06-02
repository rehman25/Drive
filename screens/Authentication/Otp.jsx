import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OtpInput } from '../../assets/input/input'
import Header from '../../components/header/header'
import Theme from '../../assets/theme/theme'
import { SubmitButton } from '../../assets/buttons/button'
import { useNavigation } from '@react-navigation/native'

const Otp = () => {
  const navigation = useNavigation();
  const NavigateSetPassword = () => {
    navigation.navigate('SetPassword')
  }
  return (
    <View style={styles.container}>
      <Header backtoPage2={true} backtoPage={true} title={'back'} />
        <View style={styles.Header}>
            <Text style={styles.HeaderText}>Phone Verification</Text>
            <Text style={styles.HeaderSubText}>Enter your OTP code</Text>
        </View>
      <View style={styles.otpContainer}>
        <OtpInput OtpInput={styles.OtpInput} />
        <Text style={styles.optTExt}>Didn’t receive code? <Text style={{...Theme.Purple_color_f}}>Resend again</Text></Text>
      </View>
       <View style={styles.btnContainer}>
          <SubmitButton text={'Verify'} onPress={NavigateSetPassword} />
       </View>
    </View>
  )
}

export default Otp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop:20,
    backgroundColor: '#fff',

  },
  Header:{
    flex: 0.2,
    justifyContent: 'flex-end',
    alignItems:'center',
  },
  HeaderText:{
    fontWeight:'500',
    fontSize:24,
    color:'#000',
  },
  HeaderSubText:{
    fontWeight:'400',
    fontSize:14,
    letterSpacing:1,
    color:"gray",
  },
  otpContainer:{
    flex: 0.6,
    padding:15,
  },
  optTExt:{
    textAlign:'center',
    marginTop:10,
    color:'gray',
    fontSize:14,
    fontWeight:'400',
    letterSpacing:1,
  },
  btnContainer:{
    flex: 0.2,
    justifyContent: 'flex-end',
  }
})