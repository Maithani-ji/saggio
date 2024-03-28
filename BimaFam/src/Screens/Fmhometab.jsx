import React, {useEffect, useMemo, useState} from 'react';
import {
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Linking,
  RefreshControl,
  Alert,
} from 'react-native';
import CustomDrawerButton from '../Components/CustomdrawerButton';
import NotificationBtn from '../Components/NotificationBtn';
import LinearGradient from 'react-native-linear-gradient';

import HomesixBtns from '../Components/HomesixBtns';
import ActiveLeadsHome from '../Components/ActiveLeadsData';
import ActiveProjects from '../Components/ActiveProjectsData';
import {getData} from '../utils/AsyncStorag';
import Loading from '../loadingcomponent/loading';
import axios from 'axios';
import {BASE_URL} from '../utils/constant';
import {useFocusEffect} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import ActiveLeads from './ActiveLeadsStack';
import ActiveLeadsData from '../Components/ActiveLeadsData';

const FMhome = ({navigation}) => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [lead, setLead] = useState(null);
  const [leadstatus, setleadstatus] = useState([]);
  useEffect(() => {
    fetchapi();
    // });
  }, [navigation, fetchapi]);
  const fetchapi = () => {
    fetchData(); // Fetch data when page is focused
    fetchLeadStatus();
    fetchuserData();
  }; // Empty dependency array ensures this effect runs once when component mounts
  const fetchData = async () => {
    try {
      setLoad(true);
      // const datamail = await getData('usermail');
      // const datapass = await getData('userpass');
      const id = await getData('user');
      //console.log(datamail, datapass);
      const response = await axios.post(`${BASE_URL}/api/getLeadList`, {
        user_id: id,
      });
      console.log(response.data);
      if (response.data.status === 200) {
        // Assuming your API returns data in the response.data property
        const userData = response.data.data;
        setLead(userData);
        // console.log(userData.chart);
        // await storeData('id', userData.id);
        //setEmail(userData?.email);

        //setContact(userData?.phone);
        // setAddress(userData?.address);
        //setUser(userData); // Set user state after updating other states
        //  navigation.goBack();
      } else if (response.data.data == null) {
        //navigation.goBack();
        throw new Error('No Active Leads data available ');
      } else {
        //
        throw new Error('Invalid user id');
      }
      // setLoad(false);
    } catch (error) {
      //setLoad(false);
      //navigation.goBack();
      setLead(null);
      Snackbar.show({
        text: error.message || 'Failed to get the Lead data. Please try again.',
        textColor: 'white',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_SHORT,
        marginBottom: 70,
      });
      //  console.error('Error:', error.message);
      // console.error('Error fetching data:', error);
      // setError(error);
    } finally {
      setLoad(false);
    }
  };
  const fetchLeadStatus = async () => {
    try {
      setLoad(true);

      const id = await getData('user');

      const response = await axios.post(`${BASE_URL}/api/getLeadStatus`, {
        // project_id: 8,
        user_id: 1,
      });
      // console.log(response.data);
      // console.log(response.data.status);
      if (response.data.status === 200) {
        setleadstatus(response.data.data);
        console.log('lead status', leadstatus);
      } else {
        //navigation.goBack();
        throw new Error('Invalid user id lead status plan');
      }
      // setLoad(false);
    } catch (error) {
      //setLoad(false);
      //navigation.goBack();
      Snackbar.show({
        text:
          error.message ||
          'Failed to get the Policy plan data. Please try again.',
        textColor: 'white',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_SHORT,
        marginBottom: 70,
      });
      //  console.error('Error:', error.message);
      // console.error('Error fetching data:', error);
      // setError(error);
    } finally {
      setLoad(false);
    }
  };
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobtitle, setjobtitle] = useState('');
  const [check, setcheck] = useState(false);
  const handlecheck = () => {
    // Display an alert
    Alert.alert(
      'Confirmation',
      `Are you sure you want to ${check == false ? 'Check In' : 'Check Out'}?`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Toggle the check state when the user presses OK
            setcheck(!check);
          },
        },
      ],
      {cancelable: false},
    );
  };
  // Empty dependency array ensures this effect runs once when component mounts
  const fetchuserData = async () => {
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
  const data4 = leadstatus?.map(item => ({
    label: item.title,
    value: item.id.toString(),
    color: item.color.toString(),
  }));
  if (load) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f4f6ff'}}>
      {/* STARTING OF Homepage above logo and  drwaer button and notification */}
      <View style={{elevation: 5}}>
        <Image
          source={require('../assets/bcg.png')}
          style={{
            width: '100%',
            height: 180,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            //  tintColor: '#194c9e',
          }}
          //   resizeMode="cover"
        />
      </View>
      <View style={{position: 'absolute', top: 10, left: 10}}>
        <CustomDrawerButton />
      </View>
      <View style={{position: 'absolute', top: 10, right: 10, zIndex: 1}}>
        <NotificationBtn />
      </View>
      {/* </ImageBackground> */}
      {/* Ending OF Homepage above logo and  drwaer button and notification */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl onRefresh={fetchapi} />}>
        <View style={{flex: 1, marginHorizontal: 20}}>
          <TouchableOpacity
            onPress={handlecheck}
            style={{
              alignSelf: 'flex-end',
              backgroundColor: !check ? '#3aba40' : 'red',
              marginTop: 10,
              paddingHorizontal: 15,
              paddingVertical: 5,
              borderRadius: 5,
            }}>
            <View style={{flexDirection: 'row', gap: 5}}>
              <Image
                source={require('../assets/check.png')}
                style={{
                  width: 17,
                  height: 17,
                  marginTop: 2,
                  tintColor: !check ? 'white' : 'black',
                }}
              />
              <Text style={{color: 'white'}}>
                {check ? 'Check Out' : 'Check In'}
              </Text>
            </View>
          </TouchableOpacity>

          {firstName && (
            <LinearGradient
              colors={['#36D1DC', '#3790ee']}
              start={{x: 0, y: 0}} // Horizontal start
              end={{x: 1, y: 0}} // Horizontal end
              style={{borderRadius: 10, padding: 10, marginTop: 10}}>
              <View style={{flexDirection: 'row', gap: 10}}>
                <View>
                  <Image
                    source={require('../assets/user-icon.png')}
                    style={{width: 50, height: 50}}
                  />
                </View>
                <View>
                  <Text style={{fontSize: 22, color: 'white', fontWeight: 600}}>
                    {firstName} {lastName}
                  </Text>
                  <Text style={{fontSize: 13, color: 'white', fontWeight: 500}}>
                    {jobtitle}
                  </Text>
                </View>
              </View>
              <View style={{marginTop: 5, marginLeft: 10}}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'white',
                    textAlign: 'left',
                    fontWeight: '500',
                  }}>
                  Welcome {firstName}! Check My Leads for updates.Your skills
                  are valuable,converting leads to sales. Good Luck!
                </Text>
              </View>
            </LinearGradient>
          )}

          <View style={{flex: 1}}>
            <HomesixBtns />
          </View>
          {/* Homepage 6 Mid Buttons ends */}
          {/* Starting of Active Leads */}
          <View style={{marginVertical: 10, marginTop: 15}}>
            <Text style={{fontSize: 19, fontWeight: 'bold', color: 'black'}}>
              Active Leads
            </Text>
          </View>
          {/* Showing some Active Projects */}
          <View
            style={{
              flex: 1,
              // marginHorizontal: 10,
              marginTop: 10,
              overflow: 'hidden',
              flexDirection: 'column',
            }}>
            {lead &&
              lead?.map((item, index) => (
                <ActiveLeadsData
                  key={index}
                  index={index}
                  data={item}
                  data4={data4}
                />
              ))}
          </View>
          {/* End Showing some Active Leads */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FMhome;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 115,
    height: 115,
    backgroundColor: 'white', // Adjust the color as needed
    margin: 5,
    borderRadius: 20,
  },
});
