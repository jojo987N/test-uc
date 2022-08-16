import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { ArrowBack } from '../components/restaurantDetail/About'
import { CheckBox, Divider, } from 'react-native-elements'
import { stripePayment } from '../utils'
import { useStripe } from '@stripe/stripe-react-native';


export default function AddFunds({ navigation }) {

    const [amount1, setAmount1] = useState(25)
    const [amount2, setAmount2] = useState(50)
    const [amount3, setAmount3] = useState(100)
    const stripe = useStripe();
    return (
        <View style={styles.container}>
            {/* <ArrowBack navigation={navigation} /> */}
            <Text style={styles.title}>Add Funds</Text>
            <Divider style={{ marginHorizontal: 10, marginTop: 20, marginBottom: 20 }} />

            <View style={{flex: 1}}>
                <CheckBox
                    title={<Text style={{ marginLeft: 10, fontSize: 25}}>${amount1}</Text>}
                    checked={true}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    containerStyle={styles.containerStyle} />
                <Divider style={{ marginHorizontal: 20, marginTop: 20, marginBottom: 20 }} />
                <CheckBox
                    title={<Text style={{ marginLeft: 10, fontSize: 25}}>${0}</Text>}
                    checked={false}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    containerStyle={styles.containerStyle} />
            

            <Divider style={{ marginHorizontal: 20, marginTop: 20, marginBottom: 20 }} />
            <CheckBox
                title={<Text style={{ marginLeft: 10, fontSize: 25}}>${100}</Text>}
                checked={false}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                containerStyle={styles.containerStyle} />
            </View>
            <View style={{marginHorizontal: 20, flexDirection: "row", marginBottom: 20}}>
                <View style={{  flex: 1 }}>
                    <Text style={{padding: 20, fontSize: 20 }}>CANCEL</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: "black", flex: 1 }}
                 onPress={()=>{
                    stripePayment(stripe, amount1)
                 }}
                >
                    <Text style={{ color: "white", padding: 20, fontSize: 20 }}>CONFIRM</Text>
                </TouchableOpacity>

            </View>
             
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1
    },
    title: {
        fontSize: 35,
        marginLeft: 20
    },
    containerStyle:
        { backgroundColor: "transparent" }

})