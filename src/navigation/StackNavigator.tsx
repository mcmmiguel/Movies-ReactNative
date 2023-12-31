import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailScreen, HomeScreen } from '../screens';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
    HomeScreen: undefined;
    DetailScreen: Movie;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen
                name="DetailScreen"
                options={{ cardStyle: { backgroundColor: '#171A21' } }}
                component={DetailScreen}
            />
        </Stack.Navigator>
    );
};
