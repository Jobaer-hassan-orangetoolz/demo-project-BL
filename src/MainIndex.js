import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouterIndex from './app/routes/rootRoute';
import {MenuProvider} from 'react-native-popup-menu';
const MainIndex = () => {
  return (
    <NavigationContainer>
      <MenuProvider>
        <RouterIndex />
      </MenuProvider>
    </NavigationContainer>
  );
};
export default MainIndex;
