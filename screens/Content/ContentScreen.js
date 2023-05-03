import { useState } from 'react';
import { FlatList, StyleSheet, ActivityIndicator} from "react-native";
import ContentSection from './ContentSection';
// import { Like } ㅇfrom '../assets/like.png';

const ContentScreen = () => {
    const [liked, setLiked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const data = [
        { title: '생리대 착용 방법', date: '23.04.05', likeCount: '203'},
        { title: '여성 용품 종류', date: '23.04.04', likeCount: '188'},
        { title: '냉/생리혈 구분법', date: '23.04.04', likeCount: '200'},
        { title: '어쩌구저쩌구', date: '23.03.01', likeCount: '195'},
    ]

    const getData = async () => {
        // NotNextContent = 이전의 데이터 4개를 못 받아오면 true
        if ( content.length >= 4 && !notNextContent ) {
            setLoading(true);
            await DataFetch();
            setLoading(false);
        }
    }

    const onEndReached = () => {
        if (!loading) {
            getData();
        }
    }

    const getRefreshData = async () => {
        setRefreshing(true);
        await RefreshDataFetch();
        setRefreshing(false);
    }

    const onRefresh = () => {
        if (!refreshing) {
            getRefreshData();
        }
    }

    return (
        <FlatList
            onRefresh={onRefresh}
            refreshing={refreshing}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.6}
            ListFooterComponent={loading && <ActivityIndicator />}
            data={data}
            keyExtractor={(_) => _.title}
            style={styles.container}
            renderItem={(({ item }) => {
                const { title, date, likeCount } = item;
                return (
                    <ContentSection title={title} date={date} likeCount={likeCount}/>
                )
            })}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default ContentScreen;