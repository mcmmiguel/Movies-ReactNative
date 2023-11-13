import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks';
import { globalStyles } from '../../styles';
import { MoviePoster } from '../components';

export const HomeScreen = () => {

    const { nowPlayingMovies, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View style={globalStyles.appCenter}>
                <ActivityIndicator color="red" size={100} />
            </View>
        );
    }

    return (
        <View style={{ marginTop: top + 20 }}>
            <MoviePoster
                movie={nowPlayingMovies[0]}
            />
        </View>
    );
};
