import { initializeApp } from 'firebase/app'

const firebaseConfig = {

    // apiKey: {/* Your Firebase config here*/ },

    // authDomain: {/* Your Firebase config here*/ },

    // projectId: {/* Your Firebase config here*/ },

    // storageBucket: {/* Your Firebase config here*/ },

    // messagingSenderId: {/* Your Firebase config here*/ },

    // appId: {/* Your Firebase config here*/ }

    // apiKey: "AIzaSyDrKqjM-fKGWBqj0-wpOOrIbeVlViEW-3c",
    // authDomain: "good-food-c84d4.firebaseapp.com",
    // projectId: "good-food-c84d4",
    // storageBucket: "good-food-c84d4.appspot.com",
    // messagingSenderId: "716731554402",
    // appId: "1:716731554402:web:bc8a1748f6cdd6885e8f3b",
    // measurementId: "G-VLK10R4D2P"

    apiKey: "AIzaSyC0MtsoujhHI4q3U_FvfSpdPInpiviB91o",
  authDomain: "good-food-client.firebaseapp.com",
  projectId: "good-food-client",
  storageBucket: "good-food-client.appspot.com",
  messagingSenderId: "277040262512",
  appId: "1:277040262512:web:df0e6acaf13714323673b5"


};

const firebaseApp = initializeApp(firebaseConfig);



export default firebaseApp;