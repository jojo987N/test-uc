import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from "react-native-animatable"
import { ANIMATION, APP_CONSTANT, IMAGE, screen } from '../global'
import { colors } from 'react-native-elements'

export default function OnboardingScreen({ navigation }) {
  return (
    <ImageBackground style={styles.container}
      source={require(IMAGE.ONBOARDING)}>
      <Text style={styles.title}>{APP_CONSTANT.TEXT.APP_NAME}</Text>
      <Animatable.View style={styles.footer} animation={ANIMATION.ONBOARDING}>
        <View style={styles.box}>
          <Text style={styles.discoverText}>{APP_CONSTANT.TEXT.DISCOVER_FOODS}</Text>
          <TouchableOpacity style={styles.button} onPress={() => {
            navigation.navigate(screen.SIGN_IN)
          }}>
            <Text style={styles.buttonText}>{APP_CONSTANT.TEXT.CONTINUE}</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  title: {
    color: colors.white,
    fontSize: 50,
    fontWeight: "bold",
    marginHorizontal: 40,
    marginTop: 40,
    flex: 1
  },
  box: {
    backgroundColor: colors.white,
  },
  button: {
    backgroundColor: colors.black,
    marginHorizontal: 10,
    marginBottom: 10
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
    paddingVertical: 18,
    fontSize: 20
  },
  discoverText: {
    fontSize: 25,
    fontFamily: 'Roboto_500Medium',
    marginLeft: 15,
    paddingVertical: 20
  }
})