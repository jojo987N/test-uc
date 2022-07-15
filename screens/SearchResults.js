import { View, Text, FlatList, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'

 import { getRestaurantsFromFirebase } from '../firebase'
import { categories } from '../data'
import {RestaurantImage, RestaurantInfo} from '../components/home/RestaurantItems'
import Loader from './Loader'
import AsyncStorage from '@react-native-async-storage/async-storage'



export default function SearchResults({route, navigation}) {

  const [restaurantData, setRestaurantData]= useState()
  const [loader, setLoader]  = useState(true)

   
  useEffect(()=>{

    AsyncStorage.getItem("restaurants").then(value => {

      let restaurants = JSON.parse(value)
      setRestaurantData(restaurants.filter((restaurant, index)=> restaurant.categories.some(categorie => categorie.title === route.params.name)))
        // getRestaurantsFromFirebase().then((restaurants)=> {
        //   //setLoader(false)
        //   setRestaurantData(restaurants.filter((restaurant, index)=> restaurant.categories.some(categorie => categorie.title === route.params.name)))
          
        // })
      
    })
    
    

    navigation.setOptions({title: route.params.name})

  },[])

  setTimeout(()=>{
  
    setLoader(false)
  }, 4000)

   
    if(loader)
    return <Loader />
  

 
 
 
  return (
    <View>

       
       <View>
         <FlatList
         
         data={restaurantData}
              keyExtractor={(item, index)=>String(index)}
              renderItem={({item})=>{
         
                return(
                   <View style={styles.itemContainer}>
                   <RestaurantImage image={item.image_url} />
                  <RestaurantInfo
                            name={item.name}
                            rating={item.rating}
                            city={item.location.city}/>
                    </View>
                )
         
                }}/>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({

  itemContainer: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "white",
    //width: 100
  }
})