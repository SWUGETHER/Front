import React,{useRef} from 'react';
import { TextInput,StyleSheet,View } from 'react-native';

function ContentEditor({title,body,onChangeTitle,onChangeBody}){

    const writeRef=useRef()

    return(
        <View style={styles.contain}>
            <TextInput
                placeholder="글의 주제를 입력해주세요"
                style={styles.titleInput}
                returnKeyType="next"
                onChangeText={onChangeTitle}
                value={title}
                //enter로 내용 조정
                onSubmitEditing={()=>{
                    writeRef.current.focus()
                }}
            />
            <TextInput
                placeholder="새로운 정보를 입력해주세요"
                style={styles.bodyInput}
                multiline
                textAlignVertical="top"
                onChangeText={onChangeBody}
                value={body}
                ref={writeRef}
            
            />
        </View>
    );
}
export default ContentEditor;

const styles=StyleSheet.create({
    contain:{flex:1,padding:16},
    titleInput:{
        paddingVertical: 0,
        fontSize: 18,
        marginTop:16,
        marginLeft:16,
        marginBottom: 16,
        color: "#000000",
        fontWeight: "bold",
    },
    bodyInput:{
        flex: 1,
        fontSize: 16,
        marginLeft:16,
        marginTop:8,
        paddingVertical: 0,
        color: "#000000",
    }
})