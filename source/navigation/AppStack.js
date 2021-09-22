import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home/Home';
import AddTodo from '../screens/home/AddTodo';

export default function AppStack() {
    const AppStack = createNativeStackNavigator();
    
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="AddTodo" component={AddTodo} />
        </AppStack.Navigator>    
    )
}














