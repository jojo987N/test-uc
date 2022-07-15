import { View, Text, StyleSheet, Dimensions, Image, SafeAreaView, StatusBar} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import { colors, parameters, title } from '../../global'
import { Button, Icon, SocialIcon} from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
import Swiper from 'react-native-swiper';
import {onAuthStateChanged} from 'firebase/auth'
import firebaseApp, {auth, userInfos} from '../../firebase';
import { useDispatch } from 'react-redux'


export default function SignInWelcomeScreen({navigation}) {
   
  const dispatch = useDispatch();
  useEffect(()=>{
    const checkAuth = onAuthStateChanged(auth, (user)=>{
        
        if(user){

          userInfos(auth.currentUser?.uid).then(snapshot =>{

            dispatch({
              type: 'ADD_USER',
    
              payload:  snapshot.docs[0].data()
            });


          }).then(()=> navigation.navigate('DrawerNavigator'))

            
        }
    })
    return checkAuth
})
  return (
    //<View style={{flex: 1}}>
    <SafeAreaView   style={{
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      //backgroundColor: "#eee",
      flex: 1
    }}>
        <View style={{
            flex: 3,
           justifyContent: "flex-start",
           alignItems: "center",
           
           paddingTop: 20
        }}>
          <Text style={{
              fontSize: 26,
              color: colors.buttons,
              fontWeight: "bold",
          }}>DISCOVER RESTAURANTS</Text>
          <Text style={{
              fontSize: 26,
              color: colors.buttons,
              fontWeight: "bold",
          }}>IN YOUR AREA</Text>
        </View>
        <View style={{
              flex: 4
        }}>
            <Swiper autoplay>
                <View style={styles.slide1}>
                    <Image
                    source={{uri: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_960_720.jpg"}}
                    style={{
                      height: "100%",
                      width: "100%"
                    }}

                    />
  
                </View>

                <View style={styles.slide2}>
                    <Image
                    source={{uri: "https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_960_720.jpg"}}
                    style={{
                      height: "100%",
                      width: "100%"
                    }}

                    />
  
                </View>

                {/* <View style={styles.slide3}>
                    <Image
                    source={{uri: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpgq"}}
                    style={{
                      height: "100%",
                      width: "100%"
                    }}

                    />
  
                </View> */}

            </Swiper>

        </View> 
        <View style={{
          flex: 4,
          justifyContent: "flex-end",
          marginBottom: 20,
          }}>

        <View style={{
                marginHorizontal: 20,
                marginTop: 30
                }}>
                <Button 
                title="SIGN IN"
                buttonStyle={parameters.styledButton}
                titleStyle={parameters.buttonTitle}
                onPress={()=>{
                  navigation.navigate('SignScreen')

                }}/>
            </View>

            <View style={{
                marginTop: 30,
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
   // </View>
  )
}

 
  const styles = StyleSheet.create({
    slide1: {
      
    },
    createButton: {
      backgroundColor: "white",
      borderRadius: 12,
      borderWidth: 1,
      borderColor: 'black',
      height: 50,
     // paddingHorizontal: 20

      

  },
  createButtonTitle: {
      color: colors.grey1,
      fontSize: 20,
      fontWeight: "bold",
      marginTop: -3
  }

  })