import {StyleSheet, Text, View,Image} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import SplashImage from '../../images/splashScreen/logo.png';
import Boarding from './Onboarding';
import Theme from '../../assets/theme/Theme';


const SplashScreen = () => {



useEffect(() => {
  
  setTimeout(() => {
     setOnboarding(true);
  }, 2500);
}, []);

  const [isOnboarding, setOnboarding] = useState(false);

  return (
    <View style={styles.container}>
      {isOnboarding ? (
        <Boarding />
        
      ) : (
        <>
          <View style={styles.imagecont}>
            <Image source={SplashImage} style={styles.logo} />
          </View>
          <View style={styles.TextCont}>
            <Text style={styles.text}>Welcome</Text>
          </View>
        </>
      )}

    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: 'white',
  },
  imagecont:{
    flex:0.5,
    justifyContent:'flex-end',
    alignItems:'center',
  },
  TextCont:{
    flex:0.5,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    ...Theme.Font_family,
    ...Theme.driver_font_color,
    fontSize:24,
    fontWeight:'bold',
  }
});
