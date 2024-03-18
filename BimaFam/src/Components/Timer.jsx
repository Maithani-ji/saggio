import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      // Update seconds (wrap around at 59)
      setSeconds(prevSeconds => (prevSeconds + 1) % 60);

      // Update minutes when seconds reach 59
      if (seconds === 59) {
        setMinutes(prevMinutes => (prevMinutes + 1) % 60);

        // Update hours when minutes reach 59
        if (minutes === 59) {
          setHours(prevHours => prevHours + 1);
        }
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, [seconds]);
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={require('../assets/Time-icon.png')} // Update with the actual path to your back button image
        style={{
          width: 20,
          height: 20,
          tintColor: 'white', // You can customize the color of the back button
        }}
      />
      <Text
        style={{
          fontSize: 13,
          marginLeft: 10,
          // marginTop: -2,
          fontWeight: 'bold',
          color: 'white',
        }}>{`${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({});
