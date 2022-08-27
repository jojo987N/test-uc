import { View, StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { ANIMATION } from '../global'
import { colors } from 'react-native-elements'

export default function Loader({ checkout }) {
  return (
    <View style={checkout ? styles.checkoutStyle : styles.container}>
      <LottieView style={styles.lottieView}
        source={require(ANIMATION.LOADER)}
        autoPlay
        speed={2}
        loop
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  checkoutStyle: {
    backgroundColor: colors.black,
    position: 'absolute',
    opacity: 0.6,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  lottieView: {
    height: 200,
    alignSelf: "center",
    width: 200,
  }
})
