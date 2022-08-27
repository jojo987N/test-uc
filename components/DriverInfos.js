import { Image, StyleSheet, Text, View } from "react-native"
import { colors } from "../global"

const DriverInfos = ({driverName, driverImage, car})=> {
  return(
    <View style={styles.container}>
    <View style={styles.name_image_car}>
     <Text style={styles.driverName}>{driverName}</Text>
      <View style={styles.driverImageContainer}>
        <Image
          source={driverImage}
          style={styles.driverImage} />
      </View>
      <Text style={styles.carText}>{car}</Text>
    </View>
   </View>
  )
}
const styles = StyleSheet.create({
    container: { 
      bottom: 0,
      width: "100%"
  },
    driverImage: {width: 60, height: 60},
    car: {
      color: colors.black, 
      fontSize: 20, 
      fontWeight: "bold"
    }
  })
export default DriverInfos