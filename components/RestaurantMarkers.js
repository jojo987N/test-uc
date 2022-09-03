import { View} from "react-native";
import CustomMarker from "./CustomMarkers";

const RestaurantMarkers = ({restaurants})=>{

    return restaurants.map((restaurant, index)=>(
          <View key={index}>
              <CustomMarker restaurant={restaurant}/>
          </View>
      ))
  }


  export default RestaurantMarkers