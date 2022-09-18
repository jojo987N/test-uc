import { Text, View, StyleSheet} from "react-native"
import { CheckBox } from "react-native-elements"

const Size = ({ food }) => {

    return Object.keys(food.size).map((key, index) => {
        return (
            <View key={index} style={styles.container}>
                <CheckBox
                    title={key}
                    checked={false}
                    onPress={() => {
                        
                    }}
                />
                <Text>{food.size[key]}</Text>
            </View>
        )
    })

}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "space-between"
    }
})
export default Size

