import { View, Text, StyleSheet, useWindowDimensions, Image, Animated} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
//import {getDriverInfos} from '../firebase'
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

 

export default function OrderRequest({navigation, route}) {
  
 //console.log(positions.gpx.trk.trkseg.trkpt.length)

 //console.log(positions.gpx.wpt[0].lat, positions.gpx.wpt[0].lon)

//  console.log(positions.gpx.trk.trkseg.trkpt.map(p => ({
//    latitude: p.lat, longitude: p.lon})))

  const lat = 48.8714859
  const lng = 2.3371311
  //const {lat, lng} = route.params
  const { width, height } = useWindowDimensions();
  const [driver, setDriver] = useState()
  const [driverName, setDriverName] = useState()
  const [car, setCar] = useState()
  const [driverImage, setDriverImage] = useState()
  //const [driverLat, setDriverLat] = useState()
  const [driverLat, setDriverLat] = useState(parseFloat(positions.gpx.wpt[0].lat))
  //const [driverLng, setDriverLng] = useState()
  const [driverLng, setDriverLng] = useState(parseFloat(positions.gpx.wpt[0].lon))
  const bottomSheet = useRef(null)
  const mapRef = useRef(null)
  const [local, setLocal] = useState(true)
  //const [angle, setAngle] = useState('0deg')
  const [totalMinutes, setTotalMinutes]=useState(51)
  const [timeLeft, setTimeLeft] = useState(Math.round(51/4))
 

   
   

  const updateInterface = async ()=>{
    bottomSheet?.current.collapse()
     
  }
   
  // const updateInterface = async ()=>{
    
  //   setTimeout(()=>{
  //     bottomSheet?.current.collapse()
  //     setDriverImage(require('../assets/images/driver.png'))

  //   }, 15000)
     
  // }

  // updateInterface()
  // .then(()=>{
  //   setLocal(false)
  //   move()
  // })


  const bearing = (φ1, λ1, φ2, λ2) => {
    
    const x = Math.sin((λ2 - λ1)*Math.PI/180) * Math.cos(φ2*Math.PI/180);
   
    //console.log(Math.sin(λ2 - λ1) * Math.cos(φ2))

    const y = Math.cos(φ1*Math.PI/180) * Math.sin(φ2*Math.PI/180) -
      Math.sin(φ1*Math.PI/180) * Math.cos(φ2*Math.PI/180) * Math.cos((λ2 - λ1)*Math.PI/180);
    const θ = Math.atan2(x, y);

  //console.log(x, y, θ)

    return  (θ * 180 / Math.PI + 360) % 360; // in degrees
    //return  (θ * 180 / Math.PI)  // in degrees


  }

  //console.log(bearing(39.099912, -94.581213, 38.627089, -90.200203).toString()+'deg')

//console.log(bearing(39.099912, -94.581213, 38.627089, -90.200203))
 
  //const [angle, setAngle] = useState( '1deg')


   const angleValue = useState(new Animated.Value(1))[0]
   const angle = angleValue.interpolate({
     inputRange: [0, 1],
     outputRange: ['0deg', '360deg']
   })
   const direction = useState(new Animated.ValueXY({
     x:0, y:0
   }))[0]

    
 


    // console.log((-(bearing(positions.gpx.trk.trkseg.trkpt[0].lat, 
    //   positions.gpx.trk.trkseg.trkpt[0].lon, 
    //   positions.gpx.trk.trkseg.trkpt[1].lat, 
    //   positions.gpx.trk.trkseg.trkpt[1].lon)-360)).toString()+'deg')

   const move = ()=>{

    
    
  

    //  positions.forEach((position, index)=>{
      
    //    // setDriverLat(positions[index][0])
    //    // setDriverLat(positions[index][1])
    //  })
     
    let i = 0
    


    // console.log((bearing(positions.gpx.trk.trkseg.trkpt[i].lat, 
    //   positions.gpx.trk.trkseg.trkpt[i].lon, 
    //   positions.gpx.trk.trkseg.trkpt[i+1].lat, 
    //   positions.gpx.trk.trkseg.trkpt[i+1].lon))/360)



      var refreshId = setInterval(()=>{
     
        console.log(i, i+1, positions.gpx.trk.trkseg.trkpt.length)

        // console.log((bearing(positions.gpx.trk.trkseg.trkpt[i].lat, 
        //   positions.gpx.trk.trkseg.trkpt[i].lon, 
        //   positions.gpx.trk.trkseg.trkpt[i+1].lat, 
        //   positions.gpx.trk.trkseg.trkpt[i+1].lon))/360)
      //console.log(positions.gpx.trk.trkseg.trkpt[i].lat, positions.gpx.trk.trkseg.trkpt[i].lon, i)

   // console.log(cartesian(positions.gpx.trk.trkseg.trkpt[i].lat, positions.gpx.trk.trkseg.trkpt[i].lon))
      // console.log(((bearing(positions.gpx.trk.trkseg.trkpt[i].lat, 
      //   positions.gpx.trk.trkseg.trkpt[i].lon, 
      //   positions.gpx.trk.trkseg.trkpt[i+1].lat, 
      //   positions.gpx.trk.trkseg.trkpt[i+1].lon)-360)).toString()+'deg')

      // console.log((bearing(positions.gpx.trk.trkseg.trkpt[i].lat, 
      //   positions.gpx.trk.trkseg.trkpt[i].lon, 
      //   positions.gpx.trk.trkseg.trkpt[i+1].lat, 
      //   positions.gpx.trk.trkseg.trkpt[i+1].lon)).toString()+'deg')


      

          Animated.timing(angleValue, {
            toValue: 0.25+(-360 + (bearing(positions.gpx.trk.trkseg.trkpt[i].lat, 
              positions.gpx.trk.trkseg.trkpt[i].lon, 
              positions.gpx.trk.trkseg.trkpt[i+1].lat, 
              positions.gpx.trk.trkseg.trkpt[i+1].lon)))/360,
            duration: 500,
            useNativeDriver: false
        }).start(()=>{

        
          // console.log((bearing(positions.gpx.trk.trkseg.trkpt[i].lat, 
          //   positions.gpx.trk.trkseg.trkpt[i].lon, 
          //   positions.gpx.trk.trkseg.trkpt[i+1].lat, 
          //   positions.gpx.trk.trkseg.trkpt[i+1].lon))/360)


          // console.log("good")
         // const wait = new Promise(resolve => setTimeout(resolve, 2000));
          //wait.then(()=>{

            setDriverLat(parseFloat(positions.gpx.trk.trkseg.trkpt[i+1].lat))
            setDriverLng(parseFloat(positions.gpx.trk.trkseg.trkpt[i+1].lon))
  

         // })
           
       //   console.log(positions.gpx.trk.trkseg.trkpt[i+1].lat,positions.gpx.trk.trkseg.trkpt[i+1].lon, i)

          

        i+=1
        })

      //   Animated.sequence([
      //     Animated.timing(angleValue, {
      //       toValue: 0,
      //       duration: 1000,
      //       useNativeDriver: false
      //   }),
      //      Animated.timing(opacity, {
      //         toValue: 1,
      //         duration: 1000,
      //         useNativeDriver: false
      //     }),
      // ]).start()


        




    // setAngle(((bearing(positions.gpx.trk.trkseg.trkpt[i].lat, 
    //     positions.gpx.trk.trkseg.trkpt[i].lon, 
    //     positions.gpx.trk.trkseg.trkpt[i+1].lat, 
    //     positions.gpx.trk.trkseg.trkpt[i+1].lon)-360)).toString()+'deg')
      
       
      if(i+1 === positions.gpx.trk.trkseg.trkpt.length-3)
       clearInterval(refreshId)

      //   i++

     }, 1000)


   }



   
   useEffect(()=>{
     

     setTimeout(()=>{
   
      updateInterface()
      .then(()=>{
        setDriverImage(require('../assets/images/driver.png'))
      }).then(()=>{
        // setLocal(false)
      })
      .then(()=>{
        move()
      })
      
    }, 15000)



  //move()
   // getDriverInfos(setDriverName, setCar, setDriverImage, bottomSheet, setDriverLat, setDriverLng, mapRef)
   }, [])
  return (
    <View style={{}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        initialRegion={{latitude: lat,longitude: lng,latitudeDelta: 0.02522,longitudeDelta: 0.01721 }}
       style={{height: height, width: width}} showsUserLocation={true}>


        <Polyline
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







        {/* <MyLocationMarker lat={lat} lng={lng} /> */}

        <CustomMarker subject="user" lat={lat} lng={lng}/>

        { driverLat && driverLng ?<CustomMarker subject="driver" lat={driverLat} lng={driverLng} angle={angle} direction={direction}/>:<></>}

       { driverLat && driverLng && !local ?<DisplayMapviewDirections apikey={apikey} toLat={lat} toLng={lng} fromLat={driverLat} fromLng={driverLng} 
       setTotalMinutes={setTotalMinutes} setTimeLeft={setTimeLeft}/>:<></>}
      </MapView>
      <NavigationMenu navigation={navigation} />

     {/* {!local && <TimeLeft totalMinutes={totalMinutes} timeLeft={timeLeft} setTimeLeft={setTimeLeft}/>} */}
      
 
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

export const CustomMarker = ({subject, lat, lng, angle, direction})=>{

  //console.log(lat, lng)

  return (<Marker.Animated  title="nass" description="nasso"
  coordinate={{latitude: lat,longitude: lng,}}

   
   

  >
     

      {subject === "user"?
      // <OrderCountDown />
    // <View style={styles.timeContainer}>
    // <Text style={styles.time}>10 min</Text>
    // <View style={{height:0, width: 0}}>
      
   //  </View>
    
   // </View>
   <Image source={require('../assets/images/home1.png')} style={styles.homeMarkerImage}
    resizeMode="contain"/>
    :
     <Animated.View  style={
       //direction.getLayout()
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
         
 //origin={{latitude: fromLat,longitude: fromLng,}}

 origin={{latitude: 48.8667514, longitude: 2.337234,}}
 
 destination={{latitude: toLat,longitude: toLng}}
 
 strokeWidth={5} strokeColor="green" 
   
 apikey={apikey}

 onReady={(result)=>{
   
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

// const DisplayMapviewDirections = ({fromLat, fromLng, toLat, toLng, apikey})=>{
  
//    console.log(fromLat, fromLng, toLat, toLng)
//   return(
  
//   <MapViewDirections 
          
//   origin={{latitude: fromLat,longitude: fromLng,}}
  
//   destination={{latitude: toLat,longitude: toLng}}
  
//   strokeWidth={10} strokeColor="green" 
    
//   apikey={apikey}

    
//   />
// )}

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
  
  <View style={styles.menu}>
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
  menu: {position: "absolute", left: 10},
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