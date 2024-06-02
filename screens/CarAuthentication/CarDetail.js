import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header/header'
import { SimpleInput } from '../../assets/input/input'
import Theme from '../../assets/theme/Theme'
import{SubmitButton,OutlineButton } from  '../../assets/buttons/button'
import { useNavigation } from '@react-navigation/native'


const CarDetail = () => {
 
   const navigation = useNavigation()
   const handleLogin = () => {
     navigation.navigate('Documention');
   };

  return (
    <View style={styles.Container}>
      <Header backtoPage2={true} backtoPage={true} title={'back'}  />
       <View style={{  marginTop:15}}>
          <Text style={styles.Heading}>Car details</Text>
       </View>
       <View>
          <Text style={styles.inputtext}>Car Name</Text>
          <SimpleInput placeholder={"Enter your car names"} inputstyle={styles.input} />
       </View>
       <View>
          <Text style={styles.inputtext}>Company Name</Text>
          <SimpleInput placeholder={"Enter your car names"} inputstyle={styles.input} />
       </View>
       <View>
          <Text style={styles.inputtext}>Modal Name</Text>
          <SimpleInput placeholder={"Enter your car names"} inputstyle={styles.input} />
       </View>
       <View>
          <Text style={styles.inputtext}>Modal Year</Text>
          <SimpleInput placeholder={"Enter your car names"} inputstyle={styles.input} />
       </View>
       <View>
          <Text style={styles.inputtext}>Car Number</Text>
          <SimpleInput placeholder={"Enter your car names"} inputstyle={styles.input} />
       </View>
       <View>
          <Text style={styles.inputtext}>Licence Number</Text>
          <SimpleInput placeholder={"Enter your car names"} inputstyle={styles.input} />
       </View>
       <View>
          <Text style={styles.inputtext}>Licence Number</Text>
          <SimpleInput placeholder={"Enter your car names"} inputstyle={styles.input} />
       </View>

        <View style={styles.btnContainer}>
            <OutlineButton text={'Cancel'} outbuttonsty={styles.outlinebtn} />
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
        borderWidth:0.5,
        borderRadius:6,
        padding:10,
        marginTop:10,
    },
    inputtext:{
        fontSize:14,
        fontWeight:'450',
        color:'#000',
            
    },
    btnContainer:{
      //   flex:1,
        justifyContent: 'center',
        flexDirection:"row",
        alignItems:"flex-end",
        marginTop:25,
    }
})