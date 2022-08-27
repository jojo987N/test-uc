import { StyleSheet, View } from "react-native";
import OrderCountDown from "./OrderCountDown";

const TimeLeft = ({totalMinutes, timeLeft, setTimeLeft})=>{
    return (
      <View style={styles.container}>
        <OrderCountDown totalMinutes={totalMinutes} timeLeft={timeLeft} setTimeLeft={setTimeLeft}/>
      </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      alignSelf: "center",
      top: 20
    },
  })
  export default TimeLeft;
  