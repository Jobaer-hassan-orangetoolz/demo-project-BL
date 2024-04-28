/* eslint-disable react-native/no-inline-styles */
import {Alert, View} from 'react-native';
import React, {useEffect} from 'react';
import messaging, {firebase} from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';

const AppProvider = ({children}) => {
  //   async function requestNotificationPermission() {
  //     try {
  //       const authStatus = await messaging().requestPermission();
  //       const enabled =
  //         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //         authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //       if (enabled) {
  //         console.log('Authorization status:', authStatus);
  //       }
  //     } catch (error) {
  //       console.error('Error requesting notification permission:', error);
  //     }
  //   }
  async function subscribeUsersToTopic() {
    await firebase.messaging().subscribeToTopic('notification');
  }
  const displayNotification = async remoteMessage => {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    const {notification} = remoteMessage;
    // Display a notification
    await notifee.displayNotification({
      title: notification.title,
      body: notification.body,
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    });
  };
  useEffect(() => {
    subscribeUsersToTopic();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      await displayNotification(remoteMessage);
    });
    return unsubscribe;
  }, []);
  return <View style={{flex: 1}}>{children}</View>;
};

export {AppProvider};
