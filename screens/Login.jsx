import React, { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import { StyleSheet, Pressable, View, Text, Image } from "react-native";
import googleNormal from "../assets/google_oauth_normal.png";
import * as Font from "expo-font";
import {
  GOOGLE_OAUTH_CLIENT_ID_EXPO,
  GOOGLE_OAUTH_CLIENT_ID_ANDROID,
} from "react-native-dotenv";

const Login = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: GOOGLE_OAUTH_CLIENT_ID_EXPO,
    androidClientId: GOOGLE_OAUTH_CLIENT_ID_ANDROID,
    responseType: "id_token",
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log(authentication);
    }
  }, [response]);

  useEffect(() => {
    const getFont = async () => {
      await Font.loadAsync({
        Roboto: require("../assets/fonts/Roboto-Medium.ttf"),
      });
    };

    getFont();
    setIsReady(true);
  }, []);

  return (
    <View style={styles.container}>
      {isReady && (
        <View style={styles.loginBtnWrapper}>
          <Pressable
            style={styles.button}
            disabled={!request}
            onPress={() => {
              promptAsync();
            }}
          >
            <Image source={googleNormal} style={styles.google_logo} />
            <Text style={styles.loginTitle}>Sign in with Google</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  loginBtnWrapper: {
    flex: 1,
  },
  button: {
    backgroundColor: "#4285F4",
    height: 36,
    margin: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  google_logo: {
    height: 36,
    width: 36,
    marginRight: 24,
  },
  loginTitle: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 14,
  },
});

export default Login;
