//사용자가 카메라를 열 수 있는 버튼 표시
//이미지 미리보기 표시
import * as React from 'react';
import {Alert, View,Button} from 'react-native';
import {launchCameraAsync,useCameraPermissions,PermissionStatus} from 'expo-image-picker';
//import { Colors } from 'react-native/Libraries/NewAppScreen';

function Camera() {
    const [cameraPermissionInformation,requerstPermission]=useCameraPermissions();
    //카메라 사용 권한 확인
    async function verifyPermissions(){
        if(cameraPermissionInformation.status===PermissionStatus.UNDETERMINED){
            const permissionResponse= await requerstPermission();

            return permissionResponse.granted;
        }
        if(cameraPermissionInformation.status===PermissionStatus.DENIED){
            Alert.alert('접근 권한이 없습니다.','이 앱을 사용하려면 카메라 권한이 필요합니다.');
            return false;            
        }
        return true;
    }

    async function takeImageHandler(){
        const hasPermission= await verifyPermissions();
        if(!hasPermission){
            return;
        }

        const image= await launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality:0.5,
        });
        console.log(image);
    }
    return (
        <View>
             
            <View>
            </View>
            
            <Button 
                title="카메라 촬영"
                onPress={takeImageHandler}
                color={"#35363A"}   
            />
           
        </View>
        
    );
}
export default Camera;