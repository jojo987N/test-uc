import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList} from 'react-native'
import React, { useState } from 'react'
import { groupFoods } from '../data'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { grey1 } from '../global'

export default function GroupFoodHeader({foodsRef}) {

     

    const [focus, setFocus] = useState(new Array(groupFoods.length).fill(0))
     
  return (
      <View style={styles.container}>
          <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={groupFoods}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index}) => {
                  
                  return <View style={{...styles.textContainer, borderBottomWidth: focus[index]}}>

                      <TouchableOpacity onPress={() => {

                           setFocus([...Array(index).fill(0),3,...Array(focus.length-index).fill(0)])
                          
                          foodsRef.current.scrollToIndex({
                              animated: true,
                              index: index
                          })
                      }}>

                          <Text style={styles.text}>{item.name}</Text>
                      </TouchableOpacity>

                  </View>
              }}

          />
      </View>

    //   <ScrollView horizontal style={{height: 10, borderWidth: 1}}>
    //        <View style={styles.container}>
    //       {groupFoods.map((groupFood, index )=>{
    //           return (
    //             //   <View>
    //                   <Text   key={index}>{groupFood}</Text>
    //             //   </View>
    //           )
    //       })}
    //   </View>
    //   </ScrollView>
     
//     <View style={styles.container}>
//     <TouchableOpacity onPress={()=>{
       
//       // scrollTo(4)
//       foodsRef.current.scrollToIndex({
//         animated: true,
//         index: 4
//       })
//     }}>
//       <Text>Bonjour</Text>
//     </TouchableOpacity>
//   </View> 
  )
}

const styles = StyleSheet.create({
    container: {
     // borderWidth: 1
     //flex: 1
     height: 60,
     borderBottomWidth: 3,
     borderBottomColor: grey1
     
    },
    textContainer: {
        marginHorizontal: 20,
        justifyContent: "center"
    },
    text: {
       //fontWeight: "bold",
        //color: "#737373",
        fontFamily: "Roboto_500Medium"
        

         
    }
})