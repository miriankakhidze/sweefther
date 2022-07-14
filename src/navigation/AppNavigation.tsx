import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useColorScheme } from 'react-native';
import { DarkTheme } from '../constans/theme';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList } from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
    const scheme = useColorScheme();
    return (
        <NavigationContainer
            theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootStack.Navigator>
                <RootStack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Sweefther',
                        headerTitleAlign: 'center',
                    }} />
                <RootStack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={({ route }) => ({ title: route.params.name })}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation 