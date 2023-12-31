import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks';
import { MovieDetails } from '../components';

const screenHeight = Dimensions.get('screen').height;

interface DetailsScreenProps extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = ({ route, navigation }: DetailsScreenProps) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, movieFull, cast } = useMovieDetails(movie.id);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri }}
                        style={styles.posterImage}
                    />
                </View>
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subtitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>

            <View style={styles.marginContainer}>
                {isLoading
                    ? <ActivityIndicator size={35} color="grey" style={styles.loader} />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
                }
            </View>

            {/* Boton para cerrar */}
            <View style={styles.backButton}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Icon
                        name="arrow-back-outline"
                        size={40}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 9,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subtitle: {
        fontSize: 18,
        color: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    loader: {
        marginTop: 20,
    },
    backButton: {
        position: 'absolute',
        elevation: 10,
        top: 20,
        left: 10,
    },
});
