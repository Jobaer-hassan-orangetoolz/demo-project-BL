/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
const useCountDown = ({
  start,
  end,
  increment,
  callback = () => {},
  callbackRegular = (count: any) => {
    console.log('hello', count);
  },
}: any) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let interval: any = 0;
    interval = setInterval(() => {
      setCount(count + increment);
      callbackRegular(count);
    }, 1000);
    if (count >= end) {
      clearInterval(interval);
      callback();
    }
    return () => clearInterval(interval);
  }, [count]);
  return count;
};
export default useCountDown;
