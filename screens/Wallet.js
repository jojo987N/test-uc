import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ArrowBack } from '../components/About'
import { APP_CONSTANT, colors, grey1, icon, screen } from '../global'
import { AntDesign } from '@expo/vector-icons'

export default function Wallet({ navigation }) {
    const [cashNumber, setCashNumber] = useState()
    return (
        <View style={styles.container}>
            <ArrowBack navigation={navigation} />
            <Text style={styles.title}>{APP_CONSTANT.TEXT.WALLET}</Text>
            <View style={styles.cash}>
                <View style={styles.cashContainer}>
                    <View style={styles.cashTexts}>
                        <Text style={styles.cashText}>{APP_CONSTANT.TEXT.CASH}</Text>
                        <Text style={styles.cashNumber}>{cashNumber}</Text>
                    </View>
                    <AntDesign name={icon.RIGHT} size={20} color={colors.grey3} style={styles.right} />
                </View>
            </View>
            <TouchableOpacity style={styles.textContainer} onPress={() => navigation.push(screen.ADD_CARD)}>
                <Text style={styles.text}>{APP_CONSTANT.TEXT.ADD_PAYMENT_METHOD}</Text>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{ }</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{APP_CONSTANT.TEXT.VOUCHERS}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{APP_CONSTANT.ADD_VOUCHER_CODE}</Text>
            </View>
        </View>
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
        color: colors.green,
    }
})