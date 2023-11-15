/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context';
import { useFade } from '../hooks';
import { GradientBackgroundProps } from '../interfaces';

export const GradientBackground = ({ children }: GradientBackgroundProps) => {

    const { colors, prevColors, setPrevMainColors } = useContext(GradientContext);
    const { opacity, fadeIn, fadeOut } = useFade();

    useEffect(() => {
        fadeIn(() => {
            setPrevMainColors(colors);
            fadeOut(100);
        });
    }, [colors]);

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[prevColors.primary, prevColors.secondary, 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.7 }}
            />

            <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity }} >
                <LinearGradient
                    colors={[colors.primary, colors.secondary, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.7 }}
                />
            </Animated.View>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#084F6A',
    },
});
