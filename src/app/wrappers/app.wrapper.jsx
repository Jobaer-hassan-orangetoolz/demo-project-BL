// import React, {createContext} from 'react';
// import {useCustomNavigation} from '../packages/navigation.package';
// import {storeLocalData} from '../packages/asyncStorage/storageHandle';
// import {screens} from '../routes/routeName.route';
// import {globalStyles} from '../assets/styles/global.style.asset';
// import {View} from 'react-native';
// import Internet from '../layouts/Internet.layout';
// import CallOverlay from '../layouts/CallOverlay.layout';

// const AppContext = createContext({});

// const AppProvider = ({children}) => {
//   const navigation = useCustomNavigation();
//   global.logout = async () => {
//     await storeLocalData.removeCacheForLogout();
//     navigation.navigate(screens.login);
//   };
//   /* get data from redux */
//   const isCallActive = true;
//   const isCallScreen = true;
//   return (
//     <AppContext.Provider value={null}>
//       <View style={globalStyles.flex1}>
//         {!isCallActive && <Internet />}
//         {!isCallScreen && <CallOverlay />}
//         {children}
//       </View>
//     </AppContext.Provider>
//   );
// };

// export {AppProvider};
