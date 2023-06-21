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

const Players1 = ({ navigation }) => {
    return (
        <View>
            <MenuHeader />
            <View>
                <Text style={commonStyles.headerText}>1-Player Games</Text>
            </View>
            <ScrollView>
                <GamePressable label="Tic-Tac-Toe" onPress={() => navigation.navigate("Players2")} />
            </ScrollView>
        </View>
    );
}

export default Players1;