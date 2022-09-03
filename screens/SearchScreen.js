import { View, Text, StatusBar, FlatList, 
  ImageBackground, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import React , {useState} from 'react'
import SearchComponent from '../components/SearchComponent'
import { SafeAreaView } from 'react-native-safe-area-context'
import { categories, dataTest, filterData} from '../data'
import List from '../components/List'
import { Menu } from '../components/HomeHeader'
import { screen } from '../global'
import CategoryItem from '../components/CategoryItem'

const SCREEN_WIDTH = Dimensions.get('window').width

export default function SearchScreen({navigation}) {
  const [clicked, setCLicked] = useState(false)
  const [searchPhrase, setSearchPhrase] = useState("")
  const data = categories
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Menu navigation={navigation} />
        <SearchComponent searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} clicked={clicked} setCLicked={setCLicked}
        />
      </View>
         {clicked?(<List searchPhrase={searchPhrase} data={data} setCLicked={setCLicked}/>):<></>}
        <View style={{alignItems: "center", flex: 1}}>
          <FlatList data={categories} keyExtractor={(item, index)=>String(index)}
            renderItem={({item})=>{
              return (
              <CategoryItem item={item} navigation={navigation} />
            )}}
             showsVerticalScrollIndicator={false}
             numColumns={2}
             key={2}/>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
},
  header: {
    flexDirection: "row", 
    alignItems: "center",
    marginHorizontal: 10
  },
})