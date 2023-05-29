import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Image, ImageBackground, FlatList } from "react-native";
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

function Content() {
    const [count, setCount] = useState(0);
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
        // {
        //     id: 2,
        //     title: "여성 용품 종류",
        //     date: '23.04.04',
        //     likeCount: '188',
        //     text: 'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ',
        //     image: require('../../assets/sample.png'), // 이미지 경로
        // },
        // {
        //     id: 3,
        //     title: "냉/생리혈 구분법",
        //     date: '23.04.04',
        //     likeCount: '200',
        //     text: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ',
        //     image: require('../../assets/sample.png'), // 이미지 경로
        // },
        // {
        //     id: 4,
        //     title: "어쩌구저쩌구",
        //     date: '23.04.04',
        //     likeCount: '195',
        //     text: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ',
        //     image: require('../../assets/sample.png'), // 이미지 경로
        // },
    ]; // 컨텐츠 리스트

    const renderContentItem = ({ item }) => {
        return (
            <View style={styles.contentItemContainer}>
                <ImageBackground
                    source={item.image}
                    style={styles.image}
                >
                </ImageBackground>
                <View style={styles.contentTextContainer}>
                    <TouchableOpacity style={styles.likeButton}>
                        <ImageBackground
                            source={require('../../assets/tabNavi/likes_inactive.png')}
                            style={styles.likeBackground}
                        >
                        <Text style={styles.countText}>{count}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.controlTextWrapper}>
                        <Text style={styles.date}>{item.date}</Text>
                        <Text style={styles.controlText}>{"|"}</Text>
                        <TouchableOpacity onPress={() => console.log("수정 press")}>
                            <Text style={styles.controlText}>수정</Text>
                        </TouchableOpacity>
                        <Text style={styles.controlText}>{"|"}</Text>
                        <TouchableOpacity onPress={() => console.log("삭제 press")}>
                            <Text style={styles.controlText}>삭제</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line} />
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={slideList}
                renderItem={renderContentItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.flatlistContentContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
    },
    flatlistContentContainer: {
        
        paddingBottom: 40,
    },
    contentItemContainer: {
        marginBottom: 24,
    },
    image: {
        width: '100%',
        height: 300,
    },
    likeButton: {
        width: 60,
        height: 60,
        position: 'absolute',
        left: 320,
        top: -5,
    },
    likeBackground: {
        width: 36,
        height: 36,
    },
    countText: {
        textAlign: 'center',
        fontSize: 12,
        top: 38
    },
    contentTextContainer: {
        paddingHorizontal: 16,
        marginTop: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    controlTextWrapper: {
        flexDirection: 'row',
        marginTop: 8,
        fontSize: 12,
    },
    date: {
        fontSize: 12,
    },
    controlText: {
        marginLeft: 8,
        fontSize: 12,
    },
    line: {
        marginTop: 8,
        borderTopColor: "#979797",
        borderTopWidth: 2,
        borderStyle: "solid",
    },
    text: {
        marginTop: 10,
        fontSize: 18,
    },
});

export default Content;
