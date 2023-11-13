import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';

interface MoviePosterProps {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: MoviePosterProps) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('DetailScreen', movie)}
            style={{ ...styles.mainContainer, height, width }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    },
    image: {
        flex: 1,
        borderRadius: 18,
    },
});
