import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouterIndex from './app/routes/rootRoute';
import {AppProvider} from './app/wrappers/app.wrapper';
const MainIndex = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <RouterIndex />
      </AppProvider>
    </NavigationContainer>
  );
};
export default MainIndex;
