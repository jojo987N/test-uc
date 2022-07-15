import { View, Text,Image, TouchableOpacity, FlatList, useWindowDimensions, StyleSheet} from 'react-native'
import React, {useState, useEffect, useRef} from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AntDesign } from '@expo/vector-icons';
import Categories from './Categories';
//import { Reward } from '../../screens/Offers';
import Reward from '../Reward';

export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];

  

export default function RestaurantItems({navigation,...props}) {

    const { width, height } = useWindowDimensions();

    
     
  return (
      <View style={{
         // flexDirection: "row"
          }}>

              <FlatList 
                  ref={props.flatlist}
                  data={props.reward?props.restaurantData.filter(restaurant => restaurant.reward === props.reward):props.ads?props.restaurantData.filter(restaurant => restaurant.ads ):props.restaurantData}
                  keyExtractor={(item, index)=>index}
                  renderItem={({item, index})=> {

                    return (
                           
                        <TouchableOpacity 
                        key={index}
                        activeOpacity={1} 
                        style={{
                           // marginBottom: 30
                        }}
                        onPress={()=>navigation.navigate("RestaurantDetail",
                        {
                          restaurant: item
          
                        })}
                        >
                            <View  
                                style={{
                                    marginTop: 8,
                                    padding: 15,
                                    backgroundColor: "white",
                                    //width: 100
                                   // marginHorizontal: 10
                                   width: props.size?width:width*0.8
                                }}>
                                <View >
                                    <RestaurantImage image={item.image_url} />
                                    {props.reward || item.reward ?<Reward restaurant={item}/>:<></>}
                                    {props.ads && <Affiche ads={item.ads} adsColor={item.adsColor}/>}
                                </View>
                                
                                <RestaurantInfo 
                                    name={item.name.substring(0,20)}
                                    rating={item.rating} 
                                    city={item.location.city}/>
                                  
                            </View>
                        </TouchableOpacity>
                        
                        

                    )
                  }}

                  
                  //scrollEnabled={false}
                  horizontal={props.horizontal}
                  showsHorizontalScrollIndicator={false}
              />
             
          {/* {props.restaurantData.map((restaurant, index) => (

              <TouchableOpacity 
              key={index}
              activeOpacity={1} 
              style={{
                  marginBottom: 30
              }}
              onPress={()=>navigation.navigate("RestaurantDetail",
              {
                restaurant: restaurant

              })}
              >
                  <View  
                      style={{
                          marginTop: 10,
                          padding: 15,
                          backgroundColor: "white",
                          //width: 100
                      }}>
                      <RestaurantImage image={restaurant.image_url} />
                      <RestaurantInfo 
                          name={restaurant.name}
                          rating={restaurant.rating} 
                          city={restaurant.location.city}/>
                  </View>
              </TouchableOpacity>
          ))} */}
           
      </View>
  )
}

export const RestaurantImage= (props)=>{
    const [liked, setLiked] = useState(false)
    return(
    <>
        <Image
            source={{
                uri: props.image
            }}

            style={{ width: "100%", height: 140 }}
           // style={{ width: 100, height: 180 }}


        />

        <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
            {liked?(<AntDesign
                name='heart' 
                size={25}
                color="red"
                
                onPress={()=>setLiked(false)}
                />
            ):(
                <MaterialCommunityIcons 
                name="heart-outline" 
                size={25} 
                color='#fff'
                onPress={()=>setLiked(true)}
                />
             
            )}
        </TouchableOpacity>
    </>

)}

export const RestaurantInfo = (props)=>(

    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        }}>
        <View>
            <Text style={{
                fontSize: 15,
                fontWeight:"bold",
            }}>{props.name} - {props.city}</Text>

            <Text style={{
                fontSize: 13,
                color: "grey"
            }}>30-45 - min</Text>
        </View>
        <View style={{
                backgroundColor: "#eee",
                height: 30,
                width: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
            }}>
            <Text>{props.rating}</Text>
        </View>
    </View>
)

const Affiche = (props)=> {
    return (
      <View style={styles.container}>
         
          <View style={{...styles.container1, backgroundColor: props.adsColor}}>
            <Text style={{...styles.text, color: props.adsColor==="#800000"?"white":"black"}}>{props.ads}</Text>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Browse Offers</Text>
              <AntDesign name="arrowright" size={18} color="black" />
            </View>
          </View>
          
      </View>
    )
  }

  const styles = StyleSheet.create({

    container: {
  
      position: "absolute",
      height: "100%",
      width: "100%"
  
    },

    container1: {
        backgroundColor: "#e0ccff",
       height: "100%",
        //borderWidth: 2,
        padding: 10,
        width: "60%"
    },
     
    button: {
  
      flexDirection: "row",
      paddingVertical: 2,
     backgroundColor: "white",
      marginTop: 5,
      width: 125,
      paddingHorizontal: 6,
      borderRadius: 10,
      justifyContent: "space-between",
      alignItems: "center",

       
  
    },
    buttonText: {
        fontFamily: "Roboto_500Medium"  
    },
    text: {
        fontSize: 25,
        fontFamily: "Roboto_500Medium"
    }
  
  })