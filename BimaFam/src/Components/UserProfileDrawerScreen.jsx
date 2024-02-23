import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {clearAsyncStorage} from '../utils/AsyncStorag';
import {useLogin} from '../utils/LoginproviderContext';

const UserProfile = () => {
  const navigation = useNavigation();
  const {setIsLoggedin} = useLogin();
  const handleLogout = async () => {
    await clearAsyncStorage();
    setIsLoggedin(false);
    // Navigate to the login screen after logout
  };
  return (
    <View
      style={{
        flexDirection: 'row',

        justifyContent: 'space-evenly',
        paddingVertical: 20,
        gap: -5,
      }}>
      <View>
        <TouchableOpacity
          //  style={{marginRight: 5}}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../assets/user.png')} // Update with the actual path to your back button image
            style={{
              width: 70,
              height: 70,
              //tintColor: 'white', // You can customize the color of the back button
              marginLeft: 10,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginLeft: 20,
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
          Surya Kumar
        </Text>
        <Text
          style={{
            fontSize: 13,
            //fontWeight: 'bold',
            color: 'black',
            textAlignVertical: 'center',
          }}>
          Relationship Manager
        </Text>
        <View style={{marginTop: 15, flexDirection: 'row', gap: 4}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={{
              padding: 5,
              paddingHorizontal: 15,
              // flex: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0e4caf',
              borderRadius: 20,
            }}>
            <Text style={{color: 'white'}}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate('Home')}
            onPress={handleLogout}
            style={{
              padding: 5,
              paddingHorizontal: 15,
              // flex: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
              borderRadius: 20,
            }}>
            <Text style={{color: 'white'}}>Logout</Text>
          </TouchableOpacity>
          {/* <Button onPress={() => navigation.navigate('Profile')} title="Edit" /> */}
          {/* <Button
            color={'red'}
            onPress={() => navigation.navigate('Home')}
            title="Logout"
          /> */}
        </View>
      </View>
      {/* <View style={{}}>
        <Image
          source={require('../assets/dropdown.png')} // Update with the actual path to your back button image
          style={{
            width: 20,
            height: 20,
            //tintColor: 'white', // You can customize the color of the back button
            marginLeft: 10,
          }}
        /> 
        </View>*/}
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({});
