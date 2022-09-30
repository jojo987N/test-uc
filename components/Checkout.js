import { useNavigation } from "@react-navigation/native";
import { useStripe } from "@stripe/stripe-react-native";
import { addDoc, serverTimestamp } from "firebase/firestore";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LoaderContext } from "../contexts/LoaderContext";
import { ordersCol } from "../firebase";
import { currency, generateUID, language } from "../global";

export default function Checkout({
  restaurantName,
  setLoader,
  setViewCartButton,
  setModalVisible,
}) {
  const { setLoading } = useContext(LoaderContext);

  const { name, phone, address, id } = useSelector(
    (state) => state.userReducer
  );

  const navigation = useNavigation();

  const items = useSelector((state) => state.cartReducer).filter(
    (item) => item.restaurantName === restaurantName
  );

  const total = items.reduce((prev, curr) => prev + curr.price, 0);

  const dispatch = useDispatch();

  const stripe = useStripe();

  const addOrderToFirebase = () => {
    setViewCartButton(false);
    addDoc(ordersCol, {
      orderId: generateUID(),
      restaurantId: items[0].restaurant.restaurantId,
      Restaurant: {
        lat: items[0].restaurant.coordinates.latitude,
        lng: items[0].restaurant.coordinates.longitude,
        address: items[0].restaurant.location.display_address.toString(),
        phone: items[0].restaurant.phone,
        name: items[0].restaurant.name,
      },
      User: {
        id: id,
        name: name,
        lat: address.location.lat,
        lng: address.location.lng,
        phone: phone,
        address: address.description,
        items: items,
      },
      status: "pending",
      createdAt: serverTimestamp(),
    }).then(() => {
      dispatch({ type: "CLEAR_RESTAURANT", payload: restaurantName });
      setLoading(false);
      navigation.navigate("OrderRequest", {
        lat: address.location.lat,
        lng: address.location.lng,
      });
    });
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => {}}>
          <Text style={styles.checkoutText}>Checkout</Text>
          <Text style={styles.total}>
            {total
              ? total.toLocaleString(language, {
                  style: "currency",
                  currency: currency,
                })
              : ""}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  checkoutButton: {
    marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    padding: 13,
    borderRadius: 20,
    width: 300,
    position: "relative",
  },
  checkoutText: {
    color: "white",
    fontSize: 20,
  },
  total: {
    color: "white",
    position: "absolute",
    right: 15,
    fontSize: 15,
    top: 17,
  },
});
