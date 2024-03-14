import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Progress from 'react-native-progress';
import axios from 'axios';
import {getData, storeData} from '../utils/AsyncStorag';
import Loading from '../loadingcomponent/loading';
import {BASE_URL} from '../utils/constant';
import Snackbar from 'react-native-snackbar';

const Profile = ({navigation}) => {
  const [load, setLoad] = useState(false);
  const [user, setUser] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.goBack();
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]); // Empty dependency array ensures this effect runs once when component mounts
  const fetchData = async () => {
    try {
      setLoad(true);
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
        setEmail(userData?.email);
        setFirstName(userData?.first_name);
        setLastName(userData?.last_name);
        setContact(userData?.phone);
        setAddress(userData?.address);
        setUser(userData); // Set user state after updating other states
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
      console.error('Error fetching data:', error);
      // setError(error);
    } finally {
      setLoad(false);
    }
  };
  if (load) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f4f6ff'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          paddingVertical: 10,
          padding: 20,
          height: '10%',
        }}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            source={require('../assets/backicon.png')} // Update with the actual path to your back button image
            style={{
              width: 24,
              height: 24,
              tintColor: 'black', // You can customize the color of the back button
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18, color: 'black'}}>Profile</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            marginTop: 20,
          }}>
          <Image
            source={require('../assets/user.png')} // Update with the actual path to your back button image
            style={{
              width: 70,
              height: 70,
              //tintColor: 'white', // You can customize the color of the back button
              marginLeft: 10,
            }}
          />
          <View style={{marginHorizontal: 10, alignSelf: 'center'}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
              {user?.first_name + ' ' + user?.last_name}
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                color: 'black',
                textAlignVertical: 'center',
              }}>
              {user?.job_title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: 'black',
                textAlignVertical: 'center',
              }}>
              Code:FM5947
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: 'bold',
                color: 'gray',
                textAlignVertical: 'center',
              }}>
              Active since 02/08/23
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            marginVertical: 20,
            //flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
          }}>
          <View style={{marginBottom: 10}}>
            <Text
              style={{
                marginHorizontal: 10,
                fontWeight: 'bold',
                color: 'black',
                marginBottom: 10,
                fontSize: 15,
                marginTop: 10,
              }}>
              First Name
            </Text>
            <TextInput
              //value=""
              placeholder="Enter First Name"
              style={{
                borderWidth: 0.8,
                marginHorizontal: 10,
                borderRadius: 7,
                padding: 12,
                color: 'black',
              }}
              placeholderTextColor={'gray'}
              editable={true}
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Text
              style={{
                marginHorizontal: 10,
                fontWeight: 'bold',
                color: 'black',
                marginBottom: 10,
                fontSize: 15,
              }}>
              Last Name
            </Text>
            <TextInput
              placeholder="Enter Last Name"
              //value=""
              style={{
                borderWidth: 0.8,
                marginHorizontal: 10,
                borderRadius: 7,
                padding: 12,
                color: 'black',
              }}
              value={lastName}
              onChangeText={setLastName}
              placeholderTextColor={'gray'}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Text
              style={{
                marginHorizontal: 10,
                fontWeight: 'bold',
                color: 'black',
                marginBottom: 10,
                fontSize: 15,
              }}>
              Email
            </Text>
            <TextInput
              placeholder="Enter Email"
              //value=""
              style={{
                borderWidth: 0.8,
                marginHorizontal: 10,
                borderRadius: 7,
                padding: 12,
                color: 'black',
              }}
              value={email}
              onChangeText={setEmail}
              placeholderTextColor={'gray'}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Text
              style={{
                marginHorizontal: 10,
                fontWeight: 'bold',
                color: 'black',
                marginBottom: 10,
                fontSize: 15,
              }}>
              Contact
            </Text>
            <TextInput
              placeholder="Enter Contact"
              //value=""
              style={{
                borderWidth: 0.8,
                marginHorizontal: 10,
                borderRadius: 7,
                padding: 12,
                color: 'black',
              }}
              value={contact}
              onChangeText={setContact}
              placeholderTextColor={'gray'}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Text
              style={{
                marginHorizontal: 10,
                fontWeight: 'bold',
                color: 'black',
                marginBottom: 10,
                fontSize: 15,
              }}>
              Address
            </Text>
            <TextInput
              placeholder="Enter Contact"
              value={address}
              onChangeText={setAddress}
              style={{
                borderWidth: 0.8,
                marginHorizontal: 10,
                borderRadius: 7,
                padding: 12,
                color: 'black',
              }}
              placeholderTextColor={'gray'}
            />
          </View>
          <TouchableOpacity
            style={{
              marginVertical: 10,
              // flex: 1,
              //   height: '20%',
              //width: '35%',
              alignSelf: 'center',
              backgroundColor: '#448EE4',
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                marginVertical: -5,
              }}>
              <Image
                source={require('../assets/edit.png')} // Update with the actual path to your back button image
                style={{
                  width: 25,
                  height: 25,
                  tintColor: 'white', // You can customize the color of the back button
                  //marginLeft: 10,
                }}
              />
              <Text
                style={{
                  textAlignVertical: 'center',
                  color: 'white',
                  fontSize: 13,
                  fontWeight: 'bold',
                  marginHorizontal: 10,
                }}>
                Update
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginVertical: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 20,
          }}>
          {/* <TouchableOpacity
            style={{
              marginVertical: 10,
              // flex: 1,
              //   height: '20%',
              //width: '35%',
              alignSelf: 'center',
              backgroundColor: 'orange',
              borderRadius: 10,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image
                source={require('../assets/logout.png')} // Update with the actual path to your back button image
                style={{
                  width: 30,
                  height: 30,
                  //tintColor: 'white', // You can customize the color of the back button
                  //marginLeft: 10,
                }}
              />
              <Text
                style={{
                  textAlignVertical: 'center',
                  color: 'black',
                  fontSize: 13,
                  marginRight: 10,
                  fontWeight: 'bold',
                }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{
              marginVertical: 10,
              // flex: 1,
              //   height: '20%',
              //width: '35%',
              alignSelf: 'center',
              backgroundColor: 'red',
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                marginVertical: -5,
              }}>
              <Image
                source={require('../assets/delete.png')} // Update with the actual path to your back button image
                style={{
                  width: 30,
                  height: 30,
                  //tintColor: 'white', // You can customize the color of the back button
                  //marginLeft: 10,
                }}
              />
              <Text
                style={{
                  textAlignVertical: 'center',
                  color: 'white',
                  fontSize: 13,
                  fontWeight: 'bold',
                  marginRight: 10,
                }}>
                Delete Account
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
