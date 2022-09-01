import { View, Text, useWindowDimensions, Image, ScrollView, Animated, StyleSheet, TouchableOpacity, StatusBar} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import MapView, { Callout, Marker } from 'react-native-maps'
import { location, SCREEN_HEIGHT, SCREEN_WIDTH } from '../global'
import { ArrowBack } from '../components/restaurantDetail/About'
import RestaurantMarkers from '../components/restaurantComponents/RestaurantMarkers'
import RestaurantsCarousel from '../components/restaurantComponents/RestaurantsCarousel'

export default function RestaurantsMapScreen({route, navigation}) {

  const {restaurantData} = route.params
  const [location, setLocation] = useState(null)

  useEffect(()=>{
    location().then((location)=>{
      setLocation(location)
    })
    
  },[])
   
   
  return (
    <View>
      <MapView
         ref={_map}
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