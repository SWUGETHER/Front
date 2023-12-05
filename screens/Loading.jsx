import { View, Text, StyleSheet, Image } from "react-native";
import Spinner from "../assets/spinner.gif";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image source={Spinner} style={styles.spinner} />
      <View style={styles.textBox}>
        <Text>추천 결과 로드 중 ...</Text>
        <Text>잠시만 기다려주세요 ...</Text>
        <Text style={styles.desc}>
          네트워크 상태에 따라 로드 시간이 길어질 수 있습니다.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { margin: "auto", alignItems: "center", marginBottom: 150 },
  spinner: {
    resizeMode: "contain",
  },
  textBox: {
    margin: "1%",
    marginTop: 50,
    alignItems: "center",
    textAlign: "center",
  },
  desc: { fontSize: 12, marginTop: 10 },
});

export default Loading;
