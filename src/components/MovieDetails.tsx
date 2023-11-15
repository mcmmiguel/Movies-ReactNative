import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../../styles';
import { MovieDetailsProps } from '../interfaces';

export const MovieDetails = ({ movieFull, cast }: MovieDetailsProps) => {
    return (
        <>
            {/* Details */}
            <View style={styles.mainContainer}>
                <View style={styles.rateContainer}>
                    <Icon
                        name="star"
                        color="yellow"
                        size={16}
                    />
                    <Text style={styles.voteAverage}>{movieFull.vote_average}</Text>
                    <Text style={styles.genresText}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>
            </View>

            {/* Story */}
            <Text style={styles.subtitle}>Sinopsis</Text>
            <Text style={styles.overview}>{movieFull.overview}</Text>

            {/* Budget */}
            <Text style={styles.subtitle}>Budget</Text>
            <Text style={globalStyles.colorText}>{currencyFormatter.format(movieFull.budget, { code: 'USD' })} USD</Text>

            {/* Cast*/}
            <View style={styles.castContainer}>
                <Text style={styles.subtitle}>Actors</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    style={styles.flatlist}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
    },
    rateContainer: {
        flexDirection: 'row',
    },
    voteAverage: {
        color: 'black',
    },
    genresText: {
        marginLeft: 5,
        color: 'black',
    },
    subtitle: {
        fontSize: 25,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#212121',
    },
    overview: {
        color: 'grey',
        fontSize: 16,
    },
    castContainer: {
        marginTop: 10,
        marginBottom: 100,
    },
    flatlist: {
        marginTop: 10,
    },
});
