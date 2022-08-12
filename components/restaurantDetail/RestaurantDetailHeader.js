import { View, Text, StyleSheet, StatusBar} from 'react-native'
import React from 'react'
import GroupFoodHeader from '../GroupFoodHeader'
import { ArrowBack } from './About'

export default function RestaurantDetailHeader({foodsRef, navigation, route}) {
  
    const {restaurant} = route.params
    return (
    <View style={styles.container}>
     {/* <View style={styles.head}>
          <ArrowBack navigation={navigation}/>
          <Text style={styles.title}>{restaurant.name}</Text>
     </View> */}
     
      <GroupFoodHeader foodsRef={foodsRef}/>
    </View>
    
  )
}

const styles = StyleSheet.create({

    container: {
        position: "absolute",
        zIndex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    },
    head: {
     flexDirection: "row",
     alignItems: "center"
    },
    title:{
        fontSize: 20,
        fontFamily: "Roboto_500Medium",
    }
})