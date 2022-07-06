import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React, { useState, useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {language, currency}  from '../global'
import { addDoc, serverTimestamp } from 'firebase/firestore'
import { generateUID } from '../global'
import Loading from './Loading'
import { ordersCol } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import Loader from '../screens/Loader'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoaderContext } from '../contexts/LoaderContext'


export default function Checkout({restaurantName, setLoader, setViewCartButton}) {

    const {setLoading} = useContext(LoaderContext)

     
    const {name, phone, address, lat, lng, loc, id} = useSelector((state)=>state.userReducer)
     
    console.log(lat, lng)
     const navigation = useNavigation()

    const items = useSelector((state)=>state.cartReducer).filter(item => item.restaurantName === restaurantName)
     
    const total = items.reduce((prev, curr)=> prev + curr.price, 0)

    // const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();   


    const addOrderToFirebase = () => {

        setViewCartButton(false)
       // setLoading(true)
       setLoader(true)
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
                     lat: lat,
                     lng: lng,
                    phone: phone,
                    address: address,
                    items: items
                },
                status: "pending",
                createdAt: serverTimestamp(),
        }).then(()=> {
            dispatch({ type: 'CLEAR_RESTAURANT', payload: restaurantName })
            setLoader(false)
           // navigation.navigate('OrderRequest', {loc: loc})
           navigation.navigate('OrderRequest',{
               lat: lat,
               lng: lng
           })
        })
    }

  return (
      <>
          <View style={styles.container}>

              <TouchableOpacity

                  style={styles.checkoutButton}

                  onPress={() => {
                    //setLoader(true)
                    setLoading(true)
                    //  addOrderToFirebase()  //ICIII
                    // setModalVisible(false);
                    setTimeout(()=>{          // Dummy
                    navigation.navigate('OrderRequest',{   
                            lat: lat,
                            lng: lng
                        })
                    }, 4000)
                    

                     
                  }}>
                  <Text style={styles.checkoutText}>Checkout</Text>
                  <Text style={styles.total}>{total ? total.toLocaleString(language, { style: "currency", currency: currency }) : ""}</Text>
              </TouchableOpacity>

          </View>
         {/* {loading?(<Loader />):(<></>)}  */}
      </>

  )
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
        fontSize: 20
     },
    total: {
        color: "white",
        position: "absolute",
        right: 15,
        fontSize: 15,
        top: 17
    }
})