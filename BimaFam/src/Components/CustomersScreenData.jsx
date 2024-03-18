import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import call from 'react-native-phone-call';
import {useNavigation} from '@react-navigation/native';
const CustomersScreenData = ({index, item}) => {
  const navigation = useNavigation();
  const handleCallPress = () => {
    const args = {
      number: item?.phone, // String value with the number to call
      prompt: true, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };
  const handlealert = () => {
    Alert.alert(
      'Confirmation',
      'Do you want to qualify and move to lead?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          //onPress: () => console.log('Cancel Pressed'),
        },
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Active Leads');
            console.log('OK Pressed');
            // Add the logic you want to execute when the user chooses to continue
          },
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <View
      key={index}
      style={{
        marginHorizontal: 10,
        flex: 1,
        flexDirection: 'row',
        // marginHorizontal: 15,
        marginBottom: 20,
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        elevation: 5,

        // Set the elevation value
        shadowColor: 'black', // Shadow color (Android)
        shadowOffset: {width: 5, height: 2}, // Shadow offset (Android)
        shadowOpacity: 0.2, // Shadow opacity (Android)
        shadowRadius: 3, // Shadow radius (Android)
      }}>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          //justifyContent: 'center',
          marginBottom: 5,
          //marginTop: 8,
        }}>
        <Image
          source={require('../assets/user.png')}
          style={{
            width: 40,
            height: 40,
          }}
        />
        <View style={{flex: 1, flexDirection: 'column', marginLeft: 5}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 4,
            }}>
            {item?.first_name}
          </Text>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/callicon.png')}
                style={{height: 20, width: 20}}
              />
              <Text
                style={{
                  fontSize: 12,
                  //fontWeight: 'bold',
                  color: 'gray',
                  textAlignVertical: 'center',
                }}>
                {item?.phone}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/mail.png')}
                style={{height: 20, width: 20}}
              />
              <Text
                style={{
                  fontSize: 12,
                  //fontWeight: 'bold',
                  color: 'gray',
                  textAlignVertical: 'center',
                }}>
                {item?.email}
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/loc.png')}
                style={{height: 20, width: 20}}
              />
              <Text
                style={{
                  fontSize: 12,
                  //fontWeight: 'bold',
                  color: 'gray',
                  textAlignVertical: 'center',
                }}>
                {item?.city +
                  ' ' +
                  item?.state +
                  ' ' +
                  item?.zip +
                  ' ' +
                  item?.country}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          // flex: 1,
          flexDirection: 'row',
          gap: -8,
          marginTop: -4,
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity onPress={handleCallPress}>
          <Image
            source={require('../assets/callz.png')}
            style={{
              width: 45,
              height: 45,
            }}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={handlealert}>
          <Image
            source={require('../assets/move.png')}
            style={{
              width: 30,
              height: 30,
              marginTop: 7,
            }}
          />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate('Customerdetail')}>
          <Image
            source={require('../assets/cedit.png')}
            style={{
              width: 45,
              height: 45,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomersScreenData;

const styles = StyleSheet.create({});
