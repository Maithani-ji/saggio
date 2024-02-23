import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import RemarkListData from '../Components/RemarkListDataStack';

const RemarkList = ({navigation}) => {
  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.replace('Main');
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
        <Text style={{fontSize: 18, color: 'white'}}> Remark List</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 20,
            overflow: 'hidden',
            flexDirection: 'column',
          }}>
          {Array.from({length: 10}, (_, index) => (
            <RemarkListData key={index} index={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RemarkList;

const styles = StyleSheet.create({});
