import React from 'react';
import { StyleSheet, View, Text, Pressable } from "react-native";

const styles = StyleSheet.create({
    tag_wrap: {
        position: 'absolute',
        width: 279,
        // height: 30,
        // top: 112,
        // left: 50,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    tag: {
        position: 'relative',
        height: 30,
        backgroundColor: '#D9D9D9',
        borderRadius: 4,
        shadowOffset: { height: 0, widht: 4},
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        top: 112,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    
    // content_wrap: {
    //     position: 'absolute',
    //     width: 329,
    //     height: 749,
    //     top: 174,
    //     justifyContent: 'center',
    //     flex: 1
    // },
    // content: {
    //     top: 174,
    //     weight: 328,
    //     height: 173,
    //     borderRadius: 8,
    //     backgroundColor: '#979797',
    //     margin: 19,
    //     borderRadius: 10,
    //     shadowOffset: { height: 0 , width: 4 },
    //     shadowColor: 'rgba(0, 0, 0, 0.25)',
    // },
    
})

function Contents() {
    return (
        <View>
            <View style={styles.tag_wrap}>
                <Pressable style={styles.tag} onPress={() => console.log('최신순 press')}> 
                    <Text style={{width: 79, fontSize: 16, textAlign: 'center'}}>최신순</Text> 
                </Pressable>
                <Pressable style={styles.tag} onPress={() => console.log('오래된순 press')}> 
                    <Text style={{width: 93, fontSize: 16, textAlign: 'center'}}>오래된순</Text> 
                </Pressable>
                <Pressable style={styles.tag} onPress={() => console.log('하트순 press')}> 
                    <Text style={{width: 79, fontSize: 16, textAlign: 'center'}}>하트순</Text> 
                </Pressable>
            </View>
            <View style={styles.content_wrap}>
                <View style={styles.content}>
                    <Text style={{fontSize: 20}}>생리대 착용 방법</Text>
                </View>
                <View style={styles.content}>
                    <Text>생리대 착용 방법</Text>
                </View>
                <View style={styles.content}>
                    <Text>생리대 착용 방법</Text>
                </View>
            </View>
        </View>
    );
}

export default Contents;