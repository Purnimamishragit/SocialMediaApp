import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Login, Signup, WelcomeScreen } from './Screens.jsx'; // assuming Screens.jsx contains these components
export default function App() {
  return (
     //<WelcomeScreen />
     //<Signup />
     <Login />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
