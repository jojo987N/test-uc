import { ImageBackground, View } from "react-native";
import ArrowBack from "./ArrowBack";

const RestaurantDetailImage = (props)=>(

    <ImageBackground
    
      style={styles.container}
      source={{uri: props.image }}
    >
   <ArrowBack navigation={props.navigation}/>
        
      
    
    
    </ImageBackground>
    
    
    );
    export default RestaurantDetailImage;