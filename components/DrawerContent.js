import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Icon } from 'react-native-elements'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/utils'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function DrawerContent(props) {
    const [isSignedIn, setIsSignedIn] = useState(true)
    const navigation = useNavigation()
    const signOutUser = () => {
        AsyncStorage.getAllKeys().then(k => AsyncStorage.multiRemove(k))
            .then(() => {
                signOut(auth)
                    .then(() => {
                        navigation.navigate('SignIn')
                    })
            })
            .catch((err) => console.log(err.code))
    }
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 20,
                }}>
                    <Avatar
                        rounded
                        avatarStyle={styles.avatar}
                        size={75}
                        // source={{ uri: "" }} 
                        />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18,
                        }}>Paul Son</Text>
                        <Text style={{
                            fontSize: 14,
                        }}>paul@appfood.com</Text>
                    </View>
                </View>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Payment"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="credit-card-outline"
                            color={color}
                            size={size}
                        />
                    )}
                />
                <DrawerItem
                    label="Settings"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="cog-outline"
                            color={color}
                            size={size}
                        />
                    )}
                />
            </DrawerContentScrollView>
            <DrawerItem
                label="Sign out"
                icon={({ color, size }) => (
                    <Icon
                        type="material-community"
                        name="logout-variant"
                        color={color}
                        size={size}
                    />
                )}
                onPress={() => signOutUser()}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    avatar: {
        borderWidth: 4,
        borderColor: "white",
    }
})