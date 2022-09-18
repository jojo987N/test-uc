import { Text, View } from "react-native"
import { CheckBox } from "react-native-elements"

const Size = ({ food }) => {

    return Object.keys(food.size).map((key, index) => {
        return (
            <View key={index} style={{flexDirection: "row"}}>
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
export default Size

