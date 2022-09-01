import { View, StyleSheet, Text } from "react-native";
import LottieView from 'lottie-react-native';


const AnimationCooking = () => {
  return (
    <View>
      <LottieView style={{
        height: 206,
        alignSelf: "center",

      }}
        source={require("../assets/animations/cooking.json")}
        autoPlay
        speed={0.5}

      />
      <Text style={styles.text}>Preparing your order...</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 40,
    fontFamily: "Roboto_500Medium",
    fontSize: 15
  }
})
export default AnimationCooking;
