import { View, Text, FlatList, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'

 import { getRestaurantsFromFirebase } from '../firebase/utils'
import {RestaurantImage, RestaurantInfo} from '../components/RestaurantItems'
import Loader from './Loader'



export default function SearchResults({route, navigation}) {

  const [restaurantData, setRestaurantData]= useState()
  const [loader, setLoader]  = useState(true)

   
  useEffect(()=>{

     getRestaurantsFromFirebase().then((restaurants)=> {
        setRestaurantData(restaurants.filter((restaurant)=> restaurant.categories.some(categorie => categorie.title === route.params.name)))
          
        })

    navigation.setOptions({title: route.params.name})

  },[])

   
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
    
  }
})