import {StyleSheet, Text, View , Image} from 'react-native';
import React from 'react';
import Header from '../../components/header/header';
import Theme from '../../assets/theme/theme';
import { SimpleInput , List } from '../../assets/input/input';
import Icon from 'react-native-vector-icons/AntDesign';
import {SubmitButton} from '../../assets/buttons/button'
import Gmail from '../../images/signup/gmail.png'
import Apple from '../../images/signup/Apple.png'
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
 const Navigation = useNavigation()
 const NavigationOtp = () => {
   Navigation.navigate('Otp')
 }
  return (
    <View style={styles.container}>
      <Header backtoPage2={true} backtoPage={true} title={'back'} />
      <View style={{marginTop:5}}>
        <Text style={styles.Heading}>
          Sign up with your email or phone number
        </Text>
      </View>
      <View>
          <SimpleInput 
            viewStyle={{marginTop:10}}
            inputstyle={styles.SimpleInput}
            placeholder={"Name"}
            placeholderTextColor={"#D0D0D0"}
          />
      </View>
      <View>
          <SimpleInput 
            viewStyle={{marginTop:10}}
            inputstyle={styles.SimpleInput}
            placeholder={"Email"}
            placeholderTextColor={"#D0D0D0"}
          />
      </View>
      <View>
          <SimpleInput 
            viewStyle={{marginTop:10}}
            inputstyle={styles.SimpleInput}
            placeholder={"Number"}
            placeholderTextColor={"#D0D0D0"}
          />
      </View>
      
      <View>
        <List 
        dropdownContainerStyle={styles.dropdownContainerStyle}
         dropDownStyle={styles.dropDownStyle}
         placeholder={'Gender'}
         items={[
           {label: 'Male', value: 'Male'},
           {label: 'Female', value: 'Female'},
         ]}
        />
      </View>
      <View>
        <List 
        dropdownContainerStyle={styles.dropdownContainerStyle}
         dropDownStyle={styles.dropDownStyle}
         placeholder={'Gender'}
         items={[
           {label: 'Male', value: 'Male'},
           {label: 'Female', value: 'Female'},
         ]}
        />
      </View>
       <View style={styles.CheckBox}>
           <Icon name="checkcircleo"  style={styles.CheckICon} />
           <Text style={styles.CheckBoxText}>By signing up. you agree to the <Text>Terms of service</Text>  and <Text>Privacy policy.</Text></Text>
       </View>
       <View style={styles.BtnContainer}>
          <SubmitButton text={'Sign Up'} buttonsty={styles.button}  onPress={NavigationOtp} />
       </View>
       <View style={styles.orContainer}>
           <Text style={styles.orText}>or</Text>
       </View>
       <View >
        <View style={styles.gmailContainer}>
           <Image source={Gmail} style={styles.Gmail} />
           <Text style={styles.gmailtext}>Sign up with Gmail</Text>
        </View>
       </View>
       <View >
        <View style={styles.appleContainer}>
           <Image source={Apple} style={styles.apple} />
           <Text style={styles.appletext}>Sign up with Gmail</Text>
        </View>
       </View>
       <View style={{marginTop:35}}>
          <Text style={{textAlign:'center'}}>Already have an account?<Text style={{...Theme.Purple_color_f}}> Sign in</Text></Text>
       </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: '#fff',
  },
  Heading: {
    fontSize: 24,
    color:Theme.Black_color_h,
  },
  SimpleInput:{
    borderWidth:0.5,
    borderRadius:6,
    padding:10,
    borderColor: Theme.borderColor,
    fontSize: 16,
    
  },
  dropDownStyle:{
    borderRadius:6,
    borderWidth:0.5,
    padding:10,
    fontSize: 16,
    borderWidth:0,
    color: Theme.Black_color_h,
    borderColor: Theme.Border_Color_gray,
  },
  dropdownContainerStyle:{
    marginTop:10,
    
  },
  CheckBox:{
    flexDirection:"row",
    marginTop:10,
    // alignItems:"center",
    // justifyContent:"center",
  },
  CheckBoxText:{
    marginHorizontal:3
  },
  CheckICon:{
    fontSize:14,
    color:Theme.Purple_Icon,
    marginHorizontal:3,
  },
  button:{
    backgroundColor:Theme.Purple_Icon
  },
  BtnContainer:{
    marginTop:20,
    
  },
  orContainer:{
    borderBottomWidth:1,
    zIndex:-1,
    borderColor:Theme.Border_Color_gray,
    
   
  


  },
  orText:{
    position:'relative',
    left:'50%',
    top:'50%',
    zIndex:9,
    padding:5,
    width:25,
    backgroundColor:"#ffff",
    fontSize:16,
    color:Theme.Black_color_h,
  },
  gmailContainer:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    padding:10,
    flexDirection:"row",
    borderWidth:1,
    borderRadius:6,
    borderColor: Theme.Border_Color_gray,
    marginTop:10,

  },
  gmailtext:{
    color:Theme.Black_color_h,
    fontSize:16,
    marginHorizontal:10,
  },
  appleContainer:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    padding:10,
    flexDirection:"row",
    borderWidth:1,
    borderRadius:6,
    borderColor: Theme.Border_Color_gray,
    marginTop:10,
  },
  appletext:{
    color:Theme.Black_color_h,
    fontSize:16,
    marginHorizontal:10,
  }
  
  
  
});
