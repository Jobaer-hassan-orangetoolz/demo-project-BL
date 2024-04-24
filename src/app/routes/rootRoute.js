import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routeName from './routeName';
import React from 'react';
import Splash from '../modules/splash/Splash';
import LoginIndex from '../modules/login/LoginIndex';
const RouterIndex = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator initialRouteName={routeName.splash}>
      <stack.Screen name={routeName.splash} component={Splash} />
      <stack.Screen name={routeName.login} component={LoginIndex} />
    </stack.Navigator>
  );
};
export default RouterIndex;
