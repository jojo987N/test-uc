import { useState } from "react"
import { TouchableOpacity, Image, StyleSheet} from "react-native"

const RestaurantImage= (props)=>{
   
    return(
    <>
        <Image
            source={{
                uri: props.image
            }}

            style={styles.image}
            


        />

       <LikeComponent />
    </>

)}

const styles = StyleSheet.create({
  image: { 
      width: "100%", 
      height: 140 
  }
})

export default RestaurantImage;