import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/auth/login';
import Register from '../screens/auth/register';

export default function AuthStack() {
    const AuthStack = createNativeStackNavigator();
    
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Register" component={Register} />
        </AuthStack.Navigator>    
    )
}














