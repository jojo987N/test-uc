import { View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { ArrowBack } from '../components/restaurantDetail/About'
import {restaurants} from '../data'
import { RestaurantInfo, RestaurantImage} from '../components/home/RestaurantItems'
import Reward from '../components/Reward'

export default function Offers({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.arrow_title}>
          {/* <AntDesign name='arrowleft' size={24} color="black" /> */}
          <ArrowBack navigation={navigation}/>
          <Text style={styles.title}>Deals</Text>
           
      </View>
      <ScrollView >
              {restaurants.map((restaurant, index)=>

               <View key={index} style={styles.restaurantsContainer}>
                   <RestaurantImage image={restaurant.image_url} />
                   <RestaurantInfo
                                name={restaurant.name}
                                rating={restaurant.rating}
                                city={restaurant.location.city}/>
                      <Reward restaurant={restaurant}/>
               </View>

              )}
          </ScrollView>
    </View>
  )
}

// export const Reward = ({restaurant})=>(
  
//     <View style={styles.reward}>
//         <Text style={styles.rewardText}>{restaurant.reward}</Text>
//     </View>
// )

const styles = StyleSheet.create({
    container:{
    //marginTop: 10,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginHorizontal: 10

    },
    arrow_title: {
      flexDirection: "row" ,
      alignItems: "center",

    },
    title: {
       marginLeft : 20,
        fontSize: 25
    },
    restaurantsContainer: {
        marginVertical: 10
    }, 
    // reward: {
    //     position: "absolute",
    //     backgroundColor: "green",
    //     top: 20,
    //     borderTopRightRadius: 20,
    //     borderBottomRightRadius: 20
         
    // },
    // rewardText: {
    //     paddingVertical : 5,
    //     //fontSize: 20,
    //     color: "white",
    //     paddingHorizontal: 20
    // }

})