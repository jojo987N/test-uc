import { Image } from "react-native"
import { Marker } from "react-native-maps"
import { IMAGE } from "../global"

export const UserMarker = ({ lat, lng }) => {

  return (
  <Marker
    coordinate={{ latitude: lat, longitude: lng }}
  >
    <Image source={require(IMAGE.USER)} style={styles.image} resizeMode="contain" />

  </Marker>)
}

const styles = StyleSheet.create({
  image: {
    width: 55,
    height: 50,
  },


})
export default UserMarker;
