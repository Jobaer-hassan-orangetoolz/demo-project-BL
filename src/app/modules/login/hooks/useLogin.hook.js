/* eslint-disable handle-callback-err */
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import routeName from '../../../routes/routeName';
import auth from '@react-native-firebase/auth';
import {
  isEmpty,
  showAlertWithOneAction,
} from '../../../utilities/helper.utilities';

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
  const handleSubmit = () => {
    if (isEmpty(email) || isEmpty(password)) {
      return showAlertWithOneAction({
        title: 'something went wrong',
        body: 'Please fill up the login form correctly',
      });
    }
    setLoading(true);
    if (email === 'admin@batterylow') {
      if (password === 'admin') {
        setLoading(false);
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
        setLoading(false);
        navigation.replace(routeName.dashboard, {role: 'user'});
      })
      .catch(err => {
        setLoading(false);
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
