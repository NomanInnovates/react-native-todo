import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Login() {
    const navigation = useNavigation();

    const gotToRegister = () => {
        navigation.navigate("Register");
    }

    return (
        <View>
            <Text>Login Screen</Text>

            <TouchableOpacity onPress={gotToRegister}>
                <Text>Go to Register Screen</Text>
            </TouchableOpacity>
        </View>
    )
}
