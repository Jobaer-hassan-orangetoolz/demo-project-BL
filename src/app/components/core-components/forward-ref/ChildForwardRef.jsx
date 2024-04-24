import {StyleSheet, TextInput, View} from 'react-native';
import React, {forwardRef, useImperativeHandle, useRef} from 'react';
const ChildForwardRef = forwardRef((props, ref) => {
  const childRef = useRef(null);
  useImperativeHandle(ref, () => ({
    alo: () => {
      childRef.current.focus();
      console.log('hello');
    },
  }));
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} ref={childRef} />
    </View>
  );
});
export default ChildForwardRef;
const styles = StyleSheet.create({
  container: {},
});
