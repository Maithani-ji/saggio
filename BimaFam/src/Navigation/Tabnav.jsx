import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Events from '../Screens/Eventstab';
import Customers from '../Screens/Customerstab';
import Packages from '../Screens/Packagestab';
import Home from '../Screens/Hometab';
import Evnt from '../assets/Evnt.png';
const Tab = createBottomTabNavigator();
const Tabnav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: '9%',
          width: '100%',
          backgroundColor: 'white',
        },
        // tabBarLabel:{false}
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarLabelStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 11,
            marginBottom: 0,
            fontFamily: 'Arial',
          },
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{marginBottom: 0}}>
              <Image
                // source={Evnt} // Update the file extension if needed
                source={
                  !focused
                    ? require('../assets/Home.png')
                    : require('../assets/homes.png')
                }
                style={{
                  height: focused ? 29 : 32,
                  width: focused ? 29 : 32,

                  tintColor: focused ? 'red' : 'gray', // Set the color to white
                }} // Adjust the height and width as needed
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Packages"
        component={Packages}
        options={{
          tabBarLabel: '',
          tabBarLabelStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 11,
            marginBottom: 0,
            fontFamily: 'Arial',
          },
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{marginBottom: 0}}>
              <Image
                // source={Evnt} // Update the file extension if needed
                source={require('../assets/Packages.png')}
                style={{
                  height: 35,
                  width: 35,

                  tintColor: focused ? 'red' : 'gray', // Set the color to white
                }} // Adjust the height and width as needed
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Customers"
        component={Customers}
        options={{
          tabBarLabel: '',
          tabBarLabelStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 11,
            marginBottom: 0,
            fontFamily: 'Arial',
          },
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{marginBottom: -3}}>
              <Image
                // source={Evnt} // Update the file extension if needed
                source={require('../assets/customerss.png')}
                style={{
                  height: 35,
                  width: 35,
                  tintColor: focused ? 'red' : 'gray', // Set the color to white
                }} // Adjust the height and width as needed
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarLabel: '',
          tabBarLabelStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 11,
            marginBottom: 0,
            fontFamily: 'Arial',
          },
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{marginBottom: 0}}>
              <Image
                // source={Evnt} // Update the file extension if needed
                source={require('../assets/Evnt.png')}
                style={{
                  height: 28,
                  width: 28,

                  tintColor: focused ? 'red' : 'gray', // Set the color to white
                }} // Adjust the height and width as needed
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabnav;

const styles = StyleSheet.create({});
