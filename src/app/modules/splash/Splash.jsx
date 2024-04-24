/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 100}}>Notification Project</Text>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {},
});
