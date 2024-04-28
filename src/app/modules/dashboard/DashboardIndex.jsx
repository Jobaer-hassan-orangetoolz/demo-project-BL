import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import routeName from '../../routes/routeName';
import notifee from '@notifee/react-native';

const DashboardIndex = ({route}) => {
  const [message, setMessage] = useState('');
  const navigation = useNavigation();
  const handleChange = text => {
    setMessage(text);
  };
  const url = 'https://fcm.googleapis.com/fcm/send';
  const submitNotification = () => {};
  const handleLogout = () => {
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
  useEffect(() => {
    reqPermission();
  }, []);
  return (
    <View style={styles.container}>
      {route?.params.role === 'admin' && (
        <View>
          <TextInput placeholder="Enter notification message" />
          <Button title="Send Notification" onPress={submitNotification} />
        </View>
      )}
      {route?.params.role === 'user' && (
        <View>
          <Text>this is user Dashboard</Text>
        </View>
      )}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};
export default DashboardIndex;
const styles = StyleSheet.create({
  container: {},
  adminContainer: {},
});
