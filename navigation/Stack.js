import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home;
import Contents from '../screens/Contents;
import Camera from '../screens/Camera;
import Likes from '../screens/Likes;
import MyPage from '../screens/MyPage;

const Stack = createStackNavigator();

const StackNavigation = () => {
    return(
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerTitle: 'Swugether'}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Contents" component={Contents} />
            <Stack.Screen name="Camera" component={Camera} />
            <Stack.Screen name="Likes" component={Likes} />
            <Stack.Screen name="MyPage" component={MyPage} />
        </Stack.Navigator>
    );
}

export default StackNavigation;