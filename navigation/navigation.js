import { View, Text, SafeAreaView, StatusBar} from 'react-native'
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from "../screens/Home"
import RestaurantDetail from '../screens/RestaurantDetail'
import { Provider as ReduxProvider } from 'react-redux'
//import store from './redux/store'
import configureStore from '../redux/store'
 
import BottomTabs from './BottomTabs'
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen'
import DrawerNavigator from './DrawerNavigator'
import menuDetailScreen from '../screens/MenuDetailScreen'
import OrderRequest from '../screens/OrderRequest'
// import Splash from '../screens/Splash'
import SignIn from '../screens/SignIn'
import Loader from '../screens/Loader'
import Offers from '../screens/Offers'
import Wallet from '../screens/Wallet'
import AddCard from '../screens/AddCard'
 import OnboardingScreen from '../screens/Onboarding'
import SignUp from '../screens/SignUp'
import { LoaderContext } from '../contexts/LoaderContext'
import { RestaurantsContext } from '../contexts/RestaurantsContext'
 

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
          <Stack.Navigator /*initialRouteName='BottomTabs' */ screenOptions={screenOptions}>
              {/* <Stack.Screen name="Home" component={Home}/> */}
              {/* <Stack.Screen name="Loader" component={Loader}/> */}
              {/* <Stack.Screen name="SignUpScreen" component={SignUpScreen}/> */}
              <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
              {/* <Stack.Screen name="Splash" component={Splash}/> */}
              <Stack.Screen name="SignIn" component={SignIn}/>
              <Stack.Screen name="SignUp" component={SignUp}/>
              {/* <Stack.Screen name="SignUpScreen" component={SignUpScreen}/> */}
              <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}/>
              {/* <Stack.Screen name="BottomTabs" component={BottomTabs}/> */}
              {/* <Stack.Screen name="RestaurantDetail" component={RestaurantDetail}/> */}
              {/* <Stack.Screen name="RestaurantsMapScreen" component={RestaurantsMapScreen}/> */}
              <Stack.Screen name="OrderRequest" component={OrderRequest}/>
               <Stack.Screen name="Offers" component={Offers}/>
              <Stack.Screen name="Wallet" component={Wallet}/>
              <Stack.Screen name="AddCard" component={AddCard}/>
              {/* <Stack.Screen name="MenuDetailScreen" component={menuDetailScreen}/> */}
              {/* <Stack.Screen name="RestaurantsMapScreen" component={RestaurantsMapScreen}/> */}
          </Stack.Navigator>
          </RestaurantsContext.Provider>
          </LoaderContext.Provider>
      </NavigationContainer>
    </ReduxProvider>

    // </SafeAreaView>
  )
}