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

const styles = StyleSheet.create({
  view2: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 10,
  },
  
})

export default ArrowBack;