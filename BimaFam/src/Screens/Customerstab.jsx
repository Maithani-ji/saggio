import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import CustomersScreenData from '../Components/CustomersScreenData';
import axios from 'axios';
import {getData} from '../utils/AsyncStorag';
import Loading from '../loadingcomponent/loading';
import {BASE_URL} from '../utils/constant';
import Snackbar from 'react-native-snackbar';

const Customers = ({navigation}) => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState(null);
  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.goBack();
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Reset data when page is focused
      fetchData(); // Fetch data when page is focused
    });

    // Cleanup the event listener
    return unsubscribe;
  }, [navigation, fetchData]); // Empty dependency array ensures this effect runs once when component mounts

  const fetchData = async () => {
    try {
      setLoad(true);

      const id = await getData('user');

      const response = await axios.post(`${BASE_URL}/api/getCustomerList`, {
        user_id: id,
      });
      console.log(response.data);
      if (response.data.status === 200) {
        // Assuming your API returns data in the response.data property
        const userData = response.data.data;
        setData(userData);
      } else if (response.data.data == null) {
        //navigation.goBack();
        throw new Error('No Active Customers data available ');
      } else {
        //
        throw new Error('Invalid user id');
      }
      // setLoad(false);
    } catch (error) {
      //setLoad(false);
      // navigation.goBack();
      setData(null);
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
        <Text style={{fontSize: 18, color: 'black'}}>Customers</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl onRefresh={fetchData} />}>
        <View
          style={{
            marginTop: 20,
            overflow: 'hidden',
            flexDirection: 'column',
          }}>
          {data?.map((item, index) => (
            <CustomersScreenData key={index} index={index} item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Customers;
