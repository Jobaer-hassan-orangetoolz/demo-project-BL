import {Alert} from 'react-native';

const showAlertWithOneAction = params => {
  const core = {
    title: '',
    body: '',
    okButtonText: 'OK',
    onPressAction: () => {},
  };
  const data = {...core, ...params};
  const {title, body, okButtonText, onPressAction} = data;
  Alert.alert(
    title,
    body,
    [{text: okButtonText, onPress: () => onPressAction('confirm')}],
    {userInterfaceStyle: 'dark'},
  );
};
const isEmpty = (value: any, omitArray: boolean = false) => {
  if (
    value === null ||
    value === undefined ||
    value === 'null' ||
    value === 'undefined'
  ) {
    return true;
  }
  if (typeof value === 'string') {
    return value.trim().length === 0;
  }
  if (Array.isArray(value)) {
    if (omitArray) {
      return false;
    }
    return value.length === 0;
  }
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  return false;
};

export {showAlertWithOneAction, isEmpty};
