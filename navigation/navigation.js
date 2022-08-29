import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from '../redux/store'
import DrawerNavigator from './DrawerNavigator'
import OrderRequest from '../screens/OrderRequest'
import SignIn from '../screens/SignIn'
import Offers from '../screens/Offers'
import Wallet from '../screens/Wallet'
import OnboardingScreen from '../screens/Onboarding'
import SignUp from '../screens/SignUp'
import { screen } from '../global'

const store = configureStore();
export default function RootNavigation() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  }
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name={screen.ONBOARDING} component={OnboardingScreen} />
          <Stack.Screen name={screen.SIGN_IN} component={SignIn} />
          <Stack.Screen name={screen.SIGN_UP} component={SignUp} />
          <Stack.Screen name={screen.DRAWER_NAVIGATOR} component={DrawerNavigator} />
          <Stack.Screen name={screen.ORDER_REQUEST} component={OrderRequest} />
          <Stack.Screen name={screen.OFFERS} component={Offers} />
          <Stack.Screen name={screen.WALLET} component={Wallet} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  )
}