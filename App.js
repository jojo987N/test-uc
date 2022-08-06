import RootNavigation from "./navigation/navigation";
import { SafeAreaView, StatusBar} from "react-native";
import {useFonts} from 'expo-font'
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import en from './lang/en.json'
// import fr from './lang/fr.json'



import { 
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic 
} from '@expo-google-fonts/roboto'
import Loader from "./screens/Loader";


i18n.translations = {
  // en: { welcome: 'Hello', name: 'Charlie' },
  en:en,
  // ja: { welcome: 'こんにちは' },
};

i18n.locale = Localization.locale;

i18n.fallbacks = true;

 

export default function App() {

  let [fontsLoaded, error] = useFonts({

    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic

  })

   if(!fontsLoaded)
   return <Loader />
   
  return (
    // <SafeAreaView style={{
    //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //   backgroundColor: "#eee",
    //   flex: 1
    // }}>
    <RootNavigation statusBarColor="black"/>
    // </SafeAreaView>
  );
}
