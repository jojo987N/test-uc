import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { items } from '../data';

export default function Categories() {
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
            <View style={{ alignItems: "center", marginRight: 30 }}>
              <Image source={item.image} style={{
                width: 40,
                height: 40,
                borderRadius: 20,
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
          )
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}