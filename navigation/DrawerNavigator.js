import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabs from './BottomTabs'
import { Icon } from 'react-native-elements';
import DrawerContent from '../components/DrawerContent';
import { SearchNavigator } from './Stacks';
import { APP_CONSTANT, screen } from '../global';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name={screen.BOTTOM_TABS}
        component={BottomTabs}
        options={{
          title: APP_CONSTANT.TEXT.HOME,
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material-community"
              name="home"
              color={focussed ? "black" : ""}
              size={size}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          title: "Search",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material"
              name="search"
              color={focussed ? "black" : ""}
              size={size}
            />
          )
        }}
      />
    </Drawer.Navigator>
  )
}