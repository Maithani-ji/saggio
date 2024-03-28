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
import React, {useEffect, useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import Loading from '../loadingcomponent/loading';
import {getData} from '../utils/AsyncStorag';
import {BASE_URL} from '../utils/constant';
const AddRemark = ({navigation, route}) => {
  const {leaddata, edit} = route?.params;
  const [leadid, setleadid] = useState(null);
  useEffect(() => {
    if (leaddata && leaddata.remark) {
      setRemark(leaddata.remark);
      setleadid(leaddata.lead_id);
      console.log('leadid', leadid);
    } else if (leaddata) {
      setleadid(leaddata.id);
      console.log('leadid', leadid);
    }
    console.log('leadid', leadid);
  }, []);
  const [remark, setRemark] = useState(null);
  const [load, setLoad] = useState(false);
  // const onchange = (event, selectedDate) => {
  //   setshow(false);
  //   const currentDate = selectedDate || date;
  //   //setshow(Platform.OS === 'android'); // Temporarily keep visible on Android
  //   setdate(currentDate);
  //   const tempDate = new Date(currentDate);
  //   const fdate = `${tempDate.getDate()}-${
  //     tempDate.getMonth() + 1
  //   }-${tempDate.getFullYear()}`;

  //   const ftime = `${tempDate.getHours()}:${tempDate.getMinutes()}`;
  //   setdatetext(fdate);
  //   settimetext(ftime);
  // };

  // const showMode = currentMode => {
  //   setshow(!show);
  //   setmode(currentMode);
  // };
  // const handlefollowbtnpress = () => {
  //   setfollowbtn(!followbtn);
  // };
  // const handlemeetingbtnpress = () => {
  //   setmeetingbtn(!meetingbtn);
  // };
  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.goBack();
  };
  const handleaddRemark = async () => {
    try {
      if (remark == null) {
        throw new Error('Please add a remark first!!');
      }
      setLoad(true);
      // const datamail = await getData('usermail');
      // const datapass = await getData('userpass');
      const id = await getData('user');

      const response = await axios.post(`${BASE_URL}/api/addLeadRemark`, {
        lead_id: leadid,
        user_id: id,
        remark: remark,
      });
      console.log('fetch data', response.data);
      if (response.data.status === 200) {
        Snackbar.show({
          text: 'Remark Added Successfully',
          textColor: 'white',
          backgroundColor: '#3aba40',
          duration: Snackbar.LENGTH_SHORT,
          marginBottom: 70,
        });
        // navigation.navigate('Active Leads');
        let data;
        if (edit) {
          data = {id: leadid};
        }
        setTimeout(() => {
          navigation.replace('Remark List', {
            leaddata: edit ? data : leaddata,
          });
        }, 500); //
      } else {
        //navigation.goBack();
        throw new Error('Invalid project id');
      }
      // setLoad(false);
    } catch (error) {
      //setLoad(false);
      //navigation.goBack();
      Snackbar.show({
        text: error.message || 'Failed to add the data. Please try again.',
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
              tintColor: '#104baf', // You can customize the color of the back button
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18, color: 'black'}}>
          {edit ? 'Remark' : 'Add Remark'}
        </Text>
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
              value={remark}
              onChangeText={setRemark}
              multiline
              textAlignVertical="top"
              placeholder="Note Here"
              placeholderTextColor="#A9A9A9" // You can customize the placeholder text color
            />
          </View>
        </View>

        <View></View>
        <View
          style={{
            alignSelf: 'center',
            marginTop: '30%',
            //width: '30%',
          }}>
          {/* {!edit && (
            <TouchableOpacity
              onPress={handleaddRemark}
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
          )} */}
          <TouchableOpacity
            onPress={handleaddRemark}
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

export default AddRemark;

const styles = StyleSheet.create({});
