import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Chat = () => {
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
      <Text>Screen1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Chat;
