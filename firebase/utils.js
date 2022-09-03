import firebaseApp from './config';
import { getAuth } from 'firebase/auth';
import { addDoc, getFirestore, collection, getDocs, doc, deleteDoc, orderBy, query, limit, where, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core'])
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
export const getDriverInfos = async (setDriverName, setCar, setDriverImage, bottomSheet, setDriverLat, setDriverLng, mapRef) => {
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
            setDriverName(doc.data().name)
            setCar(doc.data().Car)
            setDriverImage({ uri: doc.data().image })
            setDriverLat(doc.data().lat)
            setDriverLng(doc.data().lng)
          }))
      }
    })
  })
}
export const addRestaurants = (restaurants) => {
  restaurants.forEach((restaurant) => {
    addDoc(restaurantsCol, restaurant)
      .then(() => console.log("ajouté"))
  })
}
const productsCol = collection(db, 'products')
export const addProducts = () => {
  getDocs(restaurantsCol)
    .then(snapshot => snapshot.docs.forEach((doc) => {
      doc.data().dishes.forEach((dishe) => {
        addDoc(productsCol, dishe.name ? {
          restaurantID: doc.id,
          ...dishe,
          createdAt: serverTimestamp()
        } : {
          restaurantID: doc.id,
          ...dishe,
          name: dishe.title,
          createdAt: serverTimestamp()
        }).then(() => console.log("ADDED"))
      })
    }))
}
export const getProducts = (restaurantID) => {
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
export const getProductsAll = () => {
  getDocs(productsCol)
    .then((snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()))
    })
}
export const addGroupToProducts = () => {
  getDocs(productsCol)
    .then(snapshot => {
      snapshot.docs.forEach(docc => {
        updateDoc(doc(db, 'products', docc.id), {
          group: Math.floor(Math.random() * 9 + 1)
        }).then(() => console.log('Updated'))
      })
    })
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
export const getImageFromStorage = (imagePath) => {
  const fileRef = ref(storage, imagePath);
  return getDownloadURL(fileRef)
}
export const addOrderToFirebase = () => {
  addDoc(ordersCol, {
    orderId: generateUID(),
    restaurantId: restaurant.restaurantId,
    Restaurant: {
      lat: restaurant.coordinates.latitude,
      lng: restaurant.coordinates.longitude,
      address: restaurant.location.display_address.toString(),
      phone: restaurant.phone,
      name: restaurant.name,
    },
    User: {
      name: name,
      lat: loc.coords.latitude,
      lng: loc.coords.longitude,
      phone: phone,
      address: address,
      items: items
    },
    status: "pending",
    createdAt: serverTimestamp(),
  }).then(() => {
    dispatch({ type: 'CLEAR', })
    setLoading(false)
    navigation.navigate('OrderRequest', { loc: loc })
  })
}
 
