import { View, Text, Image, FlatList, ActivityIndicator, StyleSheet} from "react-native";
//import BasketDishItem from "../../components/BasketDishItem";

//import orders from "../../../assets/data/orders.json";
import {orders} from "../data";
import {restaurants} from "../data";

//import styles from "./styles";
//import { useOrderContext } from "../../contexts/OrderContext";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import DishListItem from "../components/DishListItem";

const order = orders[0];

//const OrderDetailsHeader = ({ order }) => {
    const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>

          <Text style={styles.menuTitle}>Your orders</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  const [order, setOrder] = useState();
  //const { getOrder } = useOrderContext();
  const route = useRoute();
  const id = route.params?.id;

//   useEffect(() => {
//     getOrder(id).then(setOrder);
//   }, []);

//   if (!order) {
//     return <ActivityIndicator size={"large"} color="gray" />;
//   }

//console.log(order)

  return (
    <>
    <OrderDetailsHeader />
    <FlatList  
        data={restaurants[0].dishes}
        renderItem={({item})=><DishListItem  dish={item}/>}/>
    {/* <FlatList  
        data={restaurants[0].dishes}
        renderItem={({item})=><DishListItem  dish={item}/>}/> MENUDETAILSCREEN */}
    </>
    
    // <FlatList
    //   ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
    //   data={order.dishes}
    //   //renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    //   renderItem={({ item }) => <Text>Bonjour</Text>}
    // />
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 180
    },
    title: {
        fontWeight: "bold",
        fontSize: 29,
        marginTop: 10, 
        marginHorizontal: 15,
    },
    subtitle: {
        marginTop: 10,
        marginHorizontal: 15,
    },
    menuTitle: {
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "bold",
        fontSize: 19
    }
})