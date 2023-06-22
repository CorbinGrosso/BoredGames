/*
 * Collection of styles common to multiple files,
 * so that they could be imported instead of remade each time.
 */

import React from 'react';
import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
    headerText: {
        textAlign: 'center',
        justifyContent: 'center',
        color: 'rgb(25, 25, 250)',
        fontSize: 32,
    },
});

export default commonStyles;