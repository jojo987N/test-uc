import { Marker } from "react-native-maps";
import { IMAGE } from "../global";

const CarMarker = ({lat,lng})=>{

    return (<Marker coordinate={{latitude: lat,longitude: lng}}
    >
     <View >
        <Image source={require(IMAGE.CAR)} style={styles.image} resizeMode="contain"/>
      </View>
       
      
        </Marker>)
  }

  const styles = StyleSheet.create({
    image:{
        width: 30,
        height: 30,
         
      },
  })

  export default CarMarker;
   