import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useMovies } from '../hooks';
import { globalStyles } from '../../styles';

export const HomeScreen = () => {

    const { nowPlayingMovies, isLoading } = useMovies();

    if (isLoading) {
        return (
            <View style={globalStyles.appCenter}>
                <ActivityIndicator color="red" size={100} />
            </View>
        );
    }

    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    );
};
