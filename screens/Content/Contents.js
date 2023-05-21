import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import ContentList from '../../ContentList';

function Contents() {
    const goToContent = () => console.log("press")

    return (
        <View>
            <View style={styles.tag_wrap}>
                <TouchableOpacity style={styles.tag} onPress={() => console.log('최신순 press')}> 
                    <Text style={styles.tag_text}>최신순</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag} onPress={() => console.log('오래된순 press')}> 
                    <Text style={styles.tag_text}>오래된순</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag} onPress={() => console.log('하트순 press')}> 
                    <Text style={styles.tag_text}>하트순</Text> 
                </TouchableOpacity>
            </View>
            <View style={{top: 60}}>
                <ContentList />
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
})

export default Contents;