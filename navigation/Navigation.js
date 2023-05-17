import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';

import Home from '../screens/Home';
import Contents from '../screens/Content/Contents';
import Content from '../screens/Content/Content';
import Camera from '../screens/Camera';
import Likes from '../screens/Likes';
import MyPage from '../screens/MyPage';

const Tab = createBottomTabNavigator();

function Navigation() {
    return (
        <PaperProvider>
            <NavigationContainer>
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
    );
}

export default Navigation;

