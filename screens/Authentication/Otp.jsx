import { Button, StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React,{useState , useEffect} from 'react'
import { OtpInput } from '../../assets/input/input'
import Header from '../../components/header/header'
import Theme from '../../assets/theme/Theme'
import { SubmitButton } from '../../assets/buttons/button'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, selectCount } from '../../store/counterSlice'
import { authOtp ,ReauthOtp } from '../../store/authOtp'
import { useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object().shape({
  otp_code: yup.string().required('Otp is required'),
});

const Otp = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigation = useNavigation();

  const route = useRoute();
  const { phone_number } = route.params
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  console.log(phone_number , 'pjone')

  const [otp_code, setotp_code] = useState('');

  const submitForm = async (data) => {
    navigation.navigate('SetPassword', { phone_number });

  
    try {
      setPending(true);
      const response = await fetch('https://driver.alitacode.com/api/driver/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "phone_number": phone_number,
          "otp_code" : otp_code
        })
      });

      const result = await response.json();
      navigation.navigate('SetPassword', { phone_number: data.phone_number });

      console.log(result, 'response');

      if (response.ok) {
        setPending(false);
        setSuccess(true);
        // navigation.navigate('SetPassword', { phone_number: data.phone_number });
      } else {
        setPending(false);
        setError(result.message);
      }
    } catch (err) {
      setPending(false);
      setError('Something went wrong, please try again.');
    }
  };


const Resend = async (data) => {
    try {
      setPending(true);
      const response = await fetch('https://driver.alitacode.com/api/driver/resend-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "phone_number": phone_number,
        })
      });

      const result = await response.json();
      console.log(result, 'response');

      if (response.ok) {
        setPending(false);
        setSuccess(true);
      } else {
        setPending(false);
        setError(result.message);
      }
    } catch (err) {
      setPending(false);
      setError('Something went wrong, please try again.');
    }
  };

  // const handleOTPChange = (newOtp) => {
  //   setotp_code(newOtp);
  // };

  // console.log(otp , 'otp')
  // const dispatch = useDispatch();
  // const otpStatus = useSelector((state) => state.otp.status);
  // const otpError = useSelector((state) => state.otp.error);

  // const handleSubmit = () => {
  //   const otpData = { otp_code , phone_number }; 
  //   dispatch(authOtp(otpData));
  // };

  // const HandleResend = () => {
  //   const RepostData = {  phone_number }; 
  //   dispatch(authOtp(RepostData));
  // };


  // useEffect(() => {
  //   if (otpStatus === 'message') {
  //     navigation.navigate('SetPassword');
  //   }
  // }, [otpStatus, navigation]);
  // const count = useSelector(selectCount);


  return (
    <View style={styles.container}>
      {pending && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={'#7E57C2'} />
        </View>
      )}
      <Header backtoPage2={true} backtoPage={true} title={'back'} />
        <View style={styles.Header}>
       
            <Text style={styles.HeaderText}>Phone Verification</Text>
            <Text style={styles.HeaderSubText}>Enter your OTP code</Text>
        </View>
      <View style={styles.otpContainer}>
      <View>
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <OtpInput length={6} onOTPChange={setotp_code} />
              )}
            />
            {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
          </View>
      
        {/* <OtpInput OtpInput={styles.OtpInput} /> */}
        {errors && <Text style={styles.errorText}>{errors.message}</Text>}
        {error && <Text style={styles.errorText}>{error}</Text>}


        <Text style={styles.optTExt}>Didn’t receive code?
          <TouchableOpacity onPress={Resend}>
             <Text style={{...Theme.Purple_color_f,}}>Resend again</Text>
          </TouchableOpacity>
         </Text>
      </View>
      {/* {otpStatus === 'failed' && <Text style={{color:"red", textAlign:"center"}}>Faild Try Again</Text>} */}
       <View style={styles.btnContainer}>
          <SubmitButton text={'Verify'} onPress={submitForm} />
       </View>
    </View>
  )
}

export default Otp

const styles = StyleSheet.create({
  loaderContainer: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
     zIndex:1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer:{
    flex: 0.2,
    justifyContent: 'flex-end',
  },
  errorText:{
    color:"red",
  }
})