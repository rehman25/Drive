import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Image,
  Picker,
  ScrollView,
  TouchableWithoutFeedback,
  FlatList
} from 'react-native';

// import Checkbox from 'react-native-check-box';
import DropDownPicker from 'react-native-dropdown-picker';
import Theme from '../theme/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {Modal, TextInput} from 'react-native-paper';
import {Checkbox} from 'react-native-paper';
// import {CountryPicker} from "react-native-country-codes-picker";
import CountryPicker, { Flag } from 'react-native-country-picker-modal';

// import Icons from './Icons';

const {width, height} = Dimensions.get('window');

const Countrypictker = ({ 
  placeholderTextColor,
  inputstyless,
  label,
  value,
  setValues,
  defaultValue,
  type,
  pass,
  placeholder,
  viewStyle,
  keyboardType,
  onBlur,}) => {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then(response => response.json())
      .then(data => {
        const countries = data.map(item => ({
          code: item.alpha2Code,
          name: item.name,
          callingCode: `+${item.callingCodes[0]}`,
          flag: `https://countryFlagsapi.com/png/${item.name}`
        }));
        setAreas(countries);

        const defaultCountry = countries.find(country => country.code === 'US');
        if (defaultCountry) {
          setSelectedArea(defaultCountry);
        }
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={{ padding: 10, flexDirection: 'row' }}
      onPress={() => {
        setSelectedArea(item);
        setModalVisible(false);
      }}
    >
      <Image source={{ uri: item.flag }} style={{ width: 30, height: 30, marginRight: 10 }} />
      <Text style={{ marginLeft: 10, fontSize: 16, color: 'black' }}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderAreaCodeModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={{  alignItems: 'center', justifyContent: 'center'  }}>
          <View style={{ height: 400, width: width * 0.8, backgroundColor: 'white', borderRadius: 12 }}>
            <FlatList
              data={areas}
              renderItem={renderItem}
              keyExtractor={item => item.code}
              showsVerticalScrollIndicator={false}
              style={{ padding: 20, marginBottom: 20 }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{marginTop:10 }}>
          <View style={{}}>
            <View style={{  flexDirection:"row", alignItems:"center" }}>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 45,
                  marginTop:5,
                  borderColor: 'black',
                  borderWidth: 1,
                  flexDirection: 'row',
                }}
                onPress={() => setModalVisible(true)}
              >
                <View style={{ justifyContent: 'center' }}>
                  {selectedArea?.flag && (
                    <Image source={{ uri: selectedArea?.flag }} style={{ resizeMode: 'contain', width: 30, height: 30 }} />
                  )}
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{ color: 'black', fontSize: 12 }}>{selectedArea?.callingCode}</Text>
                </View>
              </TouchableOpacity>
               
                <TextInput
                 mode="outlined"
                 label={label}
                 placeholder={placeholder}
                 value={value}
                 style={{...inputstyless}}
                 secureTextEntry={pass}
                 keyboardType="numeric"
                 placeholderTextColor={'#D0D0D0'}
                 onChangeText={setValues}
                 right={<TextInput.Affix />}
                 onBlur={onBlur}
                />
            </View>
          </View>
        </View>
        {renderAreaCodeModal()}
      </ScrollView>
    </SafeAreaView>
  );
};

const SimpleInput = ({
  placeholderTextColor,
  inputstyle,
  label,
  value,
  setValues,
  defaultValue,
  type,
  placeholder,
  viewStyle,
  keyboardType,
  onBlur,

  pass,
}) => {
  const [text, setText] = React.useState('');
  const [secureText, setSecureText] = React.useState(true);

  return (
    <>
      <TextInput
        mode="outlined"
        label={label}
        placeholder={placeholder}
        value={value}
        style={{...inputstyle}}
        secureTextEntry={pass}
        keyboardType={keyboardType}
        placeholderTextColor={'#D0D0D0'}
        onChangeText={setValues}
        right={<TextInput.Affix />}
        onBlur={onBlur}
      />
      {/* <View style={{...viewStyle}}> */}
      {/* <TextInput
          label={label}
          value={text}
          type={type}
          style={{ ...inputstyle }}
          secureTextEntry={pass}
        //   onChangeText={text => setText(text)}
          defaultValue={defaultValue}
          placeholderTextColor={'#D0D0D0'}
          keyboardType={keyboardType}
          
        /> */}
      {/* <TextInput
                    style={{ ...inputstyle }}
                    placeholder={placeholder}
                    type={type}
                    secureTextEntry={pass}
                    value={value}
                    defaultValue={defaultValue}
                    placeholderTextColor={'#D0D0D0'}
                /> */}
      {/* </View> */}
    </>
  );
};

const OtpInput = ({length, onOTPChange}) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));

  const handleChangeText = (text, index) => {
    if (text.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    onOTPChange(newOtp.join(''));

    if (text && index < length - 1) {
      const nextInput = refs[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const refs = [];

  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            style={styles.inputot}
            keyboardType="number-pad"
            maxLength={1}
            value={otp[index]}
            onChangeText={text => handleChangeText(text, index)}
            ref={ref => (refs[index] = ref)}
          />
        ))}
        {/* <TextInput
                    style={{ ...styles.otpInput, fontFamily: "Poppins-Regular" }}
                    type={"number"}
                    maxLength={1}
                />
                <TextInput
                    style={{ ...styles.otpInput, fontFamily: "Poppins-Regular" }}
                    type={"number"}
                    maxLength={1}
                />
                <TextInput
                    style={{ ...styles.otpInput, fontFamily: "Poppins-Regular" }}
                    type={"number"}
                    maxLength={1}
                />
                <TextInput
                    style={{ ...styles.otpInput, fontFamily: "Poppins-Regular" }}
                    type={"number"}
                    maxLength={1}
                />
                <TextInput
                    style={{ ...styles.otpInput, fontFamily: "Poppins-Regular" }}
                    type={"number"}
                    maxLength={1}
                /> */}
      </View>
    </>
  );
};

const CheckBoxInput = ({text, textStyle, color, status, others}) => {
  //   const [isChecked, setChecked] = useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleCheckBoxClick = () => {
    setChecked(!checked);
    console.log(checked, 'ff');
  };
  return (
    <>
      <View style={{}}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={handleCheckBoxClick} // or use onChange
          color={checked ? '#6200ee' : '#b0b0b0'}
        />
      </View>
    </>
  );
};

const List = ({
  defaultValue,
  label,
  textStyle,
  dropDownStyle,
  placeholder,
  items,
  value,
  dropdownContainerStyle,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();

  return (
    <>
      <View style={{...dropdownContainerStyle}}>
        <DropDownPicker
          placeholder={placeholder}
          items={items}
          defaultValue={defaultValue}
          value={currentValue}
          setOpen={() => setOpen(!isOpen)}
          open={isOpen}
          textStyle={dropDownStyle}
          style={{
            zIndex: 1000,
            fontFamily: 'Poppins-Regular',
            borderColor: 'lightGray',
            borderWidth: 0.5,
          }}
          setValue={val => setCurrentValue(val)}
        />
      </View>
    </>
  );
};

const DropDown = ({
  defaultValue,
  label,
  textStyle,
  dropDownStyle,
  placeholder,
  items,
  value,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();

  return (
    <>
      <View style={{}}>
        <DropDownPicker
          placeholder={placeholder}
          items={items}
          defaultValue={defaultValue}
          value={currentValue}
          setOpen={() => setOpen(!isOpen)}
          open={isOpen}
          textStyle={dropDownStyle}
          style={{
            zIndex: 1000,
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            fontFamily: 'Poppins-Regular',
          }}
          setValue={val => setCurrentValue(val)}
        />
      </View>
    </>
  );
};

// const Picker = ({
//     defaultValue,
//     label,
//     textStyle,
//     dropDownStyle,
//     placeholder,
//     items,
//     value
// }) => {
//     const [isOpen, setOpen] = useState(false)
//     const [currentValue, setCurrentValue] = useState()

//     return (
//         <>
//             <View style={{}}>
//                 <DropDownPicker
//                     placeholder={placeholder}
//                     items={items}
//                     defaultValue={defaultValue}
//                     value={currentValue}
//                     setOpen={() => setOpen(!isOpen)}
//                     open={isOpen}
//                     textStyle={dropDownStyle}
//                     style={{
//                         zIndex: 1000,
//                         borderTopWidth: 0,
//                         borderLeftWidth: 0,
//                         borderRightWidth: 0,
//                         fontFamily: "Poppins-Regular",
//                     }}
//                     setValue={(val) => setCurrentValue(val)}
//                 />
//             </View>
//         </>
//     )
// }

const SearchInput = ({placeholder, label, type}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = text => {
    setSearchText(text);
  };

  return (
    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#CCCCCC"
        placeholderStyle={{fontSize: 24}}
        value={searchText}
        onChangeText={handleSearchChange}
        type={type}
      />
      <Icon name="eye-off-outline" size={20} color="gray" style={styles.icon} />
    </View>
  );
};

const ExampleInput = ({
  placeholder,
  label,
  type,
  InStyle,
  keyboardType,
  value,
}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = text => {
    setSearchText(text);
  };

  return (
    <View style={styles.Examcontainer}>
      <TextInput
        style={{...styles.input, ...InStyle}}
        placeholder={placeholder}
        placeholderTextColor="#CCCCCC"
        placeholderStyle={styles.placeholderstyle}
        value={value}
        onChangeText={handleSearchChange}
        type={type}
        keyboardType={keyboardType}
      />
    </View>
  );
};





const styles = StyleSheet.create({
  otpInput: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 5,
    borderColor: 'gray',
    fontSize: 18,
    fontWeight: '700',
  },
  container: {
    flexDirection: 'row', // Horizontal layout
    alignItems: 'center', // Center items vertically
    paddingHorizontal: 10,
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 0.5,
    borderBlockColor: '#CCCCCC',
  },
  Examcontainer: {
    flexDirection: 'row', // Horizontal layout
    alignItems: 'center', // Center items vertically
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 0.5,
    borderBlockColor: '#CCCCCC',
  },
  passwordContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 6,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginTop: 15,
    borderColor: Theme.ligth_gray_border_Color, // Horizontal layout
  },
  icon: {
    marginRight: 10,
    color: 'gray',
  },
  input: {
    flex: 1, // Take up all available space
    height: 40,
    ...Theme.gray_color_h,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputPlaceholder: {
    fontSize: 16,
    fontWeight: '600',
    ...Theme.Font_family,
  },
  placeholder: {
    fontSize: 24,
    ...Theme.black_color_f,
  },
  inputot: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    // textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#ffffff',
  },
});

export {
  SimpleInput,
  OtpInput,
  CheckBoxInput,
  List,
  SearchInput,
  ExampleInput,
  DropDown,
  Countrypictker,
  // CountryCodeFLag,
  //   PaperInput,
};
