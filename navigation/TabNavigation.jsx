import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Theme from '../assets/theme/theme';
import HomeIcon from 'react-native-vector-icons/FontAwesome'
import HeartIcon from 'react-native-vector-icons/AntDesign'
import WalletIcon from 'react-native-vector-icons/AntDesign'
import AccountIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import StackNavigation from './StackNavigation';
import HomeScreen from '../screens/Home/HomeScreen';
import Favourite from '../screens/Favourite/Favourite';
import WalletScreen from '../screens/Wallet/WalletScreen';
import Profile from '../screens/Profile/Profile';
import OfferScreen from '../screens/Offer/OfferScreen';
const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
    const screenOptions = {
      tabBarShowLabel:false,
      headerShown:false,
      tabBarStyle: {
            position: "absolute",
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
            elevation: 0,
      backgroundColor:'white',
        height: 60,
        alignSelf : "center",
        flexDirection  :  "row"
      },
      tabStyle: {
        width: "auto",
      },
      tabBarItemStyle: {
        width: "auto",
        height: 60,
      },
      tabBarContentContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
      },
   
    }
  return (
    <Tab.Navigator screenOptions={screenOptions}>
     <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ color, size,focused }) => (
            <View style={{alignItems: "center", justifyContent: "center"}}>
                  {/* <Image source={!focused ? require('../images/home.png') : require('../images/home1.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} /> */}
                   <HomeIcon name="home" style={{ fontSize:25, color:!focused ? "#B865FA" : "C2CCDE" }}/>
                   <Text style={{fontSize:12,fontFamily:"Poppins-Regular3" , fontWeight:'bold', letterSpacing:0.9,}}>Home</Text>
          
            </View>
            ),
          }}/>
          <Tab.Screen name="Favourite" component={Favourite} options={{
    
          tabBarIcon: ({ color, size,focused }) => (
            <View style={{alignItems: "center", justifyContent: "center"}}>
                  {/* <Image source={!focused ? require('../images/location.png') : require('../images/location1.png')} style={{ width: 25, height: 25 ,objectFit:'contain' }} /> */}
                  <HeartIcon name='hearto' style={{ fontSize:25, color:!focused ? "#B865FA" : "C2CCDE" }}  />
                  <Text style={{fontSize:12,fontFamily:"Poppins-Regular3", fontWeight:'bold',}}>Favourite</Text>

 
          
            </View>
            ),
          }}/>
          <Tab.Screen name="Wallet" component={WalletScreen} options={{
            tabBarIcon: ({ color, size,focused }) => (
              <>
              <View
              style={{
                position: "absolute",
                bottom:30,
               alignItems: "center",
               justifyContent: "center",
               backgroundColor: "#B865FA",
               width: Platform.OS == "ios" ? 80 :80,
               height: Platform.OS == "ios" ? 80 :80,
          
               borderRadius: Platform.OS == "ios" ? 50 : 50 
              }}
             >
             {/* <Image source={!focused ? require('../images/card.png') : require('../images/card1.png')} styl e={{ width: 25, height: 20 ,objectFit:'contain' }} /> */}
              <WalletIcon name="wallet" style={{ fontSize:25, color:!focused ? "#FFFFFF" : "#FFFFFF" }} />
             </View>
               <Text style={{fontSize:12,fontFamily:"Poppins-Regular3" , marginTop:25 ,fontWeight:'bold',}}>Wallet</Text>
               </>
              ),
            }}/>
            <Tab.Screen name="Offer" component={OfferScreen} options={{
              tabBarIcon: ({ color, size,focused }) => (
                <>
                <AccountIcon name='brightness-percent' style={{ fontSize:25, color:!focused ? "#B865FA" : "C2CCDE" }}  />
                <Text style={{fontSize:12,fontFamily:"Poppins-Regular3", fontWeight:'bold',}}>Offer</Text>
                </>


                ),
              }}/>
              <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ color, size,focused }) => (
                  <>
                  <AccountIcon name='account' style={{ fontSize:25, color:!focused ? "#B865FA" : "C2CCDE" }}  />
                  <Text style={{fontSize:12,fontFamily:"Poppins-Regular3", fontWeight:'bold',}}>Account</Text>
                  </>
                  ),
                }}/>
    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})