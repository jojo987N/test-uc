import { FlatList, View, StyleSheet, Text} from "react-native"
import { colors, SCREEN_WIDTH } from "../global"
import { RestaurantImage } from "./RestaurantItemImage"
import RestaurantInfo from "./RestaurantItemInfo"

const RestaurantsCarousel = ({restaurants})=>{
      return (
         <View style={styles.container}>
            <FlatList
             horizontal={true}
             data={restaurants}
             keyExtractor={(item, index)=>index}
             renderItem={({item})=>{
                console.log(typeof item.image_url)
             return <View style={styles.itemContainer}>
             <View style={styles.itemContainerContent}>
               <Text>Bonjour</Text>
                <RestaurantInfo
                            name={item.name}
                            rating={item.rating}
                            city={item.location.city}/>
              </View>
             </View>
             }}
          />
         </View>
      )
    }
    const styles = StyleSheet.create({
      container: {
         position: "absolute",
         bottom: 70
       },
        itemContainer:{
            borderRadius: 10,
            backgroundColor: colors.white,
            marginHorizontal: 5,
            width: SCREEN_WIDTH*0.9,  
         },
         itemContainerContent:{
            marginHorizontal: 10,
            paddingTop:15, 
           },
    })
    export default RestaurantsCarousel;