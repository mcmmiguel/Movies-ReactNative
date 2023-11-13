import React from 'react';
import { View, ActivityIndicator, Dimensions, StyleSheet, FlatList, Text, ScrollView } from 'react-native';
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
        <ScrollView>

            <View style={{ marginTop: top + 20 }}>
                {/* Carousel Principal */}
                <View style={styles.carouselContainer}>
                    <Carousel
                        data={nowPlayingMovies}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                    />
                </View>

                {/* Popular Movies */}
                <View style={styles.popularContainer} >
                    <Text style={styles.popularText}>In theaters</Text>
                    <FlatList
                        horizontal
                        keyExtractor={(item) => item.id.toString()}
                        data={nowPlayingMovies}
                        renderItem={({ item }: any) => (
                            <MoviePoster movie={item} height={200} width={140} />
                        )}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    carouselContainer: {
        height: 440,
    },
    popularContainer: {
        backgroundColor: 'red',
        height: 260,
    },
    popularText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});
