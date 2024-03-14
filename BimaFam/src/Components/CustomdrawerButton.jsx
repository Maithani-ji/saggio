import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
useNavigation;
const CustomDrawerButton = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <TouchableOpacity onPress={openDrawer}>
      <Image
        source={require('../assets/burger.png')}
        style={{
          height: 40,
          width: 40,
          tintColor: 'black',
          margin: 10,
        }}
      />
    </TouchableOpacity>
  );
};

export default CustomDrawerButton;
