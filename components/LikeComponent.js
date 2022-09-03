import { AntDesign } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"
import { colors, icon } from "../global"

const LikeComponent = () => {
    const [liked, setLiked] = useState(false)
    return (
        <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
        {liked?(<AntDesign
            name={icon.LIKED} 
            size={25}
            color={colors.LIKED}
            
            onPress={()=>setLiked(false)}
            />
        ):(
            <MaterialCommunityIcons 
            name={icon.NOT_LIKED}
            size={25} 
            color={colors.white}
            onPress={()=>setLiked(true)}
            />
         
        )}
    </TouchableOpacity>
    )
}
export default LikeComponent; 