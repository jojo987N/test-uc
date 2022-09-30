import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Icon, withBadge } from "react-native-elements";
import { useSelector } from "react-redux";
import RestaurantsMapScreen from "../screens/RestaurantsMapScreen";
import { HomeNavigator, OrderNavigator, SearchNavigator } from "./Stacks";
const Tab = createBottomTabNavigator();
export default function BottomTabs() {
  const BadgeIcon = withBadge(useSelector((state) => state.cartReducer).length)(
    Icon
  );
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={OrderNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <BadgeIcon
              type="material-community"
              name="cart"
              size={size}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        initialParams={{ visible: true }}
        component={RestaurantsMapScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="map-marker" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
