import {StyleSheet, Text, View} from 'react-native';
import useCountDown from './useCountDown.hook';

const CountDown = () => {
  const {count} = useCountDown({start: 1, end: 30, increment: 1});
  console.log(count);
  return (
    <View style={styles.container}>
      <Text style={{backgroundColor: 'green'}}>{count}</Text>
    </View>
  );
};
export default CountDown;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
