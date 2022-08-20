import * as Location from 'expo-location';
export const language = "en"
export const currency = "USD"
export const apikey = ""
export const parameters = {
  headerHeight: 40,
  styledButton: {
    backgroundColor: 'black',
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
    marginTop: -3
  }
}
export const grey1 = "#e6e6e6"
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
export const title = {
  color: "black",
  fontSize: 20,
  fontWeight: "bold"
}
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
