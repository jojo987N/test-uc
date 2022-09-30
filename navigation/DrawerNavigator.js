import { MaterialIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Icon } from "react-native-elements";
import DrawerContent from "../components/DrawerContent";
import RestaurantsMapScreen from "../screens/RestaurantsMapScreen";
import BottomTabs from "./BottomTabs";
import { SearchNavigator } from "./Stacks";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          title: "Restaurants",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material-community"
              name="home"
              color={focussed ? "black" : ""}
              size={size}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Pickup"
        initialParams={{ visible: false }}
        component={RestaurantsMapScreen}
        options={{
          title: "Pickup",
          drawerIcon: ({ focussed, size }) => (
            <MaterialIcons name="takeout-dining" color={focussed} size={size} />
          ),
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
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
