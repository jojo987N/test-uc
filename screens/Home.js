import { View, SafeAreaView, StatusBar, ScrollView, StyleSheet } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import { Divider } from 'react-native-elements'
import HomeHeader from '../components/HomeHeader'
import { getRestaurantsFromFirebase } from '../firebase/utils'
import Loader from './Loader'
import { APP_CONSTANT, colors } from '../global'
import RestaurantRowsItems from '../components/RestaurantRowsItems'
import { themes } from '../data'

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState()
  const [city, setCity] = useState();
  const [activeTab, setActiveTab] = useState(APP_CONSTANT.TEXT.DELIVERY)
  const flatlist = useRef(null)
  const searchbar = useRef(null)
  useEffect(() => {
    getRestaurantsFromFirebase().then((restaurants) => {
        setRestaurantData(restaurants)
      })
  }, [])
  if (!restaurantData)
    return <Loader />
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} restaurantData={restaurantData} setCity={setCity} searchbar={searchbar} />
        <HomeHeader navigation={navigation} />
        <SearchBar cityHandler={setCity} navigation={navigation} restaurantData={restaurantData} searchbar={searchbar} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantRowsItems themes={themes} restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.HOME,
    flex: 1
  },
  header: {
    backgroundColor: colors.white,
    padding: 15
  },
  row: { 
    backgroundColor: colors.white,
    marginTop: 8 
  },
  rowsTitle: {
     fontSize: 25, 
     paddingLeft: 15, 
     fontFamily: "Roboto_700Bold", 
     paddingTop: 15 
    }
})
