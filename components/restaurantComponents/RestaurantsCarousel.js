import { FlatList, View, StyleSheet} from "react-native"
import { colors, SCREEN_WIDTH } from "../global"
import { RestaurantImage } from "./RestaurantImage"
import RestaurantInfo from "./RestaurantInfo"

const RestaurantsCarousel = ({restaurants, width})=>{
    
      return (
        <FlatList
             horizontal={true}
             data={restaurants}
             keyExtractor={(item, index)=>index}
             renderItem={({item})=>{
             return <View style={styles.itemContainer}>
             
             <View style={{...styles.itemContainer}}>
                <RestaurantImage image={item.image_url} />
                <RestaurantInfo
                            name={item.name}
                            rating={item.rating}
                            city={item.location.city}/>
              </View>
    
             </View>
          
             }}
          />
      )
    }

    const styles = StyleSheet.create({
        itemContainer:{
            borderRadius: 10,
            backgroundColor: colors.white,
            marginHorizontal: 5,
            width: SCREEN_WIDTH*0.9,  
         },
         restaurantImage_restaurantInfo:{
            marginHorizontal: 10,
            paddingTop:15, 
            
           },
    })

    export default RestaurantsCarousel;