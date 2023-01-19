import { View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps' 
import MapViewDirections from 'react-native-maps-directions';
import { CustomMarker, DisplayMapviewDirections } from '../screens/OrderRequest'
import MapboxGL from "@react-native-mapbox-gl/maps";




const DisplayMapview = ({userLocation, mapRef, apikey, restaurant, height}) => {
  return (
    <MapboxGL.MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        initialRegion={{...userLocation,latitudeDelta: 0.18,longitudeDelta: 0.08 }}
       style={{height: height?height:200, width: "100%",
      //  transform: [{
      //    translateY: -200
      //  }]
       
       }} showsUserLocation={true}
       
      // mapType="terrain"
         
       >


<MapboxGL.Camera
          //ref={camera}
          defaultSettings={{
            centerCoordinate: [userLocation.longitude, userLocation.latitude],
            //zoomLevel: 17.4,
            zoomLevel: 11.4,
          }}
        />

<Polyline coordinates={[{
         latitude: userLocation.latitude,
         longitude: userLocation.longitude
       },
        {
          latitude: 48.904634,
          longitude: 2.432682

        }]}
        strokeColor="#000"
        strokeColors={[
          "#7F0000",
          "#00000000",
          "#B24112",
          "#E5845C",
          "#238C23",
          "#7F0000"
        ]}
        strokeWidth={6}
        //geodesic={true}

        />
       
      {/* <DisplayMapviewDirections apikey={apikey} fromLat={userLocation.latitude} fromLng={userLocation.longitude} toLat={restaurant.coordinates.latitude} toLng={restaurant.coordinates.longitude} /> */}
 
       
       </MapboxGL.MapView>
  )
}

export default DisplayMapview