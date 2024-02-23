import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const RemarkListData = ({index}) => {
  const navigation = useNavigation();

  return (
    <View>
      <View
        key={index}
        style={{
          marginHorizontal: 20,
          flex: 1,
          flexDirection: 'row',
          // marginHorizontal: 15,
          marginBottom: 20,
          justifyContent: 'space-evenly',
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 10,
          elevation: 10,

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
            source={require('../assets/person.png')}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <View style={{flex: 1, flexDirection: 'column', marginLeft: 5}}>
            <View style={{flexDirection: 'row', marginLeft: 0}}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
                Surya Kumar
              </Text>
              <Text
                style={{
                  fontSize: 9,

                  color: 'black',
                  textAlignVertical: 'center',
                  marginHorizontal: 5,
                }}>
                18,Oct 2023 | 4:00PM
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: 'gray',
                    textAlignVertical: 'center',
                  }}>
                  Manager
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: 'gray',
                    textAlignVertical: 'center',
                  }}>
                  Lorem ipsum dolor sit amet Lorem
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: 'gray',
                    textAlignVertical: 'center',
                  }}>
                  Techiedom industry
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            gap: -12,
            marginTop: -8,
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Add Remark')}>
            <Image
              source={require('../assets/Editremark.png')}
              style={{
                width: 45,
                height: 45,
              }}
            />
          </TouchableOpacity>
          {/* Work on this line get the same size of image  */}
          {/* <View style={{marginTop: 7}}>
            <TouchableOpacity
            //</View> onPress={() => navigation.navigate('Edit Remark')}
            >
              <Image
                source={require('../assets/dropdown.png')}
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default RemarkListData;

const styles = StyleSheet.create({});
