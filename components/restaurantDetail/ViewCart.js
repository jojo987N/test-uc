import { View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderItem from './OrderItem';
//import firebase from '../../firebase';
import {addDoc, serverTimestamp} from 'firebase/firestore'
import {ordersCol, userInfos, auth} from '../../firebase';
import { LogBox } from 'react-native';
import "intl"
import "intl/locale-data/jsonp/en"
import LottieView from 'lottie-react-native'
import {language, currency}  from '../../global'
import { location } from '../../global'
import {generateUID} from '../../global'
import Cart from '../Cart';
import CartModal from '../CartModal';
import Loading from '../Loading';
 

LogBox.ignoreLogs(['Setting a timer'])


export default function ViewCart({navigation, route, params}) {

    
   const {name, phone, address} = useSelector((state)=>state.userReducer)

    const {restaurant} = route?route.params:params

    const [modalVisible, setModalVisible] = useState(false);
    const [modalDetailVisible, setModalDetailVisible] = useState(true);
    //const [loading, setLoading] = useState(false)
    const [viewCartButton, setViewCartButton] = useState(true)

   // const {items, restaurantName} = useSelector((state)=>state.cartReducer.selectedItems)

   const items = useSelector((state)=>state.cartReducer).filter(item => item.restaurantName === restaurant.name)
   
   
   // const total = items.map(item => Number(item.price.replace('$', '')))
    // .reduce((prev, curr) => prev + curr, 0);
   
    const total = items.reduce((prev, curr)=> prev + curr.price, 0)

   //const total = 0

    const dispatch = useDispatch();   

    // if(loading)
    // return <Loader />

    return (
        <>
             
                <CartModal modalVisible={modalVisible} setModalVisible={setModalVisible} restaurantName={restaurant.name} 
            setViewCartButton={setViewCartButton}/>
             
            
            {total && viewCartButton ? (

            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                position: 'absolute',
              // bottom: route?80:"auto",
              bottom: 0,
                zIndex: 999,
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    //width: "100%"
                    marginHorizontal: 10
                }}>
                    <TouchableOpacity style={{
                        marginTop: 20,
                        backgroundColor: 'black',
                        flexDirection: 'row',
                       // justifyContent: 'flex-end',
                       justifyContent: 'space-evenly',
                        alignItems: "center",
                        padding: 15,
                       // borderRadius: 30,
                       // width: 300,
                        width: "100%",
                        position: "relative"
                    }}
                        onPress={() => {
                            setModalVisible(true)
                           // setViewCartButton(false)
                        }}
                    >
                        <Text style={{
                            color: "white",
                            fontSize: 20,
                            marginRight: 40
                        }}>View Cart</Text>
                        <Text style={{
                            color: "white",
                            fontSize: 20
                        }}>{ total.toLocaleString(language, {
                            style: "currency",
                            currency: currency
                        })}</Text>
                    </TouchableOpacity>
                </View>
            </View>
                
                
                
                ) : (<></>)}
            {/* {loading ? (<Loader />) : (<></>)} */}
        </>
  )
}

 