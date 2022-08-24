import { View, Text, useWindowDimensions, Image, ScrollView, Animated, StyleSheet, TouchableOpacity, StatusBar} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import MapView, { Callout, Marker } from 'react-native-maps'
import RestaurantItems from '../components/home/RestaurantItems'
import LottieView from 'lottie-react-native'
import { RestaurantInfo, RestaurantImage} from '../components/home/RestaurantItems'
//import { getDistanceFromLatLonInKm } from '../global'
import { location, SCREEN_HEIGHT, SCREEN_WIDTH } from '../global'
import {MaterialIcons} from '@expo/vector-icons';
import { ArrowBack } from '../components/restaurantDetail/About'
import SearchBar from '../components/home/SearchBar'
import BottomSheet from '@gorhom/bottom-sheet'
import Categories from '../components/home/Categories'
import {FlatList} from 'react-native-gesture-handler'
//import { Reward } from './Offers'
import Reward from '../components/Reward'
import { getDistanceFromLatLonInKm } from '../utils'
import RestaurantMarkers from '../components/restaurantComponents/RestaurantMarkers'
import RestaurantsCarousel from '../components/restaurantComponents/RestaurantsCarousel'





export default function RestaurantsMapScreen({route, navigation}) {
  

  const {restaurantData} = route.params

   

  const { width, height } = useWindowDimensions();


  useEffect(()=>{
    location().then((loc)=>{
      setMyLocation(loc)
     
     
    })
    

  },[])
   
   
  return (
    <View style={{
    }}>
      <MapView
         ref={_map}
        initialRegion={{
          latitude: myLocation.coords.latitude,
         longitude: myLocation.coords.longitude,
           
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421

        }}

        style={styles.mapview}
      >
        
            <RestaurantMarkers restaurants={restaurantData} />

            <RestaurantsCarousel restaurants={restaurantData} />
              
             

      </MapView>

     
         <ArrowBack navigation={navigation}/>
          
    </View>
  )
}


 


const styles = StyleSheet.create({

  mapview: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH
  }
     
    

  
})