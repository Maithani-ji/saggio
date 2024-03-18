import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {clearAsyncStorage, getData} from '../utils/AsyncStorag';
import {useLogin} from '../utils/LoginproviderContext';
import Snackbar from 'react-native-snackbar';
import axios from 'axios';
import {BASE_URL} from '../utils/constant';

const UserProfile = () => {
  const navigation = useNavigation();
  const {setIsLoggedin} = useLogin();
  const handleLogout = async () => {
    await clearAsyncStorage();
    setIsLoggedin(false);
    // Navigate to the login screen after logout
  };
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobtitle, setjobtitle] = useState('');
  useEffect(() => {
    fetchData();
  }, [fetchData]); // Empty dependency array ensures this effect runs once when component mounts
  const fetchData = async () => {
    try {
      //setLoad(true);
      // const datamail = await getData('usermail');
      // const datapass = await getData('userpass');
      const id = await getData('user');
      //console.log(datamail, datapass);
      const response = await axios.post(`${BASE_URL}/api/getprofile`, {
        user_id: id,
      });
      console.log(response.data);
      if (response.data.status === 200) {
        // Assuming your API returns data in the response.data property
        const userData = response.data.data;
        // await storeData('id', userData.id);
        //setEmail(userData?.email);
        setFirstName(userData?.first_name);
        setLastName(userData?.last_name);
        setjobtitle(userData?.job_title);
        //setContact(userData?.phone);
        // setAddress(userData?.address);
        //setUser(userData); // Set user state after updating other states
        //  navigation.goBack();
      } else {
        navigation.goBack();
        throw new Error('Invalid user id');
      }
      // setLoad(false);
    } catch (error) {
      //setLoad(false);
      Snackbar.show({
        text: error.message || 'Failed to get the data. Please try again.',
        textColor: 'white',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_SHORT,
        marginBottom: 70,
      });
      //  console.error('Error:', error.message);
      //  console.error('Error fetching data:', error);
      // setError(error);
    } finally {
      //   setLoad(false);
    }
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
          // alignSelf: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
          {firstName + ' ' + lastName}
        </Text>
        <Text
          style={{
            fontSize: 13,
            //fontWeight: 'bold',
            color: 'black',
            textAlignVertical: 'center',
          }}>
          {jobtitle}
        </Text>
        <View
          style={{marginTop: 15, flexDirection: 'row', gap: 4, marginLeft: -5}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={{
              padding: 5,
              paddingHorizontal: 15,
              // flex: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 20,
            }}>
            <Text style={{color: 'red'}}>Edit</Text>
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
