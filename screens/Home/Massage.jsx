import { StyleSheet, Text, View , ScrollView , Image , TextInput} from 'react-native'
import Header from '../../components/header/header'
import profileImage from '../../images/chat/chat.png'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Smiley from 'react-native-vector-icons/Feather'
import Theme from '../../assets/theme/Theme'

const Massage = () => {
  return (
    <View style={styles.container}>
     <Header backtoPage2={true} backtoPage={true} title={'back'}  />
      <ScrollView style={styles.ScrollView}>
         <View style={{ justifyContent:"flex-end"}}>
          <View style={styles.othermassage}>
             <View  style={styles.probox}>
                 <Image source={profileImage} style={styles.profileImage}  />
             </View>
              <View style={styles.massagebox} >
                 <View style={styles.firstMassage}>
                    <Text style={styles.name}>Good 1 Evening!</Text>
                 </View>
                 <View style={styles.secondMassage}>
                    <Text style={styles.name}>Good Evening!</Text>
                 </View>
                 <View style={styles.secondMassage}>
                    <Text style={styles.name}>est if incoming messages from other users appear in the chat</Text>
                 </View>
                 <View >
                    <Text style={styles.name}>20:2</Text>
                 </View>
              </View>
              
          </View>
          <View style={styles.Mymassage}>
              <View style={styles.myMassagebox} >
                 <View style={styles.myfirstMassage}>
                    <Text style={styles.name}>Good Evening!</Text>
                 </View>
                 <View style={styles.mySecondMassage}>
                    <Text style={styles.name}>Good Evening!</Text>
                 </View>
                 <View style={styles.mySecondMassage}>
                    <Text style={styles.name}>Test if a user can successfully send a message.</Text>
                 </View>
                 <View >
                    <Text style={styles.name}>20:2</Text>
                 </View>
              </View>
              
          </View>
          {/*  */}
          {/* <View style={styles.othermassage}>
             <View  style={styles.probox}>
                 <Image source={profileImage} style={styles.profileImage}  />
             </View>
              <View style={styles.massagebox} >
                 <View style={styles.firstMassage}>
                    <Text style={styles.name}>Good Evening!</Text>
                 </View>
                 <View style={styles.secondMassage}>
                    <Text style={styles.name}>Good Evening!</Text>
                 </View>
                 <View style={styles.secondMassage}>
                    <Text style={styles.name}>est if incoming messages from other users appear in the chat</Text>
                 </View>
              </View>
              
          </View>
          <View style={styles.Mymassage}>
              <View style={styles.myMassagebox} >
                 <View style={styles.myfirstMassage}>
                    <Text style={styles.name}>Good Evening!</Text>
                 </View>
                 <View style={styles.mySecondMassage}>
                    <Text style={styles.name}>Good Evening!</Text>
                 </View>
                 <View style={styles.mySecondMassage}>
                    <Text style={styles.name}>Test if a user can successfully send a message.</Text>
                 </View>
              </View>
              
          </View>
          <View style={styles.othermassage}>
             <View  style={styles.probox}>
                 <Image source={profileImage} style={styles.profileImage}  />
             </View>
              <View style={styles.massagebox} >
                 <View style={styles.firstMassage}>
                    <Text style={styles.name}>Good Evening!</Text>
                 </View>
                 <View style={styles.secondMassage}>
                    <Text style={styles.name}>Good Evening!</Text>
                 </View>
                 <View style={styles.secondMassage}>
                    <Text style={styles.name}>est if incoming messages from other users appear in the chat</Text>
                 </View>
              </View>
              
          </View>
          <View style={styles.Mymassage}>
              <View style={styles.myMassagebox} >
                 <View style={styles.myfirstMassage}>
                    <Text style={styles.name}>Good Evening!</Text>
                 </View>
                 <View style={styles.mySecondMassage}>
                    <Text style={styles.name}>Good Evening!</Text>
                 </View>
                 <View style={styles.mySecondMassage}>
                    <Text style={styles.name}>Test if a user can successfully send a message.</Text>
                 </View>
              </View>
              
          </View>
          <View style={styles.othermassage}>
             <View  style={styles.probox}>
                 <Image source={profileImage} style={styles.profileImage}  />
             </View>
              <View style={styles.massagebox} >
                 <View style={styles.firstMassage}>
                    <Text style={styles.name}>Good Evening!</Text>
                 </View>
                 <View style={styles.secondMassage}>
                    <Text style={styles.name}>Good Evening!</Text>
                 </View>
                 <View style={styles.secondMassage}>
                    <Text style={styles.name}>est if incoming messages from other users appear in the chat</Text>
                 </View>
              </View>
              
          </View>
          <View style={styles.Mymassage}>
              <View style={styles.myMassagebox} >
                 <View style={styles.myfirstMassage}>
                    <Text style={styles.name}>Good Evening!</Text>
                 </View>
                 <View style={styles.mySecondMassage}>
                    <Text style={styles.name}>Good Evening!</Text>
                 </View>
                 <View style={styles.mySecondMassage}>
                    <Text style={styles.name}>Test if a user can successfully send a message.</Text>
                 </View>
              </View>
              
          </View> */}
          {/*  */}
         </View>
         
      </ScrollView>

      <View style={styles.chatInput}>
          <View>
               <Icon name="pluscircleo" size={20} />
          </View>
          <View style={styles.TypeMassage}>
               <TextInput placeholder='Type Your Massage' style={{}} />
              <Smiley name="smile" size={20} style={{fontWeight:900}} />
          </View>
          <View>
            <Smiley name="send" size={20} />
          </View>
      </View>
    </View>
  )
}

export default Massage

const styles = StyleSheet.create({
  name:{
      ...Theme.Font_family,
      fontWeight:'400',
      fontSize:12,
      letterSpacing:0.5
  },
  TypeMassage:{
    flex:1,
    borderWidth:0.5,
    height:50,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:"center",
    marginHorizontal:5,
    borderRadius:5,
    padding:5
  },
  mySecondMassage:{
    flexDirection: 'column',
    borderRadius:10,
    borderTopRightRadius:0,
    borderWidth:0.5,
    borderColor:"#B865FA",
    backgroundColor:'#F1DFFF',

    padding:10,
    marginTop:10
  },

  secondMassage:{
    backgroundColor:'#E8E8E8',
    flexDirection: 'column',
    borderRadius:10,
    borderTopRadius:0,
    padding:10,
    marginTop:10,
    borderWidth:0.5,
    borderColor:"#5A5A5A"
  },
  myfirstMassage:{
    backgroundColor:'#F1DFFF',
    flexDirection: 'column',
    borderWidth:0.5,
    borderColor:"#B865FA",
    borderRadius:10,
    borderTopRightRadius:0,
    padding:10,
  },
  firstMassage:{
    backgroundColor:'#E8E8E8',
    flexDirection: 'column',
    borderRadius:10,
    borderTopLeftRadius:0,
    padding:10,
    borderWidth:0.5,
    borderColor:"#5A5A5A"
  },
  probox:{
    flex:0.13, 
    // borderWidth:1 ,
    //  padding:5, 
    //  justifyContent:'center',
      // alignItems:"center"
  },
  myMassagebox:{
    marginHorizontal:1,
       flex:0.7,
       padding:10,
  },
  massagebox:{
       marginHorizontal:1,
       flex:0.7,
       padding:10, 
     

  },

  profileImage:{
    //  width:'100%',
    //  height:'100%',
  },
  Mymassage:{
    flexDirection:"row",
    justifyContent:"flex-end"

  },
  othermassage:{
    flexDirection:"row",
    // flex:1
 
    // alignItems:'flex-end'
    // alignItems:"center"
  },
  chatInput:{
    // flex: 0.05,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  container:{
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,

  },
  ScrollView:{
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,

  }
})