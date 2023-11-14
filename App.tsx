import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation';
import { FadeScreen } from './src/screens';

const App = () => {
    return (
        <NavigationContainer>
            <FadeScreen />
        </NavigationContainer>
    );
};
export default App;
