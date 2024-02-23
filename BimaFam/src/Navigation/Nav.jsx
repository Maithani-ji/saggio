import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stacknav from './Stacknav';
import Authnav from './Authnav';
import {getData} from '../utils/AsyncStorag';
import {useLogin} from '../utils/LoginproviderContext';

const Nav = () => {
  //const [loggedin, setloggedin] = useState(false);
  const {isLoggedin, setIsLoggedin} = useLogin();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getData('user');
  //       setIsLoggedin(!!data); // Set to true if data exists
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      const id = await getData('user');
      if (id) {
        setIsLoggedin(true);
      } else {
        setIsLoggedin(false);
      }
    };

    fetchData();
  }, [setIsLoggedin]);
  return (
    <NavigationContainer>
      {isLoggedin ? <Stacknav /> : <Authnav />}
    </NavigationContainer>
  );
};

export default Nav;

const styles = StyleSheet.create({});
