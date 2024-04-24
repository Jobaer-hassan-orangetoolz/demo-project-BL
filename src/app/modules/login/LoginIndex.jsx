/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import useLogin from './hooks/useLogin.hook';

const LoginIndex = () => {
  const {} = useLogin();
  // need container for screen
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 100}}>This is Login</Text>
    </View>
  );
};

export default LoginIndex;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
