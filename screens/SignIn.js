import { View, Text, SafeAreaView, StatusBar, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { auth, userInfos } from '../firebase/utils'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { LinearGradient } from 'expo-linear-gradient'
import * as Animatable from "react-native-animatable"
import { ANIMATION, APP_CONSTANT, colors, fonts, icon, screen } from '../global'

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginState, setLoginState] = useState(false)

  const SignInUser = async () => {
    console.log("dff")
    setLoginState(true)
    try {
      const re = await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
      setLoginState(false)
    }
  }
  useEffect(() => {
    const checkAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate(screen.DRAWER_NAVIGATOR)
      }
    })
    return checkAuth
  })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{APP_CONSTANT.TEXT.WELCOME}</Text>
      </View>
      <Animatable.View style={styles.footer} animation={ANIMATION.AUTHSCREEN}>
        <View style={styles.textInputContainer}>
          <MaterialIcons name={icon.USER} size={20} color={colors.inputIcon} style={styles.inputIcon} />
          <TextInput
            placeholder='Email'
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.textInput} />
        </View>
        <View style={styles.textInputContainer}>
          <MaterialIcons name="lock" size={20} color={colors.inputIcon} style={styles.inputIcon} />
          <TextInput
            placeholder='Password'
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.textInput}
            secureTextEntry />
        </View>
        <TouchableOpacity onPress={() => SignInUser()}>
          <LinearGradient
            colors={colors.signInButton}
            style={styles.signInButton} >
            <Text style={{ ...styles.signInText, color: colors.white }}>{APP_CONSTANT.TEXT.SIGN_IN}</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(screen.SIGN_UP)}>
          <LinearGradient
            colors={colors.signUpButton.gradient}
            style={styles.signInButton} >
            <Text style={styles.signInText}>{APP_CONSTANT.TEXT.SIGN_UP}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.authScreen.background
  },
  header: {
    alignItems: "center",
    flex: 1,
    paddingBottom: 50,
    justifyContent: "flex-end"
  },
  title: {
    fontSize: 25, fontWeight: fonts.authScreen.title, color: colors.inputIcon,
    letterSpacing: 5
  },
  footer: {
    flex: 3,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  textInputContainer: {
    flexDirection: "row",
    backgroundColor: colors.white,
    marginHorizontal: 25,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: colors.grey
  },
  textInput: {
    width: "90%",
    padding: 10
  },
  signInButton: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 50
  },
  signInText: {
    fontSize: 18,
    fontWeight: fonts.signInText,
    color: colors.inputIcon,
    letterSpacing: 1
  },
  inputIcon: {
    marginLeft: 6,
  }
})