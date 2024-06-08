import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/header/header';
import { SearchInput, SimpleInput } from '../../assets/input/input';
import Theme from '../../assets/theme/Theme';
import { SubmitButton } from '../../assets/buttons/button';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRoute } from '@react-navigation/native';



const schema = yup.object().shape({
  password: yup.string().required('Enter Password'),
  confirmPassword: yup.string().required('Confirm Password'),
});

const SetPasswordScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const route = useRoute();
  const { phone_number } = route.params
  const [password, SetPassword] = useState('')
  const [confirmPassword, SetConfirmPassword] = useState('')
  const [error, setError] = useState(false)
  console.log(phone_number , 'res')

  const navigation = useNavigation();
  const submitForm = async (data) => {
  var body = JSON.stringify({
    "phone_number" : phone_number,
    "password":data.password,
    "password_confirmation":data.passwordConfirmation
})
console.log(body , 'submit')
return
    try {
      setPending(true);
      const response = await fetch('https://driver.alitacode.com/api/driver/set-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "phone_number" : phone_number,
          "password":data.password,
          "password_confirmation":data.passwordConfirmation
      })
      });

      const result = await response.json();
      navigation.navigate('Successfully');

      console.log(result, 'response');

      if (response.ok) {
        setPending(false);
        setSuccess(true);
        navigation.navigate('Successfully');
      } else {
        setPending(false);
        setError(result.message);
      }
    } catch (err) {
      setPending(false);
      setError('Something went wrong, please try again.');
    }
  };
  // const handleLogin = () => {
  //   navigation.navigate('Successfully');
  // };
  return (
    <View style={styles.container}>
      <Header backtoPage2={true} backtoPage={true} title={'back'} />
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Set Password</Text>
        <Text style={styles.HeaderSubText}>Set Your Password</Text>
      </View>
      <View style={styles.InputContainer}>
      <View>
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <SimpleInput
                  viewStyle={{ marginTop: 10 }}
                  inputstyle={styles.Password}
                  label={'password'}
                  value={value}
                  placeholder={'password'}
                  setValues={onChange}
                  onBlur={onBlur}
                  placeholderTextColor={'#D0D0D0'}
                />
              )}
            />
            {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
            <Controller
              name="password confirmation"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <SimpleInput
                  viewStyle={{ marginTop: 10 }}
                  inputstyle={styles.Password}
                  label={'Password confirmation'}
                  value={value}
                  placeholder={'Password confirmation'}
                  setValues={onChange}
                  onBlur={onBlur}
                  placeholderTextColor={'#D0D0D0'}
                />
              )}
            />
            {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
          </View>
         {/* <SimpleInput
          label={'Set Password'}
          placeholder={'Enter Your Password'}
           inputstyle={styles.Password}
           /> */}
         {/* <SimpleInput
          placeholder={'Confirm Your Password'}
          label={'confirm your password'}
           inputstyle={styles.Password}
           /> */}
         <Text style={styles.passWordText}>Atleast 1 number or a special character</Text>
      </View>
      <View style={styles.btnContainer}>
          <SubmitButton text={'Register'} onPress={handleSubmit(submitForm)} />
      </View>
      
    </View>
  );
};

export default SetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
  Header: {
    flex: 0.2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  HeaderText: {
    fontWeight: '500',
    fontSize: 24,
    color: '#000',
  },
  HeaderSubText: {
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 1,
    color: 'gray',
  },
  InputContainer:{
    flex: 0.6,
    // borderWidth: 1,
  },
  Password:{
    marginHorizontal:5,
    backgroundColor:"transparent",
    marginVertical:5,
  },
  passWordText:{
    fontSize:12,
    color:Theme.Light_gray_color_f,
    padding:10,
  },
  btnContainer:{
    flex: 0.2,
    justifyContent: 'flex-end',
  },
  errorText:{
    color:"red"
  }
});
