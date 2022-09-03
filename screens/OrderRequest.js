import { View, StyleSheet, useWindowDimensions} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { getDriverInfos } from '../firebase/utils'
import { apikey, colors, SCREEN_HEIGHT, SCREEN_WIDTH } from '../global'
import CarMarker from '../components/CarMarker'
import UserMarker from '../components/UserMarker'
import DriverInfos from '../components/DriverInfos'
import TimeLeft from '../components/TimeLeft'

export default function OrderRequest({ navigation, route }) {
  const { lat, lng } = route.params
  const [driverName, setDriverName] = useState()
  const [car, setCar] = useState()
  const [driverImage, setDriverImage] = useState()
  const [driverLat, setDriverLat] = useState()
  const [driverLng, setDriverLng] = useState()
  const bottomSheet = useRef(null)
  const mapRef = useRef(null)
  const [timeLeft, setTimeLeft] = useState()

  useEffect(() => {
    getDriverInfos(setDriverName, setCar, setDriverImage, bottomSheet, setDriverLat, setDriverLng, mapRef)
  }, [])
  return (
    <View style={{}}>
      <MapView provider={PROVIDER_GOOGLE} ref={mapRef} region={{ latitude: lat, longitude: lng, latitudeDelta: 0.1122, longitudeDelta: 0.0621 }} style={styles.mapview} showsUserLocation={true}>
        <UserMarker lat={lat} lng={lng} />
        {driverLat && driverLng ? <CarMarker lat={lat} lng={lng} /> : <></>}
        {driverLat && driverLng ? <DisplayMapviewDirections apikey={apikey} toLat={lat} toLng={lng} fromLat={driverLat} fromLng={driverLng} /> : <></>}
      </MapView>
      <NavigationMenu navigation={navigation} />
      <BottomSheet ref={bottomSheet} index={1} snapPoints={["12%", "95%"]} handleIndicatorStyle={styles.handleIndicatorStyle}>
        {!driverImage ? <AnimationCooking /> : <></>}
        {driverImage ? (<DriverInfos driverName={driverName} driverImage={driverImage} car={car}/>) : (<></>)}
      </BottomSheet>
      <TimeLeft totalMinutes={totalMinutes} timeLeft={timeLeft} setTimeLeft={setTimeLeft} height={height} driverImage={driverImage} />
    </View>
  )
}
const styles = StyleSheet.create({
  mapview: { 
    height: SCREEN_HEIGHT, 
    width: SCREEN_WIDTH 
  },
  handleIndicatorStyle: {
    backgroundColor: colors.handleIndicatorStyle,
    width: 100
  }
})