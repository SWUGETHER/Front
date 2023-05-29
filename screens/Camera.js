import React, { useState } from 'react';
import { Alert, View, Image, StyleSheet } from 'react-native';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { useFocusEffect } from '@react-navigation/native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Camera() {
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
    const [capturedImage, setCapturedImage] = useState(null);

    // 카메라 사용 권한 확인
    async function verifyPermissions() {
        if (!cameraPermissionInformation) {
        // 값이 null인 경우, 초기 상태일 때이므로 권한을 요청합니다.
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }

        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }

        if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('접근 권한이 없습니다.', '이 앱을 사용하려면 카메라 권한이 필요합니다.');
            return false;
        }
        return true;
    }

    // 컴포넌트가 화면에 포커스 되는 시점에 함수 호출
    useFocusEffect(
        React.useCallback(() => {
            takeImageHandler();
            return () => {
                // 화면 벗어날 때 필요한 정리 작업 수행
            };
        }, [])
    );
    

    async function takeImageHandler() {
        try {
            const hasPermission = await verifyPermissions();
            if (!hasPermission) {
                return;
            }

            // 카메라 열고 이미지 캡쳐
            const image = await launchCameraAsync({
                allowsEditing: true,
                aspect: [16, 9],
                quality: 0.5,
            });
            // 캡쳐한 정보 반환
            if (!image.canceled) {
                setCapturedImage(image.uri);
            }
        } catch (error) {
            console.log('Camera capture error:', error);
        }
    }
    return (
        <View style={styles.container}>
            {capturedImage && <Image source={{ uri: capturedImage }} style={styles.imageScan} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth,
        height: windowHeight
    },
    imageScan: {
        flex: 1,
        width: '100%',
        height: '100%'
    }
});