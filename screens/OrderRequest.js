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
import { positions } from '../positions'
import { sin } from 'react-native-reanimated'
import OrderCountDown from '../components/OrderCountDown'
import { Polyline } from 'react-native-maps'
import { bearing } from '../utils'
import { updateInterface, move, PolylineDemo} from '../demo'
 

 

export default function OrderRequest({navigation, route}) {
  
 const lat = 48.8714859    //lat lng pour demo
 const lng = 2.3371311

 // const {lat, lng} = route.params
  const { width, height } = useWindowDimensions();
  const [driver, setDriver] = useState()
  const [driverName, setDriverName] = useState()
  const [car, setCar] = useState()
  const [driverImage, setDriverImage] = useState()
  // const [driverLat, setDriverLat] = useState()
  const [driverLat, setDriverLat] = useState(parseFloat(positions.gpx.wpt[0].lat))
  //const [driverLng, setDriverLng] = useState()
  const [driverLng, setDriverLng] = useState(parseFloat(positions.gpx.wpt[0].lon))

  const [regionLat, setRegionLat] = useState(lat)
  const [regionLng, setRegionLng] = useState(lng)
  const bottomSheet = useRef(null)
  const mapRef = useRef(null)
  const [local, setLocal] = useState(true)  // Demo
  const [totalMinutes, setTotalMinutes]=useState(51)    // Demo
  const [timeLeft, setTimeLeft] = useState(Math.round(51/4)) // Demo


   

   const angleValue = useState(new Animated.Value(1))[0]
   const angle = angleValue.interpolate({
     inputRange: [0, 1],
     outputRange: ['0deg', '360deg']
   })
   
   useEffect(()=>{
     

     setTimeout(()=>{    // Demo
   
      updateInterface(bottomSheet)
      .then(()=>{
        setDriverImage(require('../assets/images/driver.png'))
      }).then(()=>{
        // setLocal(false)
      })
      .then(()=>{
        move(angleValue, setDriverLat, setDriverLng, positions)
      })
      
    }, 15000)



   
    // getDriverInfos(setDriverName, setCar, setDriverImage, bottomSheet, setDriverLat, setDriverLng, mapRef)
    // .then(()=>{
    //   if(driverLat  && driverLng){

    //     // setRegionLat(lat + (driverLat - lat)*0.5)
    //     // setRegionLng(lng + (driverLng - lng)*0.5)
    //   }
    // //  console.log(driverLat, driverLng)
    //   console.log(lat + (driverLat - lat)*0.5, lng + (driverLng - lng)*0.5, "fff")
    // })
    
   }, [])
  return (
    <View style={{}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        initialRegion={{latitude: lat,longitude: lng,latitudeDelta: 0.02522,longitudeDelta: 0.01721 }} // demo
       //region={{latitude: regionLat,longitude: regionLng,latitudeDelta: 0.1122,longitudeDelta: 0.0621 }}
       style={{height: height, width: width}} showsUserLocation={true}>

        

        <Polyline // Demo
            coordinates={[{
              latitude: parseFloat(positions.gpx.wpt[0].lat),
              longitude: parseFloat(positions.gpx.wpt[0].lon)
            },...positions.gpx.trk.trkseg.trkpt.map(p => ({
                  latitude: parseFloat(p.lat), 
                  longitude: parseFloat(p.lon)}))
            ]}
                  strokeWidth={5}
                  strokeColor="#86592d"
                 />

      {/* <Marker  title="nass" description="nasso"
        coordinate={{latitude: parseFloat(positions.gpx.trk.trkseg.trkpt[1].lat),
          longitude: parseFloat(positions.gpx.trk.trkseg.trkpt[1].lon),}}
         
        ></Marker> */}
        

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

            {/*<Text style={styles.driverName}>{driverName}</Text>*/}

           <Text style={styles.driverName}>John</Text>

            <View style={styles.driverImageContainer}>
              <Image
                source={driverImage}
                style={styles.driverImage} />
            </View>
            {/*<Text style={styles.car}>{car}</Text>*/}

            <Text style={styles.car}>Ford</Text>



          </View>
             
         </View>):(<></>)}

         {/* <CarIsHeading lat={lat} lng={lng}/> */}
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
    <Image source={require('../assets/images/home1.png')} style={styles.homeMarkerImage}
    resizeMode="contain"/>
    :
     <Animated.View  style={
        
       {
      transform: [
        {
        // rotate: '-20deg'
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
  
  //console.log(fromLat, fromLng, toLat, toLng)
 return(
 
 <MapViewDirections 
         
 origin={{latitude: fromLat,longitude: fromLng,}}

 //origin={{latitude: 48.8667514, longitude: 2.337234,}}
 
 destination={{latitude: toLat,longitude: toLng}}
 
 strokeWidth={5} strokeColor="green" 
   
 apikey={apikey}

 onReady={(result)=>{

  // console.log(result.duration)
   setTotalMinutes(result.duration)
   setTimeLeft(result.duration)
   
 }}

 
  // waypoints={[
  //   {
  //     latitude: "48.8667108",
  //     longitude: "2.3372118",
  //   },
  //   {
  //     latitude: "48.8667108",
  //     longitude: "2.3372118",
  //   }
  // ]}
   
 />
)}


const AnimationCooking = ()=>{
  return (
    <View>
      <LottieView style={{
        height: 206,
        alignSelf: "center",
       // marginBottom: 30,
      }}
      source={require("../assets/animations/cooking.json")}
      autoPlay
      speed={0.5}
      //loop={false}
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
      //marginTop: 200
      top: driverImage?20:height/2
    },
     
    
  })
  return (
    <View style={styles.container}>
      <OrderCountDown totalMinutes={totalMinutes} timeLeft={timeLeft} setTimeLeft={setTimeLeft}/>
    </View>
    // <View style={styles.container}>
    //   <View style={styles.content}>
    //     <Text>Your order is being delivered</Text>
    //     <Image source={require('../assets/images/driver.png')} 
    //     style={{width: 60, height: 60}}/>
    //   </View>
    // </View>
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
   // position: "absolute", 
   // backgroundColor: "grey",
    bottom: 0,
    width: "100%"
},
  carMarkerImage:{
    width: 30,
    height: 30,
     
     
   // padding: 5,
    // transform: [{
    //   rotate: '45deg'
    // }]
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