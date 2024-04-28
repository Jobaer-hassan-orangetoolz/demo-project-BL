/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {showAlertWithOneAction} from '../../utilities/helper.utilities';

const RegistrationIndex = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(false);
  const handleChangeEmail = text => {
    setEmail(text);
  };
  const handleChangePassword = text => {
    setPassword(text);
  };
  const handleRegister = async () => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.goBack();
        setLoading(false);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setLoading(false);
          showAlertWithOneAction({
            title: 'something wrong',
            body: 'That email address is already in use!',
          });
        }

        if (error.code === 'auth/invalid-email') {
          setLoading(false);
          showAlertWithOneAction({
            title: 'something wrong',
            body: 'That email address is invalid!',
          });
        }

        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size={'large'} />}

      <TextInput
        placeholder="Email"
        onChangeText={handleChangeEmail}
        defaultValue={email}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        onChangeText={handleChangePassword}
        defaultValue={password}
        secureTextEntry={true}
        style={styles.input}
        autoCapitalize="none"
      />
      <TouchableOpacity
        onPress={handleRegister}
        style={{
          padding: 10,
          borderWidth: 1,
          borderColor: 'black',
          width: 200,
          borderRadius: 20,
          backgroundColor: 'indigo',
          marginBottom: 20,
        }}>
        <Text style={{fontSize: 18, textAlign: 'center', color: 'white'}}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default RegistrationIndex;
const styles = StyleSheet.create({
  input: {
    width: '80%',
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
