import React from "react";
import { StyleSheet, View, Text, Button, Pressable } from "react-native";

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const Home = ({navigation}) => {
    const goToContent = () => console.log("press")
    const goToContents = () => navigation.navigate("Contents")

    return (
        <View>
            <View style={{backgroundColor: '#D9D9D9', height: 250, top: 20}}></View>
            <View>
                <Text style={{position:'absolute', fontSize: 24, fontWeight:'bold', top: 5, left: 20}}>Contents</Text>
                <Button style={{right: 20}} title="전체보기 >" onPress={goToContents}  />
            </View>
            <View style={styles.content_wrap}>
                <Pressable style={styles.content} onPress={goToContent}>                        
                    <Text style={styles.title}>생리대 착용 방법</Text>
                    <Text style={styles.date}>23.04.05</Text>
                    <Text style={styles.likeCount}>203</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content_wrap: {
        position: 'absolute',
        width: 350,
        top: 350,
        left: 20,
        justifyContent: 'center',
        flex: 1
    },
    content: {
        height: 173,
        borderRadius: 8,
        backgroundColor: '#D9D9D9',
        margin: 19,
        borderRadius: 10,
        shadowOffset: { height: 0 , width: 4 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
    },
    title: {
        position:'absolute', 
        fontSize: 20, 
        fontWeight:'bold', 
        bottom: 15, 
        left: 12
    },
    date: {
        position:'absolute', 
        fontSize: 14, 
        fontWeight:'bold', 
        bottom: 16, 
        right: 16
    },
    likeCount: {
        position:'absolute', 
        fontSize: 14, 
        fontWeight:'bold', 
        top: 46, 
        right: 16
    }
})

export default Home;