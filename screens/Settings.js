import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useSelector } from "react-redux";
import SearchBar from "../components/home/SearchBar";
import { updateUser } from "../firebase";

export default function Settings({ navigation }) {
  const { email, name, phone, address, id, lat, lng, userId } = useSelector(
    (state) => state.userReducer
  );
  const [_email, setEmail] = useState(email);
  const [password, setPassword] = useState("");
  const [_phone, setPhone] = useState(phone);
  const [_name, setName] = useState(name);
  const [_address, setAddress] = useState();

  const [loginState, setLoginState] = useState(false);

  const update = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings !</Text>
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <View style={{ marginHorizontal: 25 }}>
          <SearchBar
            style={{
              backgroundColor: "white",
              borderBottomColor: "grey",
              borderBottomWidth: 0.3,
            }}
            setAddress={setAddress}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.textInputContainer}>
            <Entypo
              name="email"
              size={20}
              color="#3d5c5c"
              style={{
                marginLeft: 6,
              }}
            />
            <TextInput
              placeholder="Email"
              value={email}
              style={styles.textInput}
            />
          </View>

          <View style={styles.textInputContainer}>
            <MaterialIcons
              name="lock"
              size={20}
              color="#3d5c5c"
              style={{
                marginLeft: 6,
              }}
            />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              secureTextEntry
            />
          </View>

          <View style={styles.textInputContainer}>
            <MaterialIcons
              name="person"
              size={20}
              color="#3d5c5c"
              style={{
                marginLeft: 6,
              }}
            />
            <TextInput
              placeholder="Name"
              value={name}
              style={styles.textInput}
            />
          </View>

          <View style={styles.textInputContainer}>
            <Entypo
              name="phone"
              size={20}
              color="#3d5c5c"
              style={{
                marginLeft: 6,
              }}
            />
            <TextInput
              placeholder="Phone"
              value={phone}
              style={styles.textInput}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              updateUser(_address, userId);
            }}
          >
            <LinearGradient
              colors={["#948E99", "#2E1437"]}
              style={styles.signInButton}
            >
              <Text style={{ ...styles.signInText, color: "white" }}>
                Update
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b3b3b3",
  },

  header: {
    alignItems: "center",

    flex: 1,
    paddingBottom: 50,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#3d5c5c",
    letterSpacing: 5,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  textInputContainer: {
    flexDirection: "row",

    backgroundColor: "white",
    marginHorizontal: 25,

    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: "grey",
  },
  textInput: {
    width: "90%",
    padding: 10,
  },
  signInButton: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

    marginTop: 50,
  },
  signInText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3d5c5c",
    letterSpacing: 1,
  },
  signUpButton: {
    backgroundColor: "#0080ff",
    marginHorizontal: 25,
    borderRadius: 5,
    marginTop: 20,
    width: "100%",
  },
});
