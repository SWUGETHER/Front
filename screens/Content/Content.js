import React, { useState } from 'react';
import { Pressable, StyleSheet, View, Text, Button } from "react-native";
import Like  from '../../assets/like.png';

function Content() {
    const [liked, setLiked] = useState(false);

    return (
        <View style={styles.content_wrap}>
            <Text> 생리대 착용 방법 </Text>
            <Text> 23.04.05 </Text>
            <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
                <Like />
            </Pressable>
            <Text>
                lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content_wrap: {
        width: 328,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#D9D9D9'
    },
    // content: {

    // },
})

export default Content;
