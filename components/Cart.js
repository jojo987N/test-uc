import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './restaurantDetail/OrderItem'
import {language, currency}  from '../global'
import Checkout from './Checkout'
import Loader from '../screens/Loader'


const Cart = ({restaurantName, setViewCartButton})=>{

    const items = useSelector((state)=>state.cartReducer).filter(item => item.restaurantName === restaurantName)
     

    const total = items.reduce((prev, curr)=> prev + curr.price, 0)
    
    const [loader, setLoader] = useState(false)

    // if(loader)
    // return <Loader checkout={true}/>

    return (
        
            <View style={styles.modalContainer}>
                <View style={styles.modalCheckoutContainer}>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                    {/* {items.map((item, index) => (
                        <OrderItem key={index} item={item} />
                    ))} */}

                    {Object.entries(items.map(item => item.name)
                        .reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {}))
                        .map(([name, quantity], index) => (
                            <OrderItem key={index} name={name} quantity={quantity} items={items} />
                        ))}
                    <View style={styles.subtotalContainer}>
                        <Text style={styles.subtotalText}>Subtotal</Text>
                        <Text>{total.toLocaleString(language, {
                            style: "currency",
                            currency: currency
                        })}</Text>
                    </View>

                    <Checkout restaurantName={restaurantName} setLoader={setLoader} setViewCartButton={setViewCartButton}/>


                </View>

            </View>
            
        
         

    )
}

const styles = StyleSheet.create({

    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.7)"

    },
    modalCheckoutContainer: {
        backgroundColor: "white",
        padding: 16,
        height: 500,
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    restaurantName:{
        textAlign: "center",
        fontWeight:Platform.OS === "android"?"bold":"600",
        fontSize: 18,
        marginBottom: 10
    },
    subtotalContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
        paddingHorizontal: 20
    },
    subtotalText: {
      textAlign: "left",
      fontWeight:Platform.OS === "android"?"bold":"600",
      fontSize: 15,
      marginBottom: 10

    }

    

})

export default Cart;