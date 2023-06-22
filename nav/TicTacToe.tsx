/*
 * Screen displaying a list of every game for 2 players.
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuHeader from '../components/MenuHeader.tsx';
import commonStyles from '../styles/commonStyles.tsx';
import board_1_1 from '../assets/tictactoe/board_1_1.png';
import board_1_2 from '../assets/tictactoe/board_1_2.png';
import board_1_3 from '../assets/tictactoe/board_1_3.png';
import board_2_1 from '../assets/tictactoe/board_2_1.png';
import board_2_2 from '../assets/tictactoe/board_2_2.png';
import board_2_3 from '../assets/tictactoe/board_2_3.png';
import board_3_1 from '../assets/tictactoe/board_3_1.png';
import board_3_2 from '../assets/tictactoe/board_3_2.png';
import board_3_3 from '../assets/tictactoe/board_3_3.png';

const squareOnPress = () => {
}

const PlayerNotif = () => {
    return (
        <View style={styles.player1Notif}>
            <Text style={styles.notifText}>Your Turn</Text>
        </View>
    );
}

const Board = () => {
    return (
        <View style={styles.board}>
            <View style={styles.boardRow, {backgroundColor: 'rgb(60,60,60)'}}>
                <Image source={board_1_1} style={styles.boardSpace} />
                <Image source={board_2_1} style={styles.boardSpace} />
                <Image source={board_3_1} style={styles.boardSpace} />
            </View>
            <View style={styles.boardRow, {backgroundColor: 'rgb(120,120,120)'}}>
                <Image source={board_1_2} style={styles.boardSpace} />
                <Image source={board_2_2} style={styles.boardSpace} />
                <Image source={board_3_2} style={styles.boardSpace} />
            </View>
            <View style={styles.boardRow, {backgroundColor: 'rgb(200,200,200)'}}>
                <Image source={board_1_3} style={styles.boardSpace} />
                <Image source={board_2_3} style={styles.boardSpace} />
                <Image source={board_3_3} style={styles.boardSpace} />
            </View>
        </View>
    );
}

const TicTacToe = ({ navigation }) => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <PlayerNotif/>

            <Board/>

            <PlayerNotif/>
        </View>
    );
}

const styles = StyleSheet.create({
    notifText: {
        flex: 1,
        color: 'rgb(250, 250, 250)',
    },
    player2Notif: {
        backgroundColor: 'rgb(250, 25, 25)'
    },
    player1Notif: {
        backgroundColor: 'rgb(25, 25, 250)'
    },
    board: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    boardRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
    },
    boardSpace: {
    },
});

export default TicTacToe;