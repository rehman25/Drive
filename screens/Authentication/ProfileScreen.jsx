import {StyleSheet, Text, View , Image} from 'react-native';
import React from 'react';
import Header from '../../components/header/header';
import Theme from '../../assets/theme/theme';
import { SimpleInput , List } from '../../assets/input/input';
import Icon from 'react-native-vector-icons/AntDesign';
import {OutlineButton, SubmitButton} from '../../assets/buttons/button'
import { useNavigation } from '@react-navigation/native';
// import AddCar from '../CarAuthentication/addCar';


const ProfileScreen = () => {
 const Navigation = useNavigation()
 const NavigationOtp = () => {
   Navigation.navigate('AddCar')
 }
  return (
    <View style={styles.container}>
          <Header backtoPage2={true} backtoPage={true} title={'back'}  />

        <View >
           <Text style={{textAlign:"center", fontWeight:"700" , fontSize:24}}>Profile</Text>
        </View>
           
      <View style={{marginVertical:15 ,display:"flex",flexDirection:'row', justifyContent:"center"}}>
           <View style={styles.ProfileConatiner}>
           </View>
             <View style={styles.cameraContainer}>
               <Icon name="camera" style={styles.IconCamera} />
             </View>
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
        <List 
        dropdownContainerStyle={styles.dropdownContainerStyle}
         dropDownStyle={styles.dropDownStyle}
         placeholder={'Select Country'}
         items={[
           {label: 'Pakistan', value: 'Pakistan'},
         ]}
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
            placeholder={"Street"}
            placeholderTextColor={"#D0D0D0"}
          />
      </View>
      
      <View>
        <List 
        dropdownContainerStyle={styles.dropdownContainerStyle}
         dropDownStyle={styles.dropDownStyle}
         placeholder={'City'}
         items={[
           {label: 'Karachi', value: 'Karachi'},
         ]}
        />
      </View>
      <View>
        <List 
        dropdownContainerStyle={styles.dropdownContainerStyle}
         dropDownStyle={styles.dropDownStyle}
         placeholder={'District'}
         items={[
           {label: 'Jauhar', value: 'Jauhar'},
         ]}
        />
      </View>
     
       <View style={styles.BtnContainer}>
          <OutlineButton text={'Cancel'}  outbuttonsty={styles.button}/>
          <SubmitButton text={'Sign Up'} buttonsty={styles.button}  onPress={NavigationOtp} />
       </View>
       
       
    </View>
  );
};

export default ProfileScreen;

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
    color: "lightgrey",
  },
  dropdownContainerStyle:{
    marginTop:10,
    
  },
  CheckBox:{
    flexDirection:"row",
    marginTop:10,
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
    backgroundColor:Theme.Purple_Icon,
    width:160,
    marginHorizontal:2,
    borderRadius:10,
    padding:15,

  },
  BtnContainer:{
    flex:1,
    marginTop:100,
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"center",
    
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
  },
  ProfileConatiner:{
    borderWidth:1,
    width:100,
    height:100,
    borderRadius:50,
    backgroundColor:"lightGray",
    borderColor: Theme.Border_Color_gray,
    marginTop:10,
  },
  IconCamera:{
    fontSize:15,
    color:'white',
  },
  cameraContainer:{
    padding:10,
    position: "absolute",
    right:100,
    top:70,
    backgroundColor:"#B865FA",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth:1,
    borderColor: "white",
    borderRadius:50,
    width:40,
    height:40,
    
  }
  
  
  
});
