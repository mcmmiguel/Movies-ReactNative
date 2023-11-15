import React from 'react';
import { View, Animated, Button, StyleSheet } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade();

    return (
        <View style={styles.container}>
            <Animated.View style={{ ...styles.animated, opacity }} />
            <Button title="Fade In" onPress={() => fadeIn()} />
            <Button title="Fade Out" onPress={() => fadeOut()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    animated: {
        backgroundColor: '#084f6a',
        width: 150,
        height: 150,
        borderColor: 'white',
        borderWidth: 5,
        marginBottom: 10,
    },
});
