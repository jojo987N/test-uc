import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { Icon, withBadge} from 'react-native-elements'


import Home from '../screens/Home'

import SignUp from '../screens/SignUp'



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchScreen from '../screens/SearchScreen'
import MyOrdersScreen from '../screens/MyOrdersScreen'
import AccountScreen from '../screens/AccountScreen'
import { HomeNavigator, SearchNavigator } from './Stacks'
import { OrderNavigator } from './Stacks'
import { useSelector } from 'react-redux'
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen'
import { FontAwesome } from '@expo/vector-icons'

const Tab = createBottomTabNavigator() 

export default function BottomTabs() {

 // const {items} = useSelector((state)=>state.cartReducer.selectedItems)

  const BadgeIcon = withBadge(useSelector((state)=>state.cartReducer).length)(Icon)

   

  return (

       <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor: "black",
                 
              }}
           >
         <Tab.Screen 
         name = "Home" 
         component={HomeNavigator} 
         options ={{
           headerShown: false,
           tabBarIcon: ({color, size}) =>(
            <Icon 
            name="home" 
            type="material"
            color={color}
            size={size}/>
           ) 
         }}
         />
          <Tab.Screen 
         name = "Search" 
         component={SearchNavigator} 
         options ={{
           headerShown: false,
           tabBarIcon: ({color, size}) =>(
            <Icon 
            name="search" 
            type="material"
            color={color}
            size={size}/>
           ) 
         }}
         />

         <Tab.Screen 
        // name = "Orders" 
        name = "Cart"
         //component={MyOrdersScreen} 
         component={OrderNavigator} 
         options ={{
           headerShown: false,
           //headerTitleAlign: "center",
           tabBarIcon: ({color, size}) =>(
            // <Icon 
            // name="view-list" 
            // type="material"
            // color={color}
            // size={size}/>

            <BadgeIcon
                type = "material-community"
                name = 'cart'
                size={size}
                color="black"

              />
           ) 
         }}
         />

      {/* <Tab.Screen 
         name = "Map" 
          component={RestaurantsMapScreen} 
         options ={{
          headerShown: false,
           tabBarIcon: ({color, size}) =>(
            <FontAwesome 
            name="map-marker" 
            color={color}
            size={size}/>
           ) 
         }}
         />
          */}

        {/* <Tab.Screen 
         name = "Account" 
          component={AccountScreen} 
        // component={SignUp}
         options ={{
            
           tabBarIcon: ({color, size}) =>(
            <Icon 
            name="person" 
            type="material"
            color={color}
            size={size}/>
           ) 
         }}
         />
          */}
       </Tab.Navigator>
    // <View style={{
    //   flexDirection: "row", 
    //   margin: 10, 
    //   marginHorizontal: 30, 
    //   justifyContent: "space-between"
    //   }}>
    //   <Icon icon="home" text="Home"/>
    //   <Icon icon="search" text="Browse"/>
    //   <Icon icon="shopping-bag" text="Grocery"/>
    //   <Icon icon="receipt" text="Orders"/>
    //   <Icon icon="user" text="Account"/>
      
    // </View>
  )
}

// const Icon = (props) =>(
//   <TouchableOpacity>
//     <View>
//       <FontAwesome5
//       name={props.icon}
//       size={25}
//       style={{
//         marginBottom: 3,
//         alignSelf: "center",
//       }}
//       />
//       <Text>{props.text}</Text>
//     </View>
//   </TouchableOpacity>

// )