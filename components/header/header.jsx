import { useNavigation } from '@react-navigation/native';
import React from 'react'
// import Icons from '../../../components/Icons';
import Icon from 'react-native-vector-icons/AntDesign'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'

const Header = ({
    backtoPage,
    backtoPage2,
    title,
    backIcon2,
    backIcon
}) => {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack("Home");
    };
    const goforward= () => {
        navigation.navigate("PickCategoryCard");
    };
    return (
        <>
            <View style={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "space-between",
                alignItems: "center",
                // marginTop: 20,
                // paddingLeft:20,
                // paddingRight: 20,
                
            }}>
                {
                    backtoPage ?
                        <TouchableOpacity  style={{marginHorizontal:5}} onPress={goBack}>
                            <Icon name="left" size={16}  />
                        </TouchableOpacity> : null
                }
                <Text style={{
                    fontFamily: "Poppins-Bold",
                    fontSize: 16,
                    color: "#414141"
                }} onPress={goBack}>{title}</Text>
                {
                    backtoPage2 ?
                        <TouchableOpacity onPress={goforward} style={{}}>
                            {/* <Image  source={backIcon2} /> */}
                        </TouchableOpacity> : null
                }
            </View>
        </>


    )
}

export default Header