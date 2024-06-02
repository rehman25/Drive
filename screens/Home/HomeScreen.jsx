import { StyleSheet, Text, View , TextInput ,Modal , TouchableOpacity , ScrollView } from 'react-native'
import React,{useState} from 'react'
import Map from '../../components/map/MapComponent'
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { SubmitButton } from '../../assets/buttons/button';





const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalConfirmLocation, setModalConfirmLocation] = useState(false);

  const toggleModalConfirmLocation = () => {
    setModalConfirmLocation(!modalConfirmLocation);
  }

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }
  return (
    <>
    <View style={styles.container}>
      <View style={styles.head}>
          <Entypo name="menu" size={20} style={styles.menuIcon} onPress={() => navigation.openDrawer()} />
          <EvilIcons name="bell" size={20} style={styles.menuIcon}  />
      </View>
      <Map />
      <View style={styles.targetLocation}>
        <MaterialCommunityIcons name="target" size={20}  />
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.TextInputConainer} onPress={toggleModal}>
             <Icon name="search1" size={20}  style={styles.searchIcon}/>
             {/* <TextInput placeholder='Where would you go?' style={styles.Search} placeholderTextColor={'#A0A0A0'}  /> */}
             <Text style={styles.Search}>Where would you go?</Text>
             <Icon name="hearto" size={20}  style={styles.searchIcon}/>

        </TouchableOpacity>
     </View>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Icon name="close" size={20} style={styles.closeIcon}  /> 
            </TouchableOpacity>
             <View style={styles.Top}>
                <Text style={styles.selectAddress}>Select Address</Text>
             </View>
             <View style={styles.locationSearch}>
                <View style={styles.SelectLocation}>
                  <MaterialCommunityIcons name="target" size={20} />
                  <TextInput placeholder='Form' style={styles.locationInput} placeholderTextColor={'#A0A0A0'}/>
                </View>
                <View style={styles.SelectLocation}>
                  <SimpleLineIcons name="location-pin" size={20} style={{color:"#5A5A5A"}} />
                  <TextInput placeholder='To' style={styles.locationInput} placeholderTextColor={'#A0A0A0'}/>
                </View>

             </View>
             <ScrollView style={styles.recentContainer}>
                <Text style={styles.headingPlaces}>Recent Places</Text>
                <TouchableOpacity style={styles.recentPlace} onPress={toggleModalConfirmLocation} >
                   <Ionicons name="location" size={20} />
                    <View>
                      <Text style={{color:"#5A5A5A", fontSize:16, fontWeight:"bold",}}>Office</Text>
                      <Text style={{fontSize:12,color:"#B8B8B8" }}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Text>
                    </View>
                    <Text style={{color:"#5A5A5A" , fontWeight:'bold'}}>2.2km</Text>

                </TouchableOpacity>
                <View style={styles.recentPlace}>
                   <Ionicons name="location" size={20} />
                    <View>
                      <Text style={{color:"#5A5A5A", fontSize:16, fontWeight:"bold",}}>Office</Text>
                      <Text style={{fontSize:12,color:"#B8B8B8" }}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Text>
                    </View>
                    <Text style={{color:"#5A5A5A" , fontWeight:'bold'}}>2.2km</Text>

                </View>
                <View style={styles.recentPlace}>
                   <Ionicons name="location" size={20} />
                    <View>
                      <Text style={{color:"#5A5A5A", fontSize:16, fontWeight:"bold",}}>Office</Text>
                      <Text style={{fontSize:12,color:"#B8B8B8" }}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Text>
                    </View>
                    <Text style={{color:"#5A5A5A" , fontWeight:'bold'}}>2.2km</Text>

                </View>
                <View style={styles.recentPlace}>
                   <Ionicons name="location" size={20} />
                    <View>
                      <Text style={{color:"#5A5A5A", fontSize:16, fontWeight:"bold",}}>Office</Text>
                      <Text style={{fontSize:12,color:"#B8B8B8" }}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Text>
                    </View>
                    <Text style={{color:"#5A5A5A" , fontWeight:'bold'}}>2.2km</Text>

                </View>
                <View style={styles.recentPlace}>
                   <Ionicons name="location" size={20} />
                    <View>
                      <Text style={{color:"#5A5A5A", fontSize:16, fontWeight:"bold",}}>Office</Text>
                      <Text style={{fontSize:12,color:"#B8B8B8" }}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Text>
                    </View>
                    <Text style={{color:"#5A5A5A" , fontWeight:'bold'}}>2.2km</Text>

                </View>
                <View style={styles.recentPlace}>
                   <Ionicons name="location" size={20} />
                    <View>
                      <Text style={{color:"#5A5A5A", fontSize:16, fontWeight:"bold",}}>Office</Text>
                      <Text style={{fontSize:12,color:"#B8B8B8" }}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Text>
                    </View>
                    <Text style={{color:"#5A5A5A" , fontWeight:'bold'}}>2.2km</Text>

                </View>
                <View style={styles.recentPlace}>
                   <Ionicons name="location" size={20} />
                    <View>
                      <Text style={{color:"#5A5A5A", fontSize:16, fontWeight:"bold",}}>Office</Text>
                      <Text style={{fontSize:12,color:"#B8B8B8" }}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Text>
                    </View>
                    <Text style={{color:"#5A5A5A" , fontWeight:'bold'}}>2.2km</Text>

                </View>
             </ScrollView>




          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalConfirmLocation}
        onRequestClose={toggleModalConfirmLocation}
      >
        <View style={styles.centeredViewConfirm}>
          <View style={styles.modalViewConfirm}>
            <TouchableOpacity onPress={toggleModalConfirmLocation} style={styles.closeButton}>
              <Icon name="close" size={20} style={styles.closeIcon}  /> 
            </TouchableOpacity>
             <View style={styles.Top}>
                <Text style={styles.selectAddress}>Select Address</Text>
             </View>
         
             <View style={styles.recentContainerConfrim}>
                <View style={styles.recentPlace}>
                   <Ionicons name="location" size={20} style={{color:"#F44336"}} />
                    <View>
                      <Text style={{color:"#5A5A5A", fontSize:16, fontWeight:"bold",}}>Current Location</Text>
                      <Text style={{fontSize:12,color:"#B8B8B8" }}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Text>
                    </View>
                </View>
                 <View style={styles.dottedline}>

                 </View>
                <View style={styles.recentPlace}>
                   <Ionicons name="location" size={20} style={{color:"#B865FA"}} />
                    <View>
                      <Text style={{color:"#5A5A5A", fontSize:16, fontWeight:"bold",}}>Office</Text>
                      <Text style={{fontSize:12,color:"#B8B8B8" }}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Text>
                    </View>
                    <Text style={{color:"#5A5A5A" , fontWeight:'bold'}}>2.2km</Text>

                </View>
                <View style={{marginTop:10}}>
                   
                    <SubmitButton text={'confirm location'} />
                </View>
            
             </View>




          </View>
        </View>
      </Modal>
    </View>

      </> 
  )
}




export default HomeScreen


const styles = StyleSheet.create({

  dottedline: {
    height: 32,
    borderLeftWidth: 1,
    marginVertical:10,
    position: "absolute",
    bottom: 112,
    left: 20,
    zIndex: 999,
    borderLeftColor: "#B865FA",
    borderStyle: "dashed",


  },

  recentPlace:{
    flexDirection:"row",
    marginVertical:10,

  },
  headingPlaces:{
    fontWeight:"bold",
    fontSize:16,
    color:"#CCCCCC"
  },
  recentContainer:{
    
    height:'10%',
    padding:15,
  },
  recentContainerConfrim:{
      padding:10,
  },
  locationInput: {
    width:'90%',
    color:'#A0A0A0',
    fontFamily:'Poppins-Regular3',
  },
  SelectLocation:{
    flexDirection:"row",
    alignItems:"center",
    padding:5,
    borderWidth:1,
    borderColor:"#DDDDDD",
    borderRadius:10,
    marginVertical:5,
  },
  locationSearch:{
    // flex: 0.3,
    borderBottomWidth:0.5,
    borderColor:"#DDDDDD",
    paddingHorizontal:10,
    paddingVertical:10,

  },
  Top:{
    borderBottomWidth:1,
    borderColor:"#DDDDDD",
    paddingVertical:10,

  },
  selectAddress:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:18,
  },  
  closeButton:{
    flexDirection:"row",
    alignItems:"flex-end",
    justifyContent:"flex-end",
    padding:10,
  },
  modalViewConfirm:{
    height:300,
    backgroundColor:"#FFFF",
        // marginTop:22,
    position: "absolute",
    bottom:0,
    width:'100%',
    opacity:10,
    borderTopRightRadius:15,
    borderTopLeftRadius:15,
    // flex:1,
  },
  modalView:{
    height:570,
    backgroundColor:"#FFFF",
        // marginTop:22,
    position: "absolute",
    bottom:0,
    width:'100%',
    opacity:10,
    borderTopRightRadius:15,
    borderTopLeftRadius:15,
    flex:1,
  },
  centeredViewConfirm:{
    height:'100%',
    width:'100%',
     backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  centeredView:{
    height:'100%',
    width:'100%',
     backgroundColor: 'rgba(0, 0, 0, 0.5)',


  },
  container:{
    flex:1,
    // padding:15,
    // backgroundColor:'#ffff',
  },
  targetLocation:{
    padding:10,
    position:"absolute",
    bottom:350,
    zIndex:9,
    right:15,
    bottom:250,
    backgroundColor:'#DFB8FF',
    borderRadius:10,
    elevation:10,
  },
  head:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    position:'absolute',
    top:20,
    zIndex:9,
    left:15,
    right:15,
    backgroundColor:'transparent',
  },
  menuIcon:{
    backgroundColor:"#FFFFFF",
    color:'black',
    borderRadius:10,
    paddingHorizontal:15,
    paddingVertical:10,
  },

  searchContainer:{
    position:"absolute",
    bottom:140,
    left:15,
    right:15,
    elevation:10,
    padding:12,
    borderWidth:0.2,
    borderBottomWidth:0.5,
    borderColor:"#B865FA",
    backgroundColor:'#DFB8FF',
    elevation:10,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:3.84,
    elevation:5,
    borderRadius:6,
  },
  TextInputConainer:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#F1DFFF',
    padding:10,
    paddingHorizontal:10,
    borderRadius:6,
    justifyContent: 'space-between',
    borderBottomWidth:0.5,
    borderColor:"#B865FA",
  },
  searchIcon:{
    color:'#A0A0A0',
    fontWeight:'bold',
  },
  Search:{
    width:215,
    color:'#A0A0A0',
    fontSize:15,
    fontFamily:'Poppins-Regular3',
    letterSpacing:0.9,
    fontWeight:'bold',
    
  },
})