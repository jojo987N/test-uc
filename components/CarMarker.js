import { Marker } from "react-native-maps";
import { IMAGE } from "../global";
import {Dimensions} from 'react-native';


const CarMarker = ({ lat, lng }) => {
  return (<Marker coordinate={{ latitude: lat, longitude: lng }}
  >
    <View >
      <Image source={require('../assets/images/car2.png')} style={styles.image} resizeMode="contain" />
    </View>
  </Marker>)
}
const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
})
export default CarMarker;
