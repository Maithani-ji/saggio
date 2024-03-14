import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import Snackbar from 'react-native-snackbar';
import {getData} from '../utils/AsyncStorag';
import axios from 'axios';
import {BASE_URL} from '../utils/constant';
import Loading from '../loadingcomponent/loading';

const EditRemark = ({navigation}) => {
  const [followbtn, setfollowbtn] = useState(false);
  const [meetingbtn, setmeetingbtn] = useState(false);
  const [load, setLoad] = useState(false);
  const [date, setdate] = useState(new Date());
  const [mode, setmode] = useState('');
  const [show, setshow] = useState(false);
  const [datetext, setdatetext] = useState('DD-MM-YYYY');
  const [timetext, settimetext] = useState('HH:MM');
  const [reminder, setreminder] = useState(null);
  const [remark, setRemark] = useState(null);
  const [eventtype, seteventtype] = useState(null);
  const handleAddevent = async () => {
    try {
      setLoad(true);
      // const datamail = await getData('usermail');
      // const datapass = await getData('userpass');
      if (
        eventtype == null ||
        datetext == 'DD-MM-YYYY' ||
        timetext == 'HH:MM' ||
        remark == null ||
        reminder == null
      ) {
        throw new Error('Please fill  all the  required fields ');
      }
      const id = await getData('user');
      const projectid = await getData('projectid');
      console.log('projectid', projectid);
      const body = {
        user_id: id,
        event_type: eventtype,
        date: datetext,
        time: timetext,
        remark: remark,
        reminder: reminder,
      };
      console.log('body', body);
      const response = await axios.post(`${BASE_URL}/api/addEvent`, body);
      console.log('fetch data', response.data);
      if (response.data.status === 200) {
        Snackbar.show({
          text: 'Event Added Successfully',
          textColor: 'white',
          backgroundColor: '#3aba40',
          duration: Snackbar.LENGTH_SHORT,
          // marginBottom: 70,
        });

        navigation.goBack();
      } else {
        //navigation.goBack();
        throw new Error('Invalid user  during Event');
      }
    } catch (error) {
      //setLoad(false);
      // navigation.goBack();
      Snackbar.show({
        text: error.message || 'Failed to add the data. Please try again.',
        textColor: 'white',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_SHORT,
        // marginBottom: 70,
      });
      //  console.error('Error:', error.message);
      //  console.error('Error fetching data:', error);
      // setError(error);
    } finally {
      setLoad(false);
    }
  };
  const onchange = (event, selectedDate) => {
    setshow(false);
    const currentDate = selectedDate || date;
    //setshow(Platform.OS === 'android'); // Temporarily keep visible on Android
    setdate(currentDate);
    const tempDate = new Date(currentDate);
    const fdate = `${tempDate.getDate()}-${
      tempDate.getMonth() + 1
    }-${tempDate.getFullYear()}`;

    const ftime = `${tempDate.getHours()}:${tempDate.getMinutes()}`;
    setdatetext(fdate);
    settimetext(ftime);
  };

  const showMode = currentMode => {
    setshow(!show);
    setmode(currentMode);
  };
  const handlefollowbtnpress = () => {
    setfollowbtn(!followbtn);
    seteventtype('followup');
    setmeetingbtn(false);
  };
  const handlemeetingbtnpress = () => {
    setmeetingbtn(!meetingbtn);
    seteventtype('meeting');
    setfollowbtn(false);
  };
  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.goBack();
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
        <Text style={{fontSize: 18, color: 'black'}}>Add Event</Text>
      </View>
      <View style={{margin: 15, flex: 1}}>
        <View
          style={{
            backgroundColor: '#FFFFFF', // Set the background color to white
            borderRadius: 10,
            width: '100%',
            marginTop: 10,
            //height: 150,
          }}>
          <View style={{margin: 15}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Text
                style={{
                  //marginHorizontal: 10,
                  marginVertical: 5,
                  fontWeight: '300',
                  color: 'black',
                }}>
                Add Reminder
              </Text>
              <BouncyCheckbox
                size={15}
                fillColor="green"
                unfillColor="#FFFFFF"
                //text="Custom Checkbox"
                iconStyle={{borderColor: 'green'}}
                innerIconStyle={{borderWidth: 2, borderRadius: 1}}
                textStyle={{fontFamily: 'JosefinSans-Regular'}}
                onPress={isChecked => {
                  isChecked ? setreminder('1') : setreminder('0');
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 3,
              }}>
              <TouchableOpacity
                onPress={handlefollowbtnpress}
                style={{
                  width: '48%',
                  //height: 20,
                  borderColor: 'gray',
                  backgroundColor: followbtn ? 'lightgray' : null,
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
                    fontWeight: '200',
                    color: 'black',
                    textAlignVertical: 'center',
                  }}>
                  Follow Up
                </Text>
                <Image
                  source={require('../assets/followup.png')} // Update with the actual path to your back button image
                  style={{
                    width: 23,
                    height: 23,
                    tintColor: '#104baf', // You can customize the color of the back button
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handlemeetingbtnpress}
                style={{
                  width: '48%',
                  //height: 20,
                  borderColor: 'gray',
                  backgroundColor: meetingbtn ? 'lightgray' : null,
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
                    fontWeight: '200',
                    color: 'black',
                    textAlignVertical: 'center',
                  }}>
                  Meeting
                </Text>
                <Image
                  source={require('../assets/meeting.png')} // Update with the actual path to your back button image
                  style={{
                    width: 23,
                    height: 23,
                    tintColor: '#104baf', // You can customize the color of the back button
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 3,
                marginTop: 15,
              }}>
              <TouchableOpacity
                onPress={() => showMode('date')}
                style={{
                  width: '48%',
                  //height: 20,
                  borderColor: 'gray',
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
                    fontWeight: '200',
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
                    onChange={onchange}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => showMode('time')}
                style={{
                  width: '48%',
                  //height: 20,
                  borderColor: 'gray',
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
                    fontWeight: '200',
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
          </View>
        </View>
        <View style={{marginBottom: 30, marginTop: 15}}>
          <Text
            style={{
              marginHorizontal: 10,
              marginVertical: 5,
              fontWeight: '300',
              color: 'black',
            }}>
            Add Remark
          </Text>
          <View
            style={{
              backgroundColor: '#FFFFFF', // Set the background color to white
              borderRadius: 10,
            }}>
            <TextInput
              style={{
                width: '100%',
                height: 150,

                // borderColor: '#000000', // Set the border color (you can customize)
                borderRadius: 2,
                //padding: 10,
                fontSize: 13,
                color: '#000000', // Set the text color (you can customize)
                paddingHorizontal: 10,
              }}
              multiline
              textAlignVertical="top"
              placeholder="Note Here"
              placeholderTextColor="#A9A9A9" // You can customize the placeholder text color
              value={remark}
              onChangeText={setRemark}
            />
          </View>
        </View>

        <View
          style={{
            alignSelf: 'center',
            marginTop: '30%',
            //width: '30%',
          }}>
          <TouchableOpacity
            onPress={handleAddevent}
            style={{
              //marginVertical: 10,
              // flex: 1,
              // height: '70%',
              // width: '35%',

              backgroundColor: 'red',
              borderRadius: 10,
              padding: 13,
              paddingHorizontal: 40,
            }}>
            <Text
              style={{
                //alignSelf: 'center',
                color: 'white',
                fontSize: 13,
                fontWeight: 'bold',
                //marginHorizontal: 10,
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditRemark;

const styles = StyleSheet.create({});
