import React, { useRef, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

function ContentList() {
    const slideList = [
        {
            id: 1,
            title: "생리대 착용 방법",
            date: '23.04.05',
            likeCount: '203',
            content: 'content1'
        },
        {
            id: 2, 
            title: "여성 용품 종류",
            date: '23.04.04',
            likeCount: '188',
            content: 'content2'
        },
        {
            id: 3,
            title: "냉/생리혈 구분법",
            date: '23.04.04',
            likeCount: '200',
            content: 'content3',
        },
    ]; // 컨텐츠 리스트

    const handleSlidePress = (content) => {
        console.log(`Navigate to ${content}`);
    };
    
    return (
        <View style={styles.container}>
            <View>
                {slideList.map((slide) => (
                    <TouchableOpacity
                        key={slide.id} 
                        style={styles.slide}
                        onPress={() => handleSlidePress(slide.content)}
                    >
                        <Text style={styles.title}>{slide.title}</Text>
                        <Text style={styles.date}>{slide.date}</Text>
                        <Text style={styles.likeCount}>{slide.likeCount}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        height: windowHeight,
        width: windowWidth,
        marginTop: 30,
    },
    slide: {
        width: 330,
        height: 200,
        left: 30,
        borderRadius: 20,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        marginBottom: 19,
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
        bottom: 18, 
        right: 16
    },
    likeCount: {
        position:'absolute', 
        fontSize: 14, 
        fontWeight:'bold', 
        top: 46, 
        right: 16
    },
    
});

export default ContentList;