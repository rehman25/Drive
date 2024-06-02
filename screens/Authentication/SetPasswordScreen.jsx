import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/header/header';
import { SearchInput } from '../../assets/input/input';
import Theme from '../../assets/theme/theme';
import { SubmitButton } from '../../assets/buttons/button';
import { useNavigation } from '@react-navigation/native';

const SetPasswordScreen = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('ProfileScreen');
  };
  return (
    <View style={styles.container}>
      <Header backtoPage2={true} backtoPage={true} title={'back'} />
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Set Password</Text>
        <Text style={styles.HeaderSubText}>Set Your Password</Text>
      </View>
      <View style={styles.InputContainer}>
         <SearchInput placeholder={'Enter Your Password'} style={styles.Password}/>
         <SearchInput placeholder={'Confirm Your Password'} style={styles.Password}/>
         <Text style={styles.passWordText}>Atleast 1 number or a special character</Text>
      </View>
      <View style={styles.btnContainer}>
          <SubmitButton text={'Register'} onPress={handleLogin} />
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
  },
  passWordText:{
    fontSize:12,
    color:Theme.Light_gray_color_f,
    padding:10,
  },
  btnContainer:{
    flex: 0.2,
    justifyContent: 'flex-end',
  }
});
