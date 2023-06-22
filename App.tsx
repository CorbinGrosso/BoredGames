/*
 * This file creates the navigation container and stack
 *
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenu from './nav/MainMenu.tsx';
import Players1 from './nav/Players1.tsx';
import Players2 from './nav/Players2.tsx';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Menu" component={MainMenu} options={{ title: 'Main Menu' }} />
                <Stack.Screen name="Players1" component={Players1} />
                <Stack.Screen name="Players2" component={Players2} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 32,
        flex: 1,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 64,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
});

export default App;
