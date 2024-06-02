import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../components/header/header';
import {SimpleInput} from '../../assets/input/input';
import Theme from '../../assets/theme/Theme';
import {SubmitButton, OutlineButton} from '../../assets/buttons/button';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import WaitingImage from '../../images/carAdd/waiting.png';

const Documentation = () => {
  const [imageUri, setImageUri] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [modalConfirmLocation, setModalConfirmLocation] = useState(false);4
  const [isOnboarding, setOnboarding] = useState(false);
  const [countdown, setCountdown] = useState(48 * 60 * 60);

  const toggleModalConfirmLocation = () => {
    setModalConfirmLocation(!modalConfirmLocation);

  };

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 2000);
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setOnboarding(true);
    }, 2500);

    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);


    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          setImageUri(response.assets[0].uri);
        }
      },
    );
  };

  const uploadImage = async () => {
    if (!imageUri) return;

    const formData = new FormData();
    formData.append('image', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });

    setUploading(true);
    setUploadError(null);

    try {
      const response = await fetch('https://your-server.com/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
        body: formData,
      });

      const responseData = await response.json();
      console.log('Upload Success', responseData);
    } catch (error) {
      console.error('Upload Error', error);
      setUploadError(error.message);
    } finally {
      setUploading(false);
    }
  };

  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Documentation');
  };

  return (
    <View style={styles.Container}>
      <Header backtoPage2={true} backtoPage={true} title={'back'} />
      <View style={{marginTop: 15}}>
        <Text style={styles.Heading}>Add Photos and other documents</Text>
      </View>
      <View style={styles.ImageContainer}>
        <Text style={styles.headtext}>Upload Photos</Text>
        <View style={styles.UploadBox}>
          <Icon name="plus" />
        </View>
        <Text style={styles.headtext}>Upload Photos</Text>
        <View style={styles.UploadBox}>
          <Icon name="plus" />
        </View>
        <Text style={styles.headtext}>Upload Photos</Text>
        <View style={styles.UploadBox}>
          <Icon name="plus" />
        </View>
        {/* <Button title="Pick an image from gallery" onPress={openGallery} /> */}
        {/* {imageUri && <Image source={{uri: imageUri}} style={styles.image} />} */}
        {/* <Button
          title="Upload Image"
          onPress={uploadImage}
          disabled={!imageUri || uploading}
        /> */}
        {/* {uploading && <Text>Uploading...</Text>}
        {uploadError && <Text>Error: {uploadError}</Text>} */}
      </View>

      <View style={styles.btnContainer}>
        <OutlineButton text={'Cancel'} outbuttonsty={styles.outlinebtn} />
        <SubmitButton
          text="Next"
          buttonsty={styles.submitbtn}
          onPress={toggleModalConfirmLocation}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalConfirmLocation}
        onRequestClose={toggleModalConfirmLocation}>
        <View style={styles.centeredViewConfirm}>
          <View style={styles.modalViewConfirm}>
            <View style={{flex:0.6, margin:5, justifyContent:"center", alignItems:"center"}}>
             <Image source={WaitingImage} style={{width:100, height:100}} />
              <Text style={styles.Approval}>Please Wait For Approval</Text>
            </View>
            <View style={{flex:0.3, margin:5, justifyContent:"flex-start", alignItems:"center"}}>
              <Text style={styles.timeleft}>Time left</Text>
              <Text style={styles.count}>{formatTime(countdown)}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Documentation;

const styles = StyleSheet.create({
  count:{
    ...Theme.Font_family,
    ...Theme.driver_para_font_color,
    fontSize:20,
    fontWeight:"800",
  },
  timeleft:{
    ...Theme.Font_family,
    ...Theme.driver_para_font_color,
    fontSize:20,
    fontWeight:"800",
  },
  Approval:{
    ...Theme.Font_family,
    ...Theme.driver_font_color,
    fontSize:20,
    fontWeight:"600",
  },
  centeredViewConfirm: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',

    //  alignItems: 'center',
  },
  modalViewConfirm: {
    backgroundColor: '#ffff',
    width: '90%',
    height: '50%',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    padding:20,
  },
  headtext: {
    color: '#414141',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
  },
  UploadBox: {
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 6,
    padding: 10,
    marginTop: 10,
    justifyContent: 'center',
    flex: 0.3,
    alignItems: 'center',
  },
  ImageContainer: {
    flex: 1,
    marginTop: 10,
    // padding:10,
  },
  submitbtn: {
    width: 160,
    margin: 5,
  },
  outlinebtn: {
    margin: 5,
    width: 160,
  },
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  Heading: {
    fontSize: 24,
    fontWeight: '450',
    color: '#000',
    // fontFamily:Theme.fontFamily.bold,
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 6,
    padding: 10,
    marginTop: 10,
  },
  inputtext: {
    fontSize: 14,
    fontWeight: '450',
    color: '#000',
  },
  btnContainer: {
    //   flex:1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 25,
  },
});
