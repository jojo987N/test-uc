import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import {} from "react-native-tab-view";
import { useDispatch, useSelector } from "react-redux";
import { currency, language } from "../../global";

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: Platform.OS === "android" ? "bold" : "600",
  },
});

export default function MenuDetailItems({
  restaurantName,
  foods,
  hideCheckbox,
  marginLeft,
  navigation,
}) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });
  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <ScrollView>
      {foods.map((food, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate("MenuDetailScreen", { title: food.title })
          }
        >
          <View style={styles.menuItemStyle}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{
                  borderColor: "lightgray",
                  borderRadius: 0,
                }}
                fillColor="green"
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, cartItems)}
                style={{ marginRight: Platform.OS === "android" ? 20 : 0 }}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{
              marginHorizontal: 20,
            }}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View
    style={{
      width: 240,
      justifyContent: "space-evenly",
    }}
  >
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>
      {props.food.price.toLocaleString(language, {
        style: "currency",
        currency: currency,
      })}
    </Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);
