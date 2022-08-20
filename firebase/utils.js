import firebaseApp from './config'
import { getAuth } from 'firebase/auth';
import { addDoc, getFirestore, collection, getDocs, orderBy, query, limit, where } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
 
export const auth = getAuth(firebaseApp)
export const db = getFirestore()
export const storage = getStorage();

const restaurantsCol = collection(db, 'restaurants')
export const getRestaurantsFromFirebase = async () => {
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
export const getOrders = async () => {
  const q = query(ordersCol, orderBy('createdAt', 'desc'), limit(1))
  const orders = []
  return getDocs(q)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        orders.push(doc.data())
      })
      return orders
    })
}

const productsCol = collection(db, 'products')
export const getProducts = async () => {
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
