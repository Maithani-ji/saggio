import {
  Image,
  Linking,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import Snackbar from 'react-native-snackbar';
import axios from 'axios';
import {getData} from '../utils/AsyncStorag';
import Loading from '../loadingcomponent/loading';
import {BASE_URL} from '../utils/constant';
import Timer from '../Components/Timer';
import LinearGradient from 'react-native-linear-gradient';
const Leadsdata = ({navigation}) => {
  const [insurer, setinsurer] = useState([]);
  const [paymentmode, setpaymentmode] = useState([]);
  const [labellist, setlabellist] = useState([]);
  const [leadstatus, setleadstatus] = useState([]);
  const [policyplan, setpolicyplan] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [userData, setuserData] = useState(null);
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value4, setValue4] = useState(null);
  const [notes, setNotes] = useState(null);

  const [load, setLoad] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('');
  const [show, setShow] = useState(false);
  const [datetext, setDatetext] = useState('DD-MM-YYYY');
  const [timetext, setTimetext] = useState('HH:MM');
  // Add seconds as a dependency// Include seconds and minutes as dependencies

  // Update date and time when selected by the user
  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate;
    setDate(currentDate);
    const tempDate = new Date(currentDate);
    const fdate = `${tempDate.getDate()}-${
      tempDate.getMonth() + 1
    }-${tempDate.getFullYear()}`;
    const ftime = `${tempDate.getHours()}:${tempDate.getMinutes()}`;
    setDatetext(fdate);
    setTimetext(ftime);
  };

  const showMode = currentMode => {
    setShow(!show);
    setMode(currentMode);
  };
  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoad(true); // Set loading state to true before fetching data

        await Promise.all([
          fetchInsurerlist(),
          fetchPolicyplans(),
          fetchPaymentmode(),
          fetchLabellist(),
          fetchLeadStatus(),
          fetchData(),
        ]);

        // Once all data is fetched, you can proceed with other actions if needed
      } catch (error) {
        // Handle errors
        navigation.goBack();
      } finally {
        setLoad(false); // Set loading state to false after fetching data
      }
    };

    fetchAll(); // Initial data fetch
  }, []); // Empty dependency array ensures this effect runs once when component mounts
  const fetchData = async () => {
    try {
      setLoad(true);
      // const datamail = await getData('usermail');
      // const datapass = await getData('userpass');
      const id = await getData('user');
      const projectid = await getData('projectid');
      console.log('projectid', projectid);
      const response = await axios.post(`${BASE_URL}/api/getNextCall`, {
        project_id: projectid,
        user_id: id,
      });
      console.log('fetch data', response.data);
      if (response.data.status === 200) {
        // Assuming your API returns data in the response.data property
        const userData = response.data.data;
        // // await storeData('id', userData.id);
        setEmail(userData?.email);
        setFirstName(userData?.first_name);
        setLastName(userData?.last_name);
        setContact(userData?.phone);
        setAddress(userData?.address);
        setLastName(userData?.last_name);
        setEmail(userData?.email);
        setAddress(userData?.address);
        setuserData(userData); // Set user state after updating other states
        //  navigation.goBack();
        console.log('userdata', userData);
      } else {
        //navigation.goBack();
        throw new Error('Invalid project id');
      }
      // setLoad(false);
    } catch (error) {
      //setLoad(false);
      navigation.goBack();
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
  const fetchPolicyplans = async () => {
    try {
      setLoad(true);

      const id = await getData('user');

      const response = await axios.post(`${BASE_URL}/api/getPolicyPlans`, {
        // project_id: 8,
        user_id: 1,
      });
      //  console.log(response.data);
      // console.log(response.data.status_code);
      if (response.data.status_code === '200') {
        setpolicyplan(response.data.client);
        //  console.log('policyplan', policyplan);
      } else {
        //navigation.goBack();
        throw new Error('Invalid user id policy plan');
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

  const fetchInsurerlist = async () => {
    try {
      setLoad(true);

      const id = await getData('user');

      const response = await axios.post(`${BASE_URL}/api/getInsurer`, {
        // project_id: 8,
        user_id: 1,
      });
      //  console.log(response.data);
      //   console.log(response.data.status_code);
      if (response.data.status_code === '200') {
        //  console.log(response.data.client);
        setinsurer(response.data.client);
        // console.log('insurer data', insurer);
      } else {
        //navigation.goBack();
        throw new Error('Invalid user id insurer list');
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
  const fetchPaymentmode = async () => {
    try {
      setLoad(true);

      const id = await getData('user');

      const response = await axios.post(`${BASE_URL}/api/getPaymentMode`, {
        // project_id: 8,
        user_id: 1,
      });
      //console.log(response.data);
      // console.log(response.data.status);
      if (response.data.status === 200) {
        setpaymentmode(response.data.data);
        //  console.log('payment data', paymentmode);
      } else {
        //navigation.goBack();
        throw new Error('Invalid user id payment plan');
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
  const fetchLabellist = async () => {
    try {
      setLoad(true);

      const id = await getData('user');

      const response = await axios.post(`${BASE_URL}/api/getLeadLabel`, {
        // project_id: 8,
        user_id: 1,
      });
      //  console.log(response.data);
      //  console.log(response.data.status_code);
      if (response.data.status_code === '200') {
        setlabellist(response.data.client);
        //  console.log('labellist', labellist);
      } else {
        //navigation.goBack();
        throw new Error('Invalid user id label list ');
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
  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.goBack();
  };
  const handleUpdate = async () => {
    try {
      setLoad(true);
      // const datamail = await getData('usermail');
      // const datapass = await getData('userpass');
      const id = await getData('user');
      const projectid = await getData('projectid');
      console.log('projectid', projectid);
      const body = {
        user_id: id,
        id: userData?.id,
        project_id: projectid,
        first_name: firstName,
        last_name: lastName,
        phone: contact,
        email: email,
        address: '306, Dwarka New Delhi',
        follow_up_time: datetext,
        visit_time: timetext,
        remark: notes,
        city: 'New Delhi',
        state: 'Delhi',
        zip: '110075',
        country: 'india',
        lead_status_id: value4,
        labels: value3,
        insurer: value,
        policy_plan: value1,

        payment_term: value2,
        is_lead: userData.is_lead,
      };
      console.log('body', body);
      const response = await axios.post(`${BASE_URL}/api/updateLead`, body);
      // console.log('fetch data', response);
      if (response.status === 200) {
        Snackbar.show({
          text: 'Updated Successfully',
          textColor: 'white',

          backgroundColor: '#3aba40',
          duration: Snackbar.LENGTH_SHORT,
          //marginBottom: 70,
        });
        // Assuming your API returns data in the response.data property
        //  const userData = response.data.client;
        // // await storeData('id', userData.id);
        // setEmail(userData?.email);
        // setFirstName(userData?.first_name);
        // setLastName(userData?.last_name);
        // setContact(userData?.phone);
        // setAddress(userData?.address);
        // setLastName(userData?.last_name);
        // setEmail(userData?.email);
        // setAddress(userData?.address);
        //setuserData(userData); // Set user state after updating other states
        //  navigation.goBack();
      } else {
        //navigation.goBack();
        throw new Error('Invalid project id during update');
      }
      setLoad(false);
    } catch (error) {
      //setLoad(false);
      // navigation.goBack();
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
  const data = insurer?.map(item => ({
    label: item.title,
    value: item.id.toString(),
  }));

  const data1 = policyplan?.map(item => ({
    label: item.title,
    value: item.id.toString(),
  }));
  const data2 = paymentmode?.map(item => ({
    label: item.title,
    value: item.id.toString(),
  }));
  const data3 = labellist?.map(item => ({
    label: item.title,
    value: item.id.toString(),
  }));
  const data4 = leadstatus?.map(item => ({
    label: item.title,
    value: item.id.toString(),
  }));

  // Add seconds as a dependency

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSave = () => {
    // Implement your logic here to handle the input data

    // Close the modal
    closeModal();
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
          <Text style={{fontSize: 17, color: 'black'}}>Lead</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
          <TouchableOpacity
            onPress={fetchData}
            style={{
              backgroundColor: '#3aba40',
              paddingHorizontal: 10,
              paddingVertical: 5,
              flexDirection: 'row',
              borderRadius: 7,
            }}>
            <Text style={{fontSize: 14, color: 'white', marginTop: 0.5}}>
              Next Lead
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#3790ee', '#36D1DC']}
          start={{x: 0, y: 0}} // Horizontal start
          end={{x: 1, y: 0}} // Horizontal end
          style={{
            //padding: 2,
            flex: 1,
            //flexDirection: 'row',
            marginVertical: 20,
            marginHorizontal: 10,
            borderRadius: 10,
            paddingHorizontal: 15,
            //justifyContent: 'center',
            paddingVertical: 10,
            borderRadius: 10,
          }}>
          <View style={{marginBottom: 10, marginLeft: 2}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/userr.png')} // Update with the actual path to your back button image
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'white', // You can customize the color of the back button
                  marginRight: 5,
                  //marginLeft: -10,
                  marginTop: 2,
                }}
              />
              <Text style={{color: 'white', fontSize: 16}}>
                {firstName} {lastName}
              </Text>
            </View>
            <View>
              <Text style={{color: 'white', fontSize: 13, marginLeft: 25}}>
                +91 {contact}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/113.png')} // Update with the actual path to your back button image
                style={{
                  width: 25,
                  height: 25,
                  tintColor: 'white', // You can customize the color of the back button
                  marginRight: 5,
                  //marginLeft: -10,
                  marginTop: -3,
                }}
              />
              <Text style={{color: 'white', marginLeft: -1}}>65/67</Text>
            </View>
            <View>
              <Timer />
            </View>
            <TouchableOpacity
              onPress={openModal}
              style={{
                backgroundColor: 'white',
                paddingHorizontal: 10,
                paddingVertical: 3,
                flexDirection: 'row',
                borderRadius: 7,
                //marginRight: 5,
                marginTop: -3,
              }}>
              <Image
                source={require('../assets/lead-follow.png')} // Update with the actual path to your back button image
                style={{
                  width: 15,
                  height: 15,
                  tintColor: '#3790ee', // You can customize the color of the back button
                  marginRight: 5,
                  marginTop: 2,
                }}
              />
              <Text style={{fontSize: 13, color: '#3790ee', fontWeight: 600}}>
                Lead Follow Up
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <View
          style={{
            margin: 10,
            paddingHorizontal: 25,
            backgroundColor: 'white',
            paddingVertical: 10,
            borderRadius: 10,
            elevation: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{marginLeft: -30, flexDirection: 'row'}}>
              <Image
                source={require('../assets/applicationno.png')} // Update with the actual path to your back button image
                style={{
                  width: 25,
                  height: 25,
                  tintColor: 'black', // You can customize the color of the back button
                  marginRight: 7,
                  //marginLeft: -10,
                  marginTop: 8,
                }}
              />
              <View>
                <Text style={{color: 'gray', fontSize: 13}}>
                  Application Number
                </Text>
                <Text
                  style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
                  SAG1095
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 50,
                width: 1,
                backgroundColor: 'gray',
              }}></View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/case.png')} // Update with the actual path to your back button image
                style={{
                  width: 35,
                  height: 35,
                  tintColor: 'black', // You can customize the color of the back button
                  marginRight: 5,
                  //marginLeft: -10,
                  marginTop: 2,
                }}
              />
              <View style={{}}>
                <Text style={{color: 'gray', fontSize: 13}}>Case Code</Text>
                <Text
                  style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
                  8596
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 10,
            marginBottom: 10,
            backgroundColor: '#00bf62',
            alignSelf: 'center',
            // height: 50,
            borderRadius: 20,
            paddingHorizontal: 20,
            paddingVertical: 7,
          }}
          onPress={() => Linking.openURL(`tel:${contact}`)}>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              //  marginRight: 20,
              //  marginTop: -3,
              gap: 10,
            }}
            //onPress={handleCallPress}
          >
            <Image
              source={require('../assets/calll.png')} // Update with the actual path to your back button image
              style={{
                width: 26,
                height: 26,
                tintColor: 'white', // You can customize the color of the back button
                //marginRight: 5,
                //marginLeft: -10,
                // marginTop: 5,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                textAlignVertical: 'center',
                // marginLeft: -5,
              }}>
              Call Now
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            //flex: 1,
            marginVertical: 10,
            marginHorizontal: 10,
            backgroundColor: 'white',
            //padding: 10,
            borderRadius: 10,
            marginBottom: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              // paddingHorizontal: 10,
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                paddingHorizontal: 20,
                marginTop: 5,
              }}>
              <Image
                source={require('../assets/Leadsdetails.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'black', // You can customize the color of the back button
                  marginRight: 5,
                  //marginTop: 1,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    fontWeight: 'bold',
                    marginRight: 5,
                    marginBottom: 10,
                  }}>
                  Leads Details
                </Text>
              </View>
            </View>
          </View>
          <View style={{padding: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: 'gray',
                  borderRadius: 5,
                  margin: 8,
                  paddingHorizontal: 7,
                  paddingVertical: 1,
                }}>
                <TextInput
                  style={{marginVertical: -5, color: 'black'}}
                  placeholder="Name"
                  placeholderTextColor={'gray'}
                  editable={true}
                  value={firstName}
                  onChangeText={setFirstName}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: 'gray',
                  borderRadius: 5,
                  margin: 8,
                  paddingHorizontal: 7,
                  paddingVertical: 1,
                }}>
                <TextInput
                  style={{marginVertical: -5, color: 'black'}}
                  placeholder="Contact No"
                  keyboardType="number-pad"
                  placeholderTextColor={'gray'}
                  value={contact}
                  onChangeText={setContact}
                />
              </View>
            </View>
            <View
              style={{
                //flex: 1,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 5,
                margin: 8,
                paddingHorizontal: 7,
                paddingVertical: 1,
              }}>
              <TextInput
                style={{marginVertical: -5, color: 'black'}}
                placeholderTextColor={'gray'}
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: 'gray',
                  borderRadius: 5,
                  margin: 8,
                  paddingHorizontal: 7,
                  paddingVertical: 3,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    //justifyContent: 'space-between',
                  }}>
                  <Dropdown
                    // mode="modal"
                    style={{flex: 1, marginHorizontal: 5}}
                    placeholderStyle={{
                      color: 'gray',
                      fontSize: 14,
                    }}
                    data={data}
                    search
                    labelField="label"
                    valueField="value"
                    placeholder="Insurer Name"
                    searchPlaceholder="Search..."
                    value={value}
                    selectedTextStyle={{color: 'black'}}
                    onChange={item => {
                      setValue(item.value);
                    }}
                    itemTextStyle={{color: 'black'}}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: 'gray',
                  borderRadius: 5,
                  margin: 8,
                  paddingHorizontal: 7,
                  paddingVertical: 3,
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
                      fontSize: 14,
                    }}
                    data={data1}
                    search
                    selectedTextStyle={{color: 'black'}}
                    itemTextStyle={{color: 'black'}}
                    // maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Plan Name"
                    searchPlaceholder="Search..."
                    value={value1}
                    onChange={item => {
                      setValue1(item.value);
                    }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                //flex: 1,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 5,
                margin: 8,
                paddingHorizontal: 7,
                paddingVertical: 3,
              }}>
              {/* <Text style={{marginHorizontal: 4}}>Insurer Name</Text> */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Dropdown
                  //    mode="modal"
                  style={{flex: 1, marginHorizontal: 5}}
                  placeholderStyle={{color: 'gray', fontSize: 14}}
                  selectedTextStyle={{color: 'black'}}
                  // inputSearchStyle={styles.inputSearchStyle}
                  //iconStyle={styles.iconStyle}
                  data={data2}
                  itemTextStyle={{color: 'black'}}
                  search
                  // maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Premium Payment Term "
                  searchPlaceholder="Search..."
                  value={value2}
                  onChange={item => {
                    setValue2(item.value);
                  }}
                />
              </View>
            </View>
            <View
              style={{
                //flex: 1,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 5,
                margin: 8,
                paddingHorizontal: 7,
                paddingVertical: 3,
              }}>
              {/* <Text style={{marginHorizontal: 4}}>Insurer Name</Text> */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Dropdown
                  //mode="modal"
                  style={{flex: 1, marginHorizontal: 5}}
                  placeholderStyle={{
                    color: 'gray',
                    fontSize: 14,
                  }}
                  selectedTextStyle={{color: 'black'}}
                  // inputSearchStyle={styles.inputSearchStyle}
                  //iconStyle={styles.iconStyle}
                  data={data4}
                  itemTextStyle={{color: 'black'}}
                  search
                  // maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Status"
                  searchPlaceholder="Search..."
                  value={value4}
                  onChange={item => {
                    setValue4(item.value);
                  }}
                />
              </View>
            </View>
            <View
              style={{
                //flex: 1,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 5,
                margin: 8,
                paddingHorizontal: 7,
                paddingVertical: 3,
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
                    fontSize: 14,
                  }}
                  selectedTextStyle={{color: 'black'}}
                  // inputSearchStyle={styles.inputSearchStyle}
                  //iconStyle={styles.iconStyle}
                  data={data3}
                  itemTextStyle={{color: 'black'}}
                  search
                  // maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Label"
                  searchPlaceholder="Search..."
                  value={value3}
                  onChange={item => {
                    setValue3(item.value);
                  }}
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={handleUpdate}
              style={{
                marginVertical: 20,
                // flex: 1,
                // height: '70%',
                // width: '35%',

                backgroundColor: '#0e4caf',
                borderRadius: 10,
                padding: 10,
                paddingHorizontal: 25,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  //alignSelf: 'center',
                  color: 'white',
                  fontSize: 13,

                  fontWeight: 'bold',
                  //marginHorizontal: 10,
                }}>
                Save Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
        style={{}}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 10,
                marginTop: 10,
              }}>
              Follow Up Time
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 3,
                marginTop: 10,
                marginBottom: 10,
              }}>
              <TouchableOpacity
                onPress={() => showMode('date')}
                style={{
                  width: '48%',
                  //height: 20,
                  borderColor: 'lightgray',
                  borderWidth: 0.8,
                  borderRadius: 7,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 3,
                }}>
                <Text
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 5,
                    fontWeight: '400',
                    color: 'black',
                    textAlignVertical: 'center',
                  }}>
                  {datetext}
                </Text>
                <Image
                  source={require('../assets/Scheduledevents.png')} // Update with the actual path to your back button image
                  style={{
                    width: 23,
                    height: 23,
                    tintColor: '#104baf', // You can customize the color of the back button
                    marginRight: 10,
                  }}
                />
                {show && (
                  <DateTimePicker
                    testID="datetimepicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => showMode('time')}
                style={{
                  width: '48%',
                  //height: 20,
                  borderColor: 'lightgray',
                  borderWidth: 0.8,
                  borderRadius: 7,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 3,
                }}>
                {/* <View> */}
                <Text
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 5,
                    fontWeight: '400',
                    color: 'black',
                    textAlignVertical: 'center',
                  }}>
                  {timetext}
                </Text>
                <Image
                  source={require('../assets/time.png')} // Update with the actual path to your back button image
                  style={{
                    width: 23,
                    height: 23,
                    tintColor: '#104baf', // You can customize the color of the back button
                    marginRight: 10,
                  }}
                />
                {/* </View> */}
              </TouchableOpacity>
            </View>
            <Text
              style={{
                marginVertical: 10,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 10,
              }}>
              Notes
            </Text>
            <View
              style={{
                backgroundColor: '#FFFFFF', // Set the background color to white
                borderRadius: 8,
              }}>
              <TextInput
                style={{
                  width: '100%',
                  height: 150,

                  borderColor: 'lightgray', // Set the border color (you can customize)
                  borderWidth: 0.8,
                  borderRadius: 7,
                  //padding: 10,
                  fontSize: 13,
                  color: '#000000', // Set the text color (you can customize)
                  paddingHorizontal: 10,
                }}
                multiline
                textAlignVertical="top"
                placeholder="Please Enter Notes"
                placeholderTextColor="#A9A9A9" // You can customize the placeholder text color
                value={notes}
                onChangeText={setNotes}
              />
            </View>
            <View
              style={{
                marginTop: 40,
                marginBottom: 10,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                gap: 10,
              }}>
              <TouchableOpacity
                onPress={handleSave}
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  borderRadius: 7,
                  backgroundColor: '#0e4caf',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,

                    // fontWeight: 'bold',
                  }}>
                  Create
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={closeModal}
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  borderRadius: 7,
                  backgroundColor: 'lightgray',
                  //borderWidth: 0.2,
                }}>
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 13,

                    // fontWeight: 'bold',
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Leadsdata;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#0e4caf',
    color: 'white',
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    // margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Translucent white background
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#0e4caf',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
