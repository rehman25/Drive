import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/header/header';
import Theme from '../../assets/theme/Theme';
import { SimpleInput, List,  } from '../../assets/input/input';
import Countrypictker  from '../../assets/countrycode'
import Icon from 'react-native-vector-icons/AntDesign';
import { SubmitButton } from '../../assets/buttons/button';
import Gmail from '../../images/signup/gmail.png';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone_number: yup.string().required('Phone number is required'),
});

const SignUp = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigation = useNavigation();

  const submitForm = async (data) => {
    try {
      setPending(true);
      const response = await fetch('https://driver.alitacode.com/api/driver/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "name": data.name,
          "email": data.email,
          "phone_number": data.phone_number,
        }),
      });
  
   
  
      const result = await response.json();
      navigation.navigate('Otp', { phone_number : data.phone_number });

      console.log(result, 'result');
  
      if (response.ok) {
        setPending(false);
        setSuccess(true);
      } else {
        setPending(false);
        setError(result.email?.[0] || result.phone_number?.[0] || 'Error occurred');
      }
    } catch (err) {
      setPending(false);
      setError('Something went wrong, please try again.');
      console.log(err, 'sd');
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
      {pending && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={'#7E57C2'} />
        </View>
      )}
      <ScrollView style={{ height: '100%' }}>
        <Header backtoPage2={true} backtoPage={true} title={'back'} />
        <View style={{ marginTop: 5 }}>
          <Text style={styles.Heading}>
            Sign up with your email or phone number
          </Text>
        </View>
        <View style={{ flex: 0.3, alignContent: 'center', justifyContent: 'flex-start' }}>
          <View>
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <SimpleInput
                  viewStyle={{ marginTop: 10 }}
                  inputstyle={styles.SimpleInput}
                  label={'Name'}
                  value={value}
                  placeholder={'Name'}
                  setValues={onChange}
                  onBlur={onBlur}
                  placeholderTextColor={'#D0D0D0'}
                />
              )}
            />
            {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
          </View>
          <View>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <SimpleInput
                  viewStyle={{ marginTop: 10 }}
                  inputstyle={styles.SimpleInput}
                  label={'Email'}
                  placeholder={'Email'}
                  value={value}
                  setValues={onChange}
                  onBlur={onBlur}
                  placeholderTextColor={'#D0D0D0'}
                />
              )}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
          </View>
          <View>
            <Controller
              name="phone_number"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <SimpleInput
                  viewStyle={{ marginTop: 10 }}
                  inputstyle={styles.SimpleInput}
                  label={'Phone Number'}
                  placeholder={'Phone Number'}
                  value={value}
                  setValues={onChange}
                  onBlur={onBlur}
                  placeholderTextColor={'#D0D0D0'}
                />
         

              )}
            />
            {errors.phone_number && <Text style={styles.errorText}>{errors.phone_number.message}</Text>}
          </View>
          {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
        {/* <Countrypictker
                 
                /> */}
        <View style={{ flex: 0.3, marginTop: 20 }}>
          <View style={styles.CheckBox}>
            <Icon name="checkcircleo" style={styles.CheckICon} />
            <Text style={styles.CheckBoxText}>
              By signing up, you agree to the <Text>Terms of service</Text> and <Text>Privacy policy.</Text>
            </Text>
          </View>
          <View style={styles.BtnContainer}>
            <SubmitButton
              text={'Sign Up'}
              buttonsty={styles.button}
              onPress={handleSubmit(submitForm)}
            />
          </View>
        </View>
        <View style={{ flex: 0.1 }}>
          <View style={styles.orContainer}>
            <Text style={styles.orText}>or</Text>
          </View>
        </View>
        <View style={{ flex: 0.1, marginTop: 20 }}>
          <View style={styles.gmailContainer}>
            <Image source={Gmail} style={styles.Gmail} />
            <Text style={styles.gmailtext}>Sign up with Gmail</Text>
          </View>
          <View style={{ marginTop: 35 }}>
            <Text style={{ textAlign: 'center' }}>
              Already have an account?
              <Text style={{ ...Theme.Purple_color_f }}> Sign in</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 1,
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: '#fff',
  },
  Heading: {
    fontSize: 24,
    color: Theme.Black_color_h,
  },
  NumberInput:{
    borderRadius: 6,
    borderColor: Theme.borderColor,
    fontSize: 16,
    width: '69%',
    
  },

  SimpleInput: {
    borderRadius: 6,
    backgroundColor: "transparent",
    borderColor: Theme.borderColor,
    fontSize: 16,
    marginTop: 10
  },
  dropDownStyle: {
    borderRadius: 6,
    borderWidth: 0.5,
    padding: 10,
    fontSize: 16,
    borderWidth: 0,
    color: Theme.Black_color_h,
    borderColor: Theme.Border_Color_gray,
  },
  dropdownContainerStyle: {
    marginTop: 10,
  },
  CheckBox: {
    flexDirection: 'row',
    marginTop: 10,
  },
  CheckBoxText: {
    marginHorizontal: 3,
  },
  CheckICon: {
    fontSize: 14,
    color: Theme.Purple_Icon,
    marginHorizontal: 3,
  },
  button: {
    backgroundColor: Theme.Purple_Icon,
  },
  BtnContainer: {
    marginTop: 30,
  },
  orContainer: {
    borderBottomWidth: 1,
    zIndex: -1,
    borderColor: Theme.Border_Color_gray,
  },
  orText: {
    position: 'relative',
    left: '50%',
    top: '50%',
    zIndex: 9,
    padding: 5,
    width: 25,
    backgroundColor: '#ffff',
    fontSize: 16,
    color: Theme.Black_color_h,
  },
  gmailContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Theme.Border_Color_gray,
    marginTop: 10,
  },
  gmailtext: {
    color: Theme.Black_color_h,
    fontSize: 16,
    marginHorizontal: 10,
  },
  appleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Theme.Border_Color_gray,
    marginTop: 10,
  },
  appletext: {
    color: Theme.Black_color_h,
    fontSize: 16,
    marginHorizontal: 10,
  },
});
