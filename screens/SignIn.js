import { View, Text, SafeAreaView, StatusBar, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { auth, userInfos} from '../firebase'
import { signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { LinearGradient } from 'expo-linear-gradient'
import * as Animatable from "react-native-animatable"
import { useDispatch} from 'react-redux'
import {location} from '../global'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from './Loader'



export default function SignIn({navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState(false)


   const SignInUser = async ()=>{

     console.log(auth)
    
    setLoginState(true)

     
    //const loc = await location()
    
     try{
         const re = await signInWithEmailAndPassword(auth, email, password)


        userInfos(re.user.uid).then(snapshot =>{

            dispatch({
              type: 'ADD_USER',
              payload:  {
              ...snapshot.docs[0].data(),
             // loc: loc
              }
            });

          //  AsyncStorage.setItem('userId', re.user.uid)

            AsyncStorage.setItem('userData', JSON.stringify(snapshot.docs[0].data()))


          }).then(()=> navigation.navigate('DrawerNavigator'))

     }catch(e){
         console.log(e)
         setLoginState(false)
        
     }
    
    //console.log(re.user.uid)
 

    
    // .then((re)=>{

        
    //     userInfos(re.user.uid).then(snapshot =>{

    //         dispatch({
    //           type: 'ADD_USER',
    //           payload:  {
    //           ...snapshot.docs[0].data(),
    //          // loc: loc
    //           }
    //         });

    //         AsyncStorage.setItem('userId', re.user.uid)


    //       }).then(()=> navigation.navigate('DrawerNavigator'))

    // })

    
}

loginState && setTimeout(()=>{
  setLoginState(false)
}, 10000)

useEffect(()=>{
    AsyncStorage.getItem("userData")
    .then((value)=>{
      if(value){

        let userData = JSON.parse(value)

        dispatch({
            type: 'ADD_USER',
            payload: userData
          });

           navigation.navigate('DrawerNavigator')
      }
      
    })
//   const checkAuth = onAuthStateChanged(auth, (user)=>{
       
//       if(user){
//        // navigation.navigate('OrdersScreen')
//       }
//   })
//   return checkAuth

})

       if(loginState)
       return <Loader />


  return (
      <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.title}>Welcome !</Text>
          </View>

          <Animatable.View style={styles.footer} animation="fadeInUpBig">

              <View style={styles.textInputContainer}>
                  <MaterialIcons name="person" size={20} color="#3d5c5c" style={{
                      marginLeft: 6,
                  }} />
                  <TextInput
                      placeholder='Email'
                      value={email}
                      onChangeText={(text) => setEmail(text)}
                      style={styles.textInput} />

              </View>

              <View style={styles.textInputContainer}>
                  <MaterialIcons name="lock" size={20} color="#3d5c5c" style={{
                      marginLeft: 6,
                  }} />
                  <TextInput
                      placeholder='Password'
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                      style={styles.textInput}
                      secureTextEntry />

              </View>

              <TouchableOpacity onPress={() => SignInUser()}>

              <LinearGradient
                          colors={['#948E99', '#2E1437']}
                          style={styles.signInButton} >
                          <Text style={{...styles.signInText, color: 'white'}}>Sign In</Text>
              </LinearGradient>
                  {/* <View style={styles.signUpButton}>
                      <Text style={{
                          padding: 16,
                          textAlign: "center",
                          color: "white",
                          fontWeight: "bold",
                          fontSize: 15,
                          letterSpacing: 2
                      }}>Sign In</Text>
                  </View> */}
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>

              <LinearGradient
                          colors={['#ada996', '#f2f2f2', '#dbdbdb', '#eaeaea']}
                          style={styles.signInButton} >
                          <Text style={styles.signInText}>Sign Up</Text>
              </LinearGradient>
              
              </TouchableOpacity>


          </Animatable.View>

      </View>
      
     
  )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: "#b3b3b3"
    },

    header: {
        alignItems: "center",
       // marginTop: 50
       flex: 1,
       paddingBottom: 50,
       justifyContent: "flex-end"
    },
    title: {
        fontSize: 25, fontWeight: "bold", color: "#3d5c5c",
        letterSpacing: 5
    },
    footer: {
      flex: 3,
      backgroundColor: "#fff",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
  textInputContainer: {
    flexDirection: "row",
    //borderWidth : 1,
     backgroundColor: "white",
     marginHorizontal: 25,
     //padding: 10,
    borderRadius: 5,
     marginTop: 20,
     alignItems: "center",
     borderBottomWidth: 0.3,
     borderBottomColor: "grey"
    //marginT
     
  },
  textInput: {
   // borderWidth : 1,
    width: "90%",
    padding: 10
  },
  signInButton: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    //flexDirection: "row"
    marginTop: 50
    
},
   signInText: {
       fontSize: 18,
       fontWeight: "bold",
       color: "#3d5c5c",
       letterSpacing: 1
   },
 
})