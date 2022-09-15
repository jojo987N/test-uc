import { View, Text, StyleSheet, useWindowDimensions, Image, Animated} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import {getDriverInfos} from '../firebase'
import BottomSheet from '@gorhom/bottom-sheet'
import { Icon} from 'react-native-elements'
import LottieView from 'lottie-react-native';
import MapViewDirections from 'react-native-maps-directions';
import { apikey } from '../global'
import ProgressComponent from '../components/ProgressComponent'
import { sin } from 'react-native-reanimated'
import OrderCountDown from '../components/OrderCountDown'
import { Polyline } from 'react-native-maps'
import { bearing } from '../utils'
export default function OrderRequest({navigation, route}) {
 const lat = 48.8714859    
 const lng = 2.3371311
  const { width, height } = useWindowDimensions();
  const [driver, setDriver] = useState()
  const [driverName, setDriverName] = useState()
  const [car, setCar] = useState()
  const [driverImage, setDriverImage] = useState()
  const [driverLat, setDriverLat] = useState()
  const [driverLng, setDriverLng] = useState()
  const [regionLat, setRegionLat] = useState(lat)
  const [regionLng, setRegionLng] = useState(lng)
  const bottomSheet = useRef(null)
  const mapRef = useRef(null)
  const [local, setLocal] = useState(true)  
  const [totalMinutes, setTotalMinutes]=useState(51)    
  const [timeLeft, setTimeLeft] = useState(Math.round(51/4)) 
   const angleValue = useState(new Animated.Value(1))[0]
   const angle = angleValue.interpolate({
     inputRange: [0, 1],
     outputRange: ['0deg', '360deg']
   })
   useEffect(()=>{
   }, [])
  return (
    <View style={{}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        initialRegion={{latitude: lat,longitude: lng,latitudeDelta: 0.02522,longitudeDelta: 0.01721 }} 
       style={{height: height, width: width}} showsUserLocation={true}>
        <CustomMarker subject="user" lat={lat} lng={lng}/>
        { driverLat && driverLng ?<CustomMarker subject="driver" lat={driverLat} lng={driverLng} angle={angle} />:<></>}
       { driverLat && driverLng && !local ?<DisplayMapviewDirections apikey={apikey} toLat={lat} toLng={lng} fromLat={driverLat} fromLng={driverLng} 
       setTotalMinutes={setTotalMinutes} setTimeLeft={setTimeLeft}/>:<></>}
      </MapView>
      <NavigationMenu navigation={navigation} />
     {!local && <TimeLeft totalMinutes={totalMinutes} timeLeft={timeLeft} setTimeLeft={setTimeLeft}/>}
      <BottomSheet ref={bottomSheet} index={1} snapPoints={["12%", "95%"]}
          handleIndicatorStyle={{backgroundColor: "grey", width: 100}}>
     {!driverImage?
     <View>
       <AnimationCooking />
    </View> :<></>}
     {driverImage?( <View style={styles.container}>
          <View style={styles.name_image_car}>
           <Text style={styles.driverName}>John</Text>
            <View style={styles.driverImageContainer}>
              <Image
                source={driverImage}
                style={styles.driverImage} />
            </View>
            <Text style={styles.car}>Ford</Text>
          </View>
         </View>):(<></>)}
    </BottomSheet>
    <TimeLeft totalMinutes={totalMinutes} timeLeft={timeLeft} setTimeLeft={setTimeLeft} height={height} driverImage={driverImage}/>
    </View>
  )
}
export const CustomMarker = ({subject, lat, lng, angle, })=>{
  return (<Marker.Animated  title="nass" description="nasso"
  coordinate={{latitude: lat,longitude: lng}}
  >
    {subject === "user"?
    <Image source={require('../assets/images/goodFood.png')} style={styles.homeMarkerImage}
    resizeMode="contain"/>
    :
     <Animated.View  style={
       {
      transform: [
        {
        rotate: angle,
      },
      ]
    }
    }>
      <Image source={require('../assets/images/car2.png')} 
    style={styles.carMarkerImage}
    resizeMode="contain"/>
    </Animated.View>
     }
      </Marker.Animated>)
}
export const DisplayMapviewDirections = ({fromLat, fromLng, toLat, toLng, apikey, setTotalMinutes, setTimeLeft})=>{
 return(
 <MapViewDirections 
 origin={{latitude: fromLat,longitude: fromLng,}}
 destination={{latitude: toLat,longitude: toLng}}
 strokeWidth={5} strokeColor="green" 
 apikey={apikey}
 onReady={(result)=>{
   setTotalMinutes(result.duration)
   setTimeLeft(result.duration)
 }}
 />
)}
const AnimationCooking = ()=>{
  return (
    <View>
      <LottieView style={{
        height: 206,
        alignSelf: "center",
      }}
      source={require("../assets/animations/cooking.json")}
      autoPlay
      speed={0.5}
      />
      <Text style={{
        textAlign: "center",
        marginTop: 40,
        fontFamily: "Roboto_500Medium",
        fontSize: 15}}>Preparing your order...</Text>
    </View>
  )
}
const NavigationMenu = ({ navigation }) => (
  <View style={styles.menu1}>
   <Icon type="material-community" name='menu' color="black" size={32} 
   onPress={() => navigation.navigate('Home')} />
</View>
)
const TimeLeft = ({totalMinutes, timeLeft, setTimeLeft, height, driverImage})=>{
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      alignSelf: "center",
      top: driverImage?20:height/2
    },
  })
  return (
    <View style={styles.container}>
      <OrderCountDown totalMinutes={totalMinutes} timeLeft={timeLeft} setTimeLeft={setTimeLeft}/>
    </View>
  )
}
const CarIsHeading = ({lat, lng})=>{
  return (
    <View style={{alignItems: "center", marginTop: 40}}>
      <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{latitude: lat,longitude: lng,latitudeDelta: 0.002522,longitudeDelta: 0.001721 }}
         style={{height: 400, width: "90%"}} >
         </MapView>
    </View>
  )
}
const styles = StyleSheet.create({
  menu1: {position: "absolute", left: 10, zIndex: 1},
  container: { 
    bottom: 0,
    width: "100%"
},
  carMarkerImage:{
    width: 30,
    height: 30,
  },
  homeMarkerImage: {
    width: 55,
    height: 50,
  },
  timeContainer: {padding: 10,
    borderRadius: 20, backgroundColor: "white"},
  time :{fontWeight: "bold", fontSize: 15},
  name_image_car: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  driverName:{color: "black", fontSize: 20, fontWeight: "bold"},
  driverImageContainer:{
    backgroundColor: "#e6e6e6",
    padding: 10,
    borderRadius: 50
  },
  driverImage: {width: 60, height: 60},
  car: {color: "black", fontSize: 20, fontWeight: "bold"}
})