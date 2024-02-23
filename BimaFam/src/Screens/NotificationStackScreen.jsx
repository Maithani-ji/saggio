import {
  Button,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {ScrollView} from 'react-native-gesture-handler';
const Notifications = ({navigation}) => {
  const handleBackPress = () => {
    navigation.goBack();
  };
  const [items, setItems] = useState([...Array(5).keys()]);

  const handleRemoveItem = indexToRemove => {
    const updatedItems = items.filter((_, index) => index !== indexToRemove);
    setItems(updatedItems);
  };
  // const [date, setDate] = useState(new Date());
  // const [mode, setMode] = useState('');
  // const [show, setShow] = useState(false);
  // const [dateText, setDateText] = useState('DD-MM-YYYY');
  // const [timeText, setTimeText] = useState('HH:MM');

  // // Key change: Pass a function reference, not the invoked result
  // const onChange = (event, selectedDate) => {
  //   setShow(false);
  //   const currentDate = selectedDate || date;
  //   //setShow(Platform.OS === 'android'); // Temporarily keep visible on Android
  //   setDate(currentDate);
  //   const tempDate = new Date(currentDate);
  //   const fdate = `${tempDate.getDate()}-${
  //     tempDate.getMonth() + 1
  //   }-${tempDate.getFullYear()}`;

  //   const ftime = `${tempDate.getHours()}:${tempDate.getMinutes()}`;
  //   setDateText(fdate);
  //   setTimeText(ftime);

  //   // Delayed closure for Android compatibility

  //   /// setShow(false); // Close the DateTimePicker after handling the selection
  // };

  // const showMode = currentMode => {
  //   setShow(!show);
  //   setMode(currentMode);
  // };
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
        <Text style={{fontSize: 18, color: 'white'}}>Notifications</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{margin: 20}}>
        {/* <View>
          <Text>Hello</Text>
        </View>  */}
        {items.map((_, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              borderBottomColor: 'gray',
              borderBottomWidth: 0.5,
              marginBottom: 10,
            }}>
            <View
              style={{
                height: 60,
                width: 60,
                backgroundColor: '#0e4caf',
                padding: 10,
                borderRadius: 40,
                marginRight: 10,
              }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                }}>
                NF
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>Loremt</Text>
              <Text style={{color: 'black', marginBottom: 5}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                voluptas nisi! Culpa inventore laudantium adipisci
              </Text>
              <Text style={{marginBottom: 10}}>30 Aug</Text>
            </View>
            <TouchableOpacity onPress={() => handleRemoveItem(index)}>
              <Image
                source={require('../assets/Cross.png')}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: '#0e4caf',
                  marginRight: 10,
                }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
