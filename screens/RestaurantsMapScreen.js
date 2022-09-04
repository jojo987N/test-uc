import { View, Text, useWindowDimensions, Image, ScrollView, Animated, StyleSheet, TouchableOpacity, StatusBar} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import MapView, { Callout, Marker } from 'react-native-maps'
import { getLocation, SCREEN_HEIGHT, SCREEN_WIDTH } from '../global'
import  ArrowBack  from '../components/ArrowBack'
import RestaurantMarkers from '../components/RestaurantMarkers'
import RestaurantsCarousel from '../components/RestaurantsCarousel'
import Loading from '../components/Loading'

export default function RestaurantsMapScreen({route, navigation}) {

  const {restaurantData} = route.params
  const [location, setLocation] = useState(null)

  useEffect(()=>{
    getLocation().then((location)=>{
      setLocation(location)
    })
    
  },[])
   
  if(!location)
   return <Loading />
  return (
    <View>
      <MapView
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        style={styles.mapview}>
        
            <RestaurantMarkers restaurants={restaurantData} />
      </MapView>

        <RestaurantsCarousel restaurants={restaurantData} />

         <View style={styles.arrowBack}>
           <ArrowBack navigation={navigation}/>
         </View>
         

          
    </View>
  )
}


 


const styles = StyleSheet.create({

  mapview: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH
  },
  arrowBack: {
    position: "absolute",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
     
    

  
})