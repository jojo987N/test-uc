import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
 
const items = [

  {
    image: { uri: 'https://cdn.pixabay.com/photo/2010/12/13/10/25/canape-2802_960_720.jpg' },
    text: "Sea Food",
  },
  {
    image: { uri: 'https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_960_720.jpg' },
    text: "Fast Food",
  },
  {
    image: { uri: 'https://cdn.pixabay.com/photo/2019/11/19/20/40/wine-4638457_960_720.jpg' },
    text: "Wine Bars",
  },
  {
    image: { uri: 'https://cdn.pixabay.com/photo/2018/07/18/06/36/egg-net-3545650_960_720.jpg' },
    text: "Thai",
  },
  {
    image: { uri: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg' },
    text: "Italian",
  },
  {
    image: { uri: 'https://cdn.pixabay.com/photo/2017/10/15/11/41/sushi-2853382_960_720.jpg' },
    text: "Sushi",
  },
  {
    image: { uri: 'https://cdn.pixabay.com/photo/2017/11/23/13/50/pumpkin-soup-2972858_960_720.jpg' },
    text: "Soup",
  },
];

export default function Categories({navigation}) {
   
  return (
    <View style={{
      marginTop: 5,
      backgroundColor: "#fff",
      paddingVertical: 10,
      paddingLeft: 10,
    }}>

      <FlatList

        horizontal
        data={items}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => {

          return (
            <TouchableOpacity
            onPress={()=>navigation.navigate("SearchNavigator",{
              name: item.name
            })}
            // onPress={()=>navigation.navigate("DrawerNavigator",{
            //   screen: "SearchNavigator", params: {
            //     screen: "SearchResults",
            //     params: {name: item.name}
            //   }
            // })}
            style={{ alignItems: "center", marginRight: 30 }}>
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