/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import useLogin from './hooks/useLogin.hook';
import routeName from '../../routes/routeName';

const LoginIndex = () => {
  const {
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
    email,
    password,
    navigation,
    isLoading,
  } = useLogin();

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size={'large'} />}
      <Text style={{fontSize: 60, color: 'purple', marginBottom: 60}}>
        Login!
      </Text>
      <TextInput
        placeholder="Username"
        onChangeText={handleChangeEmail}
        defaultValue={email}
        value={email}
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
        onPress={handleSubmit}
        style={{
          padding: 10,
          borderWidth: 1,
          borderColor: 'black',
          width: 200,
          borderRadius: 20,
          backgroundColor: 'blue',
          marginBottom: 20,
        }}>
        <Text style={{fontSize: 18, textAlign: 'center', color: 'white'}}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(routeName.registration)}
        style={{
          padding: 10,
          borderWidth: 1,
          borderColor: 'black',
          width: 200,
          borderRadius: 20,
          backgroundColor: 'green',
        }}>
        <Text style={{fontSize: 18, textAlign: 'center', color: 'white'}}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  button: {
    marginTop: 10,
  },
});
