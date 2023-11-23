import React, { useState, useEffect } from "react";
import { Alert, View, Image, StyleSheet, Text } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useFocusEffect } from "@react-navigation/native";
import { Dimensions } from "react-native";
//import CameraButton from "../UI/CameraButton";
import axios from "axios";
import extractData from "../API/ocr/extractData";
import { useNavigation } from "@react-navigation/native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function Camera() {
  const navigation = useNavigation();
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  const [capturedImage, setCapturedImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

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
        cropData: { offset: { x: 0, y: 0 }, size: { width: windowWidth, height: windowWidth } },
      });

      if (!image.canceled) {
        const selectedAssetUri = image.assets[0].uri;
        setCapturedImage(selectedAssetUri);
        uploadImage(selectedAssetUri);
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
      const uploadedImageUrl = response.data.imageUrl;

      navigation.navigate("CameraText", { data: response.data });
      setUploadedImageUrl(uploadedImageUrl);
    } catch (error) {
      console.log("Image upload error:", error);
    }
  }

  async function fetchData() {
    try {
      const response = await axios.get("/image");
      setFetchedData(response.data);
    } catch (error) {
      console.log("Data fetch error:", error);
    }
  }
  return (
    <View style={styles.container}>
      {capturedImage && (
        <Image
          source={{ uri: capturedImage }}
          style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'contain' }}
        />
      )}
      {uploadedImageUrl && (
        <Image
          source={{ uri: uploadedImageUrl }}
          style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'contain' }}
        />
      )}
      {fetchedData && <Text>{fetchedData}</Text>}
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
  imageScan: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
