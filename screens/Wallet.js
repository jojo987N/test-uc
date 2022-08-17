import { View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native'
import React, { useState } from 'react'
import { ArrowBack } from '../components/restaurantDetail/About'
import { grey1 } from '../global'
import { AntDesign } from '@expo/vector-icons'
import { stripePayment } from '../utils'
import { useStripe } from '@stripe/stripe-react-native';
import AddFunds from './AddFunds'


export default function Wallet({ navigation }) {

    const stripe = useStripe();
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <Modal
                animationType='slide'
                visible={true}
                // transparent={true}
                onRequestClose={() => setModalVisible(false)}>
                {/* {checkoutModalContent()} */}
                <AddFunds />
            </Modal>
            <View style={styles.container}>
                <ArrowBack navigation={navigation} />
                <Text style={styles.title}>Wallet</Text>
                <View style={styles.cash}>
                    <View style={styles.cashContainer}>
                        <View style={styles.cashTexts}>
                            <Text style={styles.cashText}>Cash</Text>
                            <Text style={styles.cashNumber}>$0.00</Text>
                        </View>
                        <AntDesign name="right" size={20} color="grey" style={styles.right} />
                    </View>
                </View>
                <TouchableOpacity style={styles.textContainer} onPress={() => {
                    // navigation.push("AddFunds")
                    // stripePayment(stripe)
                }}>
                    <Text style={styles.text}>Add Funds to your wallet</Text>
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Connect Account</Text>
                </View>
                <View style={styles.textContainer}>

                    <Text style={styles.text}>Vouchers</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Add voucher code </Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    title: {
        fontSize: 35,
        marginLeft: 10,
        marginBottom: 30
    },
    cashContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    cash: {
        backgroundColor: grey1,
        borderRadius: 10,
        marginHorizontal: 10,
        elevation: 5,

    },
    cashTexts: {
        marginLeft: 20,
        paddingVertical: 25,
        paddingBottom: 30
    },
    cashNumber: {
        fontSize: 35,
        fontWeight: "bold",
        //paddingVertical: 30,

    },
    cashText: {

    },
    right: {
        marginRight: 10
    },
    textContainer: {
        borderBottomWidth: 0.5
    },
    text: {
        paddingVertical: 30,
        marginLeft: 10,
        color: "green"
    }
})