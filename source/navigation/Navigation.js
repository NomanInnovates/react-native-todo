import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';


export default Navigation = () => {
    const isAuth = true;

    return (
        <NavigationContainer>
            {
                isAuth ?
                    <AppStack />
                :
                    <AuthStack />    
            }
        </NavigationContainer>
    )
}