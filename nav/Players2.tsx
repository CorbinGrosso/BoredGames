/*
 * Screen displaying a list of every game for 2 players.
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GamePressable from '../components/GamePressable.tsx';
import MenuHeader from '../components/MenuHeader.tsx';
import commonStyles from '../styles/commonStyles.tsx';

const Players2 = ({ navigation }) => {
    return (
        <View>
            <MenuHeader navigation={navigation} />
            <View>
                <Text style={commonStyles.headerText}>2-Player Games</Text>
            </View>
            <ScrollView>
                <GamePressable label="Tic-Tac-Toe" onPress={() => navigation.navigate("TicTacToe")} />
            </ScrollView>
        </View>
    );
}

export default Players2;