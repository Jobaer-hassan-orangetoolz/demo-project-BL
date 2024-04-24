import {Button, StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import ChildForwardRef from './ChildForwardRef';
const ParentForwardRef = () => {
  const inputRef = useRef(null);
  // useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, []);
  const handleClick = () => {
    inputRef.current.alo();
  };
  // parent er ref er maddhome child e declared ref k modify korar jonno written function k call kora hoy forward ref diye.
  return (
    <View style={styles.container}>
      <ChildForwardRef ref={inputRef} />
      <Button title="submit" onPress={handleClick} />
    </View>
  );
};
export default ParentForwardRef;
const styles = StyleSheet.create({
  container: {gap: 30},
  input: {backgroundColor: 'grey'},
});
