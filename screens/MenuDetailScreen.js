import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import React, { useState } from 'react'
import {language, currency}  from '../global'
import { CheckBox } from 'react-native-elements'
import { Quantity } from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'
import DisplayPreferences from '../components/DisplayPreferences'

 
export default function MenuDetailScreen({route}) {

  const {food, restaurant} = route.params
  const [checkbox1, setCheckbox1] = useState(true)
  const [checkbox2, setCheckbox2] = useState(false)

  return (
    <>
    
    <ScrollView style={styles.container} >
      <Image source={{uri: food.image}} style={styles.image}/> 
      <View style={styles.section1}>
        <Text style={styles.title}>{food.name}</Text>
        <Text style={styles.price}>{food.price.toLocaleString(language, {style: "currency",currency: currency})}</Text>
        <Text style={styles.description}>{food.description}</Text>
      </View>
      <View style={styles.divider1}></View>
      <View style={styles.section2}>
        {/* <Text style={styles.title1}>BIG TASTY</Text>
        <CheckBox 
        title="BEST OF BIG TASTY"
        checked={checkbox1}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={()=>{setCheckbox1(true); setCheckbox2(false)}}
        />
        <CheckBox 
        title="MAXI BEST OF BIG TASTY"
        checked={checkbox2}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={()=>{setCheckbox2(true); setCheckbox1(false)}}
        /> */}
      
      <DisplayPreferences />

      </View>

      <Quantity id={food.id} food={food} restaurant={restaurant} screen="mds"/>

      

      <View style={{height: 100}} />
        
      
      
    </ScrollView>
     <ViewCart params={{restaurant: restaurant}} />
    </>
     
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
     
  },
  image: {
    width: "100%",
    height: 200,
  },
  section1:{
    marginLeft: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10
  },
  price: {
    fontSize: 30,
  },
  description: {
   fontSize: 20,
   color: "grey"
  },
  divider1:{
    borderBottomWidth: 10,
    borderBottomColor: "#d9d9d9",
    marginVertical: 20
  },
  section2: {
    marginLeft: 15,
  },
  title1: {
    fontSize: 20,
    fontWeight: "bold",
     
  }
})