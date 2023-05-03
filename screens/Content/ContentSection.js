import React from 'react';
import { Text, View, Stylesheet } from "react-native";

const ContentSection = ({title, date, likeCount}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.likeCount}>{likeCount}</Text>
        </View>
    );
}

const styles = Stylesheet.create({
    container: {
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    date: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    likeCount: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})



export default ContentSection;