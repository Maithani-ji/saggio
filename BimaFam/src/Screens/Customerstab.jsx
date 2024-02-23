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
        const datamail = await getData('usermail');
        const datapass = await getData('userpass');

        const response = await axios.get(
          'https://bimaafamily.techiedom.com/lms/api/getProjectData',
        );
        console.log('response customers', response.data.data);
        // Assuming your API returns data in the response.data property
        setData(response.data.data);
        setLoad(false); // Set loading to false after successful request
      } catch (error) {
        setLoad(false); // Set loading to false on error
        setError(error);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once when component mounts
  if (load) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#dee7f8'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#0e4caf',
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
              tintColor: 'white', // You can customize the color of the back button
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18, color: 'white'}}>Customers</Text>
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
