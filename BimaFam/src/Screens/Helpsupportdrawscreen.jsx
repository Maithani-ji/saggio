import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const SubLabels = ({labels}) => (
  <View>
    {labels.map(label => (
      <Text key={label}>{label}</Text>
    ))}
  </View>
);

const Helpsupport = ({navigation}) => {
  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f4f6ff'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          //paddingBottom: 10,
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
        <Text style={{fontSize: 18, color: 'black'}}>Help and Support</Text>
      </View>
      <View
        style={{
          flex: 1,
          margin: 15,
          backgroundColor: 'white',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <Button onPress={() => showMode('date')} title="date" /> */}
        {/* {show && (
          <DateTimePicker
            // testID="datetimepicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )} */}
        <Text style={{fontSize: 30, color: 'lightgray'}}>Help And Support</Text>
      </View>
    </SafeAreaView>
  );
};

export default Helpsupport;

const styles = StyleSheet.create({});
