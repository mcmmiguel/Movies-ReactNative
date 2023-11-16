import React, { useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { GradientContext } from '../context';
import { useMovies } from '../hooks';
import { getImageColors } from '../helpers';
import { MoviePoster, HorizontalSlider, GradientBackground, SearchBar } from '../components';
import { globalStyles } from '../../styles';
import { Movie } from '../interfaces';
import { SearchMovieResults } from '../components';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const { setMainColors } = useContext(GradientContext);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const { top } = useSafeAreaInsets();
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        const [primary = 'grey', secondary = 'white'] = await getImageColors(uri);

        setMainColors({ primary, secondary });
    };

    useEffect(() => {
        if (searchQuery.length === 0) {
            setShowSearchResults(false);
            setSearchResults([]);
        } else {
            setShowSearchResults(true);
        }

    }, [searchQuery]);

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
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} setSearchResults={setSearchResults} />
            {showSearchResults
                ? <SearchMovieResults movieResults={searchResults} />
                : <ScrollView>
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
                        <HorizontalSlider title="Popular" movies={popular} />
                        <HorizontalSlider title="Top Rated" movies={topRated} />
                        <HorizontalSlider title="Upcoming" movies={upcoming} />
                    </View>
                </ScrollView>
            }

        </GradientBackground >
    );
};

const styles = StyleSheet.create({
    carouselContainer: {
        height: 440,
    },
    searchContainer: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        width: '85%',
    },
    searchButton: {
        padding: 10,
        height: '100%',
        alignItems: 'center',
    },
    searchIcon: {
    },
    searchInput: {
        marginLeft: 20,
        fontSize: 18,
        flex: 1,
        color: 'white',
    },
});
