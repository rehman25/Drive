import { StyleSheet, Text, View , ImageBackground , Modal , Button, Image , TouchableOpacity} from 'react-native'
import React,{useState , useEffect} from 'react'
import LocationImage from '../../images/splashScreen/Location.png'
import { PermissionsAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LocationEnable = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();


  useEffect(() => {

      setModalVisible(true);
    
  }, [modalVisible]);

  async function requestLocationPermission() {
    try {
      const granted = await  PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  const handleClick = () => {
    navigation.navigate('LoginSplash');
  };
  return (
    <View style={styles.container}> 
     <ImageBackground
      source={require('../../images/splashScreen/Map.png')} // Replace './path/to/your/image.jpg' with the path to your image
      style={styles.background}
      resizeMode="cover" // Adjust the image's size to cover the entire container
    >
     <Modal
        animationType="slide" // Change animationType as needed
        transparent={true} // Make the modal transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false); // Close modal on Android back button press
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
             <Image source={LocationImage} style={styles.localImage} />
             <Text style={styles.text}>Enable your location</Text>
             <Text style={styles.para}>Choose your location to start find the request around you</Text>
              <TouchableOpacity style={styles.Button} onPress={handleClick}>
                <Text style={{color:"white" , fontSize:16,}}>use my location</Text>
              </TouchableOpacity>
             <Text style={styles.Skip}>Skip</Text>

          </View>
          
        </View>
      </Modal>
    </ImageBackground>
    </View>
  )
}

export default LocationEnable

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  background:{
    flex:1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
     // Semi-transparent background
  },
  modalContent: {
    justifyContent:"center",
    alignItems: 'center',
    width:300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Android elevation for shadow
  },
  text:{
    fontSize:24,
    color:"#414141",
  },
  para:{
    fontSize:12,
    color:"#A0A0A0",
    textAlign:"center",
  },
  Button:{
    backgroundColor:"#B865FA",
    width:250,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    marginTop:30,
    padding:15,
    color: "#FFFFFF",
  },
  Skip:{
    fontSize:20,
    color:"#A0A0A0",
    marginTop:30,
    textAlign:"center",
  }

})