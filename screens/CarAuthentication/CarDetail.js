import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header/header'
import { CheckBoxInput, SimpleInput } from '../../assets/input/input'
import Theme from '../../assets/theme/Theme'
import{SubmitButton,OutlineButton } from  '../../assets/buttons/button'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'


const CarDetail = () => {
 
   const navigation = useNavigation()
   const handleLogin = () => {
     navigation.navigate('Documention');
   };
   const CancelBtn = () => {
      navigation.navigate('SignUp');
   }

  return (
    <View style={styles.Container}>
      <Header backtoPage2={true} backtoPage={true} title={'back'}  />
       <View style={{  marginTop:15}}>
          <Text style={styles.Heading}>Car Information</Text>
       </View>
       <ScrollView>
       <View>
          <Text style={styles.inputtext}>Model Name</Text>
          <SimpleInput 
           label={'Model Name'}
          placeholder={"Enter your car names"}
           inputstyle={styles.input} />
       </View>
       <View>
          <Text style={styles.inputtext}>Company Name</Text>
          <SimpleInput 
          label={'Company Name'}
          placeholder={"Enter your car names"}
           inputstyle={styles.input} />
       </View>
       <View>
          <Text style={styles.inputtext}>Modal Year</Text>
          <SimpleInput 
          label={'Model Year'}
          placeholder={"Enter your car names"} 
          inputstyle={styles.input} />
       </View>
       <View>
          <Text style={styles.inputtext}>Color</Text>
          <SimpleInput
           label={'Color'}
           placeholder={"Enter your car names"}
            inputstyle={styles.input}
             />
       </View>
       <View>
          <Text style={styles.inputtext}>Vehicle Identification Number (VIN)</Text>
          <SimpleInput
           label={' Vehicle Identification Number (VIN)'}
           placeholder={"Enter your car names"}
            inputstyle={styles.input}
             />
       </View>
       <View>
          <Text style={styles.inputtext}>License Plate Number</Text>
          <SimpleInput
           label={'License Plate Number'}
           placeholder={"Enter your car names"} inputstyle={styles.input} />
       </View>
       {/* <View>
          <Text style={styles.inputtext}>Licence Number</Text>
          <SimpleInput 
          label={'Licence Number'}
          placeholder={"Enter your car names"}
           inputstyle={styles.input} />
       </View> */}
       <View style={{  marginTop:15}}>
          <Text style={styles.Heading}>Car Specifications</Text>
       </View>
       <View>
          <Text style={styles.inputtext}>Number Of Seats</Text>
          <SimpleInput
           label={'Number of seats'}
           placeholder={"Enter your car names"} inputstyle={styles.input} />
       </View>
       <View style={{marginVertical:5}}>
          <Text style={styles.inputtext}>Fuel Type</Text>
           <View style={{flexDirection:"row", alignItems:"center"}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Text style={styles.checkboxText}>Gas</Text>
                  <CheckBoxInput />
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Text style={styles.checkboxText}>Petrol</Text>
                  <CheckBoxInput />
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Text style={styles.checkboxText}>Electronic</Text>
                  <CheckBoxInput />
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Text style={styles.checkboxText}>Hybrid</Text>
                  <CheckBoxInput />
                </View>
           </View>
       </View>
       <View style={{marginVertical:5}}>
          <Text style={styles.inputtext}>Transmission Type</Text>
           <View style={{flexDirection:"row", alignItems:"center"}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Text style={styles.checkboxText}>Automatic</Text>
                  <CheckBoxInput />
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Text style={styles.checkboxText}>Manual</Text>
                  <CheckBoxInput />
                </View>
                
           </View>
       </View>
       <View>
          <Text style={styles.inputtext}>Mileage (Optional)</Text>
          <SimpleInput
           keyboardType="numberic"
           label={'Mileage'}
           placeholder={"Enter your car names"} inputstyle={styles.input} />
       </View>
       
       </ScrollView>

        <View style={styles.btnContainer}>
            <OutlineButton text={'Cancel'} outbuttonsty={styles.outlinebtn} onPress={CancelBtn} />
            <SubmitButton text="Submit" buttonsty={styles.submitbtn} onPress={handleLogin} />
        </View>



    </View>
  )
}

export default CarDetail

const styles = StyleSheet.create({
   submitbtn:{
      width: 160,
      margin:5,

   },
   outlinebtn:{
      margin:5,
      width: 160,

   },
    Container:{
        flex:1,
        backgroundColor:'#fff',
        padding:15,

    },
    Heading:{
        fontSize:24,
        fontWeight:'450',
        color:'#000',
        // fontFamily:Theme.fontFamily.bold,

    },
    input:{
        borderRadius:6,
        marginVertical:5,
        backgroundColor:"transparent",
    },
    inputtext:{
        fontSize:14,
        fontWeight:'450',
        color:'black',
            
    },
    btnContainer:{
      //   flex:1,
        justifyContent: 'center',
        flexDirection:"row",
        alignItems:"flex-end",
        marginTop:25,
    }
})