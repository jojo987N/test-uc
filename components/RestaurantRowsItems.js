import { View, Text, StyleSheet} from "react-native"
import { colors } from "../global"
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

  const styles = StyleSheet.create({
    row: { 
      backgroundColor: colors.white,
      marginTop: 8 
    },
    rowsTitle: {
       fontSize: 25, 
       paddingLeft: 15, 
       paddingTop: 15 
      }
  })
  
  export default RestaurantRowsItems