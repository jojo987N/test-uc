import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
 
import { APP_CONSTANT } from '../global';

export default function OrderCountDown({
  setBottomSheetHeight, setMapdirection, totalMinutes, timeLeft, setTimeLeft, setStatus
}) {


  //const [duration, setDuration] = useState(totalMinutes)
 // const [timeLeft, setTimeLeft] = useState()


  //console.log(totalMinutes, timeLeft)
  // const [timeLeft, setTimeLeft] = useState(duration)
  //const [colorBackground, setColorBackground]= useState("rgb(30,30,30,0.5)")

  const navigation = useNavigation()
  let count = 0

    

  // useEffect(() => {
  //   var refreshId = setInterval(() => {

  //     console.log(timeLeft)
  //     setTimeLeft(timeLeft - 1)

  //     if(timeLeft == 0)
  //     clearInterval(refreshId)
  //   }, 3000)
  // }, [])
  return (




    <CountdownCircleTimer

      isPlaying
      duration={totalMinutes}
      colors={['#F7B801', '#A30000', '#A30000']}
      colorsTime={[4, 3, 1, 0]}


      onUpdate={(remainingTime) => {

     //  console.log(remainingTime)
        if(remainingTime%4 === 0 && timeLeft >=1)
          setTimeLeft(timeLeft-1)
        if(timeLeft < 4)
         setStatus("Preparing your order...")
        if(timeLeft < 1)
         setStatus("Driver is on the way for pickup")

      }}
      onComplete={() => {


        // setBottomSheetHeight("95%")
        // setMapdirection(false)
      }}
      size={100}
      strokeWidth={5}

    // updateInterval={3}

    //  children ={({remainingTime})=>{
    //    let i = 0
    //  return (
    //  <Text>{timeLeft}</Text>
    //  )}}
    //strokeWidth={10}
    //trailColor="#737373"
    >
      {() => <View style={styles.container}>
        <Text style={styles.text}>{timeLeft} </Text>
        <Text style={styles.text1}>min </Text>
      </View>}
    </CountdownCircleTimer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 90,
    width: 90,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black"
  }
})