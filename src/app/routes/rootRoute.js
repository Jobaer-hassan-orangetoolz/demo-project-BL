import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routeName from './routeName';
import React from 'react';
import Splash from '../modules/splash/Splash';
import LoginIndex from '../modules/login/LoginIndex';
import DashboardIndex from '../modules/dashboard/DashboardIndex';
import RegistrationIndex from '../modules/registration/RegistrationIndex';
const RouterIndex = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator initialRouteName={routeName.splash}>
      <stack.Screen
        name={routeName.splash}
        component={Splash}
        options={{headerShown: false}}
      />
      <stack.Screen name={routeName.login} component={LoginIndex} />
      <stack.Screen name={routeName.dashboard} component={DashboardIndex} />
      <stack.Screen
        name={routeName.registration}
        component={RegistrationIndex}
      />
    </stack.Navigator>
  );
};
export default RouterIndex;
