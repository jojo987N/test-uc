import { View, Text, SafeAreaView, StatusBar} from 'react-native'
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from "../screens/Home"
import RestaurantDetail from '../screens/RestaurantDetail'
import { Provider as ReduxProvider } from 'react-redux'
//import store from './redux/store'
import configureStore from '../redux/store'
import OrderCompleted from '../screens/OrderCompleted'

import BottomTabs from './BottomTabs'
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen'
import DrawerNavigator from './DrawerNavigator'
import menuDetailScreen from '../screens/MenuDetailScreen'
import SignScreen from '../screens/authScreens/SignScreen'
import SignUpScreen from '../screens/authScreens/SignUpScreen'
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen'
import OrderRequest from '../screens/OrderRequest'
import Splash from '../screens/Splash'
import SignIn from '../screens/SignIn'
import Loader from '../screens/Loader'
import Offers from '../screens/Offers'
import Wallet from '../screens/Wallet'
import AddCard from '../screens/AddCard'
 import OnboardingScreen from '../screens/Onboarding'
import SignUp from '../screens/SignUp'
import { LoaderContext } from '../contexts/LoaderContext'
import { RestaurantsContext } from '../contexts/RestaurantsContext'
import {StripeProvider} from '@stripe/stripe-react-native'
 

const store = configureStore();

export default function RootNavigation({statusBarColor}) {
    const Stack = createStackNavigator();
    const [loading, setLoading] = useState(false)
    const [restaurantData, setRestaurantData]= useState()

    const screenOptions = {
        headerShown: false,
    }

  return (
     
    // <SafeAreaView style={{
    //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //   backgroundColor: statusBarColor?statusBarColor:"#eee",
    //   flex: 1
    // }}> 
    
    <ReduxProvider store={store}>
      <NavigationContainer>
      <LoaderContext.Provider value={{loading, setLoading}}>
        <RestaurantsContext.Provider value={{restaurantData, setRestaurantData}}> 
        <StripeProvider publishableKey="pk_test_vKLlrU7o8gOAVZbP2h3xs81I"> 
          <Stack.Navigator /*initialRouteName='BottomTabs' */ screenOptions={screenOptions}>
              {/* <Stack.Screen name="Home" component={Home}/> */}
              {/* <Stack.Screen name="Loader" component={Loader}/> */}
              {/* <Stack.Screen name="SignUpScreen" component={SignUpScreen}/> */}
              <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
              <Stack.Screen name="Splash" component={Splash}/>
              <Stack.Screen name="SignIn" component={SignIn}/>
              <Stack.Screen name="SignUp" component={SignUp}/>
              <Stack.Screen name="SignInWelcomeScreen" component={SignInWelcomeScreen}/>
              <Stack.Screen name="SignScreen" component={SignScreen}/>
              {/* <Stack.Screen name="SignUpScreen" component={SignUpScreen}/> */}
              <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}/>
              {/* <Stack.Screen name="BottomTabs" component={BottomTabs}/> */}
              {/* <Stack.Screen name="RestaurantDetail" component={RestaurantDetail}/> */}
              {/* <Stack.Screen name="RestaurantsMapScreen" component={RestaurantsMapScreen}/> */}
              <Stack.Screen name="OrderRequest" component={OrderRequest}/>
              <Stack.Screen name="OrderCompleted" component={OrderCompleted}/>
              <Stack.Screen name="Offers" component={Offers}/>
              <Stack.Screen name="Wallet" component={Wallet}/>
              <Stack.Screen name="AddCard" component={AddCard}/>
              {/* <Stack.Screen name="MenuDetailScreen" component={menuDetailScreen}/> */}
              {/* <Stack.Screen name="RestaurantsMapScreen" component={RestaurantsMapScreen}/> */}
          </Stack.Navigator>
           </StripeProvider>
          </RestaurantsContext.Provider>
          </LoaderContext.Provider>
      </NavigationContainer>
    </ReduxProvider>

    // </SafeAreaView>
  )
}