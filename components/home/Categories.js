import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { categories} from '../../data'

 


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
        data={categories.slice(0, 7)}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => {

          return (
            <TouchableOpacity
            onPress={()=>navigation.navigate("SearchResults",{
              name: item.name
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