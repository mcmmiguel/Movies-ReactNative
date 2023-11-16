import React, { useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator, Dimensions, StyleSheet, ScrollView, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { GradientContext } from '../context';
import { useMovies, useSearch } from '../hooks';
import { getImageColors } from '../helpers';
import { MoviePoster, HorizontalSlider, GradientBackground, SearchBar } from '../components';
import { globalStyles } from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Movie, SearchMovie } from '../interfaces';

const { width: windowWidth } = Dimensions.get('window');
const fadedWhite = 'rgba(255, 255, 255, 0.2)';

export const HomeScreen = () => {

    const { setMainColors } = useContext(GradientContext);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const { top } = useSafeAreaInsets();
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    const onSearchMovie = async () => {
        setSearchResults([]);
        if (!searchQuery) { return; }
        try {
            const resp = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=96abff0d2857dc70c90ab0fb64d78599&language=es-ES`);
            const data: SearchMovie = await resp.json();
            setSearchResults(data.results);
            console.log(searchResults);
        } catch (error) {
            console.log(error);
        }
    };

    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        const [primary = 'grey', secondary = 'white'] = await getImageColors(uri);

        setMainColors({ primary, secondary });
    };

    const onChangeSearchQuery = (search: string) => {
        setSearchQuery(search);
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
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search for a movie"
                    placeholderTextColor={fadedWhite}
                    onChangeText={onChangeSearchQuery}
                    value={searchQuery}
                />
                <TouchableOpacity style={styles.searchButton} onPress={onSearchMovie}>
                    <Icon style={styles.searchIcon} name="search" size={28} color={fadedWhite} />
                </TouchableOpacity>
            </View>
            {showSearchResults
                ? <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={searchResults}
                    renderItem={({ item }: any) => (
                        <MoviePoster movie={item} height={180} width={120} />
                    )}
                    showsHorizontalScrollIndicator={false}
                    numColumns={3}
                    style={{ marginTop: 30, alignSelf: 'center' }}
                />

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
