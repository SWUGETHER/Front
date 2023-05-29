import React, { useRef, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Swiper from "react-native-swiper";
import { Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Home = () => {
    const navigation = useNavigation();
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

    const swiperRef = useRef(null);

    useEffect(() => {
        const autoAdvance = setInterval(() => {
            if (swiperRef.current) {
                const { index, total } = swiperRef.current.state;
                if (index < total - 1) {
                    swiperRef.current.scrollBy(1, true);
                } else {
                    swiperRef.current.scrollTo(0, true);
                }
            }
        }, 5000);
        
        return () => {
            clearInterval(autoAdvance);
        };
    }, []);

    function pressAllHandler(item) {
        navigation.navigate('TabNavi', { screen: '콘텐츠' });
    }

    function pressHandler(item) {
        navigation.navigate("Content", { title: item.title });
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image
                    source={require('../assets/sample.png')}
                    style={styles.image}
                />
            </View>
            <View>
                <Text style={{fontSize: 34, fontWeight: "bold", left: 40, top: 40}}>Contents</Text>
            </View>
            <TouchableOpacity onPress={pressAllHandler}>
                <Text style={{fontSize: 16, left: 300, top: 10}}> 전체보기 {">"}</Text>
            </TouchableOpacity>
            <Swiper
                autoplay
                autoplayTimeout={5000}
                showsPagination={false}
                ref={swiperRef}
            >
                {slideList.map((slide) => (
                    <TouchableOpacity
                        key={slide.id} 
                        style={styles.slide}
                        onPress={pressHandler}
                    >
                        <Text style={styles.title}>{slide.title}</Text>
                        <Text style={styles.date}>{slide.date}</Text>
                        <Text style={styles.likeCount}>{slide.likeCount}</Text>
                    </TouchableOpacity>
                ))}
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        height: windowHeight,
        width: windowWidth,
        marginTop: 30,
    },
    imageWrapper: {
        flex: 1,
        height: 300,
        backgroundColor: '#D9D9D9'
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    slide: {
        width: 330,
        height: 200,
        top: 50,
        left: 30,
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

export default Home;