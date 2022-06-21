import { View, Text, StyleSheet, Dimensions, TextInput, SafeAreaView, StatusBar} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import { colors, location, parameters, title} from '../../global'
import { Button, Icon, SocialIcon} from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
import {getAuth, createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import firebaseApp, {auth, userInfos} from '../../firebase';
import { useDispatch} from 'react-redux'




export default function SignScreen({navigation}) {
    
    const dispatch = useDispatch();
    const [textInput2Focus, setTextInput2Focus] = useState(false)
    const textInput1 = useRef();
    const textInput2 = useRef();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isSignedIn, setIsSignedIn] = useState(false)

   // const auth = getAuth(firebaseApp)

    const handleSignUp = () => {

     createUserWithEmailAndPassword(auth, email, password)
     .then((re)=>console.log(re))

    }

    const SignInUser = async ()=>{
        
        const loc = await location()
        signInWithEmailAndPassword(auth, email, password)
        .then((re)=>{

            userInfos(re.user.uid).then(snapshot =>{

              dispatch({
                type: 'ADD_USER',
                payload:  {
                ...snapshot.docs[0].data(),
                loc: loc
                }
              });


            }).then(()=> navigation.navigate('DrawerNavigator'))

            
      
        })

        
    }

    // useEffect(()=>{
    //     onAuthStateChanged(auth, (user)=>{
    //         //console.log(user)
    //         if(user){
    //             navigation.navigate('DrawerNavigator')
    //         }
    //     })
    // })
    
    return (
        <SafeAreaView   style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          //backgroundColor: "#eee",
          flex: 1
        }}>
          <View style={styles.container}>
              {/* <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation}/> */}
              <View style={{marginLeft: 20, marginTop: 10}}>
                  <Text style={title}>Sign-In</Text>
              </View>
              <View  style={{alignItems: "center", marginTop: 10}}>
                  <Text style={styles.text1}>Please enter the email and password</Text>
                  <Text style={styles.text1}>registered width your account</Text>
              </View>
              <View style={{ marginTop: 20 }}>
                  <View>
                      <TextInput
                          ref={textInput1}
                          style={styles.textInput1}
                          placeholder="Email"
                          value={email}
                          onChangeText={(text)=>setEmail(text)}
                      />
                  </View>
                  <View style={styles.textInput2}>
                      <Animatable.View
                      animation={textInput2Focus?"":"fadeInLeft"}
                      duration={400}>
                          <Icon
                              type="material"
                              name="lock"
                              iconStyle={{ color: colors.grey3 }}
                          />
                      </Animatable.View>
                      <TextInput
                          ref={textInput2}
                          style={{ width: "70%" }}
                          placeholder="Password"
                          value={password}
                          onFocus={()=>setTextInput2Focus(false)}
                          onBlur={()=> setTextInput2Focus(true)}
                          onChangeText={(text)=>setPassword(text)}
                          secureTextEntry
                      />
                      <Animatable.View
                      animation={textInput2Focus?"":"fadeInLeft"}
                      duration={400}>
                          <Icon
                              type="material"
                              name="visibility-off"
                              iconStyle={{ color: colors.grey3 }}
                              style={{ marginRight: 10 }}
                          />
                      </Animatable.View>
                  </View>
              </View>
              <View style={{
                  marginHorizontal: 20,
                  marginTop: 30
                  }}>
                  <Button
                  title="SIGN IN"
                  buttonStyle={parameters.styledButton}
                  titleStyle={parameters.buttonTitle}
                  onPress={()=> {
                    SignInUser()
                    }}/>
              </View>
              <View style={{
                  alignItems: "center",
                  marginTop: 15
              }}>
                  <Text style={{
                      ...styles.text1,
                      textDecorationLine: "underline"
                      }}>Forgot Password ?</Text>
              </View>
              <View style={{
                  alignItems: "center",
                  marginTop: 30,
                  marginBottom: 30,
              }}>
                  <Text style={{
                      fontSize: 20,
                      fontWeight: "bold"
                  }}>OR</Text>
              </View>
              <View style={{
                  marginHorizontal: 10,
                  marginTop: 10,
              }}>
                  <SocialIcon
                  title='Sign In with Facebook'
                  button
                  type='facebook'
                  style={styles.socialIcon}
                  onPress={()=>{}}
                  />
              </View>
              <View style={{
                  marginHorizontal: 10,
                  marginTop: 10,
              }}>
                  <SocialIcon
                  title='Sign In with Google'
                  button
                  type='google'
                  style={styles.socialIcon}
                  onPress={()=>{}}
                  />
              </View>
              <View style={{
          
                  marginTop: 25,
                  marginLeft: 20
              }}>
                  <Text style={{
                      ...styles.text1,
          
                      }}>New on Uber-Food ?</Text>
              </View>
              <View style={{
                  alignItems: "flex-end",
                  marginHorizontal: 20
              }}>
                  <Button
                  title="Create an account"
                  buttonStyle={styles.createButton}
                  titleStyle={styles.createButtonTitle}
                  onPress={()=>{
                    navigation.navigate('SignUpScreen')
  
                  }}/>
              </View>
          </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1: {
        color: colors.grey3,
        fontSize: 16
    },
    textInput1: {
        borderWidth: 0.5,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        padding: 10,
        paddingLeft: 15

    },
    textInput2: {
        borderWidth: 0.5,
        borderColor: "#86939e",
        borderRadius: 12,
        padding: 10,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 15,
    },
    socialIcon: {
        borderRadius: 12,
        height: 50,
    },
    createButton: {
        backgroundColor: "white",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
       // paddingHorizontal: 20

    },
    createButtonTitle: {
        color: 'black',
        fontSize: 16,
        fontWeight: "bold",
        marginTop: -3
    }

})