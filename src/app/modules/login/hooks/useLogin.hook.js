/* eslint-disable handle-callback-err */
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import routeName from '../../../routes/routeName';
import auth from '@react-native-firebase/auth';
import {
  isEmpty,
  showAlertWithOneAction,
} from '../../../utilities/helper.utilities';
//for admin -->  user: admin@batterylow pass: admin
//for user  -->  user: user@batterylow  pass: user

const useLogin = () => {
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleChangeEmail = text => {
    setEmail(text);
  };
  const handleChangePassword = text => {
    setPassword(text);
  };
  const toggleEyeOff = () => {};
  const handleSubmit = () => {
    if (isEmpty(email) || isEmpty(password)) {
      return showAlertWithOneAction({
        title: 'something went wrong',
        body: 'Please fill up the login form correctly',
      });
    }
    if (email === 'admin@batterylow') {
      if (password === 'admin') {
        navigation.replace(routeName.dashboard, {role: 'admin'});
      }
    } else {
      handleSignIn();
    }
  };
  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        navigation.replace(routeName.dashboard, {role: 'user'});
      })
      .catch(err => {
        return showAlertWithOneAction({
          title: 'something went wrong',
          body: 'Wrong Credential',
        });
      });
  };
  return {
    handleChangeEmail,
    handleChangePassword,
    email,
    password,
    handleSubmit,
    isLoading,
    navigation,
  };
};
export default useLogin;
