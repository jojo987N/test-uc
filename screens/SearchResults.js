import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  RestaurantImage,
  RestaurantInfo,
} from "../components/home/RestaurantItems";
import { searchRestaurantsByCategory } from "../firebase";
import Loader from "./Loader";

export default function SearchResults({ route, navigation }) {
  const [restaurantData, setRestaurantData] = useState();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    searchRestaurantsByCategory(route.params.categoryId).then(
      (restaurantsResult) => {
        setRestaurantData(restaurantsResult);
      }
    );
    navigation.setOptions({ title: route.params.name });
  }, []);
  setTimeout(() => {
    setLoader(false);
  }, 3000);
  if (loader) return <Loader />;
  return (
    <View>
      <View>
        <FlatList
          data={restaurantData}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
                style={styles.itemContainer}
              >
                <RestaurantImage image={item.image} />
                <RestaurantInfo
                  name={item.name}
                  rating={item.rating}
                  city={item.city}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "white",
  },
});
