import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stacknav from './Stacknav';
import Authnav from './Authnav';
import {getData} from '../utils/AsyncStorag';
import {useLogin} from '../utils/LoginproviderContext';

const Nav = () => {
  //const [loggedin, setloggedin] = useState(false);
  const {isLoggedin, setIsLoggedin, setUser} = useLogin();
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
      const role = await getData('role');
      console.log('rolenav', role);
      if (id) {
        if (role == 1) {
          setUser(true);
          setIsLoggedin(true);
        } else {
          setUser(false);
          setIsLoggedin(true);
        }
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
