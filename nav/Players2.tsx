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
            <MenuHeader />
            <View>
                <Text style={commonStyles.headerText}>1-Player Games</Text>
            </View>
        </View>
    );
}

export default Players2;