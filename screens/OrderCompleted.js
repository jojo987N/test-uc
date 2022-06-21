import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import MenuItems from '../components/restaurantDetail/MenuItems';

import {collection, getFirestore, orderBy, limit, onSnapshot, query} from 'firebase/firestore'
import firebaseApp from '../firebase';
 

export default function OrderCompleted() {

    const [lastOrder, setLastOrder] = useState({
      items: [
        {
          title: "titleTEST",
          description: "description1",
          price: "$13.50",
          image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
        },]
    })

    // const {items, restaurantName} = useSelector((state)=>state.cartReducer.selectedItems)
    // const total = items.map(item => Number(item.price.replace('$', '')))
    // .reduce((prev, curr) => prev + curr, 0);

    // const totalUsd = total.toLocaleString('en', {
    //     style: "currency",
    //     currency: "USD"
    // });

  useEffect(()=>{
    // const db = getFirestore(firebaseApp);
    // const ordersCol = collection(db, 'orders');
    // const q = query(ordersCol, orderBy("createdAt", "desc"), limit(1))
    
    // onSnapshot(q, (snapshot) => {

    //   snapshot.docs.map((doc) =>{

    //     //console.log(doc.data())
    //     setLastOrder(doc.data())
    //   })
    // })
  },[])
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: "white",

    }}>
       <LottieView style={{
         height: 100,
         alignSelf: "center",
         marginBottom: 30,
       }}
       source={require("../assets/animations/check-mark.json")}
       autoPlay
       speed={0.5}
       loop={false}
       />
        {/* <Text>Your order at {restaurantName} has placed for {totalUsd}</Text> */}
      
       {/* <MenuItems foods={lastOrder.items} hideCheckbox={true}/> */}
        <LottieView style={{
         height: 206,
         alignSelf: "center",
        // marginBottom: 30,
       }}
       source={require("../assets/animations/cooking.json")}
       autoPlay
       speed={0.5}
       //loop={false}
       />
    </SafeAreaView>
  )
}