import { getAuth } from 'firebase/auth';
import { addDoc, getFirestore, collection, getDocs, orderBy, query, limit, where, onSnapshot } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { LogBox } from 'react-native';
 
export const auth = getAuth(firebaseApp)
export const db = getFirestore()
export const storage = getStorage();

const restaurantsCol = collection(db, 'restaurants')
export const getRestaurantsFromFirebase = () => {
  const restos = []
  return getDocs(restaurantsCol)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        restos.push({
          restaurantId: doc.id,
          ...doc.data()
        })
      })
      return restos
    })
}
export const ordersCol = collection(db, 'orders')
export const getOrders = () => {
  const q = query(ordersCol, orderBy('createdAt', 'desc'), limit(1))
  const orders = []
  return getDocs(q)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        orders.push(doc.data())
        console.log(doc.data())
      })
      return orders
    })
}
 export const getDriverInfos = async (setDriverInfos, bottomSheet, mapRef) => {
  onSnapshot(ordersCol, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      if (doc.data().createdAt && doc.data().status === 'ACCEPTED' && doc.data().User.id === auth.currentUser?.uid, doc.data().driverId) {
        bottomSheet?.current.collapse()
        mapRef?.current?.getCamera().then((cam) => {
          cam.zoom += 1;
          mapRef?.current?.animateCamera(cam);
        })
        driverInfos(doc.data().driverId)
          .then((snapshot) => snapshot.docs.forEach((doc) => {
            console.log(doc.data().lat, doc.data().lng)
            setDriverInfos({
              driverName: doc.data().name,
              car: doc.data().Car,
              driverImage: { uri: doc.data().image },
              driverLat: doc.data().lat,
              driverLng: doc.data().lng


            })
             
          }))
      }
    })
  })
}
LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core'])
const productsCol = collection(db, 'products')
export const getProducts = () => {
  const products = []
  return getDocs(productsCol)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        products.push({
          ...doc.data(),
          id: doc.id
        })
      })
      return products
    }
    )
}
const userRef = collection(db, 'users')
export const addUser = async (userCredentials, name, phone, address) => {
  addDoc(userRef, {
    id: userCredentials.user.uid,
    name: name,
    email: userCredentials.user.email,
    phone: phone,
    address: address
  })
    .then(() => console.log('user create'))
}
export const userInfos = (uid) => {
  const q = query(userRef, where("id", "==", uid))
  return getDocs(q)
}
const driversCol = collection(db, 'drivers')
export const driverInfos = (driverId) => {
  const q = query(driversCol, where("Id", "==", driverId))
  return getDocs(q)
}
