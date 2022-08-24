import { View, Text, useWindowDimensions, Image, ScrollView, Animated, StyleSheet, TouchableOpacity, StatusBar} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import MapView, { Callout, Marker } from 'react-native-maps'
import RestaurantItems from '../components/home/RestaurantItems'
import LottieView from 'lottie-react-native'
import { RestaurantInfo, RestaurantImage} from '../components/home/RestaurantItems'
//import { getDistanceFromLatLonInKm } from '../global'
import { location } from '../global'
import {MaterialIcons} from '@expo/vector-icons';
import { ArrowBack } from '../components/restaurantDetail/About'
import SearchBar from '../components/home/SearchBar'
import BottomSheet from '@gorhom/bottom-sheet'
import Categories from '../components/home/Categories'
import {FlatList} from 'react-native-gesture-handler'
//import { Reward } from './Offers'
import Reward from '../components/Reward'
import { getDistanceFromLatLonInKm } from '../utils'





export default function RestaurantsMapScreen({route, navigation}) {
  

  const {restaurantData} = route.params

   

  const { width, height } = useWindowDimensions();


  const _map = useRef(null)

  const restaurantsRef = useRef(null)

  const [visible, setVisible] = useState(true)

  const [scrollEnabled, setScrollEnabled] = useState(false)

  const [offset, setOffset] = useState(0)
  const [direction, setDirection] = useState("")
  
   
 
  
 
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

        style={{
          height: height,
          width: width
        }}
      >
        
            <RestaurantMarkers restaurants={restaurantData} />
              
             

      </MapView>

      <View style={{...styles.header, width: width,}}>
         <ArrowBack navigation={navigation}/>
         <View style={styles.searchbar}>
           <SearchBar />
         </View>
      </View>
       

     

     
     {!visible && <RestaurantsView restaurantsRef={restaurantsRef} restaurantDataSort={restaurantDataSort} setFocusFunction={setFocusFunction}
     focus={focus} _map={_map} width={width} horizontal={true}/>}
                 
    </View>
  )
}


 


const styles = StyleSheet.create({

  header: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 10,
    zIndex: 1
},
   searchbar: {flex: 1, marginHorizontal: 10},

   categories: {
    marginBottom: 10
   },

   bubble: {
      flexDirection: "row",
      alignSelf: "flex-start",
      backgroundColor: "#fff",
      borderRadius: 6,
      borderColor: '#ccc',
      borderWidth: 0.5,
      padding: 15,
   },
   bubbleName: {
     fontSize: 16,
     marginBottom: 5,

   },
  activityIndicator: {
    backgroundColor: 'black',
    position: 'absolute',
    opacity: 0.6,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    
   },
   
    restaurant_marker_shadow:{
    backgroundColor: "grey", 
    top:0,left:0,
    width:43, height: 43
    },
    

  flatlist: {
    position: "absolute",
    //backgroundColor: "red", 
    bottom: 70
  },
   
  restaurantsContainer: 
    {
      //backgroundColor: "red",
      
      flexDirection: "row"
    },
     
    

  
})