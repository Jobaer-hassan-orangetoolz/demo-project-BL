// import React from 'react';
// import {StyleSheet, View, Platform, StatusBar} from 'react-native';
// const CustomStatusBar: React.FC<any> = ({
//   barStyle = StatusBar.dark,
//   showHeader = true,
//   bgColor = colors.transparent,
//   extraHeight = 0,
// }) => {
//   const {top} = customUseSafeAreaInsets();
//   const statusBarProps: any = {barStyle: barStyle};
//   const style = styles(top, bgColor, extraHeight);
//   if (Platform.OS === 'android') {
//     statusBarProps.translucent = true;
//     statusBarProps.backgroundColor = bgColor;
//   }
//   if (!showHeader) {
//     if (Platform.OS === 'android') {
//       statusBarProps.backgroundColor = colors.transparent;
//     }
//     return <StatusBar {...statusBarProps} />;
//   }
//   return (
//     <View style={style.container}>
//       <StatusBar {...statusBarProps} />
//     </View>
//   );
// };
// export default CustomStatusBar;

// const styles = (height: any, bgColor: any, extraHeight: any) =>
//   StyleSheet.create({
//     container: {
//       backgroundColor: bgColor,
//       paddingBottom: height + extraHeight,
//     },
//   });
