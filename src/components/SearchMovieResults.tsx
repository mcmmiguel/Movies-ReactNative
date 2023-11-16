import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { MoviePoster } from './MoviePoster';
import { SearchMovieResultsProps } from '../interfaces';

export const SearchMovieResults = ({ movieResults }: SearchMovieResultsProps) => {
    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={movieResults}
                renderItem={({ item }: any) => (
                    <MoviePoster movie={item} height={180} width={120} />
                )}
                showsHorizontalScrollIndicator={false}
                numColumns={3}
                style={styles.grid}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    grid: {
        marginTop: 30,
        alignSelf: 'center',
    },
});
