// import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
// import React from 'react';
// import useLogin from './hooks/useLogin.hook';
// import routeName from '../../routes/routeName';

// const LoginIndex = () => {
//   const {
//     handleChangeEmail,
//     handleChangePassword,
//     handleSubmit,
//     email,
//     password,
//     navigation,
//   } = useLogin();
//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Enter your username"
//         onChangeText={handleChangeEmail}
//         defaultValue={email}
//         value={email}
//       />
//       <TextInput
//         placeholder="Enter your password"
//         onChangeText={handleChangePassword}
//         defaultValue={password}
//       />
//       <Button title="Login" onPress={handleSubmit} />
//       <Button
//         title="Registration"
//         onPress={() => {
//           navigation.navigate(routeName.registration);
//         }}
//       />
//     </View>
//   );
// };

// export default LoginIndex;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
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
  } = useLogin();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        onChangeText={handleChangeEmail}
        defaultValue={email}
        value={email}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        onChangeText={handleChangePassword}
        defaultValue={password}
        secureTextEntry={true}
        style={styles.input}
      />
      <Button title="Login" onPress={handleSubmit} />
      <Button
        title="Register"
        onPress={() => navigation.navigate(routeName.registration)}
        style={styles.button}
      />
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
    borderRadius: 5,
  },
  button: {
    marginTop: 10,
  },
});
