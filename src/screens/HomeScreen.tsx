import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks';
import { globalStyles } from '../../styles';
import { MoviePoster, HorizontalSlider, GradientBackground } from '../components';
import Carousel from 'react-native-snap-carousel';
import { getImageColors } from '../helpers';
import { GradientContext } from '../context';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    const { setMainColors } = useContext(GradientContext);


    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        const [primary = 'grey', secondary = 'white'] = await getImageColors(uri);

        setMainColors({ primary, secondary });
    };

    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPosterColors(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nowPlaying]);

    if (isLoading) {
        return (
            <View style={globalStyles.appCenter}>
                <ActivityIndicator color="red" size={100} />
            </View>
        );
    }

    return (
        <GradientBackground>
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
                            onSnapToItem={(index) => getPosterColors(index)}
                        />
                    </View>

                    {/* Popular Movies */}
                    <HorizontalSlider title="In Theaters" movies={nowPlaying} />
                    <HorizontalSlider title="Popular" movies={popular} />
                    <HorizontalSlider title="Top Rated" movies={topRated} />
                    <HorizontalSlider title="Upcoming" movies={upcoming} />
                </View>
            </ScrollView>
        </GradientBackground >
    );
};

const styles = StyleSheet.create({
    carouselContainer: {
        height: 440,
    },
});
