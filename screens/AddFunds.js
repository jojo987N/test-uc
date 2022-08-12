import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { ArrowBack } from '../components/restaurantDetail/About'
import { CheckBox, Divider, } from 'react-native-elements'


export default function AddFunds({ navigation }) {

    const [amount1, setAmount1] = useState(25)
    const [amount2, setAmount2] = useState(50)
    const [amount3, setAmount3] = useState(100)
    return (
        <View style={styles.container}>
            <ArrowBack navigation={navigation} />
            <Text style={styles.title}>Add Funds</Text>
            <Divider style={{ marginHorizontal: 10, marginTop: 20, marginBottom: 20 }} />

            <CheckBox
                title={<Text style={{ marginLeft: 10 }}>${25}</Text>}
                checked={true}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                containerStyle={styles.containerStyle} />

            <Divider style={{ marginHorizontal: 20, marginTop: 20, marginBottom: 20 }} />

            <CheckBox
                title={"rtyu"}
                checked={false}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                containerStyle={styles.containerStyle} />

            <Divider style={{ marginHorizontal: 20, marginTop: 20, marginBottom: 20 }} />
            <CheckBox
                title={"dvfhth"}
                checked={false}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                containerStyle={styles.containerStyle} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontSize: 35,
        marginLeft: 20
    },
    containerStyle:
        { backgroundColor: "transparent" }

})