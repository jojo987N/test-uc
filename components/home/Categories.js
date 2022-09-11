import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { getCategories, getCategoriesRestaurants } from '../../firebase';
// import { categories} from '../../data'

 


export default function Categories({navigation}) {

  const [categories, setCategories] = useState([])
  const [categoriesRestaurants, setCategoriesRestaurants] = useState()
  useEffect(()=> {
    getCategories().then(categories => setCategories(categories))
    // getCategoriesRestaurants().then(categoriesRestaurants => {
    //   setCategoriesRestaurants(categoriesRestaurants)
    // })
  }, [])
   
  return (
    <View style={{
      marginTop: 5,
      backgroundColor: "#fff",
      paddingVertical: 10,
      paddingLeft: 10,
    }}>

      <FlatList

        horizontal
        // data={categories.slice(0, 7)}
        data={categories}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => {

          return (
            <TouchableOpacity
            onPress={()=>navigation.navigate("SearchResults",{
              // name: item.name
              // restaurantId: item.restaurantId
              categoryId: item.id
            })}
            // onPress={()=>navigation.navigate("DrawerNavigator",{
            //   screen: "SearchNavigator", params: {
            //     screen: "SearchResults",
            //     params: {name: item.name}
            //   }
            // })}
            style={{ alignItems: "center", marginRight: 30 }}>
              <Image source={{uri: item.image}} style={{
                width: 40,
                height: 40,
                //resizeMode: 'contain',
                borderRadius: 20,
                // overflow: "hidden"

              }}
              />
              <Text style={{
                fontSize: 13,
                fontWeight: Platform.OS === "android" ? "bold" : "900"
              }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )
        }}
        showsHorizontalScrollIndicator={false}
      />
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image source={item.image} style={{
              width: 40,
              height: 40,
              //resizeMode: 'contain',
              borderRadius: 20,
             // overflow: "hidden"

            }}
            />
            <Text style={{
              fontSize: 13,
              fontWeight: Platform.OS === "android" ? "bold" : "900"
            }}
            >
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView> */}
    </View>


  )
}