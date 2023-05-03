import React, { useEffect } from "react";
import * as Google from "expo-auth-session/providers/google";
import { StyleSheet, Button } from "react-native";
import {
  GOOGLE_OAUTH_CLIENT_ID_EXPO,
  GOOGLE_OAUTH_CLIENT_ID_ANDROID,
  GOOGLE_OAUTH_CLIENT_ID_WEB,
} from "react-native-dotenv";

const Login = () => {
  console.log("dd");
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: GOOGLE_OAUTH_CLIENT_ID_EXPO,
    androidClientId: GOOGLE_OAUTH_CLIENT_ID_ANDROID,
    webClientId: GOOGLE_OAUTH_CLIENT_ID_WEB,
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log(authentication);
    }
  }, [response]);

  return (
    <Button
      style={styles.button}
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        console.log("pressed");
      }}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    color: "#242422",
  },
});

export default Login;
