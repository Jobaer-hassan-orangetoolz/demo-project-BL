/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import routeName from '../../routes/routeName';

const Splash = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(routeName.login);
    }, 2000);
  }, []);
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.Text
        style={{
          opacity: fadeAnim,
          fontSize: 24,
          textAlign: 'center',
        }}>
        Demo Project
      </Animated.Text>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {},
});
