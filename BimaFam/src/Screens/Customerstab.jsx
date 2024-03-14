import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomersScreenData from '../Components/CustomersScreenData';
import axios from 'axios';
import {getData} from '../utils/AsyncStorag';
import Loading from '../loadingcomponent/loading';
import {BASE_URL} from '../utils/constant';

const Customers = ({navigation}) => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState();
  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.goBack();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true); // Set loading to true before making the request

        const id = await getData('user');

        const response = await axios.post(`${BASE_URL}/api/getProjects`, {
          user_id: id,
        });
        console.log('response customers', response.data.data[0].members);
        // Assuming your API returns data in the response.data property
        setData(response.data.data[0].members);
        //  setLoad(false); // Set loading to false after successful request
      } catch (error) {
        Snackbar.show({
          text: 'Failed to get the data. Please try again.',
          textColor: 'white',
          backgroundColor: 'red',
          duration: Snackbar.LENGTH_SHORT,
          marginBottom: 70,
        });
        navigation.goBack();
        //setLoad(false); // Set loading to false on error
        // setError(error);
        console.error('Error fetching data:', error);
      } finally {
        setLoad(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once when component mounts
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
      <ScrollView showsVerticalScrollIndicator={false}>
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
