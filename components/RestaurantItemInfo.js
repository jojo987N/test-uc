import { useState } from "react";
import { View, StyleSheet, Text} from "react-native"
import { colors } from "../../global";

const RestaurantInfo = (props)=>{
    const [deliveryTime, setDeliveryTime] = useState()
    return (
    <View style={StyleSheet.container}>
        <View>
            <Text style={styles.city}>{props.name} - {props.city}</Text>

            <Text style={styles.minutes}>{deliveryTime}</Text>
        </View>
        <View style={styles.rating}>
            <Text>{props.rating}</Text>
        </View>
    </View>
)}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        },
    city: {
        fontSize: 15,
        fontWeight:"bold",
    },
    minutes: {
        fontSize: 13,
        color: colors.grey
    },
    rating: {
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
    }
})

export default RestaurantInfo;