import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';
import Icon from 'react-native-vector-icons/Ionicons';
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
                        style={styles.star}
                    />
                    <Text style={styles.voteAverage}>{movieFull.vote_average}</Text>
                </View>
                <View>
                    <Text style={styles.genresText}>
                        {movieFull.genres.map(g => g.name).join('     ')}
                    </Text>
                </View>
            </View>

            {/* Story */}
            <Text style={styles.subtitle}>Sinopsis</Text>
            <Text style={styles.overview}>{movieFull.overview}</Text>

            {/* Budget */}
            <Text style={styles.subtitle}>Budget</Text>
            <Text style={styles.budgetAmount}>{currencyFormatter.format(movieFull.budget, { code: 'USD' })} USD</Text>

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
        flexDirection: 'row',
        alignItems: 'center',
    },
    rateContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7A93AC',
        padding: 7.5,
        borderRadius: 10,
    },
    star: {
        marginRight: 5,
    },
    voteAverage: {
        color: 'white',
        fontSize: 14,
    },
    genresText: {
        marginLeft: 15,
        color: 'white',
        fontSize: 16,
    },
    subtitle: {
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    overview: {
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
    },
    budgetAmount: {
        color: 'white',
        fontSize: 16,
    },
    castContainer: {
        marginBottom: 100,
    },
    flatlist: {
        marginTop: 10,
    },
});
