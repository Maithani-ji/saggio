import React, {useState} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabnav from './Tabnav';
import UserProfile from '../Components/UserProfileDrawerScreen';
import Customers from '../Screens/Customerstab';
import ActiveLeads from '../Screens/ActiveLeadsStack';
import Packages from '../Screens/Packagestab';
import Events from '../Screens/Eventstab';
import Helpsupport from '../Screens/Helpsupportdrawscreen';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const {state, descriptors} = props;

  return (
    <DrawerContentScrollView
      style={{
        backgroundColor: 'white',
        padding: 15,
      }}
      {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerSlide = () => {
  return (
    <Drawer.Navigator
      // initialRouteName="Dashboard"
      drawerContent={props => (
        <View style={{flex: 1}}>
          <View
            style={{
              backgroundColor: 'lightgray',
              borderTopRightRadius: 20,
            }}>
            <UserProfile />
          </View>
          <CustomDrawerContent {...props} />
        </View>
      )}
      screenOptions={{
        drawerStyle: {
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        },
        drawerLabelStyle: {
          //color: '#0e4caf',
          //textAlignVertical: 'center',
          fontWeight: 'bold',
          marginTop: -10,
        },
        drawerActiveBackgroundColor: 'white',
        drawerActiveTintColor: 'red',
        //drawerType: 'back',
        drawerItemStyle: {
          borderBottomWidth: 1,
          borderBottomColor: 'lightgray',
          //marginLeft: -5,
        },
      }}>
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({focused}) => (
            <Image
              source={require('../assets/homeicon.png')}
              style={{
                // marginLeft: 7,
                marginRight: -15,
                marginTop: -7,
                tintColor: focused ? 'red' : 'gray',
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
        name="Dashboard"
        component={Tabnav}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({focused}) => (
            <Image
              source={require('../assets/Customers.png')}
              style={{
                marginTop: -7,
                marginRight: -15,
                // marginLeft: 5,
                tintColor: focused ? 'red' : 'gray',
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
        name="Customers"
        component={Customers}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({focused}) => (
            <Image
              source={require('../assets/Leads.png')}
              style={{
                marginTop: -7,
                marginRight: -15,
                // marginLeft: 5,
                tintColor: focused ? 'red' : 'gray',
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
        name="My Leads"
        component={ActiveLeads}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({focused}) => (
            <Image
              source={require('../assets/Pacakages.png')}
              style={{
                marginTop: -7,
                marginRight: -15,
                // marginLeft: 5,
                tintColor: focused ? 'red' : 'gray',
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
        name="Packages"
        component={Packages}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({focused}) => (
            <Image
              source={require('../assets/Evnt.png')}
              style={{
                marginTop: -7,
                marginRight: -15,
                // marginLeft: 5,
                tintColor: focused ? 'red' : 'gray',
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
        name="Events"
        component={Events}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({focused}) => (
            <Image
              source={require('../assets/Help.png')}
              style={{
                //marginLeft: 7,
                marginRight: -15,
                //marginBottom: 2,
                marginTop: -7,
                tintColor: focused ? 'red' : 'gray',
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
        name="Help and Support"
        component={Helpsupport}
      />
    </Drawer.Navigator>
  );
};

export default DrawerSlide;
