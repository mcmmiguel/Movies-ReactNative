import React from 'react';
import { View, ActivityIndicator, Dimensions, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks';
import { globalStyles } from '../../styles';
import { MoviePoster } from '../components';
import Carousel from 'react-native-snap-carousel';

const { width: windowWidth } = Dimensions.get('window');

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
            <View style={styles.carouselContainer}>
                <Carousel
                    data={nowPlayingMovies}
                    renderItem={({ item }: any) => <MoviePoster movie={item} />}
                    sliderWidth={windowWidth}
                    itemWidth={300}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    carouselContainer: {
        height: 440,
    },
});
