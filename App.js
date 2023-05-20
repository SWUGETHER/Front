import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { useSelector } from "react-redux";

// import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider as PaperProvider } from "react-native-paper";

import Home from "./screens/Home";
import Contents from "./screens/Content/Contents";
import Content from "./screens/Content/Content";
import Camera from "./screens/Camera";
import Likes from "./screens/Likes";
import MyPage from "./screens/MyPage";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Main from "./screens/Main";
import AfterSplash from "./screens/AfterSplash";

import Navigation from "./navigation/Navigation";
import StackNavi from "./navigation/StackNavi";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {isLoaded ? <AfterSplash /> : <Splash />}
        </PersistGate>
      </Provider>
    </>
  );
}
