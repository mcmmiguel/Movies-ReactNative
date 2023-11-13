import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
// import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/StackNavigator';

interface DetailsScreenProps extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = ({ route }: DetailsScreenProps) => {

    const movie = route.params;

    return (
        <View>
            <Text>DetailScreen</Text>
        </View>
    );
};
