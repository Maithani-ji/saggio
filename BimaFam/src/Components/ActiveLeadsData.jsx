import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import call from 'react-native-phone-call';
import {useNavigation} from '@react-navigation/native';

const ActiveLeadsData = ({index, data}) => {
  // console.log('data', data);
  const navigation = useNavigation();
  const handleCallPress = () => {
    const args = {
      number: data?.phone, // String value with the number to call
      prompt: true, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };

  return (
    <View>
      <View
        // key={index}
        style={{
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
          shadowColor: 'gray', // Shadow color (Android)
          shadowOffset: {width: 4, height: 2}, // Shadow offset (Android)
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
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
              {data?.first_name}
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
                  {data?.phone}
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
                  {data?.email}
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
                  {data?.city +
                    ' ' +
                    data?.state +
                    ' ' +
                    data?.zip +
                    ' ' +
                    data?.country}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            gap: 7,
            marginTop: 5,
            justifyContent: 'flex-end',
            marginRight: 7,
          }}>
          <TouchableOpacity onPress={handleCallPress}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 400,
                borderColor: '#0bbc63',
                backgroundColor: '#0bbc63',
                padding: 5,
              }}>
              <Image
                source={require('../assets/call.png')}
                style={{
                  width: 15,
                  height: 15,
                  tintColor: 'white',
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Edit Lead')}>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'red',
                borderRadius: 400,
                backgroundColor: 'red',
                padding: 5,
              }}>
              <Image
                source={require('../assets/edit.png')}
                style={{
                  width: 15,
                  height: 15,
                  //tintColor: 'blue',
                  //backgroundColor: 'blue',
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Remark List')}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 400,
                backgroundColor: '#fe9040',
                borderColor: '#fe9040',
                padding: 5,
              }}>
              <Image
                source={require('../assets/Remark.png')}
                style={{
                  width: 15,
                  height: 15,
                  // alignSelf: 'center',
                  // tintColor: 'orange',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActiveLeadsData;

const styles = StyleSheet.create({});
