import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RemarkListData from '../Components/RemarkListDataStack';
import {getData} from '../utils/AsyncStorag';
import axios from 'axios';
import {BASE_URL} from '../utils/constant';
import Snackbar from 'react-native-snackbar';
import Loading from '../loadingcomponent/loading';
import {useFocusEffect} from '@react-navigation/native';

const RemarkList = ({navigation, route}) => {
  const {leaddata} = route.params;
  //console.log('infodata',);
  const [load, setLoad] = useState(false);
  const [remarkdata, setremarkdata] = useState([]);
  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.goBack();
  };
  useEffect(() => {
    //const unsubscribe = navigation.addListener('focus', () => {
    // Reset data when page is focused
    fetchData(); // Fetch data when page is focused
    // });
    // });
    //  // Cleanup the event listener
    // return unsubscribe;
  }, [navigation, fetchData, leaddata]);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     fetchData(); // Fetch data when page is focused
  //   }, [fetchData]),
  // );
  const fetchData = async () => {
    try {
      setLoad(true);
      // const datamail = await getData('usermail');
      // const datapass = await getData('userpass');
      const id = await getData('user');

      const response = await axios.post(`${BASE_URL}/api/getLeadRemarkList`, {
        lead_id: leaddata.id,
        user_id: id,
      });
      console.log('fetch data', response.data);
      if (response.data.status === 200) {
        if (response.data.data.length == 0) {
          throw new Error('Please add remark , no remark found!!.');
        } else {
          const userData = response.data.data;
          setremarkdata(userData);
          console.log(remarkdata);
          console.log('userdata', userData);
        }
        // setuserData(route.params.leaddata);
        // Assuming your API returns data in the response.data property
        // const userData = response.data.data;
        // // await storeData('id', userData.id);

        //  navigation.goBack();
        //console.log('userdata', userData);
      } else {
        //navigation.goBack();
        throw new Error('Invalid project id');
      }
      // setLoad(false);
    } catch (error) {
      //setLoad(false);
      //navigation.goBack();
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
          padding: 10,
          height: '10%',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={handleBackPress}>
            <Image
              source={require('../assets/backicon.png')} // Update with the actual path to your back button image
              style={{
                width: 24,
                height: 24,
                tintColor: 'black', // You can customize the color of the back button
                marginRight: 10,
                marginTop: 1,
              }}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 17, color: 'black'}}>Remark List</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Add Remark', {leaddata: leaddata})
            }
            style={{
              backgroundColor: '#3081ec',
              paddingHorizontal: 10,
              paddingVertical: 5,
              flexDirection: 'row',
              borderRadius: 7,
            }}>
            <Text style={{fontSize: 14, color: 'white', marginTop: 0.5}}>
              Add Remark
            </Text>
            <Image
              source={require('../assets/Arrow-icon.png')} // Update with the actual path to your back button image
              style={{
                width: 11,
                height: 11,
                tintColor: 'white', // You can customize the color of the back button
                marginLeft: 5,
                marginTop: 5,
              }}
            />
          </TouchableOpacity>
        </View>
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
          {/* {Array.from({length: 10}, (_, index) => ( */}
          {remarkdata?.map((item, index) => (
            <RemarkListData
              item={item}
              key={index}
              index={index}
              //info={infodata}
            />
          ))}
          {/* ))} */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RemarkList;

const styles = StyleSheet.create({});
