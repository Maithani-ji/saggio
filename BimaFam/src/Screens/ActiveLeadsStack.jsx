import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import ActiveLeadsData from '../Components/ActiveLeadsData';
import DateTimePicker from '@react-native-community/datetimepicker';

const ActiveLeads = ({navigation}) => {
  const [date, setdate] = useState(new Date());
  const [mode, setmode] = useState('');
  const [show, setshow] = useState(false);
  const [date1, setdate1] = useState(new Date());
  const [mode1, setmode1] = useState('');
  const [show1, setshow1] = useState(false);

  const [datefromtext, setdatefromtext] = useState('');
  const [datetotext, setdatetotext] = useState('');
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

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#dee7f8'}}>
      {show && (
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
      )}
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
        <Text style={{fontSize: 18, color: 'white'}}>Active Leads</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          marginTop: 15,
          marginBottom: 0,
          //  gap: 10,
        }}>
        {/* Text Input Box 4 */}
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Search" />

          <TouchableOpacity>
            <Image
              source={require('../assets/search.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          //justifyContent: 'space-evenly',
          marginHorizontal: 10,
          marginVertical: 10,

          //gap: 5,
        }}>
        {/* Text Input Box 2 */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="From"
            editable={false}
            value={datefromtext}
          />

          <TouchableOpacity onPress={() => showMode('date')}>
            <Image
              source={require('../assets/date.png')}
              style={{width: 25, height: 25, marginRight: 8, tintColor: 'gray'}}
            />
          </TouchableOpacity>
        </View>

        {/* Text Input Box 3 */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="To"
            editable={false}
            value={datetotext}
          />

          <TouchableOpacity onPress={() => showMode1('date')}>
            <Image
              source={require('../assets/date.png')}
              style={{width: 25, height: 25, marginRight: 8, tintColor: 'gray'}}
            />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity
            onPress={handlesubmit}
            style={{
              marginHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0e4caf',

              alignItems: 'center',

              flex: 1.2,
              borderRadius: 10,
              padding: 10,
            }}>
            <Text style={{marginHorizontal: 10, color: 'white'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            margin: 20,
            overflow: 'hidden',
            flexDirection: 'column',
          }}>
          {Array.from({length: 10}, (_, index) => (
            <ActiveLeadsData key={index} index={index} />
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
    borderColor: '#0e4caf',
    borderRadius: 10,
    //padding: 5,
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
