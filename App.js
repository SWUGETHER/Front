import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";
import Contents from "./screens/Content/Contents";
import Content from "./screens/Content/Content";
import Camera from "./screens/Camera";
import Likes from "./screens/Likes";
import MyPage from "./screens/MyPage";
import Splash from "./screens/Splash";

const Stack = createStackNavigator();
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
        <NavigationContainer>
          {/* <Stack.Navigator initialRouteName='Contents'>
          <Stack.Screen name="Contents" component={Contents} />
          <Stack.Screen name="Content" component={Content} />
        </Stack.Navigator> */}
          <Tab.Navigator>
            <Tab.Screen name="홈" component={Home} />
            <Tab.Screen name="콘텐츠" component={Contents} />
            <Tab.Screen name="카메라" component={Camera} />
            <Tab.Screen name="좋아요" component={Likes} />
            <Tab.Screen name="마이페이지" component={MyPage} />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <Splash />
      )}
    </>
  );
}
