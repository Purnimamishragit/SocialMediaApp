import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Create = () => {
  return (
    <View style={styles.container}>
      <Text>Create Screen</Text>
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

export default Create;
