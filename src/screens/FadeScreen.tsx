import React from 'react';
import { View, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade();

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Animated.View
                style={{
                    backgroundColor: '#084f6a',
                    width: 150,
                    height: 150,
                    borderColor: 'white',
                    borderWidth: 5,
                    opacity,
                    marginBottom: 10,
                }}
            />
            <Button title="Fade In" onPress={() => fadeIn()} />
            <Button title="Fade Out" onPress={() => fadeOut()} />
        </View>
    );
};
