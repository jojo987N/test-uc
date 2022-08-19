import { View, Text, StyleSheet,Image, ScrollView, TouchableOpacity} from 'react-native'
import React, {useState, useEffect, useRef, createRef} from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';
import {language, currency}  from '../../global'
import {} from 'react-native-tab-view'
import { NavigationContainer } from '@react-navigation/native';
import { restaurants } from '../../data';
import { AntDesign } from '@expo/vector-icons';
import { getProducts } from '../../firebase';
import Loader from '../../screens/Loader';
import QuantityAnimate from '../Quantity';  
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import About from './About';
import HeaderTabs from '../home/HeaderTabs';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { groupFoods } from '../../data';
import { FlatList } from 'react-native-gesture-handler';


  const styles = StyleSheet.create({
    menuItemStyle :{flex: 1,},
    titleStyle: {
      fontSize: 19,
      // fontWeight:Platform.OS === "android"?"bold":"600",
      fontFamily: "Roboto_500Medium"
    },
    groupTitle: {
     fontSize: 25,
     marginLeft: 20,
     fontWeight: "bold",
     marginVertical: 10
    },
    quantity: {alignItems: "center", paddingBottom: 20}
}) 

export default function MenuItems({route, activeTab, marginLeft, navigation, foodsRef,
pickup, delivery, setActiveTab, userLocation, mapRef, apikey, scrollEnabled, setScrollEnabled,
opacity, setCategoriesFood}) {

  const {restaurant} = route.params

  // const [foods, setFoods] = useState([])

  // const [foods, setFoods] = useState(restaurant.productData)
  const [foods, setFoods] = useState([])

   const [loader, setLoader] = useState(false)

 



   //const foodsRef = useRef(null)

  useEffect(()=>{
     setLoader(true)
    AsyncStorage.getItem("productsData").then(value => {

      if (!value) {

        getProducts(restaurant.restaurantId).then((products) => {

          setFoods(products)

          AsyncStorage.setItem('productsData', JSON.stringify(products))
        })
          .then(() => {

            setLoader(false)
          })
      }else{
        AsyncStorage.getItem("productsData").then(value=>{
          let productsData = JSON.parse(value)
          setFoods(productsData)
           
        }).then(() => {
           
          setTimeout(()=>{
  
            setLoader(false)

          }, 1000)

        })



      }
    })
     


  },[activeTab])


  if(loader)
  return <View>
  <About route={route} navigation={navigation} userLocation={userLocation} mapRef={mapRef} apikey={apikey}/>
  <HeaderTabs pickup={pickup} delivery={delivery} activeTab={activeTab} setActiveTab={setActiveTab}/>
  <View style={{marginBottom: 100}}></View>
  <Loader />
  </View>



  return (
    <View style={{flex: 1, }} >
      
      <FlatList
      ref={foodsRef}
      
      data={groupFoods}
      keyExtractor={(item, index)=>index}
      renderItem={({item, index})=> {

        return (
          <View>
            <Text style={styles.groupTitle}>{item.name}</Text> 


            <FlatList 
               data={foods.filter((food)=>food.group === item.id)}

               keyExtractor={(item, index)=>index}

               renderItem={({item, index})=>{
                return (
              
                  <View key={index}>
               <TouchableOpacity style={styles.menuItemStyle} onPress={() => navigation.navigate("MenuDetailScreen", { food: item, restaurant: restaurant })}>
                   <View style={{
                     flexDirection: "row"
                   }}>
                   <View style={{
                     alignItems: "center",
                     marginBottom: 10
                   }}>
                      <FoodImage food={item} marginLeft={marginLeft ? marginLeft:0}
                       />
                       {/* <QuantityAnimate id={item.id} food={item} restaurant={restaurant}/> */}
                   </View>
              
              
              
              
                  <FoodInfo food={item} navigation={navigation} restaurant={restaurant}/>
                   </View>
              
              
              
              
               </TouchableOpacity>
               <View style={styles.quantity}>
                  <QuantityAnimate id={item.id} food={item} restaurant={restaurant}/>
               </View>

               <Divider width={0.5} orientation="vertical" style={{
                 marginHorizontal: 20
              
               }}/>
              
                     
                 </View>
                )
              }}


            />

          </View>
         
        )
      }}

      ListHeaderComponent={()=> <View>
        <About route={route} navigation={navigation} userLocation={userLocation} mapRef={mapRef} apikey={apikey}/>
        <HeaderTabs pickup={pickup} delivery={delivery} activeTab={activeTab} setActiveTab={setActiveTab}/>
        {/* <View style={{ marginBottom: 20}} /> */}
        </View>}
      
      ListFooterComponent={()=><View style={{ height: 250}} />}

      //onScroll={(e)=>console.log(e.nativeEvent.contentOffset.y)}
      onScrollBeginDrag={(e)=>{
        //if(e.nativeEvent.contentOffset.y === 0)
         // setScrollEnabled(true)
        // console.log("dffs")
      }}

       scrollEnabled={scrollEnabled}

       onScrollEndDrag={(e)=>{
         
        if(e.nativeEvent.contentOffset.y === 0){
        setCategoriesFood(false)
        opacity(0).then(()=>{
          // setScrollEnabled(false)
          
       })

      }


        //  setScrollEnabled(false)
         // console.log("dffs")
       }}

       />
{/*       
      <BottomSheetFlatList
      ref={foodsRef}
      
      data={foods}
      keyExtractor={(item, index)=>index}
      renderItem={({item, index})=>{
        return (
      
          <View key={index}>
       <View style={styles.menuItemStyle}>
           <View style={{
             flexDirection: "row"
           }}>
           <View style={{
             alignItems: "center",
             marginBottom: 10
           }}>
              <FoodImage food={item} marginLeft={marginLeft ? marginLeft:0}
               />
               <QuantityAnimate id={item.id} food={item} restaurant={restaurant}/>
           </View>
      
      
      
      
          <FoodInfo food={item} navigation={navigation} restaurant={restaurant}/>
           </View>
      
      
      
      
       </View>
       <Divider width={0.5} orientation="vertical" style={{
         marginHorizontal: 20
      
       }}/>
      
             
         </View>
        )
      }}
      ListHeaderComponent={()=> <View>
        <About route={route} navigation={navigation} userLocation={userLocation} mapRef={mapRef} apikey={apikey}/>
        <HeaderTabs pickup={pickup} delivery={delivery} activeTab={activeTab} setActiveTab={setActiveTab}/>
        </View>}
      
      ListFooterComponent={()=><View style={{ height: 250}} />}

      initialNumToRender={5}
      /> */}
       
    </View>
    // <ScrollView >

    // {foods.map((food, index)=>{

    //   return (
    //   <View key={index}>
    //      <Text ref={(element)=>foodsRef.current.push(element)} style={{padding: 10}}>dgddg</Text>
    //   <View style={styles.menuItemStyle}>
    //       <View style={{
    //         flexDirection: "row"
    //       }}>

    //       <View style={{
    //         alignItems: "center",
    //         marginBottom: 10
    //       }}>
    //          <FoodImage food={food} marginLeft={marginLeft ? marginLeft:0}
    //           />
    //          {/* <Quantity id={food.id} food={food} restaurant={restaurant}/> */}
    //          <QuantityAnimate id={food.id} food={food} restaurant={restaurant}/>
    //       </View>
         
         
         
         
    //      <FoodInfo food={food} navigation={navigation} restaurant={restaurant}/>
    //       </View>
          
           
          
     
    //   </View>
    //   <Divider width={0.5} orientation="vertical" style={{
    //     marginHorizontal: 20
      
    //   }}/>
    // </View>
      
    // )})}
    // </ScrollView> 
  )
}


const FoodInfo = (props)=>{
  
  return (

    <View
      style={{ flex: 3, justifyContent: "center", paddingHorizontal: 10 }}>

      <Text style={styles.titleStyle}>{props.food.name}</Text>
      <Text>{props.food.description}</Text>
      {/* <Text>{props.food.price}</Text> */}
      <Text>{props.food.price.toLocaleString(language, {
        style: "currency",
        currency: currency
      })}</Text>

    </View>
)}

const FoodImage = ({marginLeft,...props})=>(
  <View style={{
    flex: 1,
    justifyContent: "center",
    padding: 10
  }}>
    <Image source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
       // marginLeft: marginLeft
      }}  />
  </View>
)

 

export const Quantity = ({id, food, restaurant, screen}) => {

  //console.log(foodId)
  const dispatch = useDispatch();
   
  const styleMds={
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    alignItems: "center"
  }
  return (

    <View style={screen !=="mds"?{
      flex: 1,
      flexDirection: "row",
      //alignItems: "center",
      justifyContent: "space-around",
       
      //margin: 10,
      //backgroundColor: "red"
    }:styleMds}>
      <TouchableOpacity onPress={() => {

        

        dispatch({
          type: 'ADD_TO_CART',
          payload: {
            ...food,
            restaurantName: restaurant.name,
            restaurantImage: restaurant.image_url,
            restaurant: restaurant
            
          }
        });

      }}>
        <AntDesign name="pluscircle" size={screen === "mds"?40:20} color="black" style={{
          
          padding: 5,
         // position: "absolute",
         // left: 1,
          //zIndex: 1
        }} />
      </TouchableOpacity>
      <View>
        <Text style={{
          padding: 5
        }}>{useSelector(state => state.cartReducer).filter((food)=>food.id === id).length}</Text>
      </View>
      <TouchableOpacity onPress={() => {
         

        dispatch({
          type: 'REMOVE_FROM_CARD',

          payload: id
        });

      }}>
        <AntDesign name="minuscircle" size={screen === "mds"?40:20} color="black" style={{
        padding: 5,
        //position: "absolute"
        }} />
      </TouchableOpacity>

    </View>

  )
}

 