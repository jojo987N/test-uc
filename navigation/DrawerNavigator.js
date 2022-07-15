import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import BottomTabs from './BottomTabs'
import { Icon } from 'react-native-elements';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import DrawerContent from '../components/DrawerContent';
import { SearchNavigator } from './Stacks';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator  
    screenOptions={{headerShown: false }}
    drawerContent= {props => <DrawerContent {...props}/>}
    >
        <Drawer.Screen 
            name = "BottomTabs"
            component={BottomTabs}
            options={{
                title: "Home",
                drawerIcon: ({focussed, size}) =>(
                  <Icon 
                    type="material-community"
                    name="home"
                    color={focussed ? "black":""}
                    size={size}
                  />  
                )
            }}
        />
        <Drawer.Screen 
            name = "Search"
            component={SearchNavigator}
            options={{
                title: "Search",
                drawerIcon: ({focussed, size}) =>(
                  <Icon 
                    type="material"
                    name="search"
                    color={focussed ? "black":""}
                    size={size}
                  />  
                )
            }}
        />
        {/* <Drawer.Screen 
            name = "BusinessConsoleScreen"
            component={BusinessConsoleScreen}
            options={{
                title: "Business Console",
                drawerIcon: ({focussed, size}) =>(
                  <Icon 
                    type="material"
                    name="business"
                    color={focussed ? "black":""}
                    size={size}
                  />  
                )
            }}
        /> */}
    </Drawer.Navigator>
  )
}