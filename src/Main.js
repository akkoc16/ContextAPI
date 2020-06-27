import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Facts, Login, VoteFilter } from './pages'

import Provider from './context/Provider'

const Stack = createStackNavigator();

function Main() {
    return (
        <Provider>
            <NavigationContainer>
                <Stack.Navigator>

                    <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
                    <Stack.Screen name="Facts" component={Facts} options={{headerShown: false}}/>
                    <Stack.Screen name="Votes" component={VoteFilter} options={{headerShown: false}} />

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default Main;