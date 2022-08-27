import { View, Text, SafeAreaView, StatusBar} from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from "../screens/Home"
import RestaurantDetail from '../screens/RestaurantDetail'
import { Provider as ReduxProvider } from 'react-redux'

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
import { screen } from '../global'

 

const store = configureStore();

export default function RootNavigation({statusBarColor}) {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    }

  return (
     
    
    
    
    
    
    
    <ReduxProvider store={store}>
      <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptions}>
              <Stack.Screen name={screen.ONBOARDING} component={OnboardingScreen}/>
              <Stack.Screen name={screen.SIGN_IN} component={SignIn}/>
              <Stack.Screen name={screen.SIGN_UP} component={SignUp}/>
              <Stack.Screen name={screen.DRAWER_NAVIGATOR} component={DrawerNavigator}/>
              <Stack.Screen name={screen.ORDER_REQUEST} component={OrderRequest}/>
              <Stack.Screen name={screen.ORDER_COMPLETED} component={OrderCompleted}/>
              <Stack.Screen name={screen.OFFERS} component={Offers}/>
              <Stack.Screen name={screen.WALLET} component={Wallet}/>
          </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>

    
  )
}