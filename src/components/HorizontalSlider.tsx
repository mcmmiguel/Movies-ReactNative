import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MoviePoster } from './MoviePoster';
import { HorizontalSliderProps } from '../interfaces';

export const HorizontalSlider = ({ title, movies }: HorizontalSliderProps) => {
    const containerHeight = (title) ? 260 : 220;
    return (
        <View style={{ ...styles.sliderContainer, height: containerHeight }} >
            {title && <Text style={styles.sliderText}>{title}</Text>}
            <FlatList
                horizontal
                keyExtractor={(item) => item.id.toString()}
                data={movies}
                renderItem={({ item }: any) => (
                    <MoviePoster movie={item} height={200} width={140} />
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    sliderContainer: {
    },
    sliderText: {
        fontSize: 30,
        marginBottom: 10,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
    },
});
