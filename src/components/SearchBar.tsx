import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import { useSearch } from '../hooks';
import { MoviePoster } from './MoviePoster';
import { Movie, SearchMovie } from '../interfaces';
import { useSearch } from '../hooks';

const fadedWhite = 'rgba(255, 255, 255, 0.2)';

export const SearchBar = () => {

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

    return (
        <View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search for a movie"
                    placeholderTextColor={fadedWhite}
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                />
                <TouchableOpacity style={styles.searchButton} onPress={onSearchMovie}>
                    <Icon style={styles.searchIcon} name="search" size={28} color={fadedWhite} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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

