import React from 'react';
import {StyleSheet, View, Text, Image } from 'react-native';
import BoardingImage from '../../images/splashScreen/pana.png';
import Theme from '../../assets/theme/Theme';
import { SubmitButton } from '../../assets/buttons/button';
import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.conatainer}>
      <View style={styles.imagecout}>
        <Image source={BoardingImage} style={styles.image} />
        <Text style={styles.text}>Drive Your Car</Text>
        <Text style={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      </View>
       <View style={styles.btncount}>   
         <SubmitButton text={'Register Now'} btnStyle={styles.button} onPress={handleLogin} />
       </View>
    </View>
  );
};

export default Onboarding;
const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    // width: 200,
    // height: 200,
  },
  text: {
    fontSize: 22,
    ...Theme.Font_family,
    ...Theme.driver_font_color,
    marginVertical:10,
  },
  imagecout:{
    flex:0.5,
    justifyContent:'flex-end',
    alignItems:'center',

  },
  btncount:{
    flex:0.5,
    justifyContent:'flex-end',
    alignItems:'center',
  },
  para:{
    ...Theme.driver_para_font_color,
    ...Theme.Font_family,
    textAlign:'center',
  },
  button:{
    width: 325,

  }
});
