
export const bearing = (φ1, λ1, φ2, λ2) => {
    
    const x = Math.sin((λ2 - λ1)*Math.PI/180) * Math.cos(φ2*Math.PI/180);
   
    //console.log(Math.sin(λ2 - λ1) * Math.cos(φ2))

    const y = Math.cos(φ1*Math.PI/180) * Math.sin(φ2*Math.PI/180) -
      Math.sin(φ1*Math.PI/180) * Math.cos(φ2*Math.PI/180) * Math.cos((λ2 - λ1)*Math.PI/180);
    const θ = Math.atan2(x, y);

  //console.log(x, y, θ)

    return  (θ * 180 / Math.PI + 360) % 360; // in degrees
    //return  (θ * 180 / Math.PI)  // in degrees


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
  