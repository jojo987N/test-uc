import "intl";
import "intl/locale-data/jsonp/en";
import React, { useState } from "react";
import { LogBox, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { currency, language } from "../../global";
import CartModal from "../CartModal";

LogBox.ignoreLogs(["Setting a timer"]);

export default function ViewCart({ navigation, route, params }) {
  const { name, phone, address } = useSelector((state) => state.userReducer);
  const { restaurant } = route ? route.params : params;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDetailVisible, setModalDetailVisible] = useState(true);
  const [viewCartButton, setViewCartButton] = useState(true);
  const items = useSelector((state) => state.cartReducer).filter(
    (item) => item.restaurantName === restaurant.name
  );
  const total = items.reduce((prev, curr) => prev + curr.price, 0);
  const dispatch = useDispatch();
  return (
    <>
      <CartModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        restaurantName={restaurant.name}
        setViewCartButton={setViewCartButton}
      />
      {total && viewCartButton ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 0,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginHorizontal: 10,
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: 15,
                width: "100%",
                position: "relative",
              }}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  marginRight: 40,
                }}
              >
                View Cart
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                {total.toLocaleString(language, {
                  style: "currency",
                  currency: currency,
                })}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
