import { View, Text, FlatList, SafeAreaView, StatusBar, StyleSheet, Image, TouchableOpacity} from "react-native";
import { useSelector } from "react-redux";
import {language, currency}  from '../global'
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import CartModal from "../components/CartModal";
//import {GestureHandler} from "expo"

//const {Swipeable} = GestureHandler;
 

const CartScreen = () => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");

  const items = useSelector((state)=>state.cartReducer)
  const {address} = useSelector((state)=>state.userReducer)

  return (
    <View>
     {/* <View style={{flex: 1, justifyContent: "center"}}>
       <Image style={{width: 100, height: 100}} source={{uri: "https://img.icons8.com/fluency/344/shopping-cart.png"}} />
       </View>  */}
      <CartModal modalVisible={modalVisible} setModalVisible={setModalVisible} restaurantName={restaurantName}/>

{Object.entries(items.map(item => item.restaurantName).reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {}))
         .map(([restaurantName, quantity], index)=>(
          //  <Swipeable>
               <TouchableOpacity style={styles.container} key={index} 
             onPress={() => {setModalVisible(true); setRestaurantName(restaurantName)}}
             >
              <View style={styles.imageContainer}>
              <Image source={{uri: items.find(item=>item.restaurantName === restaurantName).restaurantImage}} style={styles.image}/>
              </View>
               <View style={styles.name_quantity_price}>
                <Text style={styles.name}>{restaurantName}</Text>
                <Text style={styles.quantity_price}>{quantity} article{quantity>1?"s":""} • {items.reduce((a, v) => v.restaurantName === restaurantName ? a + v.price : a, 0).toLocaleString(language, {style: "currency", currency: currency})}</Text>
                <Text style={styles.address}>deliver to {address.description}</Text>
              </View>
               
              <AntDesign name="right" size={20} color="black" style={styles.icon}/>
            </TouchableOpacity>
          //  </Swipeable>
              
         ))}
    </View>
  );
};


 
const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    alignItems: "center",
     
  },
  imageContainer: {
   padding: 10,
   
  },
  image : {
    width: 60, height: 60,
    overflow: "hidden",
    borderRadius: 50
     
  },
  name_quantity_price: {
   flex: 1,
   borderBottomWidth: 0.5,
   padding: 12
  },
  name: {
   fontWeight: "bold",
   fontSize: 16
  },
  quantity_price: {
    color: "grey"
  },
  address: {
    color: "grey"
  },
  icon: {
    marginRight: 10
  }
})

export default CartScreen;

