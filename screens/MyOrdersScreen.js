import { View, Text, FlatList, SafeAreaView, StatusBar, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

import OrderListItem from "../components/OrderListItem";
//import { useOrderContext } from "../../contexts/OrderContext";
import {orders} from '../data'

const OrderScreen = ({navigation}) => {
  //const { orders } = useOrderContext();
  //console.log(orders);
  //const {items, restaurantName} = useSelector((state)=>state.cartReducer.selectedItems)

  const items = useSelector((state)=>state.cartReducer)

  return (
    <SafeAreaView style={{
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: "#eee",
      flex: 1
    }}>

      <View style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        marginRight: 35,
        marginTop: 10
        }}>

        <TouchableOpacity 
          style={{
          backgroundColor: "black",
          width: 90,
          height: 35,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
          onPress={()=>{navigation.navigate("Orders")}}
          >
          <Text style={{
            color: "white",
            fontWeight: "bold"

          }}>Orders</Text>
        </TouchableOpacity>

      </View>
            

            {/* <Modal
                animationType='slide'
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}>
                {checkoutModalContent()}
            </Modal> */}




      <FlatList
        //data={orders}
        data={items}
        keyExtractor={(item, index)=> String(index)}
        renderItem={({ item, index }) => (
          <TouchableOpacity 
          //onPress={()=>navigation.navigate('OrderDetails')}
           
          >
            <OrderListItem order={item} index={index}/>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};


 


export default OrderScreen;

