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
        Alert.alert('Please enter both email and password.');
        // throw new Error('wrong email or password');
        return;
      }

      const requestBody = {
        email: email,
        password: password,
      };

      const response = await axios.post(
        'https://bimaafamily.techiedom.com/lms/api_signin/auth',
        requestBody,
      );
      // console.log('Server response:', response);
      //console.log('Server response:', response.data);
      await storeData('usermail', email);
      await storeData('userpass', password);
      await storeData('user', JSON.stringify(response.data));
      // navigation.navigate('Stacknav');
      // setmain(true);
      setIsLoggedin(true);
      setLoad(false);
      setEmail('');
      setPassword('');
    } catch (error) {
      setLoad(false);
      console.error('Error:', error.message);
      Alert.alert('An error occurred.', error.message);
    }
  };
  if (load) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#0e4caf'}}>
      <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 50}}>
          <Image
            source={require('../assets/appicon.png')} // Update with the actual path to your back button image
            style={{
              width: '40%',
              height: 150,
              tintColor: 'white', // You can customize the color of the back button
              marginRight: 10,
              resizeMode: 'cover',
              alignSelf: 'center',
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 35,
              color: 'white',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Bimaa Family
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
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
              color: 'white',
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
          }}>
          <TouchableOpacity>
            <Image
              source={require('../assets/Email.png')} // Update with the actual path to your back button image
              style={{
                width: 40,
                height: 40,
                tintColor: 'black', // You can customize the color of the back button
                //marginRight: 10,
                //marginLeft: 10,
                marginTop: 5,
                resizeMode: 'cover',
              }}
            />
          </TouchableOpacity>
          <TextInput
            style={{flex: 1, fontSize: 17}}
            onChangeText={setEmail}
            keyboardType="email-address"
            value={email}
            placeholder="Enter your Email"
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
            style={{flex: 1, fontSize: 17, marginLeft: 5}}
            onChangeText={setPassword}
            keyboardType="default"
            value={password}
            placeholder="Enter your Password"
            secureTextEntry={!showpasswrd}
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
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#0e4caf',
              textAlign: 'center',
            }}>
            Log In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignSelf: 'center', marginTop: 25}}>
          <Text style={{color: 'white', textDecorationLine: 'underline'}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
