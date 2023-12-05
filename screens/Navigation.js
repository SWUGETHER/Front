import React from "react";
import { Image, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Home";
import Contents from "./Content/Contents";
import Content from "./Content/Content";
import ContentWrite from "./Content/ContentWrite";
import Camera from "./Camera";
import CameraText from "./CameraText";
import MyPage from "./MyPage";
import Result from "./Result";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function TabNavi({ setIsSigned }) {
  return (
    <BottomTabs.Navigator screenOptions={{ headerShown: false }}>
      <BottomTabs.Screen
        name="홈"
        component={Home}
        options={{
          tabBarLabel: () => (
            <Text style={{ color: "black", fontSize: 10 }}>홈</Text>
          ),
          tabBarIcon: ({ size, focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/tabNavi/home_active.png")
                  : require("../assets/tabNavi/home_inactive.png")
              }
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="콘텐츠"
        component={Contents}
        options={{
          tabBarLabel: () => (
            <Text style={{ color: "black", fontSize: 10 }}>콘텐츠</Text>
          ),
          tabBarIcon: ({ size, focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/tabNavi/contents_active.png")
                  : require("../assets/tabNavi/contents_inactive.png")
              }
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="추천"
        component={Result}
        options={{
          tabBarLabel: () => (
            <Text style={{ color: "black", fontSize: 10 }}>추천</Text>
          ),
          tabBarIcon: ({ size, focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/tabNavi/camera_active.png")
                  : require("../assets/tabNavi/camera_inactive.png")
              }
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="마이페이지"
        children={() => <MyPage setIsSigned={setIsSigned} />}
        options={{
          tabBarLabel: () => (
            <Text style={{ color: "black", fontSize: 10 }}>마이페이지</Text>
          ),
          tabBarIcon: ({ size, focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/tabNavi/myPage_active.png")
                  : require("../assets/tabNavi/myPage_inactive.png")
              }
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function Navigation({ setIsSigned }) {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SWUGETHER"
            children={() => <TabNavi setIsSigned={setIsSigned} />}
          />
          <Stack.Screen name="Contents" component={Contents} />
          <Stack.Screen name="Content" component={Content} />
          <Stack.Screen name="ContentWrite" component={ContentWrite} />
          <Stack.Screen name="CameraText" component={CameraText} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Camera" component={Camera} />
          <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
