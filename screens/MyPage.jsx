import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Font from "expo-font";

export default function MyPage() {
  const [isReady, setIsReady] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(true);

  React.useEffect(() => {
    // font
    const getFont = async () => {
      await Font.loadAsync({
        Inter: require("../assets/fonts/Inter-Regular.ttf"),
      }).then(() => {
        setIsReady(true);
      });
    };

    // 관리자 여부 체크

    getFont();
  }, []);

  return (
    <View style={styles.container}>
      {isReady && (
        <View>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>기타</Text>
          </View>
          <View>
            <View style={styles.listWrapper}>
              <Text onPress={() => console.log("pressed")}>
                1:1 문의하기 {">"}
              </Text>
              <Text>공지사항 {">"}</Text>
              <View style={styles.versionContainer}>
                <View style={styles.updateWrapper}>
                  <Text>최신버전 업데이트 {">"}</Text>
                  <Text style={styles.newVersion}>최신버전: {`23.15.0`}</Text>
                </View>
                <Text style={styles.version}>{`23.14.0(231400)`}</Text>
              </View>
            </View>
            {isAdmin ? (
              <View style={styles.adminMenuWrapper}>
                <View style={styles.titleWrapper}>
                  <Text style={styles.title}>내가 쓴 글</Text>
                </View>
                <View style={styles.listWrapper}>
                  <Text>내가 쓴 글 {">"}</Text>
                </View>
              </View>
            ) : (
              <View style={styles.space}></View>
            )}
            <View style={styles.logoutContainer}>
              <View style={styles.logoutWrapper}>
                <Text style={styles.logout}>LOGOUT</Text>
              </View>
            </View>
            <View style={styles.leaveWrapper}>
              <Text style={styles.leave}>회원탈퇴</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 31,
    marginLeft: 17,
    marginRight: 17,
  },
  titleWrapper: {
    paddingBottom: 11,
    borderBottomColor: "#979797",
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  title: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: 20,
    lineHeight: 24,
    color: "black",
  },
  listWrapper: {
    flexDirection: "column",
    gap: 26,
    marginTop: 32,
  },
  versionContainer: {
    flexDirection: "row",
  },
  updateWrapper: {},
  newVersion: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 10,
    lineHeight: 12,
    color: "#979797",
  },
  version: {
    fontFamily: "Inter",
    marginLeft: "auto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 13,
    lineHeight: 16,
    textAlign: "center",
    color: "black",
  },
  adminMenuWrapper: {
    marginTop: 40,
    marginBottom: 30,
  },
  space: {
    height: 160,
  },
  logoutContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoutWrapper: {
    width: 328,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    marginBottom: 16,
  },
  logout: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 20,
    lineHeight: 24,
    color: "black",
  },
  leaveWrapper: {
    paddingTop: 9,
    borderTopColor: "#979797",
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  leave: {
    fontFamily: "Inter",
    textDecorationLine: "underline",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: 500,
  },
});
