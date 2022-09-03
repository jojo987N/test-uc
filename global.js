import * as Location from 'expo-location';
import {Dimensions} from 'react-native';

export const language = "en"
export const currency = "USD"
export const apikey = {/* Your Google Api Key here */ }
export const grey1 = "#e6e6e6"
export const radius = 3;

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
    WELCOME: "Welcome !",
    APP_NAME: "Good Foods",
    DISCOVER_FOODS: "Discover Foods",
    CONTINUE: "Continue",
    DEALS: "Deals",
    DELIVERY: "Delivery",
    ARTICLE: "article",
    DELIVER_TO: "deliver to",
    HOME: "Home",
    OPEN_UNTIL: "Open until"
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
  LIKED: "red",
  handleIndicatorStyle: "grey",
  HOME: "#eee",
  price: "grey"

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
  SEARCH_RESULTS: "SearchResults",
  HOME: "Home",
  SIGN_IN: "SignIn",
  CARTS: "Carts",
  ORDER_DETAILS: "OrderDetails",
  ORDERS: "Orders",
  SEARCH: "SearchScreen",
  SEARCH_RESULTS: "SearchResults",
  RESTAURANTS_MAP: "RestaurantsMapScreen",
  PREFERENCE: "PreferenceScreen",
  MENU_DETAIL: "MenuDetailScreen",
  RESTAURANT_DETAIL: "RestaurantDetail",
  RESTAURANT_SEARCH_RESULTS: "RestaurantSearchResults",
  ONBOARDING: "Onboarding",
  SPLASH: "Splash",
  DRAWER_NAVIGATOR: "DrawerNavigator",
  ORDER_REQUEST: "OrderRequest",
  ORDER_COMPLETED: "OrderCompleted",
  OFFERS: "Offers",
  WALLET: "Wallet",
  ADD_CARD: "AddCard",
  BOTTOM_TABS: "BottomTabs"
}
export const icon = {
  USER: "person",
  EMAIL: "email",
  PHONE: "phone",
  PASSWORD: "lock",
  RIGHT: "right",
  LIKED: 'heart',
  NOT_LIKED: 'heart-outline',
  RESTAURANT: "restaurant",
  MENU: "menu"


}
export const ANIMATION = {
  AUTHSCREEN: "fadeInUpBig",
  ONBOARDING: "fadeInUpBig",
  LOADER: require("./assets/animations/food-transition2.json")
}
export const IMAGE = {
  CAR: require('./assets/images/car2.png'),
  USER: require('./assets/images/home1.png'),
  COOKING_ANIMATION: require("./assets/animations/cooking.json"),
  ONBOARDING: require("./assets/images/onboarding.jpg")
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
