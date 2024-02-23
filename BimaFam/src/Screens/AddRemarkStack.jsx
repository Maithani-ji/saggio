import {
  Button,
  Image,
  Platform,
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
const AddRemark = ({navigation}) => {
  const [followbtn, setfollowbtn] = useState(false);
  const [meetingbtn, setmeetingbtn] = useState(false);
  const [date, setdate] = useState(new Date());
  const [mode, setmode] = useState('');
  const [show, setshow] = useState(false);
  const [datetext, setdatetext] = useState('DD-MM-YYYY');
  const [timetext, settimetext] = useState('HH:MM');

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
  };
  const handlemeetingbtnpress = () => {
    setmeetingbtn(!meetingbtn);
  };
  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.goBack();
  };
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
        <Text style={{fontSize: 18, color: 'white'}}>Add Remark</Text>
      </View>
      <View></View>
      <View style={{margin: 15, flex: 1}}>
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
              borderRadius: 8,
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
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#FFFFFF', // Set the background color to white
            borderRadius: 15,
            width: '100%',
            //height: 150,
          }}>
          <View style={{margin: 15}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
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
                onPress={isChecked => {}}
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
                  borderColor: '#0e4caf',
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
                    tintColor: '#0e4caf', // You can customize the color of the back button
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handlemeetingbtnpress}
                style={{
                  width: '48%',
                  //height: 20,
                  borderColor: '#0e4caf',
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
                    tintColor: '#0e4caf', // You can customize the color of the back button
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
                  borderColor: '#0e4caf',
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
                    tintColor: '#0e4caf', // You can customize the color of the back button
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
                  borderColor: '#0e4caf',
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
                    tintColor: '#0e4caf', // You can customize the color of the back button
                    marginRight: 10,
                  }}
                />
                {/* </View> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View></View>
        <View
          style={{
            alignSelf: 'center',
            marginTop: '30%',
            //width: '30%',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Remark List')}
            style={{
              //marginVertical: 10,
              // flex: 1,
              // height: '70%',
              // width: '35%',

              backgroundColor: '#0e4caf',
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

export default AddRemark;

const styles = StyleSheet.create({});
