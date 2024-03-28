import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ActiveLeadsData from '../Components/ActiveLeadsData';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import {BASE_URL} from '../utils/constant';
import {getData} from '../utils/AsyncStorag';
import Loading from '../loadingcomponent/loading';
import Snackbar from 'react-native-snackbar';
import {Dropdown} from 'react-native-element-dropdown';

const ActiveLeads = ({navigation}) => {
  const [date, setdate] = useState(new Date());
  const [mode, setmode] = useState('');
  const [show, setshow] = useState(false);
  const [date1, setdate1] = useState(new Date());
  const [mode1, setmode1] = useState('');
  const [show1, setshow1] = useState(false);
  const [value4, setValue4] = useState(null);
  const [leadstatus, setleadstatus] = useState([]);
  const [datefromtext, setdatefromtext] = useState('');
  const [datetotext, setdatetotext] = useState('');
  const [lead, setLead] = useState(null);
  const [load, setLoad] = useState(false);
  const [value, setValue] = useState(null);
  useEffect(() => {
    //  const unsubscribe = navigation.addListener('focus', () => {
    // Reset data when page is focused
    fetchData(); // Fetch data when page is focused
    fetchLeadStatus();
    // });

    // Cleanup the event listener
    // return unsubscribe;
  }, [navigation, fetchData]); // Empty dependency array ensures this effect runs once when component mounts
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
        user_id: id,
      });
      // console.log(response.data);
      // console.log(response.data.status);
      if (response.data.status === 200) {
        setleadstatus(response.data.data);
        //    console.log('lead status', leadstatus);
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
  const data4 = leadstatus?.map(item => ({
    label: item.title,
    value: item.id.toString(),
    color: item.color.toString(),
  }));
  const handlefromDateChange = (event, selectedDate) => {
    setshow(false);
    const currentDate = selectedDate || date;
    //setshow(Platform.OS === 'android'); // Temporarily keep visible on Android
    setdate(currentDate);
    const tempDate = new Date(currentDate);
    const fdate = `${tempDate.getDate()}-${
      tempDate.getMonth() + 1
    }-${tempDate.getFullYear()}`;

    const ftime = `${tempDate.getHours()}:${tempDate.getMinutes()}`;
    setdatefromtext(fdate);
  };
  const handletoDateChange = (event, selectedDate) => {
    setshow1(false);
    const currentDate = selectedDate || date1;
    //setshow(Platform.OS === 'android'); // Temporarily keep visible on Android
    setdate1(currentDate);
    const tempDate = new Date(currentDate);
    const fdate = `${tempDate.getDate()}-${
      tempDate.getMonth() + 1
    }-${tempDate.getFullYear()}`;

    const ftime = `${tempDate.getHours()}:${tempDate.getMinutes()}`;
    setdatetotext(fdate);
  };

  const showMode = currentMode => {
    setshow(!show);
    setmode(currentMode);
  };
  const showMode1 = currentMode => {
    setshow1(!show1);
    setmode1(currentMode);
  };
  const handlesubmit = () => {
    setdatefromtext('');
    setdatetotext('');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };
  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
  ];
  if (load) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f4f6ff'}}>
      {/* {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={handlefromDateChange}
          //onDismiss={() => setshowsourceDatePicker(false)}
        />
      )}
      {show1 && (
        <DateTimePicker
          value={date1}
          mode={mode1}
          is24Hour={true}
          display="default"
          onChange={handletoDateChange}
          //onDismiss={() => setshowsourceDatePicker(false)}
        />
      )} */}
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
        <Text style={{fontSize: 18, color: 'black'}}>Active Leads</Text>
      </View>

      <View
        style={{
          marginHorizontal: 10,
          marginTop: 10,
          height: 42,
          // //height: 38,
          // // width: 20,
          flexDirection: 'row',
          // alignItems: 'center',
          // borderWidth: 0.5,
          // borderColor: 'gray',
          borderRadius: 10,
          paddingHorizontal: 10,
          // paddingVertical: -2,
          //marginTop: 7,
          justifyContent: 'space-between',

          backgroundColor: 'white',
        }}>
        <TextInput
          style={{flex: 1, color: 'black', fontSize: 12}}
          placeholder="Search"
          placeholderTextColor={'gray'}
        />

        <TouchableOpacity style={{marginTop: 11}}>
          <Image
            source={require('../assets/search-icon.png')}
            style={{width: 20, height: 20, tintColor: 'black'}}
          />
        </TouchableOpacity>
      </View>

      {/* <Text style={{marginHorizontal: 4}}>Insurer Name</Text> */}
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            //borderWidth: 1,
            // borderColor: 'gray',
            borderRadius: 10,
            margin: 10,
            paddingHorizontal: 7,
            paddingVertical: 3,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              //justifyContent: 'space-between',
            }}>
            <Dropdown
              //mode="modal"
              style={{flex: 1, marginHorizontal: 5}}
              placeholderStyle={{
                color: 'gray',
                fontSize: 12,
              }}
              data={data4}
              search
              labelField="label"
              valueField="value"
              placeholder="Status"
              searchPlaceholder="Search..."
              value={value4}
              selectedTextStyle={{color: 'black', fontSize: 12}}
              onChange={item => {
                setValue4(item.value);
              }}
              itemTextStyle={{color: 'black'}}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            margin: 10,
            paddingHorizontal: 7,
            paddingVertical: 3,
            backgroundColor: 'white',
          }}>
          {/* <Text style={{marginHorizontal: 4}}>Insurer Name</Text> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Dropdown
              //  mode="modal"
              style={{flex: 1, marginHorizontal: 5}}
              placeholderStyle={{
                color: 'gray',
                fontSize: 12,
              }}
              data={data}
              search
              selectedTextStyle={{color: 'black', fontSize: 12}}
              itemTextStyle={{color: 'black'}}
              // maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Case Type"
              searchPlaceholder="Search..."
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
        </View>
      </View>

      <ScrollView
        refreshControl={<RefreshControl onRefresh={fetchData} />}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActiveLeads;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 10,
    //height: 38,
    // width: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    //marginTop: 7,
    flex: 1,
    backgroundColor: 'white',
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 8,
    tintColor: 'gray',
  },
  input: {
    flex: 1,
    color: 'black',
    fontSize: 12,
  },
});
