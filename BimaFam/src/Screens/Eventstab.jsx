import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
//import CustomDrawerButton from '../Components/CustomdrawerButton';

const Events = ({navigation}) => {
  const [date, setdate] = useState(new Date());
  const [mode, setmode] = useState('');
  const [show, setshow] = useState(false);

  const onchange = (event, selectedDate) => {
    setshow(false);
    const currentDate = selectedDate || date;
    //setshow(Platform.OS === 'android'); // Temporarily keep visible on Android
    setdate(currentDate);
  };
  const showMode = currentMode => {
    setshow(!show);
    setmode(currentMode);
  };

  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f4f6ff'}}>
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
      <View
        style={{
          margin: 20,
          // borderColor: 'black',
          // borderWidth: 1,
          flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center',
        }}>
        {/* First Box */}
        <View style={styles.box}>
          <Image source={require('../assets/Event.png')} style={styles.icon} />
          {/* <TouchableOpacity>
              <View style={{borderWidth: '1'}}>
                <Text>Add Event</Text>
              </View>
              
            </TouchableOpacity> */}
          <Text style={{textAlign: 'center', marginTop: -10, marginBottom: 15}}>
            No Event Scheduled
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
        <TouchableOpacity
          onPress={() => showMode('date')}
          style={styles.touchableBox}>
          <View style={styles.row}>
            <Image
              source={require('../assets/Calender.png')}
              style={styles.image}
            />
            <Text style={styles.text}>View Calendar</Text>
          </View>
        </TouchableOpacity>

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
        <Text
          style={{
            textAlignVertical: 'center',
            fontWeight: 'bold',
            fontSize: 15,
            color: 'black',
            marginTop: 20,
          }}>
          Customer Activity
        </Text>
        <View
          style={{backgroundColor: 'white', borderRadius: 10, marginTop: 10}}>
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
              Scheduled Events
            </Text>
            <Text
              style={{
                textAlignVertical: 'center',
                //fontWeight: 'bold',
                fontSize: 13,
                color: 'black',
                marginLeft: 10,
              }}>
              (Till Date)
            </Text>
          </View>
          <View
            style={{
              borderColor: 'gray',
              borderWidth: 0.4,
              width: '100%',
              height: 1,
            }}></View>
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
                  2
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
                  1
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
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
    height: '32%',
    width: '100%',
    borderRadius: 10,
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
