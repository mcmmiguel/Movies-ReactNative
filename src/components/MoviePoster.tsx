import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface MoviePosterProps {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: MoviePosterProps) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <View style={[{ height, width }, styles.mainContainer]}>
            <View style={styles.imageContainer}>

                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 7.5,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image: {
        flex: 1,
        borderRadius: 18,
    },
});
