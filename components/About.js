import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements';
import RestaurantDetailComponent from './RestaurantDetailComponent';
import { apikey, APP_CONSTANT } from '../global';

export default function About(props) {
  const {restaurant} = props.route.params
  const {name, image_url, price, review_count, rating, categories, collectTime} = restaurant;
  const [restaurantDetail, setRestaurantDetail] = useState(false)
const description = `⭐${rating} (${review_count}+ ratings) • ${categories[0].title} •${price}• 🎫`
  return (
    <View style={styles.container}>
      <RestaurantName name={name}/>
      <TouchableOpacity onPress={()=>setRestaurantDetail(true)}>
      <RestaurantDescription 
      description={description} 
      collectTime={collectTime}
      />
      <View style={styles.open}>
        <Text style={styles.openText}>{APP_CONSTANT.TEXT.OPEN_UNTIL}</Text>
        </View>
      </TouchableOpacity>
       <RestaurantDetailComponent restaurant={restaurant} 
       visible={restaurantDetail} setVisible={setRestaurantDetail}
       userLocation={props.userLocation} mapRef={props.mapRef} apikey={props.apikey}/>
    </View>
  )
}
export const RestaurantName = (props) => (
<Text style={{
    fontSize: 29,
    fontWeight:Platform.OS === "android"?"bold":"600",
    marginTop: 10, 
}}
>{props.name}</Text>
)
export const RestaurantDescription = (props)=>(
      <View style={styles.description}>
        <Text style={props.style?{...props.style}:styles.textDescription}>{props.description}</Text>
      </View>
)
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  view2: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 10,
  },
  textDescription: {
    fontWeight:Platform.OS === "android"?"bold":"400",
    fontSize: 15.5,
  },
  openText: {
    fontSize: 14.5,
    color: "grey",
  },
  open: {
   marginBottom: 10
  }
})
