import * as Location from 'expo-location';
export const language = "en"
export const currency = "USD"
export const apikey = {/* Your Google Api Key here */ }
export const grey1 = "#e6e6e6"

export const APP_CONSTANT = {
  TEXT: {
    WALLET: "Wallet",
    CASH: "Cash",
    ADD_PAYMENT_METHOD: "Add payment method",
    CONNECT_ACCOUNT: "Connect Account",
    VOUCHERS: "Vouchers",
    ADD_VOUCHER_CODE: "Add voucher code",
    REGISTER_NOW: "Register Now !",
    EMAIL: 'Email',
    PASSWORD: 'Password',
    NAME: 'Name',
    PHONE: 'Phone',
    SIGN_UP: 'Sign Up',
    SIGN_IN: "Sign In",
    WELCOME: "Welcome !"
  }


}
export const colors = {
  buttons: "black",
  grey1: "#43484d",
  grey2: "#5e6977",
  grey3: "#86939e",
  grey4: "#bdc6cf",
  grey5: "#e1e8ee",
  grey: "#808080",
  green: "#009900",
  white: "#ffffff",
  black: "#000000",
  inputIcon: "#3d5c5c",
  signInButton: ['#948E99', '#2E1437'],
  signUpButton: {
    gradient: ['#ada996', '#f2f2f2', '#dbdbdb', '#eaeaea'],
    background: "#0080ff"
  },
  signInText: "#3d5c5c",
  authScreen: {
    title: "#3d5c5c",
    background: "#b3b3b3",
  },
  LIKED: "red"

}

export const fonts = {
  authScreen: {
    title: "bold",
  },
  signInText: "bold"
}

export const screen = {
  SIGN_IN: "SignIn",
  ADD_CARD: "AddCard",
  DRAWER_NAVIGATOR: "DrawerNavigator",
  SIGN_UP: "SignUp",
  SEARCH_RESULTS:"SearchResults"
}
export const icon = {
  USER: "person",
  EMAIL: "email",
  PHONE: "phone",
  PASSWORD: "lock",
  RIGHT: "right",
  LIKED: 'heart',
  NOT_LIKED: 'heart-outline',
  RESTAURANT: "restaurant"


}
export const ANIMATION = {
  AUTHSCREEN: "fadeInUpBig"
}
export const IMAGE = {
  CAR: '../assets/images/car2.png'
}

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height

 
export const location = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    setErrorMsg('Permission to access location was denied');
    return;
  }
  return await Location.getCurrentPositionAsync({});
};
export function generateUID() {
  var firstPart = (Math.random() * 46656) | 0;
  var secondPart = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
}
