import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import React from 'react';

// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';

import Home from "./screens/Home";
import Contents from "./screens/Content/Contents";
import Content from "./screens/Content/Content";
import Camera from "./screens/Camera";
import Likes from "./screens/Likes";
import MyPage from "./screens/MyPage";
import Splash from "./screens/Splash";

import Navigation from './navigation/Navigation';
import StackNavi from './navigation/StackNavi';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      {isLoaded ? (
        <PaperProvider>
        <NavigationContainer>
          {/* <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Content" component={Content} />
          </Stack.Navigator> */}
          <Tab.Navigator>
            <Tab.Screen name="홈" component={Home} />
            <Tab.Screen name="콘텐츠" component={Contents} />
            <Tab.Screen name="카메라" component={Camera} />
            <Tab.Screen name="좋아요" component={Likes} />
            <Tab.Screen name="마이페이지" component={MyPage} />
            <Tab.Screen name="컨텐츠세부" component={Content} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
      // <View>
      //   < Navigation />
      //   < StackNavi />
      // </View>
      ) : (
        <Splash />
      )}
    </>
  );
}
