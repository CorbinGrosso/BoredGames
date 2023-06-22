/*
 * This file creates the Main Menu screen.
 * It only has buttons leading to the screens for each amount of players.
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import commonStyles from '../styles/commonStyles.tsx';

const MainMenu = ({ navigation }) => {
    return (
        <View>
            <View style={styles.emptySpace} />
            <Text style={commonStyles.headerText}>Home Screen</Text>
            <Button
                title="1-Player Games"
                onPress={() => navigation.navigate('Players1')}
            />
            <Button
                title="2-Player Games"
                onPress={() => navigation.navigate('Players2')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    emptySpace: {
        marginTop: 40,
    },

});

export default MainMenu;