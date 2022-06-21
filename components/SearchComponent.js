import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchComponent = ({clicked, searchPhrase, setSearchPhrase, setCLicked}) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setCLicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("")
              Keyboard.dismiss();
              setCLicked(false);
          }}/>
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {/* {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setCLicked(false);
            }}
          ></Button>
        </View>
      )} */}
    </View>
  );
};
export default SearchComponent;

// styles
const styles = StyleSheet.create({
  container: {
    //margin: 15,
    //justifyContent: "flex-start",
    alignItems: "center",
    //flexDirection: "row",
   // width: "90%",

  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    //width: "80%",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});







// import { View, Text, TextInput,StyleSheet} from 'react-native'
// import React from 'react'
// import {Feather} from '@expo/vector-icons'

// export default function SearchComponent() {
//   return (
//     <View style={StyleSheet.container}>
//       <View style={styles.search_unclicked}>
//           <Feather
//             name="search"
//             size={20}
//             color="black"
//             />
//            <TextInput 
//                 placeholder='Search'
//                 style={styles.input}
//            />
//       </View>
//     </View>
//   )
// }

// const styles=StyleSheet.create({
//  container:{
//      margin: 15,
//  },
//  search_unclicked: {
//        backgroundColor: "#d9dbda",
//        width: "95%", 
//        flexDirection: "row",
//        alignItems: "center",
//        padding: 10,
//        borderRadius: 15
//     },
//     input: {
//         width: "90%",
//         fontSize: 20,
//         marginLeft: 10
//     },
   

// })













































































