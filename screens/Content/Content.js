import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

function Content({ navigation }) {
    const [count, setCount] = useState(0);
    const [likeColor, setLikeColor] = useState('white');

    const handleLikePressIn = () => {
        setCount(count + 1);
        setLikeColor('black');
    }

    const handleLikePressOut = () => {
        setCount(count - 1);
        setLikeColor('white');
    }

    return (
        <View style={styles.container}>
            {/* onPress={() => navigation.goBack() */}
            <View style={styles.imageWrap}>
                <Image
                    source={require('../../assets/sample.png')}
                    style={styles.image}
                />
            </View>
            <TouchableOpacity>
                <View
                    style={{width: 50, height: 50, left: 330, top: 25}}
                    onTouchStart={handleLikePressIn}
                    onTouchEnd={handleLikePressOut}
                    onTouchCancel={handleLikePressOut}
                    onTouchMove={handleLikePressOut}
                >
                    <ImageBackground
                    source={require('../../assets/like.png')}
                    style={{tintColor: likeColor, width: 36, height: 36}}
                    imageStyle={styles.likeBackground}
                    >
                        <Text style={styles.countText}>{count}</Text>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
            <View style={styles.textWrap}>
            <Text style={styles.title}> 생리대 착용 방법 </Text>
                <View style={styles.controlTextWrapper}>
                    <Text style={styles.date}> 23.04.05 </Text>
                    <Text style={[styles.controlText, {left: 60}]}> {"|"} </ Text>
                    <TouchableOpacity onPress={() => console.log("수정 press")}>
                        <Text style={[styles.controlText, {left: 80,}]}>수정</Text>
                    </TouchableOpacity>
                    <Text style={[styles.controlText, {left: 110}]}> {"|"} </ Text>
                    <TouchableOpacity onPress={() => console.log("삭제 press")}>
                        <Text style={[styles.controlText, {left: 130}]}>삭제</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}>
                    <Text style={styles.text}>
                        lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#D9D9D9',
    },
    imageWrap: {
        height: 300,
        backgroundColor: '#979797',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    textWrap: {
        // flex: 1,
        marginLeft: 16,
        marginRight: 16,
    },
    title: {
        top: -20,
        left: -5,
        fontWeight: 'bold',
        fontSize: 24
    },
    controlTextWrapper: {
        top: -10,
        fontSize: 12,
    }, 
    date: {
        position: 'absolute',
        fontSize: 12
    },
    controlText: {
        position: 'absolute',
        fontSize: 12,
    },
    line: {
        top: 20,
        borderTopColor: "#979797",
        borderTopWidth: 2,
        borderStyle: "solid",
    },
    text: {
        top: 20,
        fontSize: 20
    },
    countText: {
        top: 40,
        textAlign: 'center',
        fontSize: 12
    }
})

export default Content;
