import React from 'react';
import {
Text,
StyleSheet,
Button,
Pressable,
View,
} from 'react-native';

const backButtonLabel = "< Back";

const MenuHeader = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>{backButtonLabel}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: 'rgb(25, 25, 250)',
        padding: 5,
        margin: 5,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'rgb(250, 250, 250)',
    },
    emptySpace: {
        flex: 5,
        backgroundColor: 'transparent',
    }
});

export default MenuHeader;