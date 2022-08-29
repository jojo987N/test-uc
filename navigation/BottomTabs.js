import React from 'react'
'react-native-vector-icons/FontAwesome5'
import { Icon, withBadge } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeNavigator, SearchNavigator } from './Stacks'
import { OrderNavigator } from './Stacks'
import { useSelector } from 'react-redux'

const Tab = createBottomTabNavigator()
export default function BottomTabs() {
  useSelector((state) => state.cartReducer.selectedItems)
  const BadgeIcon = withBadge(useSelector((state) => state.cartReducer).length)(Icon)
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
            <Icon
              name="home"
              type="material"
              color={color}
              size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="search"
              type="material"
              color={color}
              size={size} />
          )
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
              name='cart'
              size={size}
              color="black"
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}
