import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SearchBarProps } from '../interfaces';

const fadedWhite = 'rgba(255, 255, 255, 0.2)';

export const SearchBar = ({ searchQuery, onChangeSearchQuery, onSearch }: SearchBarProps) => {

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search for a movie"
                placeholderTextColor={fadedWhite}
                onChangeText={onChangeSearchQuery}
                value={searchQuery}
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                <Icon style={styles.searchIcon} name="search" size={28} color={fadedWhite} />
            </TouchableOpacity>
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

