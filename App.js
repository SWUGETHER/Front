import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//import Contents from "./screens/Contents";
//import Content from "./screens/Content";
import Navigation from "./navigation/Navigation";
//import ContentScreen from "./screens/Content/ContentScreen";
import Login from "./screens/Login";
import MyPage from "./screens/MyPage";
import Splash from "./screens/Splash";
import { useEffect, useState } from "react";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return <>{isLoaded ? <MyPage /> : <Splash />}</>;
}
