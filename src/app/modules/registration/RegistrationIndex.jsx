import React, {useState} from 'react';
import {ActivityIndicator, Button, TextInput, View} from 'react-native';
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
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={handleChangeEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={handleChangePassword}
      />
      <Button title="Register" onPress={handleRegister} />
      {isLoading && <ActivityIndicator size={'large'} />}
    </View>
  );
};
export default RegistrationIndex;
