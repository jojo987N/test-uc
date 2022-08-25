import { IMAGE } from "../global";

const DriverMarker = ({lat,lng})=>{

    return (<Marker coordinate={{latitude: lat,longitude: lng}}
    >
     <View >
        <Image source={require(IMAGE.CAR)} style={styles.carMarkerImage} resizeMode="contain"/>
      </View>
       
      
        </Marker>)
  }

  export default DriverMarker;
   