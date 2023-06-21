import React from 'react';
import {
Text,
Pressable,
View,
StyleSheet,
PressableProps,
} from 'react-native';

interface GamePressableProps extends PressableProps {
    label: string;
    onPress: () => void;
}

const GamePressable: React.FC<CustomPressableProps> = ({ label, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgb(25, 25, 250)',
        padding: 10,
        margin: 5,
    },
    buttonText: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'rgb(250, 250, 250)',
    },
});

export default GamePressable;