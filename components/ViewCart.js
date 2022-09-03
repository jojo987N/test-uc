import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { LogBox } from 'react-native';
import "intl"
import "intl/locale-data/jsonp/en"
import { language, currency } from '../global'
import CartModal from '../CartModal';
LogBox.ignoreLogs(['Setting a timer'])

export default function ViewCart({ route, params }) {
    const { restaurant } = route ? route.params : params
    const [modalVisible, setModalVisible] = useState(false);
    const [viewCartButton, setViewCartButton] = useState(true)
    const items = useSelector((state) => state.cartReducer).filter(item => item.restaurantName === restaurant.name)
    const total = items.reduce((prev, curr) => prev + curr.price, 0)
    return (
        <>
            <CartModal modalVisible={modalVisible} setModalVisible={setModalVisible} restaurantName={restaurant.name}
                setViewCartButton={setViewCartButton} />
            {total && viewCartButton ? (
                <View style={styles.container}>
                    <View style={styles.container1}>
                        <TouchableOpacity style={styles.viewCart}
                            onPress={() => {
                                setModalVisible(true)
                            }}
                        >
                            <Text style={styles.text}>View Cart</Text>
                            <Text style={styles.total}>{total.toLocaleString(language, {
                                style: "currency",
                                currency: currency
                            })}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (<></>)}
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        zIndex: 999,
    },
    container1: {
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: 10
    },
    text: {
        color: "white",
        fontSize: 20,
        marginRight: 40
    },
    viewCart: {
        marginTop: 20,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: "center",
        padding: 15,
        width: "100%",
        position: "relative"
    },
    total: {
        color: "white",
        fontSize: 20
    }
})
