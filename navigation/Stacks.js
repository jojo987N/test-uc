import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import RestaurantDetail from '../screens/RestaurantDetail'
import MenuDetailScreen from '../screens/MenuDetailScreen'
import MyOrdersScreen from '../screens/MyOrdersScreen'
import SearchResults from '../screens/SearchResults'
import SearchScreen from '../screens/SearchScreen'
import OrdersScreen from '../screens/OrdersScreen'
import OrderRequest from '../screens/OrderRequest'
import CartScreen from '../screens/CartScreen'
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen'
 
const  HomeStack = createStackNavigator()

export function HomeNavigator() {
  return (
      <HomeStack.Navigator>
        <HomeStack.Screen 
          name="HomeScreen"
          component={Home}
          options={{headerShown: false}}/>

       

      <HomeStack.Screen 
          name="RestaurantDetail"
          component={RestaurantDetail}
          options={{headerShown: false}}/>

      

      <HomeStack.Screen 
          name="MenuDetailScreen"
          component={MenuDetailScreen}
          options={{headerShown: false}}/>

      

<HomeStack.Screen 
          name="RestaurantsMapScreen"
          component={RestaurantsMapScreen}
          options={{headerShown: false}}/>


<HomeStack.Screen 
          name="SearchResults"
          component={SearchResults}
          options={{headerShown: false}}/>


       


      </HomeStack.Navigator>
      
  )
}

const  OrderStack = createStackNavigator()

export function OrderNavigator() {

  return (
    <OrderStack.Navigator>
       <OrderStack.Screen 
          name="Carts"
          component={CartScreen}
          options={{headerShown: true, headerLeft: null}}/>


       <OrderStack.Screen 
          name="Orders"
          component={OrdersScreen}
          options={{}}/>

    </OrderStack.Navigator>
  )

}

const  SearchStack = createStackNavigator()

export function SearchNavigator() {

  return (
    <SearchStack.Navigator>
       <SearchStack.Screen 
          name="SearchScreen"
          component={SearchScreen}
          options={{headerShown: false}}/>

       {/* <SearchStack.Screen 
          name="SearchResults"
          component={SearchResults}
          options={{}}/> */}

    </SearchStack.Navigator>
  )

}