/*
 * Screen displaying a list of every game for 2 players.
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
import MenuHeader from '../components/MenuHeader.tsx';
import commonStyles from '../styles/commonStyles.tsx';

const Players2 = ({ navigation }) => {
    return (
        <View>
            <MenuHeader navigation={navigation} />
            <View>
                <Text style={commonStyles.headerText}>2-Player Games</Text>
            </View>
        </View>
    );
}

export default Players2;