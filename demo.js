import {Animated} from 'react-native'
import { bearing } from './utils'
import { positions } from './positions'


export const updateInterface = async (bottomSheet)=>{
    bottomSheet?.current.collapse()
     
  }


export const move = (angleValue, setDriverLat, setDriverLng, positions)=>{

    
    let i = 0
    
      var refreshId = setInterval(()=>{
     
          Animated.timing(angleValue, {
            toValue: 0.25+(-360 + (bearing(positions.gpx.trk.trkseg.trkpt[i].lat, 
              positions.gpx.trk.trkseg.trkpt[i].lon, 
              positions.gpx.trk.trkseg.trkpt[i+1].lat, 
              positions.gpx.trk.trkseg.trkpt[i+1].lon)))/360,
            duration: 500,
            useNativeDriver: false
        }).start(()=>{

         
            setDriverLat(parseFloat(positions.gpx.trk.trkseg.trkpt[i+1].lat))
            setDriverLng(parseFloat(positions.gpx.trk.trkseg.trkpt[i+1].lon))

        i+=1
        })
       
      if(i+1 === positions.gpx.trk.trkseg.trkpt.length-3)
       clearInterval(refreshId)

     }, 1000)


   }