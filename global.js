import * as Location from 'expo-location';


export const language = "en"
export const currency = "USD"
export const apikey = ""



export const grey1= "#e6e6e6"

export const colors = {
    buttons: "black",
    grey1: "#43484d",
    grey2: "#5e6977",
    grey3: "#86939e",
    grey4: "#bdc6cf",
    grey5: "#e1e8ee",
    cardComment: "#86939e",
    cardbackground: 'white',
    statusbar: '#ff8c52',
    headerText: 'white'
}
export const parameters = {
    headerHeight: 40,
    styledButton: {
        backgroundColor: 'black',
       // alignContent: 'center',
       // justifyContent: 'center',
        borderRadius: 12,
        paddingHorizontal: 20,
        width: "100%",
        borderWidth: 1,
        borderColor: 'black',
        height: 50,
        
    },

    buttonTitle: {
      fontSize: 20,
      fontWeight: "bold",
      //alignItems: 'center',
      marginTop: -3
      
    }
}


export const title = {
    color: "black",
    fontSize: 20,
    fontWeight: "bold"
}

export const location = async () => {
    
    let { status } = await Location.requestForegroundPermissionsAsync();

    //console.log(status)
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
     
    //if(!setLoginState)
    //setLoginState(true)

    return  await Location.getCurrentPositionAsync({});
     
  //  setLatitude(location.coords.latitude)
  //  setLongitude(location.coords.longitude)
    //console.log(location)


  };

  export function generateUID() {
    // I generate the UID from two parts here 
    // to ensure the random number provide enough bits.
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
}


export function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

//console.log(getDistanceFromLatLonInKm(4.07151, 9.73124, 4.0956516, 9.7426032))


 
 