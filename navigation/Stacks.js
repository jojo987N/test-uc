import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import RestaurantDetail from '../screens/RestaurantDetail'
import MenuDetailScreen from '../screens/MenuDetailScreen'
import OrderDetails from '../screens/OrderDetails'
import PreferenceScreen from '../components/PreferenceScreen'
import SearchResults from '../screens/SearchResults'
import SearchScreen from '../screens/SearchScreen'
import OrdersScreen from '../screens/OrdersScreen'
import CartScreen from '../screens/CartScreen'
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen'
import RestaurantSearchResults from '../screens/RestaurantSearchResults'
import { screen } from '../global'

const HomeStack = createStackNavigator()
export function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={screen.HOME}
        component={Home}
        options={{ headerShown: false }} />
      <HomeStack.Screen
        name={screen.RESTAURANT_SEARCH_RESULTS}
        component={RestaurantSearchResults}
        options={{ headerShown: false }} />
      <HomeStack.Screen
        name={screen.RESTAURANT_DETAIL}
        component={RestaurantDetail}
        options={{ headerShown: false }} />
      <HomeStack.Screen
        name={screen.MENU_DETAIL}
        component={MenuDetailScreen}
        options={{ headerShown: false }} />
      <HomeStack.Screen
        name={screen.PREFERENCE}
        component={PreferenceScreen}
        options={{ headerShown: false }} />
      <HomeStack.Screen
        name={screen.RESTAURANTS_MAP}
        component={RestaurantsMapScreen}
        options={{ headerShown: false }} />
    </HomeStack.Navigator>
  )
}
const OrderStack = createStackNavigator()
export function OrderNavigator() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen
        name={screen.CARTS}
        component={CartScreen}
        options={{ headerShown: true, headerLeft: null }} />
      <OrderStack.Screen
        name={screen.ORDER_DETAILS}
        component={OrderDetails}
        options={{ headerShown: false }} />
      <OrderStack.Screen
        name={screen.ORDERS}
        component={OrdersScreen} />
    </OrderStack.Navigator>
  )
}
const SearchStack = createStackNavigator()
export function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name={screen.SEARCH}
        component={SearchScreen}
        options={{ headerShown: false }} />
      <SearchStack.Screen
        name={screen.SEARCH_RESULTS}
        component={SearchResults}
        options={{}} />
    </SearchStack.Navigator>
  )
}