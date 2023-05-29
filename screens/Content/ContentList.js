import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";
import { Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

function ContentList() {
    const navigation = useNavigation();
    const slideList = [
        {
            id: 1,
            title: "생리대 착용 방법",
            date: '23.04.05',
            likeCount: '203',
            text: "1. 개별 포장지를 뜯어 생리대를 펼쳐줍니다.\n" +
            "2. 생리대를 팬티에 붙입니다.\n" +
            "3. 속옷을 감싸듯이 날개를 반대편으로 접어주고, 두 겹으로 된 위생 팬티라면 날개를 안으로 넣어주세요.\n" +
            "4. 날개형 생리대는 날개와 팬티의 가장 좁은 부분을 맞춰주세요.\n" +
            "5. 팬티를 입은 뒤 생리혈이 밖으로 새지 않도록 생리대가 알맞게 접착 되었는지 상태를 확인해주세요.\n" +
            "6. 잠잘 때의 경우에는 생리대를 팬티 기준으로 중간 지점에서 엉덩이쪽(아래쪽)으로 착용하고 자면 됩니다.\n" +
            "잘 때는 생리가 샐 수 있기 때문에 일반 생리대보다 더 큰 오버나이트형을 착용하거나 일반 생리대 두 개를 넓게 착용하시면 됩니다.",
            image: require('../../assets/sample.png'), // 이미지 경로
        },
        {
            id: 2, 
            title: "여성 용품 종류",
            date: '23.04.04',
            likeCount: '188',
            text: 'content2'
        },
        {
            id: 3,
            title: "냉/생리혈 구분법",
            date: '23.04.04',
            likeCount: '200',
            text: 'content3',
        },
        {
            id: 4,
            title: "어쩌구저쩌구",
            date: '23.04.04',
            likeCount: '195',
            text: 'content3',
        },
    ]; // 컨텐츠 리스트

    function pressHandler(item) {
        navigation.navigate("Content", { title: item.title });
    }
    
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.slide}
            onPress={() => pressHandler(item)}

        >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.likeCount}>{item.likeCount}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={slideList}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
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
        left: 40,
        borderRadius: 20,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        marginBottom: 19,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 4},
        shadowRadius: 4
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
    imageWrap: {
        height: 300,
        backgroundColor: '#979797',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    likeCount: {
        position:'absolute', 
        fontSize: 14, 
        fontWeight:'bold', 
        top: 46, 
        right: 16
    }
});

export default ContentList;