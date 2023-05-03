import React from 'react';
import { StyleSheet, View, Text, Pressable, Button } from "react-native";
import { Like }  from '../../assets/like.png';


function Contents({navigation}) {
    const goToContent = () => console.log("press")

    return (
        <View>
            <View style={styles.tag_wrap}>
                <Pressable style={styles.tag} onPress={() => console.log('최신순 press')}> 
                    <Text style={styles.tag_text}>최신순</Text> 
                </Pressable>
                <Pressable style={styles.tag} onPress={() => console.log('오래된순 press')}> 
                    <Text style={styles.tag_text}>오래된순</Text> 
                </Pressable>
                <Pressable style={styles.tag} onPress={() => console.log('하트순 press')}> 
                    <Text style={styles.tag_text}>하트순</Text> 
                </Pressable>
            </View>

            <View style={styles.content_wrap}>
                <Pressable style={styles.content} onPress={goToContent}>
                    <Text style={styles.title}>생리대 착용 방법</Text>
                    <Text style={styles.date}> 23.04.05 </Text>
                    <Text style={styles.likeCount}>203</Text>
                </Pressable>
                <View style={styles.content}>
                    <Text style={styles.title}>여성 용품 종류</Text>
                    <Text style={styles.date}> 23.04.04 </Text>
                    <Text style={styles.likeCount}>188</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>냉/생리혈 구분법</Text>
                    <Text style={styles.date}> 23.04.04 </Text>
                    <Text style={styles.likeCount}>200</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tag_wrap: {
        position: 'absolute',
        width: 330,
        height: 30,
        top: 30,
        left: 30,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    tag: {
        height: 30,
        backgroundColor: '#D9D9D9',
        borderRadius: 40,
        shadowOffset: { height: 0, widht: 4},
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 14
    },
    tag_text: {
        fontSize: 16, 
        fontWeight:'bold', 
        textAlign: 'center'
    },
    content_wrap: {
        position: 'absolute',
        width: 350,
        height: 749,
        top: 20,
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

export default Contents;