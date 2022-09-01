import { View } from "react-native"
import { Icon } from "react-native-elements"

export const ArrowBack = (props) => {
  return (
    <View style={styles.view2}>
      <Icon
        name="arrow-left"
        type="material-community"
        color="black"
        size={25}
        onPress={() => props.navigation.goBack()}
      />
    </View>
  )
}
export default ArrowBack;