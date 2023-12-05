import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text, Alert } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useFocusEffect } from "@react-navigation/native";
import { Dimensions } from "react-native";
import axios from "axios";
import extractData from "../API/ocr/extractData";
import { useNavigation } from "@react-navigation/native";
import Result from "./Result";
import Loading from "./Loading";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function Camera() {
  const navigation = useNavigation();
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  const [result, setResult] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      takeImageHandler();
      return () => {
        // 화면 벗어날 때 필요한 정리 작업 수행
      };
    }, [])
  );

  async function verifyPermissions() {
    if (!cameraPermissionInformation) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "접근 권한이 없습니다.",
        "이 앱을 사용하려면 카메라 권한이 필요합니다."
      );
      return false;
    }
    return true;
  }

  async function takeImageHandler() {
    try {
      const hasPermission = await verifyPermissions();
      if (!hasPermission) {
        return;
      }

      const image = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
        cropData: {
          offset: { x: 0, y: 0 },
          size: { width: windowWidth, height: windowWidth },
        },
      });

      if (!image.canceled) {
        const selectedAssetUri = image.assets[0].uri;
        uploadImage(selectedAssetUri);
      } else {
        navigation.navigate("Home");
      }
    } catch (error) {
      console.log("Camera capture error:", error);
    }
  }

  async function uploadImage(uri) {
    try {
      const formData = new FormData();
      formData.append("file", {
        uri: uri,
        name: "image.jpg",
        type: "image/jpg",
      });

      const response = await extractData(formData);

      if (response && response.data) {
        setResult(response.data);
      } else {
        console.log("Invalid response format or missing data:", response);
        navigation.navigate("Home");
      }
    } catch (error) {
      console.log("Image upload error:", error);
      navigation.navigate("Home");
    }
  }

  // // 10초 후에 페이지로 자동 이동하도록
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.navigate("Result");
  //   }, 10000);

  //   return () => clearTimeout(timer);
  // }, [navigation]);

  return (
    <View style={styles.container}>
      {
        // result 존재 여부에 따라 Result 페이지 / 로딩 페이지
        result ? <Result data={result} /> : <Loading />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth,
    height: windowHeight,
  },
});
