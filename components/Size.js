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
                    textStyle={{fontSize: 25}}
                    containerStyle={{backgroundColor: "white"}}
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
        justifyContent: "space-between",
        borderWidth: 2,
        marginHorizontal: 10,
        paddingRight: 10,
        backgroundColor: "white"
    }
})
export default Size

