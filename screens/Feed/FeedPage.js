import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useLogContext } from '../Content/context/LogContext';
import FeedList from './FeedList';

function FeedPage() {
  const { logs } = useLogContext();

  return (
    <View style={styles.block}>
      <FeedList logs={logs} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedPage;
