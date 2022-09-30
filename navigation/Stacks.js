import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import PreferenceScreen from "../components/PreferenceScreen";
import CartScreen from "../screens/CartScreen";
import Home from "../screens/Home";
import MenuDetailScreen from "../screens/MenuDetailScreen";
import OrderDetails from "../screens/OrderDetails";
import OrdersScreen from "../screens/OrdersScreen";
import RestaurantDetail from "../screens/RestaurantDetail";
import RestaurantSearchResults from "../screens/RestaurantSearchResults";
import RestaurantsMapScreen from "../screens/RestaurantsMapScreen";
import SearchResults from "../screens/SearchResults";
import SearchScreen from "../screens/SearchScreen";

const HomeStack = createStackNavigator();

export function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="RestaurantSearchResults"
        component={RestaurantSearchResults}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="MenuDetailScreen"
        component={MenuDetailScreen}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="PreferenceScreen"
        component={PreferenceScreen}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="RestaurantsMapScreen"
        component={RestaurantsMapScreen}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="SearchResults"
        component={SearchResults}
        options={{ headerShown: true }}
      />
    </HomeStack.Navigator>
  );
}

const OrderStack = createStackNavigator();

export function OrderNavigator() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen
        name="Carts"
        component={CartScreen}
        options={{ headerShown: true, headerLeft: null }}
      />

      <OrderStack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={{ headerShown: false }}
      />

      <OrderStack.Screen name="Orders" component={OrdersScreen} options={{}} />
    </OrderStack.Navigator>
  );
}

const SearchStack = createStackNavigator();

export function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />

      <SearchStack.Screen
        name="SearchResults"
        component={SearchResults}
        options={{}}
      />
    </SearchStack.Navigator>
  );
}
