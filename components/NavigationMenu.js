import { View } from "react-native";
import { Icon } from "react-native-elements";
import { colors, icon, screen } from "../global";

const NavigationMenu = ({ navigation }) => (
  
    <View style={styles.menu}>
     <Icon type="material-community" name={icon.MENU} color={colors.black} size={32} 
     onPress={() => navigation.navigate(screen.HOME)} />
  </View>
  )

  export default NavigationMenu;