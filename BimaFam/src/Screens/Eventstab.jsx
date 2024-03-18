import {
  Button,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Loading from '../loadingcomponent/loading';
import {getData} from '../utils/AsyncStorag';
import Snackbar from 'react-native-snackbar';
import axios from 'axios';
import {BASE_URL, getWeekday} from '../utils/constant';
import {useFocusEffect} from '@react-navigation/native';
//import CustomDrawerButton from '../Components/CustomdrawerButton';

const Events = ({navigation}) => {
  const [date, setdate] = useState(new Date());
  const [mode, setmode] = useState('');
  const [show, setshow] = useState(false);
  const [datetext, setDatetext] = useState('YYYY-MM-DD');
  const [load, setLoad] = useState(false);
  const [events, setEvents] = useState(null);
  useEffect(() =>
    //React.useCallback(() =>
    {
      handlsearchEvent();
    }, []);
  // ); // Dependency ar
  const onChange = (event, selectedDate) => {
    setshow(false);
    const currentDate = selectedDate;
    setdate(currentDate);
    const tempDate = new Date(currentDate);
    const fdate = `${tempDate.getFullYear()}-${
      tempDate.getMonth() + 1
    }-${tempDate.getDate()}`;
    const ftime = `${tempDate.getHours()}:${tempDate.getMinutes()}`;
    setDatetext(fdate);
  };
  const showMode = currentMode => {
    setshow(!show);
    setmode(currentMode);
  };

  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.goBack();
  };
  const handlsearchEvent = async () => {
    try {
      setLoad(true);
      // const datamail = await getData('usermail');
      // const datapass = await getData('userpass');
      // if (
      //   // eventtype == null ||
      //   datetext == 'YYYY-MM-DD'
      //   //  timetext == 'HH:MM' ||
      //   // remark == null ||
      //   //  reminder == null
      // ) {
      //   throw new Error('Please select a date first ');
      // }
      const id = await getData('user');
      const projectid = await getData('projectid');
      console.log('projectid', projectid);
      const body = {
        user_id: id,
        from_date: datetext == 'YYYY-MM-DD' ? '' : datetext,
      };
      console.log('body', body);
      const response = await axios.post(`${BASE_URL}/api/getEventList`, body);
      console.log('fetch data', response.data);
      if (response.data.status === 200) {
        Snackbar.show({
          text: 'You have some Events Scheduled',
          textColor: 'white',
          backgroundColor: '#3aba40',
          duration: Snackbar.LENGTH_SHORT,
          marginBottom: 70,
        });
        setEvents(response.data.data);
        //navigation.goBack();
      } else if (response.data.data == null) {
        //navigation.goBack();
        throw new Error('No data available for that date');
      } else throw new Error('Invalid user  during Event search');
    } catch (error) {
      //setLoad(false);
      //  navigation.goBack();
      setDatetext('YYYY-MM-DD');
      Snackbar.show({
        text:
          error.message || 'Failed to get the Events data. Please try again.',
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
        <Text style={{fontSize: 18, color: 'black'}}>Event Scheduled</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginHorizontal: 20,

          // borderColor: 'black',
          // borderWidth: 1,
          flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center',
        }}
        refreshControl={<RefreshControl onRefresh={handlsearchEvent} />}>
        {/* First Box */}
        <View
          style={{
            backgroundColor: 'white',
            //padding: 1,
            alignItems: 'center',
            // height: '32%',
            width: '100%',
            borderRadius: 10,
            marginTop: 10,
          }}>
          <Image
            source={require('../assets/Event.png')}
            style={{height: 90, width: 90, marginTop: -10}}
          />

          <Text
            style={{
              textAlign: 'center',
              marginTop: 0,
              marginBottom: 15,
              color: 'gray',
            }}>
            {events != null
              ? `${events?.events.length} Event Scheduled`
              : 'No Event Scheduled'}
          </Text>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Edit Remark')}
              style={{
                borderColor: 'red',
                borderWidth: 1,

                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 4,
                marginBottom: 10,
              }}>
              <Text style={{color: 'red'}}>+ Add Event</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <TouchableOpacity
          onPress={() => showMode('date')}
          style={styles.touchableBox}>
          <View style={styles.row}>
            <Image
              source={require('../assets/Calender.png')}
              style={styles.image}
            />
            <Text style={styles.text}>View Calendar</Text>
          </View>
        </TouchableOpacity> */}

        {/* Second Box
          <TouchableOpacity style={styles.touchableBox}>
            <View style={styles.row}>
              <Image
                source={require('../assets/Event.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Your Text Here</Text>
            </View>
          </TouchableOpacity> */}
        {/* <Text
          style={{
            textAlignVertical: 'center',
            fontWeight: 'bold',
            fontSize: 15,
            color: 'black',
            marginTop: 20,
          }}>
          Customer Activity
        </Text> */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              borderRadius: 10,
            }}>
            <Image
              source={require('../assets/Calender.png')}
              style={{tintColor: '#104baf', width: 50, height: 50}}
            />
            <Text
              style={{
                textAlignVertical: 'center',
                fontWeight: 'bold',
                fontSize: 15,
                color: 'black',
              }}>
              {events != null ? 'Your Scheduled Events' : 'Search for Events'}
            </Text>
            {/* <Text
              style={{
                textAlignVertical: 'center',
                //fontWeight: 'bold',
                fontSize: 13,
                color: 'black',
                marginLeft: 10,
              }}>
              (Till Date)
            </Text> */}
          </View>
          {/* <View
            style={{
              borderColor: 'gray',
              borderWidth: 0.4,
              width: '100%',
              height: 1,
              marginBottom: 10,
            }}></View> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginBottom: 20,
              gap: 10,
            }}>
            <TouchableOpacity
              onPress={() => showMode('date')}
              style={{
                //width: '80%',
                flex: 1,
                //height: 20,
                borderColor: '#104baf',
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
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                borderRadius: 5,
                backgroundColor: '#104baf',
                alignItems: 'center',
              }}
              onPress={handlsearchEvent}>
              <Image
                source={require('../assets/search-icon.png')}
                style={{
                  tintColor: 'white',
                  width: 25,
                  height: 25,
                  marginTop: 8,
                }}
              />
            </TouchableOpacity>
          </View>
          {events != null && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  //justifyContent: 'space-between',
                }}>
                <Image
                  source={require('../assets/followup.png')}
                  style={{tintColor: '#104baf', width: 40, height: 40}}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    // justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      textAlignVertical: 'center',
                      //fontWeight: 'bold',
                      fontSize: 12,
                      color: 'black',
                      marginLeft: 5,
                    }}>
                    Follow Up
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      //fontWeight: 'bold',
                      fontSize: 20,
                      color: 'black',
                      marginLeft: 5,
                      fontWeight: 'bold',
                    }}>
                    {events?.total_followup}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  //justifyContent: 'space-between',
                }}>
                <Image
                  source={require('../assets/Customers.png')}
                  style={{tintColor: '#104baf', width: 35, height: 35}}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    // justifyContent: 'space-between',
                    marginRight: 5,
                  }}>
                  <Text
                    style={{
                      textAlignVertical: 'center',
                      //fontWeight: 'bold',
                      fontSize: 12,
                      color: 'black',
                      marginLeft: 5,
                    }}>
                    Meeting
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      //fontWeight: 'bold',
                      fontSize: 20,
                      color: 'black',
                      marginLeft: 5,
                      fontWeight: 'bold',
                    }}>
                    {events?.total_meeting}
                  </Text>
                </View>
              </View>
            </View>
          )}
          {events != null &&
            events?.events.length > 0 &&
            events?.events.map((item, index) => (
              <View
                key={item?.id}
                style={{paddingHorizontal: 10, marginBottom: 30}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: 10,
                  }}>
                  <View style={{}}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: 30,
                        fontWeight: 800,
                      }}>
                      {item?.start_date.split('-')[2]}
                    </Text>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: 13,
                      }}>
                      {getWeekday(item?.start_date)}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: '#f4f6ff',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 5,
                      }}>
                      <Text style={{fontWeight: 500, color: 'gray'}}>
                        {item?.start_time.split(':')[0]}:
                        {item?.start_time.split(':')[1]}
                      </Text>
                      {item?.type == 'followup' ? (
                        <View
                          style={{
                            backgroundColor: '#3aba40',
                            paddingHorizontal: 4,
                            borderRadius: 7,
                          }}>
                          <Text style={{color: 'white', fontSize: 13}}>
                            Followup
                          </Text>
                        </View>
                      ) : item?.type === 'meeting' ? (
                        <View
                          style={{
                            backgroundColor: 'orange',
                            paddingHorizontal: 4,
                            borderRadius: 7,
                          }}>
                          <Text style={{color: 'white', fontSize: 13}}>
                            Meeting
                          </Text>
                        </View>
                      ) : null}
                    </View>
                    <View style={{marginBottom: 5}}>
                      <Text
                        style={{fontWeight: 600, color: 'black', fontSize: 17}}>
                        {item?.title}
                      </Text>
                    </View>
                    <View style={{marginBottom: 5}}>
                      <Text
                        style={{
                          fontWeight: 300,
                          color: 'black',
                          textAlign: 'left',
                        }}>
                        {item?.description}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    // alignItems: 'center',
  },
  box: {
    backgroundColor: 'white',
    //padding: 1,
    alignItems: 'center',
    // height: '32%',
    width: '100%',
    borderRadius: 10,
    marginTop: 10,
  },
  icon: {
    width: 110,
    height: 110,
  },
  touchableBox: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    width: '100%',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    //marginRight: 1,
  },
  text: {
    fontSize: 13,
    // fontWeight: 'bold',
    color: 'black',
  },
});
