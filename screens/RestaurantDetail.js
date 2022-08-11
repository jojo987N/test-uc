import { View, Text, Modal, ImageBackground, StyleSheet, Animated, TouchableOpacity, ScrollView, StatusBar} from 'react-native'
import React, {useContext, useEffect, useRef, useState} from 'react'
import About from '../components/restaurantDetail/About'
import { Divider } from 'react-native-elements'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet'
import grey1 from '../global'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Icon } from 'react-native-elements';
import { ArrowBack } from '../components/restaurantDetail/About'
import MapView, { Marker, PROVIDER_GOOGLE, } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import Loader from './Loader'
import { CustomMarker, DisplayMapviewDirections } from './OrderRequest'
import { apikey } from '../global'
import DisplayMapview from '../components/DisplayMapview'
import HeaderTabs from '../components/home/HeaderTabs'
import GroupFoodHeader from '../components/GroupFoodHeader'
import RestaurantDetailHeader from '../components/restaurantDetail/RestaurantDetailHeader'
import {LoaderContext} from "../contexts/LoaderContext"




export default function RestaurantDetail({route, navigation}) {

  const {restaurant} = route.params

  const {image_url} = restaurant;

  const bottomSheet = useRef(null)
  const mapRef = useRef(null)

  const [userLocation, setUserLocation] = useState(null)

 // const [loading, setLoading] = useState(false)
 const {loading,setLoading} = useContext(LoaderContext)

  const value = useState(new Animated.ValueXY({x:0,y:0}))[0]

  const value1 = useState(new Animated.ValueXY({x:0,y:0}))[0]

  const [activeTab, setActiveTab]= useState("Delivery")

  const [categoriesFood, setCategoriesFood] = useState(false)

  const _scrollView = useRef(null)
  const view = useRef(null)

  //const foodsRef = useRef(new Array())

  const foodsRef = useRef(null)

  const [scrollEnabled, setScrollEnabled] = useState(true)

  const value3 = useState(new Animated.Value(0))[0]


  const opacity = async (val)=>{

   console.log("sdg")
    Animated.timing(value3, {
      toValue: val,
      duration: 1000,
      useNativeDriver: false
    }).start()
  }
   

  function pickup (){

 
    Animated.timing(value, {
      toValue: {x: 0, y: 205},
      duration: 1000,
      useNativeDriver: true
    }).start()

    Animated.timing(value1, {
      toValue: {x: 0, y: -205},
      duration: 1000,
      useNativeDriver: true
    }).start()
    
  }

  function delivery (){
    Animated.timing(value, {
      toValue: {x: 0, y: 0},
      duration: 1000,
      useNativeDriver: true
    }).start()


    Animated.timing(value1, {
      toValue: {x: 0, y: 0},
      duration: 1000,
      useNativeDriver: true
    }).start()
  }


  const scrollTo = (n)=>{

     // console.log(foodsRef.current[34])
     foodsRef.current[n].measure((fx,fy,w,h,px,py)=>{
      console.log(py, h)

      _scrollView.current?.scrollTo({
        y: py,
        animated: true
      })
    })
  //  foodsRef.current[0]?.measure((fx,fy,w,h,px,py)=>{
  //     console.log(fx)
  //  })
  //  view.current?.measure((fx,fy,w,h,px,py)=>{
    
  //  console.log(py)
  //  })

//    _scrollView.current?.scrollTo({
//    y: 480,
//    animated: true
//  })

  }

   
  

  useEffect(()=>{

  //   mapRef?.current?.getCamera().then((cam)=>{
  //     //cam.zoom += 1;
  //    // cam.altitude = 0
  //    // console.log(cam)
  //   // mapRef?.current?.animateCamera(cam);
  //  // mapRef?.current?.animateToViewingAngle(80)
  //    })

     AsyncStorage.getItem("userData").then(value=>{
    let user = JSON.parse(value)
    //console.log(user)
    setUserLocation({
      latitude: user.address.location.lat,
      longitude: user.address.location.lng
    })
  })

  }, [])


  if(!userLocation)
  return <Loader />

   
   
  
  return (
    <>
    <View style={{flex: 1}}>
       
      {/* {categoriesFood && <Animated.View style={{opacity: value3, backgroundColor:"white", zIndex: 1}}>
           
          <RestaurantDetailHeader foodsRef={foodsRef} navigation={navigation} route={route}/>
       </Animated.View>} */}

       
       <Animated.View style={value.getTranslateTransform()}>
      <RestaurantImage image={image_url} navigation={navigation}/>
      </Animated.View>

      <Divider width={5} color="white" style={{}} /> 

       {/* Mapview  //getLayout() avant */}
       {/* <Animated.View style={value1.getTranslateTransform()}>   
       < DisplayMapview userLocation={userLocation} mapRef={mapRef} apikey={apikey} restaurant={restaurant} />
       </Animated.View> */}

       


       <BottomSheet ref={bottomSheet} index={1} snapPoints={["75%","75%"]} 
       handleIndicatorStyle={{ backgroundColor: "#d9d9d9", width: 100 }}
       onChange={(index)=>{ 
         if(index === 2){
            setCategoriesFood(true)

         opacity(1).then(()=>{
          setScrollEnabled(true)
       })

         } 
         if(index === 0){
        //   opacity(0).then(()=>{
        //     setScrollEnabled(false)
        //  })
         
            
            // setCategoriesFood(false)
          }
         
       }}
       
      >
      
      
       {/* {categoriesFood?<GroupFoodHeader foodsRef={foodsRef}/>:<></>} */}


       {/* <BottomSheetScrollView ref={_scrollView}   > */}

        
      {/* <About route={route} navigation={navigation} userLocation={userLocation}
      mapRef={mapRef} apikey={apikey}/> */}

      {/* <HeaderTabs pickup={pickup} delivery={delivery} activeTab={activeTab} setActiveTab={setActiveTab}/> */}
        {/* <Divider width={1.8} style={{ marginVertical: 20 }} /> */}
        {/* <MenuItems restaurantName={route.params.name} foods={foods}/> */}
        {/* <MenuItems restaurantName={route.params.name} foods={route.params.dishes} navigation={navigation}/> */}
        
        <MenuItems foodsRef={foodsRef} route={route} navigation={navigation} userLocation={userLocation}
          mapRef={mapRef} apikey={apikey} activeTab={activeTab} 
          pickup={pickup} delivery={delivery} setActiveTab={setActiveTab} 
          scrollEnabled={scrollEnabled} setScrollEnabled={setScrollEnabled}
          opacity={opacity} setCategoriesFood={setCategoriesFood}/>



        




          {/* <View style={{height: 80}}  ref={view}
          // onLayout={(layout)=>{
             
          //   //console.log(layout.nativeEvent.layout.x)
          // }}
          >

          </View> */}
        {/* </BottomSheetScrollView> */}
        
      </BottomSheet>
      {/* <LoaderContext.Provider value={{loading, setLoading}}> */}
         <ViewCart navigation={navigation} route={route} />
      {/* </LoaderContext.Provider> */}
     
       
    </View>
    {loading && <Modal
    animationType='slide'
    visible={loading}
    transparent={true}
    onRequestClose={() => setLoading(false)}
    >
     <Loader />
   </Modal>}
    </>
  )
}

 

const RestaurantImage = (props)=>(

<ImageBackground

  style={styles.container}
  source={{uri: props.image }}
>
   <View style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,}}>
    <ArrowBack navigation={props.navigation}/>
   </View>
  


</ImageBackground>


);

const DisplayPolylines = ()=>{

}
 

const styles = StyleSheet.create({

  container: {
    width: "100%", 
    height: 200,
    // transform: [{
    //   translateY: 200
    // }]
  },
  
})