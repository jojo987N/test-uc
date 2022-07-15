import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details }) => {
   
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={()=>navigation.navigate("SearchResults", {name})}
    >
      <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
        {/* <Text style={styles.details}>{details}</Text> */}
      </View>

    </TouchableOpacity>
   
)};

// the filter
const List = ({ searchPhrase, setCLicked, data }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      //return <Item name={item.name} details={item.details} />;
      <Item name={item.name}  />;
    }
    // filter of the name
    if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      //return <Item name={item.name} details={item.details} />;
      return <Item name={item.name}  />;
    }
    // filter of the description
    // if (item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
    //   //return <Item name={item.name} details={item.details} />;
    //   return <Item name={item.name} />;
    // }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setCLicked(false);
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
   // fontStyle: "italic",
  },
});