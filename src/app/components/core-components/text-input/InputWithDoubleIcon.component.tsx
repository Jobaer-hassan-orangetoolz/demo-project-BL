import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import EyeOffIcon from '../../assets/icons/EyeOff.icon.asset';
import EyeOnIcon from '../../assets/icons/EyeOn.icon.asset';

const InputWithDoubleIcon: React.FC = ({
  onChangeText = () => {},
  rightIcon,
  leftIcon,
  disabledLeft = true,
  disableRight = false,
  handlePressLeft = () => {},
  handlePressRight = () => {},
  multiline = false,
  extraInputProps = {},
  placeholder = 'write here',
  name,
  type = 'normal',
  value,
  defaultValue,
  inputRef,
}: any) => {
  const [isShowPass, setIsShowPass] = useState(false);
  const handleOnChange = (text: string) => {
    if (name && name?.trim() !== '') {
      onChangeText(text, name);
    } else {
      onChangeText(text, undefined);
    }
  };
  const togglePassIcon = () => {
    setIsShowPass(!isShowPass);
  };

  return (
    <View style={styles.container}>
      {leftIcon && type === 'normal' && (
        <TouchableOpacity
          onPress={handlePressLeft}
          style={styles.icon}
          disabled={disabledLeft}>
          {leftIcon}
        </TouchableOpacity>
      )}

      <TextInput
        onChangeText={handleOnChange}
        style={styles.inputStyle}
        placeholder={placeholder}
        multiline={multiline}
        value={value?.toString()}
        defaultValue={defaultValue?.toString()}
        ref={inputRef}
        // onFocus={}
        // onBlur={}
        secureTextEntry={type === 'password' && !isShowPass}
        {...extraInputProps}
      />
      {rightIcon && type === 'normal' && (
        <TouchableOpacity
          onPress={handlePressRight}
          style={styles.icon}
          disabled={disableRight}>
          {rightIcon}
        </TouchableOpacity>
      )}
      {type === 'password' && (
        <TouchableOpacity
          onPress={togglePassIcon}
          style={styles.icon}
          disabled={disableRight}>
          {isShowPass ? <EyeOffIcon /> : <EyeOnIcon />}
        </TouchableOpacity>
      )}
    </View>
  );
};
export default InputWithDoubleIcon;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 12,
  },
  inputStyle: {
    flex: 1,
    paddingHorizontal: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
});
