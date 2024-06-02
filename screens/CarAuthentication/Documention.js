import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/header/header';
import {SimpleInput} from '../../assets/input/input';
import Theme from '../../assets/theme/theme';
import {SubmitButton, OutlineButton} from '../../assets/buttons/button';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';

const Documentation = () => {
  const [imageUri, setImageUri] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

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
        <Text style={styles.Heading}>Upload Documents</Text>
      </View>
      <View style={styles.ImageContainer}>
          <div className={styles.UploadBox}>
              
          </div>
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
        {/* <SubmitButton text="Submit" buttonsty={styles.submitbtn} onPress={handleLogin} /> */}
      </View>
    </View>
  );
};

export default Documentation;

const styles = StyleSheet.create({
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
