import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import HomeHeader from "../components/home/HomeHeader";
import RestaurantItems from "../components/home/RestaurantItems";

export default function RestaurantSearchResults({ route, navigation }) {
  const { restaurantData } = route.params;
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HomeHeader navigation={navigation} />
      </View>
      <RestaurantItems
        restaurantData={restaurantData}
        navigation={navigation}
        size="100%"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
});
