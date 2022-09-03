import { View, Text, Modal, ImageBackground, StyleSheet, Animated, TouchableOpacity, ScrollView, StatusBar} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import About from '../components/About'
import { Divider } from 'react-native-elements'
import MenuItems from '../components/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet'

export default function RestaurantDetail({route, navigation}) {
  const {restaurant} = route.params
  const {image_url} = restaurant;
  const bottomSheet = useRef(null)
  const mapRef = useRef(null)
  const [userLocation, setUserLocation] = useState(null)
  const [loading, setLoading] = useState(false)
  const value = useState(new Animated.ValueXY({x:0,y:0}))[0]
  const value1 = useState(new Animated.ValueXY({x:0,y:0}))[0]
  const [activeTab, setActiveTab]= useState("Delivery")
  const [categoriesFood, setCategoriesFood] = useState(false)
  const _scrollView = useRef(null)
  const view = useRef(null)
  const foodsRef = useRef(null)
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const value3 = useState(new Animated.Value(0))[0]
  useEffect(()=>{
  }, [])
  return (
    <View style={{flex: 1}}>
      <RestaurantImage image={image_url} navigation={navigation}/>
      <Divider width={5} color="white" style={{}} /> 
       <BottomSheet ref={bottomSheet} index={1} snapPoints={["47%","75%", "90%"]} 
       handleIndicatorStyle={{ backgroundColor: "#d9d9d9", width: 100 }}
      >
        <MenuItems route={route} navigation={navigation} />
      </BottomSheet>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "100%", 
    height: 200,
  },
})