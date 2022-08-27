import { View } from "react-native"
import RestaurantItems from "./RestaurantItems"

const RestaurantRowsItems = ({themes, restaurantData, navigation}) => {

    return themes.map((theme, index)=>{
        return(
          <View key={index}>
            <View style={styles.row}>
              <Text style={styles.rowsTitle}>{theme}</Text>
              <RestaurantItems restaurantData={restaurantData.filter(restaurant => restaurant.theme === theme)} navigation={navigation} horizontal={true} />
            </View>
          </View>
        
        )
      })
    
  }
  export default RestaurantRowsItems