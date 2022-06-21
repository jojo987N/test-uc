import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {language, currency} from '../../global'
import { MaterialIcons} from '@expo/vector-icons';

//export default function OrderItem({item}) {
  export default function OrderItem({name, quantity, items}) {
   // const {title, price} = item
  return (
    <View style={styles.container}>
      <View style={styles.title_icon_quantity}>
          <Text style={styles.title}>{name}</Text>
          <MaterialIcons name="close" size={12} color="black" />
          <Text style={styles.quantity}>{quantity}</Text>
      </View>
      <Text style={styles.price}>{items.reduce((a, v) => v.name === name ? a + v.price : a, 0).toLocaleString(language, {style: "currency", currency: currency})}</Text>
      {/* <Text style={styles.price}>{price.toLocaleString(language, {style: "currency", currency: currency})}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
   
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
     
},
title_icon_quantity: {
   //flex: 5,
   //borderWidth: 1,
   flexDirection: "row",
   alignItems: "center"
},
  title: {
    
    fontWeight:Platform.OS === "android"?"bold":"600",
    fontSize: 16,
    paddingRight: 5
    
},
price: {
  //flex: 1,
  opacity: 0.7,
  fontSize: 16,
  //borderWidth: 1
},
quantity: {
 //padding: 2
}

})