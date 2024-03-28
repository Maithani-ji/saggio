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
const EditLead = ({navigation, route}) => {
  const {leaddata} = route?.params;
  console.log(leaddata);
  const [insurer, setinsurer] = useState([]);
  const [paymentmode, setpaymentmode] = useState([]);

  const [leadstatus, setleadstatus] = useState([]);
  const [policyplan, setpolicyplan] = useState([]);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [contact, setContact] = useState(null);
  const [address, setAddress] = useState(null);
  const [userData, setuserData] = useState(null);
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);

  const [value4, setValue4] = useState(null);
  const [notes, setNotes] = useState(null);
  const [remark, setRemark] = useState(null);
  const [load, setLoad] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState(null);
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
        setLoad(true);

        await Promise.all([
          fetchInsurerlist(),
          fetchPaymentmode(),
          fetchLeadStatus(),
          // Other data fetching functions...
        ]);

        await fetchData(); // Call fetchData after all data is fetched
      } catch (error) {
        navigation.goBack(); // Handle errors consistently
      } finally {
        setLoad(false);
      }
    };

    fetchAll();
  }, [route]); // Include route in the dependency array

  const fetchData = async () => {
    if (route?.params) {
      setuserData(route.params.leaddata);
      setEmail(leaddata?.email);
      setFirstName(leaddata?.first_name);
      setLastName(leaddata?.last_name);
      setContact(leaddata?.phone);
      setAddress(leaddata?.address);
      setLastName(leaddata?.last_name);
      setEmail(leaddata?.email);
      setAddress(leaddata?.address);
      setRemark(leaddata?.remark);
      //setuserData(userData);
      console.log('userdata', userData);
    }
  };
  const fetchPolicyplans = async in_id => {
    try {
      //setLoad(true);

      const id = await getData('user');

      const response = await axios.post(`${BASE_URL}/api/getPolicyPlans`, {
        // project_id: 8,
        user_id: id,
        insurer_id: in_id,
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
      //setLoad(false);
    }
  };

  const fetchInsurerlist = async () => {
    try {
      setLoad(true);

      const id = await getData('user');

      const response = await axios.post(`${BASE_URL}/api/getInsurer`, {
        // project_id: 8,
        user_id: id,
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

      const response = await axios.post(
        `${BASE_URL}/api/getPremiumPaymentTerm`,
        {
          // project_id: 8,
          user_id: id,
        },
      );
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
  // const fetchLabellist = async () => {
  //   try {
  //     setLoad(true);

  //     const id = await getData('user');

  //     const response = await axios.post(`${BASE_URL}/api/getLeadLabel`, {
  //       // project_id: 8,
  //       user_id: 1,
  //     });
  //     //  console.log(response.data);
  //     //  console.log(response.data.status_code);
  //     if (response.data.status_code === '200') {
  //       setlabellist(response.data.client);
  //       //  console.log('labellist', labellist);
  //     } else {
  //       //navigation.goBack();
  //       throw new Error('Invalid user id label list ');
  //     }
  //     // setLoad(false);
  //   } catch (error) {
  //     //setLoad(false);
  //     //navigation.goBack();
  //     Snackbar.show({
  //       text:
  //         error.message ||
  //         'Failed to get the Policy plan data. Please try again.',
  //       textColor: 'white',
  //       backgroundColor: 'red',
  //       duration: Snackbar.LENGTH_SHORT,
  //       marginBottom: 70,
  //     });
  //     //  console.error('Error:', error.message);
  //     // console.error('Error fetching data:', error);
  //     // setError(error);
  //   } finally {
  //     setLoad(false);
  //   }
  // };
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
      //const projectid = await getData('projectid');
      //console.log('projectid', projectid);
      if (leaddata?.project_id == null) {
        throw new Error('Project id is missing ');
      }
      const body = {
        user_id: id,
        id: leaddata?.id,
        project_id: leaddata?.project_id,
        first_name: firstName,
        last_name: lastName,
        phone: contact,
        email: email,
        address: address,

        remark: remark,
        city: 'New Delhi',
        state: 'Delhi',
        zip: '110075',
        country: 'india',
        lead_status_id: value4,
        // labels: '1',
        insurer: value,
        plan_name: value1,

        payment_term: value2,
        is_lead: leaddata?.is_lead,
      };

      console.log('body', body);
      const response = await axios.post(`${BASE_URL}/api/updateLead`, body);
      console.log('fetch data', response.data);
      if (response.status === 200) {
        Snackbar.show({
          text: 'Updated Successfully',
          textColor: 'white',

          backgroundColor: '#3aba40',
          duration: Snackbar.LENGTH_SHORT,
          //marginBottom: 70,
        });
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
  // const data3 = labellist?.map(item => ({
  //   label: item.title,
  //   value: item.id.toString(),
  // }));
  const data4 = leadstatus?.map(item => ({
    label: item.title,
    value: item.id.toString(),
  }));
  // console.log('data4', data4);

  // Add seconds as a dependency

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSave = () => {
    // Implement your logic here to handle the input data
    //handleAddevent();
    // Close the modal
    closeModal();
  };
  const handleAddevent = async () => {
    try {
      // setLoad(true);
      // const datamail = await getData('usermail');
      // const datapass = await getData('userpass');
      if (
        //eventtype == null ||
        datetext == 'DD-MM-YYYY' ||
        timetext == 'HH:MM' ||
        notes == null ||
        notes == ''
        //  reminder == null
      ) {
        throw new Error('Please fill  all the  required fields ');
      }
      const id = await getData('user');
      const projectid = await getData('projectid');
      console.log('projectid', projectid);
      const body = {
        user_id: id,
        event_type: 'followup',
        date: datetext,
        time: timetext,
        remark: notes,
        reminder: '1',
      };
      console.log('body', body);
      const response = await axios.post(`${BASE_URL}/api/addEvent`, body);
      console.log('fetch data', response.data);
      if (response.data.status === 200) {
        //handleSave()
        Snackbar.show({
          text: 'Event Added Successfully',
          textColor: 'white',
          backgroundColor: '#3aba40',
          duration: Snackbar.LENGTH_SHORT,
          // marginBottom: 70,
        });
        handleSave();
        // navigation.goBack();
      } else {
        //navigation.goBack();
        throw new Error('Invalid user  during Event');
      }
    } catch (error) {
      //setLoad(false);
      // navigation.goBack();
      Snackbar.show({
        text:
          error.message || 'Failed to add the Event data. Please try again.',
        textColor: 'white',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_SHORT,
        // marginBottom: 70,
      });
      //  console.error('Error:', error.message);
      //  console.error('Error fetching data:', error);
      // setError(error);
    } finally {
      // setLoad(false);
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
          <Text style={{fontSize: 17, color: 'black'}}> Edit Lead</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
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
                  {leaddata?.app_no == null ? 'NULL' : leaddata?.app_no}
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
                  {leaddata?.case_code == null ? 'NULL' : leaddata?.case_code}
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
                  value={firstName + ' ' + lastName}
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
                    selectedTextStyle={{color: 'black', fontSize: 14}}
                    onChange={item => {
                      fetchPolicyplans(item.value);
                      //console.log(item);
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
                    selectedTextStyle={{color: 'black', fontSize: 14}}
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
                  selectedTextStyle={{color: 'black', fontSize: 14}}
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
                  selectedTextStyle={{color: 'black', fontSize: 14}}
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
                    if (item.label === 'Followup') {
                      openModal();
                      setValue4(item.value);
                    }
                    //console.log('item', item);
                    else setValue4(item.value);
                  }}
                />
              </View>
            </View>
            {/* <View
              style={{
                //flex: 1,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 5,
                margin: 8,
                paddingHorizontal: 7,
                paddingVertical: 3,
              }}>
              {/* <Text style={{marginHorizontal: 4}}>Insurer Name</Text> 
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
            </View> */}
            <View
              style={{
                backgroundColor: '#FFFFFF', // Set the background color to white
                borderRadius: 8,
                marginHorizontal: 8,
                marginTop: 8,
              }}>
              <TextInput
                style={{
                  width: '100%',
                  height: 100,

                  borderColor: 'gray', // Set the border color (you can customize)
                  borderWidth: 1,
                  borderRadius: 7,
                  //padding: 10,
                  fontSize: 14,
                  color: 'black', // Set the text color (you can customize)
                  paddingHorizontal: 10,
                }}
                multiline
                textAlignVertical="top"
                placeholder="Add Remarks"
                placeholderTextColor="gray" // You can customize the placeholder text color
                value={remark}
                onChangeText={setRemark}
              />
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
                onPress={handleAddevent}
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

export default EditLead;

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
