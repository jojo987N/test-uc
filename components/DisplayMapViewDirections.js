import MapViewDirections from "react-native-maps-directions";

export const DisplayMapviewDirections = ({fromLat, fromLng, toLat, toLng, apikey})=>{
    return(
    <MapViewDirections 
    origin={{latitude: fromLat,longitude: fromLng,}}
    destination={{latitude: toLat,longitude: toLng}}
    strokeWidth={5} strokeColor="green" 
    apikey={apikey}
    />
   )}
   export default DisplayMapviewDirections;