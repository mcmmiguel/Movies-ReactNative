import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { CastItemProps } from '../interfaces';

export const CastItem = ({ actor }: CastItemProps) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style={styles.container}>
            {actor &&
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            }
            <View style={styles.actorInfo}>
                <Text style={{}}>
                    {actor.name}
                </Text>
                <Text style={{}}>
                    {actor.character}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
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
        paddingRight: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4,
    },
    actorName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    character: {
        fontSize: 16,
        color: '#212121',
    },
});
