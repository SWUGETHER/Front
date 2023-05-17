import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';

import Home from '../screens/Home';
import Contents from '../screens/Content/Contents';
import Content from '../screens/Content/Content';
import Camera from '../screens/Camera';
import Likes from '../screens/Likes';
import MyPage from '../screens/MyPage';

const Stack = createStackNavigator();

function StackNavi() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Contents'>
                <Stack.Screen name="Contents" component={Contents} />
                <Stack.Screen name="Content" component={Content} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

export default StackNavi;