import { View, Text, StyleSheet, StatusBar} from 'react-native'
import React from 'react'
import RestaurantItems from '../components/RestaurantItems'
import HeaderTabs from '../components/HeaderTabs'
import HomeHeader from '../components/HomeHeader'
import SearchBar from '../components/SearchBar'
import { colors } from '../global'

export default function RestaurantSearchResults({route, navigation}) {

    const {restaurantData} = route.params
  return (
      <View style={styles.container}>
          <View style={styles.header}>

              <HomeHeader navigation={navigation} />
              
          </View>
          <RestaurantItems restaurantData={restaurantData} navigation={navigation} size="100%" />
      </View>
    
  )
}

const styles = StyleSheet.create({
    header: { 
        backgroundColor: colors.white, 
        padding: 15 
    },
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
})