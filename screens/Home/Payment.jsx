import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Textarea,
  SafeAreaView, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../components/header/header';
import Cust from '../../images/payment/cust.png';
import Theme from '../../assets/theme/Theme';
import Visa from '../../images/payment/Visa.png';
import Master from '../../images/payment/master.png';
import Paypal from '../../images/payment/paypal.png';
import Cash from '../../images/payment/Cash.png';
import {SubmitButton} from '../../assets/buttons/button';
import ProcessImage from '../../images/payment/processpayment.png';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import Icons from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
// import { ScrollView } from 'react-native-gesture-handler';

const StarRating = ({maxStars = 5, onRatingChange}) => {
  
  const [rating, setRating] = useState(0);

  const handlePress = index => {
    const newRating = index + 1;
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <View style={{flexDirection: 'row'}}>
      {Array.from({length: maxStars}).map((_, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(index)}>
          <Icons
            name={index < rating ? 'star' : 'staro'}
            size={32}
            color="#FFD700"
            style={{marginHorizontal: 5}}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Payment = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isRatting, setRatting] = useState(false);
  const [ThankYou, setThankYou] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    // setModalVisible2(false)
  };
  const ratting = () => {
    setRatting(!isRatting);
    setModalVisible(false);
  };

   const handleSubmit = () => {
    setThankYou(!ThankYou);
    setModalVisible(false);
    setRatting(false);
  };
  const handleRatingChange = rating => {
    console.log(`New rating is: ${rating}`);
    
  };
  const navigation = useNavigation()
  const GoToHome = () => {
    navigation.navigate('HomeMap');
  }
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <Header backtoPage2={true} backtoPage={true} title={'back'} />
      <ScrollView style={styles.ContentCont}>
        <View style={styles.HeaderCust}>
          <View>
            <Image source={Cust} style={styles.iamge} />
          </View>
          <View style={styles.Profile}>
            <View>
              <Text style={styles.Name}>Matthew D. Garcia</Text>
              <Text style={styles.Paymethd}>Payment Method : Visa Card</Text>
            </View>
            <View>
              <Text style={styles.Amount}>$18.25</Text>
              <Text style={styles.Kilometer}>1.6 km</Text>
            </View>
          </View>
        </View>

        <View style={styles.Charges}>
          <Text style={styles.ChargeHead}>Charge</Text>
          <View style={styles.ChargesAmout}>
            <View>
              <Text style={styles.NameAmount}>Mustang/per hours</Text>
              <Text style={styles.Vat}>Vat (5%)</Text>
            </View>
            <View>
              <Text style={styles.rideAmount}>$17.00</Text>
              <Text style={styles.vatAmount}>$1.25</Text>
            </View>
          </View>
          <View style={styles.total}>
            <Text style={styles.totalhead}>Total</Text>
            <Text style={styles.totalAmount}>$18.25s</Text>
          </View>
        </View>

        <View style={styles.PaymentMethod}>
          <View>
            <Text style={styles.SelectPayemnt}>Select payment method</Text>
          </View>
          <TouchableOpacity style={styles.cardbox}>
            <Image source={Visa} style={styles.iamgeVise} />
            <View>
              <Text style={styles.cardnumber}>**** **** **** 8956</Text>
              <Text style={styles.cardExpire}>Expires:12/26</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardbox}>
            <Image source={Master} style={styles.iamgeVise} />
            <View>
              <Text style={styles.cardnumber}>**** **** **** 8956</Text>
              <Text style={styles.cardExpire}>Expires:12/26</Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.cardbox}>
            <Image source={Paypal} style={styles.iamgeVise} />
            <View>
              <Text style={styles.cardnumber}>Mailaddress@mail.com</Text>
              <Text style={styles.cardExpire}>Expires:12/26</Text>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.cardbox}>
            <Image source={Cash} style={styles.iamgeVise} />
            <View>
              <Text style={styles.cardnumber}>Cash</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end' }}>
          <SubmitButton text={'confirm'} onPress={toggleModal} />
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{width: '100%', alignItems: 'flex-end'}}
              onPress={toggleModal}>
              <Icons name="close" size={20} />
            </TouchableOpacity>
            <View>
              <Image source={ProcessImage} style={styles.ProcessImage} />
            </View>
            <View>
              <Text style={styles.ProcessText}>Payment Success</Text>
            </View>
            <View>
              <Text style={styles.ProcessPara}>
                Your money has been successfully received from Matthew D. Garcia
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                borderBottomWidth: 0.5,
                borderStyle: 'dashed',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.PaymentSuccessAmount}>Amount</Text>
              <Text style={styles.PaymentSuccessDollar}>$18.25</Text>
            </View>
            <View style={{marginTop: 15}}>
              <Text style={styles.help}>How is your trip?</Text>
              <Text style={styles.helpPara}>
                Youe feedback will help us to improve your driving experience
                better
              </Text>
            </View>
            <View style={{width: '100%', marginTop: 10}}>
              <SubmitButton
                text={'Please Feedback'}
                btnStyle={{width: '100%'}}
                onPress={ratting}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isRatting}
        onRequestClose={ratting}>
        <View style={styles.RantingView}>
          <View style={styles.ModalRatingView}>
            <TouchableOpacity
              style={{width: '100%', alignItems: 'flex-end'}}
              onPress={toggleModal}>
              <Icons name="close" size={20} />
            </TouchableOpacity>
            <StarRating onRatingChange={handleRatingChange} />
             <View style={{marginTop:10, alignItems:"center"}}>
                <Text style={styles.Excellent}>Excellent</Text>
                <Text style={styles.ExcellentPara}>You rated Matthew D. Garcia 4 star</Text>
             </View>
             <View>
                
             </View>
             <View style={{flex:1,  width:"100%", justifyContent:"flex-end"}}>
                <SubmitButton text={'Submit'} onPress={handleSubmit}  />
             </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={ThankYou}
        onRequestClose={handleSubmit}>
        <View style={styles.ThankyouView}>
          <View style={styles.ThankyouModal}>
            <TouchableOpacity
              style={{width: '100%', alignItems: 'flex-end'}}
              onPress={handleSubmit}>
              <Icons name="close" size={20} />
            </TouchableOpacity>
            <View>
              <Image source={ProcessImage} style={styles.ProcessImage} />
            </View>
            <View style={{marginTop:20}}>
              <Text style={styles.ProcessText}>Thank You</Text>
            </View>
            <View>
              <Text style={styles.ProcessPara}>
              Thank you for your valuable feedback
              </Text>
            </View>
           
            <View style={{width: '100%', marginTop: 10}}>
              <SubmitButton
                text={'Back to home'}
                btnStyle={{width: '100%'}}
                onPress={GoToHome}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  Excellent:{
    ...Theme.Font_family,
    ...Theme.driver_font_color,
    fontSize: 20,
    fontWeight: '500',
  },
  ExcellentPara:{
    ...Theme.Font_family,
    ...Theme.driver_para_font_color,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  helpPara: {
    ...Theme.Font_family,
    ...Theme.driver_para_font_color,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  help: {
    ...Theme.Font_family,
    ...Theme.driver_font_color,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  PaymentSuccessDollar: {
    ...Theme.Font_family,
    ...Theme.driver_para_font_color,
    fontSize: 20,
    fontWeight: '500',
  },
  PaymentSuccessAmount: {
    ...Theme.Font_family,
    ...Theme.driver_font_color,
    fontSize: 12,
    fontWeight: '500',
  },
  ProcessPara: {
    textAlign: 'center',
  },
  ProcessText: {
    ...Theme.Font_family,
    ...Theme.driver_font_color,
    fontWeight: '600',
    fontSize: 18,
    marginHorizontal: 2,
  },
  ProcessImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  ModalRatingView: {
    height: 420,
    backgroundColor: '#FFFF',
    // marginTop:22,
    position: 'absolute',
    bottom: 0,
    // top: '25%',
    width: '100%',
    opacity: 10,
    borderRadius: 15,
    padding: 30,
    flex: 1,
    alignItems: 'center',
    
  },
  ThankyouModal:{
    height: 300,
    backgroundColor: '#FFFF',
    // marginTop:22,
    position: 'absolute',
    bottom: '25%',
    top: '25%',
    width: '90%',
    opacity: 10,
    borderRadius: 15,
    padding: 30,
    flex: 1,
    alignItems: 'center',
  },
  modalView: {
    height: 450,
    backgroundColor: '#FFFF',
    // marginTop:22,
    position: 'absolute',
    bottom: '25%',
    top: '25%',
    width: '90%',
    opacity: 10,
    borderRadius: 15,
    padding: 30,
    flex: 1,
    alignItems: 'center',
  },
  RantingView: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ThankyouView:{
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SelectPayemnt: {
    ...Theme.Font_family_Bold,
    ...Theme.driver_font_color,
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 1,
    paddingVertical: 10,
  },
  iamgeVise: {
    width: 60,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 5,
    resizeMode: 'contain',
  },
  cardExpire: {
    ...Theme.Font_family,
    ...Theme.driver_para_font_color,
    fontSize: 14,
  },
  cardnumber: {
    ...Theme.Font_family,
    ...Theme.driver_font_color,
    fontSize: 16,
    padding: 0,
    margin: 0,
  },
  cardbox: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#B865FA',
    backgroundColor: '#F1DFFF',
  },
  PaymentMethod: {
    padding: 10,
  },
  totalAmount: {
    ...Theme.Font_family,
    ...Theme.driver_para_font_color,
    fontSize: 14,
    fontWeight: '600',
  },
  totalhead: {
    ...Theme.Font_family,
    ...Theme.driver_para_font_color,
    fontSize: 14,
    fontWeight: '600',
  },

  vatAmount: {
    ...Theme.Font_family,
    ...Theme.driver_para_font_color,
    fontSize: 14,
    fontWeight: '600',
  },
  rideAmount: {
    ...Theme.Font_family,
    ...Theme.driver_para_font_color,
    fontSize: 16,
    fontWeight: '600',
  },
  Vat: {
    ...Theme.Font_family,
    ...Theme.driver_para_font_color,
    fontSize: 14,
    fontWeight: '600',
  },
  NameAmount: {
    ...Theme.Font_family,
    ...Theme.driver_para_font_color,
    fontSize: 16,
    fontWeight: '600',
  },
  ChargeHead: {
    ...Theme.Font_family,
    ...Theme.driver_font_color,
    fontSize: 18,
    fontWeight: 'bold',
    color: Theme.Purple_color_f,
    padding: 10,
    paddingBottom: 0,
    marginTop: 20,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingBottom: 0,
  },
  ChargesAmout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    padding: 10,
  },
  Charges: {},
  Kilometer: {
    ...Theme.Font_family,
    ...Theme.driver_para_font_color,
    fontSize: 10,
  },
  Amount: {
    ...Theme.Font_family,
    ...Theme.driver_font_color,
    fontSize: 18,
    fontWeight: 'bold',
    color: Theme.Purple_color_f,
  },
  Paymethd: {
    ...Theme.Font_family,
    ...Theme.driver_para_font_color,
    fontSize: 10,
  },
  Name: {
    ...Theme.Font_family,
    ...Theme.driver_font_color,
    fontSize: 18,
    fontWeight: 'bold',
    color: Theme.Purple_color_f,
  },

  iamge: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  HeaderCust: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 0.3,
  },
  container: {
    height: 1000,
    backgroundColor: '#fff',
    padding: 15,
  },
  ContentCont: {
    flex:1,

  },
  Profile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
});
