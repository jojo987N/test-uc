import { View, Text,Image, TouchableOpacity, FlatList} from 'react-native'
import React, {useState, useEffect} from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AntDesign } from '@expo/vector-icons';

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

     
     
  return (
      <View style={{
         // flexDirection: "row"
          }}>
             
          {props.restaurantData.map((restaurant, index) => (

              <TouchableOpacity 
              key={index}
              activeOpacity={1} 
              style={{
                  marginBottom: 30
              }}
              onPress={()=>navigation.navigate("RestaurantDetail",
              {
                //   name: restaurant.name,
                //   image: restaurant.image_url,
                //   price: restaurant.price,
                //   reviews: restaurant.review_count,
                //   rating: restaurant.rating,
                //   categories: restaurant.categories,
                //  dishes: restaurant.dishes,
                //   collectTime: restaurant.collectTime

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
          ))}
           
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

            style={{ width: "100%", height: 180 }}
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