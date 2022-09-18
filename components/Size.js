import { Text, View } from "react-native"
import { CheckBox } from "react-native-elements"

const Size = ({ food }) => {

    Object.keys(food.size).map((key, index) => {
        return (
            <View key={index}>
                <CheckBox
                    key={i}
                    title={key}
                    checked={false}
                    onPress={() => {
                        
                    }}
                />
                <Text>{food[key]}</Text>
            </View>
        )
    })

}
export default Size

