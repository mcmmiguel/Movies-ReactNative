import React, { useRef } from 'react';
import { View, Animated, Button } from 'react-native';

export const FadeScreen = () => {

    const opacity = useRef(new Animated.Value(0.5)).current;

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

    };

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
            <Button title="Fade In" onPress={fadeIn} />
        </View>
    );
};
