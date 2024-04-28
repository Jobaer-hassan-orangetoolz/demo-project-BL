/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import routeName from '../../routes/routeName';
import notifee from '@notifee/react-native';
import {showAlertWithOneAction} from '../../utilities/helper.utilities';
import messaging, {firebase} from '@react-native-firebase/messaging';
const logo = require('../../../images/bl.png');
const DashboardIndex = ({route}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const url = 'https://fcm.googleapis.com/fcm/send';
  const submitNotification = async () => {
    setIsLoading(true);
    try {
      const apiKey =
        'AAAA-OeltAs:APA91bGNf8XqAdLPdTzfZCJOKDU-RYnSx6lrJO8oZjwXzYAl7YZgPwUt1tgxc_l3q_d7cB-elODLZ4t9IPc2wikgyKMHK6RihLdxxSnys8FvIbNYhCevm0dvkQZ-hh5Uu8MGs-v1DOvY';
      const payload = {
        to: '/topics/newNotificationTopic',
        notification: {
          body: body,
          title: title,
        },
      };
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `key=${apiKey}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response) {
        setIsLoading(false);
        return showAlertWithOneAction({
          title: 'Something went wrong',
          body: 'please try again!',
        });
      }
      setIsLoading(false);
      return showAlertWithOneAction({
        title: 'Success',
        body: 'Notification send successfully.',
      });
    } catch (error) {
      setIsLoading(false);
      return showAlertWithOneAction({
        title: 'Something went wrong',
        body: `Error Sending notification ${error}`,
      });
    }
  };
  const unregisterFirebase = async () => {
    try {
      await messaging().deleteToken();
    } catch (_) {
      return '';
    }
  };
  const handleLogout = () => {
    if (route?.params.role === 'admin') {
      navigation.replace(routeName.login);
      return;
    }
    auth()
      .signOut()
      .then(() => {
        navigation.replace(routeName.login);
      })
      .catch(error => {
        console.error('Error signing out user:', error);
      });
  };
  const reqPermission = async () => {
    await notifee.requestPermission();
  };
  async function subscribeUsersToTopic() {
    await firebase.messaging().subscribeToTopic('newNotificationTopic');
  }
  useEffect(() => {
    reqPermission();
    if (route?.params?.role === 'admin') {
      unregisterFirebase();
    } else if (route?.params.role === 'user') {
      subscribeUsersToTopic();
    }
  }, []);
  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
      {route?.params.role === 'admin' && (
        <View>
          <View
            style={{
              width: 300,
              borderWidth: 1,
              borderColor: 'black',
              marginBottom: 20,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Enter notification title"
              onChangeText={t => setTitle(t)}
            />
          </View>

          <View
            style={{
              width: 300,
              borderWidth: 1,
              borderColor: 'black',
              marginBottom: 20,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Enter notification body"
              onChangeText={t => setBody(t)}
            />
          </View>
          <Button
            title="Send Notification"
            onPress={submitNotification}
            borderRadius="20"
          />
        </View>
      )}
      {route?.params.role === 'user' && (
        <View
          style={{
            marginBottom: 250,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 15,
          }}>
          <Text style={{fontSize: 30, textAlign: 'center'}}>
            Hello ! this a dummy user dashboard page!
          </Text>
          <Image source={logo} />
        </View>
      )}
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          padding: 10,
          borderWidth: 1,
          borderColor: 'black',
          width: 200,
          borderRadius: 20,
          backgroundColor: 'red',
          bottom: 0,
        }}>
        <Text style={{fontSize: 18, textAlign: 'center', color: 'white'}}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default DashboardIndex;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  adminContainer: {},
});
