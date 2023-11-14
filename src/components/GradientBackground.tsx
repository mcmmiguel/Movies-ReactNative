import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientBackgroundProps {
    children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({ children }: GradientBackgroundProps) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#084F6A',
        }}>
            <LinearGradient
                colors={['#084f6a', '#75cedb', 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.5 }}
            />
            {children}
        </View>
    );
};
