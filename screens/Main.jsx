import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from "react-native-paper";
import Home from "./Home";
import Contents from "./Content/Contents";
import Content from "./Content/Content";
import Camera from "./Camera";
import Likes from "./Likes";
import MyPage from "./MyPage";

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Main({ setIsSigned }) {
  return (
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
          <Tab.Screen
            name="마이페이지"
            children={() => <MyPage setIsSigned={setIsSigned} />}
          />
          <Tab.Screen name="컨텐츠세부" component={Content} />
        </Tab.Navigator>
        {/* <View>
          <Navigation />
          <StackNavi />
        </View> */}
      </NavigationContainer>
    </PaperProvider>
  );
}
