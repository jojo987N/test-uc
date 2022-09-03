import { MaterialIcons } from "@expo/vector-icons";
import { View, StyleSheet} from "react-native";
import { Marker } from "react-native-maps"
import { colors, icon } from "../global";

const CustomMarker = ({restaurant}) =>{
    return (
        <Marker title={restaurant.name} description="nasso"
        coordinate={{
          latitude: restaurant.coordinates.latitude,
          longitude: restaurant.coordinates.longitude,
        }}
          
      >
            <View style={styles.marker}>
              <MaterialIcons style={styles.icon} name={icon.RESTAURANT} size={15}  />
            </View>

      </Marker>
    )
}

const styles = StyleSheet.create({
    marker:{
        backgroundColor: colors.white,
        borderRadius: 50,
        position: "absolute",
        borderColor: '#ccc',
         borderWidth: 0.5,
       },
       icon:{
        padding: 10,
        
        
       },
  })
export default CustomMarker