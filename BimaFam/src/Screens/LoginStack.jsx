import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {storeData} from '../utils/AsyncStorag';

import {useLogin} from '../utils/LoginproviderContext';
import Loading from '../loadingcomponent/loading';
import {BASE_URL} from '../utils/constant';
import Snackbar from 'react-native-snackbar';

const Login = () => {
  const navigation = useNavigation();
  const [showpasswrd, setshowpasswrd] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);
  const {setIsLoggedin} = useLogin();
  const handleSubmit = async () => {
    setLoad(true);
    try {
      if (!email || !password) {
        throw new Error('Please enter both email and password.');
        // throw new Error('wrong email or password');
      }

      const requestBody = {
        email: email,
        password: password,
        device_id: 'dasjkasbsa',
      };

      const response = await axios.post(
        //  'https://bimaafamily.techiedom.com/lms/api',
        `${BASE_URL}/api/login`,
        requestBody,
      );
      if (response.data.status === 200) {
        // console.log('Server response:', response);
        console.log('Server response:', response.data, response.data.data.id);
        // await storeData('usermail', email);
        // await storeData('userpass', password);
        await storeData('user', response.data.data.id);
        Snackbar.show({
          text: 'Logged in Successfully.',
          textColor: 'white',
          backgroundColor: 'green',
          duration: Snackbar.LENGTH_SHORT,
          marginBottom: 70,
        });
        setEmail('');
        setPassword('');
        setIsLoggedin(true);
      } else {
        throw new Error('Wrong inputs');
      }
      // navigation.navigate('Stacknav');
      // setmain(true);
    } catch (error) {
      //setLoad(false);
      Snackbar.show({
        text: error.message || 'Failed to register. Please try again.',
        textColor: 'white',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_SHORT,
        marginBottom: 70,
      });
      console.error('Error:', error.message);
      //Alert.alert('An error occurred.', error.message);
    } finally {
      setLoad(false);
    }
  };
  if (load) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 50}}>
          <Image
            source={require('../assets/gg.png')}
            style={{
              width: '100%',
              height: 150,

              //  tintColor: '#194c9e',
            }}
          />
        </View>
        <View>
          {/* <Text
            style={{
              fontSize: 35,
              color: 'black',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Saggio
          </Text> */}
        </View>
        <View style={{marginTop: 30}}>
          <Text
            style={{
              fontSize: 30,
              color: 'black',
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              alignSelf: 'center',
            }}>
            Sign in to continue.
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            backgroundColor: 'white',
            width: '80%',
            borderRadius: 20,
            alignSelf: 'center',
            overflow: 'hidden',
            borderColor: 'gray',
            borderWidth: 1,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../assets/E-mail.png')} // Update with the actual path to your back button image
              style={{
                width: 26,
                height: 26,
                tintColor: 'black', // You can customize the color of the back button
                //marginRight: 10,
                marginLeft: 7,
                marginTop: 11.5,
                resizeMode: 'cover',
              }}
            />
          </TouchableOpacity>
          <TextInput
            style={{flex: 1, fontSize: 17, marginLeft: 7, color: 'black'}}
            onChangeText={setEmail}
            keyboardType="email-address"
            value={email}
            placeholder="Enter your Email"
            placeholderTextColor={'gray'}
          />
        </View>

        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            backgroundColor: 'white',
            width: '80%',
            borderRadius: 20,
            alignSelf: 'center',
            overflow: 'hidden',
            borderColor: 'gray',
            borderWidth: 1,
          }}>
          <TouchableOpacity onPress={() => setshowpasswrd(!showpasswrd)}>
            <Image
              source={
                showpasswrd
                  ? require('../assets/passwdn.png')
                  : require('../assets/psswd.png')
              } // Update with the actual path to your back button image
              style={{
                width: 28,
                height: 28,
                tintColor: 'black', // You can customize the color of the back button
                //marginRight: 10,
                marginLeft: 7,
                marginTop: 10,
                resizeMode: 'cover',
              }}
            />
          </TouchableOpacity>
          <TextInput
            style={{flex: 1, fontSize: 17, marginLeft: 5, color: 'black'}}
            onChangeText={setPassword}
            keyboardType="default"
            value={password}
            placeholder="Enter your Password"
            secureTextEntry={!showpasswrd}
            placeholderTextColor={'gray'}
          />
        </View>
        <TouchableOpacity
          //    onPress={() => navigation.replace('Main')}
          onPress={handleSubmit}
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: 25,
            borderRadius: 20,
            width: '80%',
            alignSelf: 'center',
            borderColor: 'gray',
            borderWidth: 1,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'red',
              textAlign: 'center',
            }}>
            Log In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignSelf: 'center', marginTop: 25}}>
          <Text style={{color: 'black', textDecorationLine: 'underline'}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
