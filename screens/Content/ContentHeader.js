import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { Pressable,StyleSheet,View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import WriteCircleButton from "../../UI/WriteCircleButton";
import ContentWrite from "./ContentWrite";


function ContentHeader({onSave}){
    const navigation=useNavigation();
    const onGoBack=()=>{
        navigation.pop();
    };
    return(
        <View style={styles.contain}>
            <View style={styles.iconBtnWrap}>
                <WriteCircleButton
                    onPress={onGoBack}
                    name="arrow-back"
                    color="#000000" 
                />
            </View>
            
            <View style={styles.btns}>
                    <WriteCircleButton
                        name="delete-forever"
                        color="#000000"
                        hasMarginRight 
                    />
                    <WriteCircleButton 
                        name="check"
                        color="#000000" 
                        onPress={onSave}
                    />
            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    contain:{
        height: 48,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btns:{
        flexDirection:'row',
        alignItems:'center',
    },
});
export default ContentHeader;
