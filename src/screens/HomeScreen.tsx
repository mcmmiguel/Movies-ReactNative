import React from 'react';
import { View, ActivityIndicator, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks';
import { globalStyles } from '../../styles';
import { MoviePoster, HorizontalSlider } from '../components';
import Carousel from 'react-native-snap-carousel';


const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
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
                        data={nowPlaying}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />
                </View>

                {/* Popular Movies */}
                <HorizontalSlider title="In Theaters" movies={nowPlaying} />
                <HorizontalSlider title="Popular" movies={popular} />
                <HorizontalSlider title="Top Rated" movies={topRated} />
                <HorizontalSlider title="Upcoming" movies={upcoming} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    carouselContainer: {
        height: 440,
    },
});
