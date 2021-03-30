import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';


import Login from './src/pages/Login';
import Inicio from './src/pages/Inicio';
import Produto from './src/pages/Produto'

const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTitle: 'Loja Infocast - Gabriel Airton',
            }}>
                <Stack.Screen 
                    name="Login"
                    component={Login}
                />
                <Stack.Screen 
                    name="Inicio"
                    component={Inicio}
                />
                <Stack.Screen 
                    name="Produto"
                    component={Produto}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}