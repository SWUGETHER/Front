import React, { useState } from 'react';
import {View, StyleSheet,KeyboardAvoidingView,Platform} from 'react-native';
import ContentHeader from './ContentHeader';
import ContentEditor from './ContentEditor';

function ContentWrite(){
    const [title, setTitle]=useState('');
    const[body,setBody]=useState('');

    return(
        <KeyboardAvoidingView style={styles.avoidingView}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.contain}>
                {/* <ContentHeader/> */}
                <ContentEditor
                    title={title}
                    body={body}
                    onChangeTitle={setTitle}
                    onChangeBody={setBody}
                />
            </View>
        </KeyboardAvoidingView>
    );
}
const styles=StyleSheet.create({
    contain:{
        flex:1,
        backgroundColor:'#D9D9D9',
    },
    avoidingView: {
        flex: 1,
    },
});
export default ContentWrite;