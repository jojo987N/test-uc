import { View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native'
import React, {useState, useEffect} from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
//import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import { Divider } from 'react-native-elements'
//import BottomTabs from '../components/home/BottomTabs'
import { restaurants } from '../data'
//import { restaurants } from '../firebase'
import HomeHeader from '../components/home/HomeHeader'

import { getRestaurantsFromFirebase } from '../firebase'

import AsyncStorage from '@react-native-async-storage/async-storage'


 




const YELP_API_KEY = "QwzJKvTWZBiTJI3UPgzCD5Ierogxs8yXg2Ko3EpT9cGVhw3oBuHw_H8FI-l8EKAVE29jLo4J9j8ErkiT55KJ8qrCrwF2ov7-1v-aQNwSf-RwPyivoCoisZp3px9OYnYx"

export default function Home({navigation}) {

  //console.log(restaurants)

   //const [restaurantData, setRestaurantData]= useState(localRestaurants)
  // const [restaurantData, setRestaurantData]= useState([]) //ICIIII

  const [restaurantData, setRestaurantData]= useState(restaurants)
     
  //const restaurantData = []
  //const restaurantData = restaurants
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab]= useState("Delivery")
   



  
  // const getRestaurantsFromFirebase = () => {

  //   //const db = getFirestore(firebaseApp)
  //   //const colRef = collection(db, 'restaurants')

    
  //   const restaurants = []

  //   getDocs(restaurantsColRef)
  //     .then((snapshot) => {
  //       snapshot.docs.forEach((doc) => {

  //         restaurants.push(doc.data())

  //       })
  //     })
  //     .then(()=> setRestaurantData(restaurants))

  // }
  //getRestaurantsFromFirebase().then((restaurants)=> setRestaurantData(restaurants))

  const getRestaurantsFromYelp = ()=>{

    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
  
    const apiOptions = {
      headers:{
        Authorization: `Bearer ${YELP_API_KEY}`,
      }
    }

    return fetch(yelpUrl, apiOptions)
    .then(res => res.json())
    .then(json => {
      //console.log(json.businesses)
     // setRestaurantData(json.businesses.filter((business)=> business.transactions.includes(activeTab.toLowerCase())))
    })
  
  }
  useEffect(()=>{
   // getRestaurantsFromYelp();
  // getRestaurantsFromFirebase()
   // getRestaurantsFromFirebase().then((restaurants)=> setRestaurantData(restaurants))
    
    AsyncStorage.getItem("restaurants").then(value => {
  
      if (!value) {

        getRestaurantsFromFirebase()
        .then((restaurants)=>{
          setRestaurantData(restaurants)

          AsyncStorage.setItem('restaurants', JSON.stringify(restaurants))
        })
      }else{
        AsyncStorage.getItem("restaurants").then(value=>{
          let restaurants = JSON.parse(value)
          setRestaurantData(restaurants)
           
        }) 
      }
    })
  
  },[city, activeTab])
  return (
    <SafeAreaView style={{
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: "#eee",
      flex: 1
    }}>
     <View style={{flex: 1}}>
      <View style={{ backgroundColor: "white", padding: 15 }}>

        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} restaurantData={restaurantData}/>
       <HomeHeader navigation={navigation}/>
        <SearchBar cityHandler={setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
      </ScrollView>
      <Divider width={1}/>
      {/* <BottomTabs /> */}
     </View>
     </SafeAreaView>
  )
}