import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const NotificationBtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
      <Image
        source={require('../assets/Notification.png')}
        style={{
          height: 40,
          width: 40,

          margin: 10,
        }}
      />
    </TouchableOpacity>
  );
};

export default NotificationBtn;

const styles = StyleSheet.create({});
