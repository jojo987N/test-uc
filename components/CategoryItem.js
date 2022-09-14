import { TouchableOpacity, StyleSheet, ImageBackground, Dimensions, View, Text} from "react-native"
import { colors, screen } from "../global"

const SCREEN_WIDTH = Dimensions.get('window').width

const CategoryItem = ({item, navigation}) => {

    <TouchableOpacity
        onPress={() => navigation.navigate(screen.SEARCH_RESULTS, { name: item.name })} >
        <View style={styles.imageView}>
            <ImageBackground
                style={styles.image}
                imageStyle={styles.imageStyle}
                source={{ uri: item.image }}
            >
                <View style={styles.textView}>
                    <Text style={{
                        color: "white",
                        fontWeight: "bold"
                    }}>{item.name}</Text>
                </View>

            </ImageBackground>
        </View>
    </TouchableOpacity>

}

 const styles = StyleSheet.create({
    imageView: {
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
      },
    image: {
        width: SCREEN_WIDTH*0.4475,
        height: SCREEN_WIDTH*0.3475,
        justifyContent: "flex-end"
         
      },
    imageStyle: { borderRadius: 20 },
    textView: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.black,
        height: 30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
      }
 })

export default CategoryItem
