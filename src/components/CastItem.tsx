import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { CastItemProps } from '../interfaces';

export const CastItem = ({ actor }: CastItemProps) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style={styles.container}>
            {actor.profile_path &&
                <Image
                    testID="actor-image"
                    source={{ uri }}
                    style={styles.image}
                />
            }
            <View style={styles.actorInfo}>
                <Text style={styles.actorName}>
                    {actor.name}
                </Text>
                <Text style={styles.character}>
                    {actor.character}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#E1E5F2',
        alignItems: 'center',
        height: 60,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 9,

        marginRight: 20,
        paddingVertical: 10,
        paddingRight: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
        resizeMode: 'contain',
    },
    actorInfo: {
        justifyContent: 'center',
        marginLeft: 10,
        marginVertical: 4,
    },
    actorName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    character: {
        fontSize: 14,
        color: 'black',
    },
});
