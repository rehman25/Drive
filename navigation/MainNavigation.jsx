import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigation from './TabNavigation';

import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Carorsal from '../screens/Splash/Carorsal';
import LocationEnable from '../screens/Splash/LocationEnable';
import Login from '../screens/Authentication/Login';
import SignUp from '../screens/Authentication/SignUp';
import SplashScreen from '../screens/Splash/SplashScreen';
import LoginSplash from '../screens/Authentication/LoginSplash';
import Otp from '../screens/Authentication/Otp';
import ProfileScreen from '../screens/Authentication/ProfileScreen';
import EmailPhoneVerify from '../screens/Authentication/EmailPhoneVerify';
import SetPasswordScreen from '../screens/Authentication/SetPasswordScreen';
import History from '../screens/DrawerScreens/History';
import Complain from '../screens/DrawerScreens/Complain';
import Referal from '../screens/DrawerScreens/Referal';
import Aboutus from '../screens/DrawerScreens/Aboutus';
import HelpSupport from '../screens/DrawerScreens/HelpSupport';
import Logout from '../screens/Logout';
import HomeScreen from '../screens/Home/HomeScreen';
import CustomeDrawer from '../components/drawer/drawer'
import AddCar from '../screens/CarAuthentication/AddCar';
import CarDetail from '../screens/CarAuthentication/CarDetail';
import Documention from '../screens/CarAuthentication/Documention';
import Onboarding from '../screens/Splash/Onboarding';
import Successfully from '../screens/Authentication/Successfully';
import RegisterCar from '../screens/CarAuthentication/RegisterCar';
import Massage from '../screens/Home/Massage';
import Payment from '../screens/Home/Payment';
import HomeIcon from 'react-native-vector-icons/FontAwesome';

const MainNavigation = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  
  
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  useEffect(() => {
    async function checkLoginStatus() {

      const value = await AsyncStorage.getItem("data");
      console.log(value,"hello value")
      if (value !== null) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }

    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Drawer.Navigator initialRouteName='HomeScreen'
   
          screenOptions={{ headerShown: false, }}
          >
             <Drawer.Screen name="HomeScreen" component={TabNavigation}/>
        
          <Drawer.Screen name="Complain"  component={Complain} />


          <Drawer.Screen name="Referal" component={Referal} />
          <Drawer.Screen name="AboutUs" component={Aboutus} />
          <Drawer.Screen name="HelpandSupport" component={HelpSupport} />
          <Drawer.Screen name="Logout">
            {props => (
              <Logout {...props} onLogin={() => setIsLoggedIn(false)} />
            )}
          </Drawer.Screen>
        </Drawer.Navigator>
      ) : (
        
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          {/* <Stack.Screen name="Carosal" component={Carorsal}/> */}

          <Stack.Screen name="Login">
            {props => <Login {...props} onLogin={() => setIsLoggedIn(true)} />}
          </Stack.Screen>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Successfully" component={Successfully} />
          <Stack.Screen name="RegisterCar" component={RegisterCar} />
          <Stack.Screen name="LocationEnable" component={LocationEnable} />
          {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
          <Stack.Screen name="LoginSplash" component={LoginSplash} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="EmailPhoneVerify" component={EmailPhoneVerify} />
          <Stack.Screen name="SetPassword" component={SetPasswordScreen} />
          <Stack.Screen name="AddCar" component={AddCar} />
          <Stack.Screen name="CarDetail" component={CarDetail} />
          <Stack.Screen name="Documention" component={Documention} />
          


        </Stack.Navigator>
      )}
      

    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
