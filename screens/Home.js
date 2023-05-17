import React, { useRef, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Swiper from "react-native-swiper";
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Home = () => {
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

    const handleSlidePress = (content) => {
        console.log(`Navigate to ${content}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                {/* <Text> 난 짱이다 </Text> */}
                <Image
                    source={require('../assets/sample.png')}
                    style={styles.image}
                />
            </View>
            <View>
                <Text style={{fontSize: 34, fontWeight: "bold", left: 30, top: 30}}>Contents</Text>
            </View>
            <TouchableOpacity onPress={() => console.log('Contents')}>
                <Text style={{fontSize: 16, left: 280}}> 전체보기 > </Text>
            </TouchableOpacity>
            <Swiper
                // style={styles.wrapper}
                autoplay
                autoplayTimeout={5000}
                showsPagination={false}
                ref={swiperRef}
                style={{marginLeft: 10}}
            >
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
        // resizeMode: 'cover'
        width: '100%',
        height: '100%'
    },
    wrapper: {},
    slide: {
        width: 330,
        height: 200,
        top: 30,
        left: '105%',
        borderRadius: 20,
        backgroundColor: '#D9D9D9',
        alignItems: 'center'
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

export default Home;