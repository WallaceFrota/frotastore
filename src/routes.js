import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

// telas
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Product from './pages/Product'

const Stack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignUp" screenOptions={{
                cardStyle: {
                    backgroundColor: '#F7FAFC'
                    // #edf2f7
                },
                headerStyle: {
                    backgroundColor: '#407BFF',
                },
                headerTitleStyle: {
                    fontSize: 18
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitle: 'Loja do Wallace Frota',
                gestureDirection: 'horizontal',
                gestureEnabled: true,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
                <Stack.Screen 
                    name="SignUp"
                    component={SignUp}
                />
                <Stack.Screen 
                    name="Home"
                    component={Home}
                />
                <Stack.Screen 
                    name="Product"
                    component={Product}
                    options={{
                        gestureDirection: 'vertical',
                        gestureEnabled: true,
                        cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}