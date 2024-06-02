import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, Picker } from 'react-native'
import Checkbox from 'react-native-check-box';
import DropDownPicker from 'react-native-dropdown-picker';
import Theme from '../theme/theme'
import  Icon  from 'react-native-vector-icons/Ionicons';
// import Icons from './Icons';

const { width, height } = Dimensions.get('window');



const SimpleInput = ({
    placeholderTextColor,
    inputstyle,
    label,
    value,
    defaultValue,
    type,
    placeholder,
    viewStyle,
    pass
}) => {
    return (
        <>
            <View style={{...viewStyle}}>
                <TextInput
                    style={{ ...inputstyle }}
                    placeholder={placeholder}
                    type={type}
                    secureTextEntry={pass}
                    value={value}
                    defaultValue={defaultValue}
                    placeholderTextColor={'#D0D0D0'}
                />
            </View>
        </>
    )
}

const OtpInput = (
    {
        OtpInput
    }
) => {
    return (
        <>
            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: 'space-around'
            }}>
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
                />
                <TextInput
                    style={{ ...styles.otpInput, fontFamily: "Poppins-Regular" }}
                    type={"number"}
                    maxLength={1}
                />
               
            </View>
        </>
    )
}

const CheckBoxInput = ({
    text,
    textStyle,
    color,
    status,
    others
}) => {
    const [isChecked, setChecked] = useState(false);
    const handleCheckBoxClick = () => {
        setChecked(!isChecked);
    };
    return (
        <>
            <View style={{}}>
                    <Checkbox
                        isChecked={isChecked}
                        onClick={handleCheckBoxClick}  // or use onChange
                        checkBoxColor={color}
                    />
            </View>
        </>
    )
}

const List = ({
    defaultValue,
    label,
    textStyle,
    dropDownStyle,
    placeholder,
    items,
    value,
    dropdownContainerStyle
}) => {
    const [isOpen, setOpen] = useState(false)
    const [currentValue, setCurrentValue] = useState()


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
                        fontFamily: "Poppins-Regular",
                        borderColor:"lightGray",
                        borderWidth: 0.5,
                    }}
                    setValue={(val) => setCurrentValue(val)}
                />
            </View>
        </>
    )
}

const DropDown = ({
    defaultValue,
    label,
    textStyle,
    dropDownStyle,
    placeholder,
    items,
    value
}) => {
    const [isOpen, setOpen] = useState(false)
    const [currentValue, setCurrentValue] = useState()


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
                        fontFamily: "Poppins-Regular",
                    }}                    
                    setValue={(val) => setCurrentValue(val)}
                />
            </View>
        </>
    )
}


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


const SearchInput = ({placeholder , label, type}) => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (text) => {
        setSearchText(text);
    };

    return (
        <View style={styles.passwordContainer}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#CCCCCC"
                placeholderStyle={{ fontSize:24}}
                value={searchText}
                onChangeText={handleSearchChange}
                type={type}
            />
            <Icon name="eye-off-outline" size={20} color="gray" style={styles.icon} />
        </View>
    );
};


const ExampleInput = ({ placeholder, label, type, InStyle, keyboardType , value }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (text) => {
        setSearchText(text);
    };

    return (
        <View style={styles.Examcontainer}>
            <TextInput
                style={{...styles.input , ...InStyle }}
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
        paddingVertical:10,
        paddingHorizontal:14,
        borderRadius: 5,
        borderColor: 'gray',
        fontSize: 18,
        fontWeight:'700'
    },
    container: {
        flexDirection: 'row', // Horizontal layout
        alignItems: 'center', // Center items vertically
        paddingHorizontal: 10,
        marginTop: 10,
        padding: 10,
        borderBottomWidth:0.5,
        borderBlockColor: "#CCCCCC"
    },
    Examcontainer:{
        flexDirection: 'row', // Horizontal layout
        alignItems: 'center', // Center items vertically
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 0.5,
        borderBlockColor: "#CCCCCC"
    },
    passwordContainer:{
     display: 'flex',
     flexDirection: 'row',
     alignItems:"center",
      justifyContent:"center",
      borderWidth:0.5,
      borderRadius:6,
      paddingHorizontal:5,
      paddingVertical:5,
      marginTop:15,
      borderColor:Theme.ligth_gray_border_Color, // Horizontal layout
    },
    icon: {
        marginRight: 10,
        color:"gray"
    },
    input: {
        flex: 1, // Take up all available space
        height: 40,
        ...Theme.gray_color_h,
        borderRadius: 5,
        paddingHorizontal: 10,


    },
    inputPlaceholder:{
        fontSize: 16,
        fontWeight:"600",
        ...Theme.Font_family
        
    }, 
    placeholder:{
        fontSize:24,
        ...Theme.black_color_f
    }
});

export { SimpleInput, OtpInput, CheckBoxInput, List, SearchInput, ExampleInput, DropDown ,  }