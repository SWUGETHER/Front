import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Result = ({ data }) => {
  const navigation = useNavigation();
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    const generateDummyData = () => {
      const data = [
        { id: 1, result: "바디피트 볼록맞춤 소형" },
        { id: 2, result: "좋은느낌 오리지널 입는 오버나이트 대형" },
        { id: 3, result: "순수한면 ZERO 생리대 중형" },
        { id: 4, result: "후아 내추럴 순면커버 생리대 컴포트 중형" },
        { id: 5, result: "후아 내추럴 순면커버 생리대 컴포트 대형" },
      ];
      return data;
    };

    // 처음 5개의 데이터만 선택
    const dummyData = generateDummyData().slice(0, 5);

    // 더미 데이터 초기화_랜덤으로 넣을지 말지 고민즁!
    if (data) {
      setResultData(data);
    } else {
      setResultData(dummyData);
    }
  }, []);

  const navigateToHome = () => {
    // home.js로 이동
    navigation.popToTop();
  };

  const handleResultPress = (result) => {
    // 각 결과값을 눌렀을 때의 동작 추가
    console.log(`Selected result: ${result}`);
    // 쿠팡으로 이동하고 싶었지만 실패
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.resultHeaderText}>성분 분석 추천 결과</Text>
        {resultData.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.resultItemContainer}
            onPress={() => handleResultPress(item)}
          >
            <Text key={idx} style={styles.resultItem}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity onPress={navigateToHome} style={styles.button}>
          <Text style={styles.buttonText}>추천 성분</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  resultHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  resultItemContainer: {
    width: 400,
    marginBottom: 10,
    padding: 30,
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
  },
  resultItem: {
    fontSize: 18,
    color: "black",
  },
  button: {
    backgroundColor: "#979797",
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Result;
