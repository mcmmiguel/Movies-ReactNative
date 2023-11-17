import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from '../../src/navigation/StackNavigator';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Tests in <StackNavigator />', () => {

    test('Debe renderizar a HomeScreen', async () => {
        const component = (
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        );

        render(component);

        const searchBar = await screen.findByText('Search for a movie');

        // expect(searchBar).toBeTruthy();

    });

});
