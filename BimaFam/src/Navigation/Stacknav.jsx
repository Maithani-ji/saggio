import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DrawerSlide from './Drawernav';
import Customers from '../Screens/Customerstab';
import ActiveLeads from '../Screens/ActiveLeadsStack';
import EditLead from '../Screens/EditLeadStackScreen';
import AddRemark from '../Screens/AddRemarkStack';
import RemarkList from '../Screens/RemarkListStack';
import EditRemark from '../Screens/EditRemarkStack';
import Incentive from '../Screens/IncentiveStack';
import Profile from '../Screens/ProfileStackScreen';
import Notifications from '../Screens/NotificationStackScreen';
import PackagedetailStk from '../Screens/PackagedetailStk';

import {getData} from '../utils/AsyncStorag';
import CalculatorStk from '../Screens/CalculatorStk';
import Calculator from '../Screens/CalculatorStk';
import Leadsfollowup from '../Screens/Leadsfollowup';
import Customerdetail from '../Screens/Customerdetail';

const Stack = createNativeStackNavigator();

const Stacknav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={DrawerSlide}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Customers"
        component={Customers}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Incentive"
        component={Incentive}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Active Leads"
        component={ActiveLeads}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit Lead"
        component={EditLead}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Add Remark"
        component={AddRemark}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit Remark"
        component={EditRemark}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Remark List"
        component={RemarkList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Packagedetails"
        component={PackagedetailStk}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Calculator"
        component={Calculator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Leadsfollowup"
        component={Leadsfollowup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Customerdetail"
        component={Customerdetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Stacknav;

const styles = StyleSheet.create({});
