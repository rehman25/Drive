import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
  Platform
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Map from '../../components/map/MapComponent';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {OutlineButton, SubmitButton} from '../../assets/buttons/button';
import CustomerImage from '../../images/Home/customer.png';
import Theme from '../../assets/theme/Theme';
import Phone from '../../images/Home/phone_.png';
import Comment from '../../images/Home/comment.png';
import { useNavigation } from '@react-navigation/native';



const dialCall = (number) => {
  let phoneNumber = '';

  if (Platform.OS === 'android') {
    phoneNumber = `tel:${number}`;
  } else {
    phoneNumber = `telprompt:${number}`;
  }

  Linking.openURL(phoneNumber);
};

const HomeScreen = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalConfirmLocation, setModalConfirmLocation] = useState(false);


  

  useEffect(() => {
    setTimeout(() => {
      setModalVisible(true);
    }, 3000);
  }, []);

  const toggleModalConfirmLocation = () => {
    setModalConfirmLocation(!modalConfirmLocation);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const Massage = () => {
     navigation.navigate('Massage');
  }

  const Payment = () => {
    navigation.navigate('Payment');
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.head}>
          <Entypo
            name="menu"
            size={20}
            style={styles.menuIcon}
            onPress={() => navigation.openDrawer()}
          />
          <EvilIcons name="bell" size={20} style={styles.menuIcon} />
        </View>
        <Map />
        <View style={styles.targetLocation}>
          <MaterialCommunityIcons name="target" size={20} style={{color:'white'}} />
        </View>

        {/* <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.TextInputConainer} onPress={toggleModal}>
             <Icon name="search1" size={20}  style={styles.searchIcon}/>
             <Text style={styles.Search}>Where would you go?</Text>
             <Icon name="hearto" size={20}  style={styles.searchIcon}/>
        </TouchableOpacity>
     </View> */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={toggleModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={toggleModal}
                style={styles.closeButton}>
                <Icon name="close" size={20} style={styles.closeIcon} />
              </TouchableOpacity>
              <View style={styles.Top}>
                <Text style={styles.selectAddress}>
                  Your Ride is 1.1km away
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 0.5,
                   flex:1,                  
                                      

                }}>
                <Image source={CustomerImage} style={{width: 50, height: 50, margin:5,}} />
                <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",width:"80%"}}>
                  <View >
                    <Text style={{...Theme.Font_family, ...Theme.driver_font_color, fontWeight: 900,fontSize:16}}>Matthew D. Garcia</Text>
                    <Text style={{...Theme.Font_family, ...Theme.driver_para_font_color, fontWeight: 500, fontSize:12}}>Payment Method : Cash</Text>
                  </View>
                  <View>
                    <Text style={{...Theme.Font_family, ...Theme.driver_font_color, fontWeight: 900,fontSize:16}}>$20.52</Text>
                    <Text style={{...Theme.Font_family, ...Theme.driver_para_font_color, fontWeight: 500, fontSize:12}}>1.5km</Text>
                  </View>
                </View>
              </View>
              <View style={styles.recentContainerConfrim}>
                <View style={styles.recentPlace}>
                  <Ionicons
                    name="location"
                    size={20}
                    style={{
                      color: '#F44336', 
                      // marginHorizontal:2,
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        color: '#5A5A5A',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      Current Location
                    </Text>
                    <Text style={{fontSize: 12, color: '#B8B8B8'}}>
                      2972 Westheimer Rd. Santa Ana, Illinois 85486{' '}
                    </Text>
                  </View>
                </View>
                <View style={styles.dottedline}></View>
                <View style={styles.recentPlace}>
                  <Ionicons
                    name="location"
                    size={20}
                    style={{color: '#B865FA',
                    // marginHorizontal:2,
                  }}
                  />
                  <View>
                    <Text
                      style={{
                        color: '#5A5A5A',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      Office
                    </Text>
                    <Text style={{fontSize: 12, color: '#B8B8B8'}}>
                      2972 Westheimer Rd. Santa Ana, Illinois 85486{' '}
                    </Text>
                  </View>
                </View>
                <View style={{marginTop: 10, flexDirection:"row"}}>
                  <OutlineButton text={'Cancel'} btnStyle={{width:"50%", marginHorizontal:2}}/>
                  <SubmitButton text={'Accept'}  btnStyle={{width:"50%", marginHorizontal:2}} onPress={toggleModalConfirmLocation}/>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalConfirmLocation}
          onRequestClose={toggleModalConfirmLocation}>
           <View style={styles.centeredView}>
            <View style={styles.modalView2}>
              <TouchableOpacity
                onPress={toggleModal}
                style={styles.closeButton}>
                <Icon name="close" size={20} style={styles.closeIcon} />
              </TouchableOpacity>
              <View style={styles.Top}>
                <Text style={styles.selectAddress}>
                  Your Ride is 1.1km away
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 0.5,
                   flex:0.5,
                   padding:5                  
                                      

                }}> 
                <Image source={CustomerImage} style={{ margin:5, width:40, height:40}} />
                <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",width:"85%"}}>
                  <View >
                    <Text style={{...Theme.Font_family, ...Theme.driver_font_color, fontWeight: 900,fontSize:16}}>Matthew D. Garcia</Text>
                    <Text style={{...Theme.Font_family, ...Theme.driver_para_font_color, fontWeight: 500, fontSize:12}}>Payment Method : Cash</Text>
                  </View>
                  <View>
                    <Text style={{...Theme.Font_family, ...Theme.driver_font_color, fontWeight: 900,fontSize:16}}>$20.52</Text>
                    <Text style={{...Theme.Font_family, ...Theme.driver_para_font_color, fontWeight: 500, fontSize:12}}>1.5km</Text>
                  </View>
                </View>
              </View>
              <View style={{flex:1, padding:10}}>
                 <View style={{flex:0.5,flexDirection:"row", justifyContent:"flex-end", alignItems:"center"}}>
                    <TouchableOpacity onPress={Massage}>

                      <Image source={Comment} style={{marginHorizontal:5}}   />
                    </TouchableOpacity>
                     <TouchableOpacity onPress={() => dialCall('1234567890')}>
                      <Image source={Phone} style={{marginHorizontal:5}} />
                     </TouchableOpacity>
                 </View>
                <View style={{marginTop: 10, flexDirection:"row", flex:0.5, alignItems:"flex-end"}}>
                  <SubmitButton text={'Start Trip'}  btnStyle={{width:"100%", marginHorizontal:2}} onPress={Payment}/>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  dottedline: {
    height: 32,
    borderLeftWidth: 1,
    marginVertical: 10,
    position: 'absolute',
    bottom: 112,
    left: 16,
    zIndex: 999,
    borderLeftColor: '#B865FA',
    borderStyle: 'dashed',
  },

  recentPlace: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  headingPlaces: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#CCCCCC',
  },
  recentContainer: {
    height: '10%',
    padding: 15,
  },
  recentContainerConfrim: {
    padding: 10,
    
  },
  locationInput: {
    width: '90%',
    color: '#A0A0A0',
    fontFamily: 'Poppins-Regular3',
  },
  SelectLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    marginVertical: 5,
  },
  locationSearch: {
    // flex: 0.3,
    borderBottomWidth: 0.5,
    borderColor: '#DDDDDD',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  Top: {
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  selectAddress: {
    fontWeight: '400',
    fontSize: 16,
  },
  closeButton: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
  },
  modalView2: {
    height: 300,
    backgroundColor: '#FFFF',
    // marginTop:22,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    opacity: 10,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    // flex:1,
  },
  modalView: {
    height: 370,
    backgroundColor: '#FFFF',
    // marginTop:22,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    opacity: 10,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 10,
    flex: 1,
  },
  centeredViewConfirm: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  centeredView: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    // padding:15,
    // backgroundColor:'#ffff',
  },
  targetLocation: {
    padding: 10,
    position: 'absolute',
    bottom: 350,
    zIndex: 9,
    right: 15,
    bottom: 250,
    backgroundColor: '#7E57C2',
    borderRadius: 10,
    elevation: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    zIndex: 9,
    left: 15,
    right: 15,
    backgroundColor: 'transparent',
  },
  menuIcon: {
    backgroundColor: '#FFFFFF',
    color: 'black',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  searchContainer: {
    position: 'absolute',
    bottom: 140,
    left: 15,
    right: 15,
    elevation: 10,
    padding: 12,
    borderWidth: 0.2,
    borderBottomWidth: 0.5,
    borderColor: '#B865FA',
    backgroundColor: '#DFB8FF',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 6,
  },
  TextInputConainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1DFFF',
    padding: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#B865FA',
  },
  searchIcon: {
    color: '#A0A0A0',
    fontWeight: 'bold',
  },
  Search: {
    width: 215,
    color: '#A0A0A0',
    fontSize: 15,
    fontFamily: 'Poppins-Regular3',
    letterSpacing: 0.9,
    fontWeight: 'bold',
  },
});
