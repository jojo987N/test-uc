import { View, Text,Image, TouchableOpacity, FlatList, useWindowDimensions, StyleSheet} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Reward from './Reward';
import RestaurantImage from './RestaurantItemImage';
import RestaurantInfo from './RestaurantItemInfo';

export default function RestaurantItems({navigation,...props}) {
   const { width, height } = useWindowDimensions();
 return (
      <View style={{
         }}>
             <FlatList 
                  ref={props.flatlist}
                  data={props.reward?props.restaurantData.filter(restaurant => restaurant.reward === props.reward):props.ads?props.restaurantData.filter(restaurant => restaurant.ads ):props.restaurantData}
                  keyExtractor={(item, index)=>index}
                  renderItem={({item, index})=> {
                   return (
                       <TouchableOpacity 
                        key={index}
                        activeOpacity={1} 
                       onPress={()=>navigation.navigate("RestaurantDetail",
                        {
                          restaurant: item
                       })}
                        >
                            <View  
                                style={{
                                    marginTop: 8,
                                    padding: 15,
                                    backgroundColor: "white",
                                  width: props.size?width:width*0.8
                                }}>
                                <View >
                                    <RestaurantImage image={item.image_url} />
                                    {props.reward || item.reward ?<Reward restaurant={item}/>:<></>}
                                    {props.ads && <Affiche ads={item.ads} adsColor={item.adsColor}/>}
                                </View>
                               <RestaurantInfo
                                    name={item.name.substring(0,20)}
                                    rating={item.rating} 
                                    city={item.location.city}/>
                           </View>
                        </TouchableOpacity>
                   )
                  }}
                 horizontal={props.horizontal}
                  showsHorizontalScrollIndicator={false}
              />
     </View>
  )
}
const Affiche = (props)=> {
    return (
      <View style={styles.container}>
         <View style={{...styles.container1, backgroundColor: props.adsColor}}>
            <Text style={{...styles.text, color: props.adsColor==="#800000"?"white":"black"}}>{props.ads}</Text>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Browse Offers</Text>
              <AntDesign name="arrowright" size={18} color="black" />
            </View>
          </View>
     </View>
    )
  }
 const styles = StyleSheet.create({
   container: {
     position: "absolute",
      height: "100%",
      width: "100%"
   },
   container1: {
        backgroundColor: "#e0ccff",
       height: "100%",
       padding: 10,
        width: "60%"
    },
   button: {
     flexDirection: "row",
      paddingVertical: 2,
     backgroundColor: "white",
      marginTop: 5,
      width: 125,
      paddingHorizontal: 6,
      borderRadius: 10,
      justifyContent: "space-between",
      alignItems: "center",
   },
    buttonText: {
        fontFamily: "Roboto_500Medium"  
    },
    text: {
        fontSize: 25,
        fontFamily: "Roboto_500Medium"
    }
 })