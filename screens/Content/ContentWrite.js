import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import ContentHeader from './ContentHeader';
import ContentEditor from './ContentEditor';
import LogContext from './context/LogContext';


function ContentWrite() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const navigation = useNavigation();

  // LogContext에서 onCreate 함수 가져오기
  const logContext = useContext(LogContext);
  const { onCreate } = logContext;

  const onSave = () => {
    onCreate({
      title,
      body,
      date: new Date().toISOString(),
    });
    navigation.pop();
  };

  return (
    <KeyboardAvoidingView
      style={styles.avoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ContentHeader onSave={onSave} />
      <ContentEditor
        title={title}
        body={body}
        onChangeTitle={setTitle}
        onChangeBody={setBody}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  avoidingView: {
    flex: 1,
  },
});

export default ContentWrite;
