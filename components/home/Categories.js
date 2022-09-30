import React, { useContext, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import { getCategories } from "../../firebase";

export default function Categories({ navigation }) {
  const { categories, setCategories } = useContext(CategoriesContext);

  const [categoriesRestaurants, setCategoriesRestaurants] = useState();
  useEffect(() => {
    getCategories().then((categories) => setCategories(categories));
  }, []);
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 10,
      }}
    >
      {categories ? (
        <FlatList
          horizontal
          data={categories.filter((category) => category.type !== "food")}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("SearchResults", {
                    categoryId: item.id,
                  })
                }
                style={{ alignItems: "center", marginRight: 30 }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                  }}
                />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: Platform.OS === "android" ? "bold" : "900",
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <></>
      )}
    </View>
  );
}
