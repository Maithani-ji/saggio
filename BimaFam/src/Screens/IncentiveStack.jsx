import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Incentive = ({navigation}) => {
  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#dee7f8'}}>
      <View
        style={{
          // flexDirection: 'row',
          // alignItems: 'center',
          // backgroundColor: '#0e4caf',
          // paddingBottom: 10,
          // padding: 20,
          // height: '13%',
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
        <Text style={{fontSize: 18, color: 'white'}}>Incentive</Text>
      </View>
      <View style={{flex: 1, margin: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 9,
            marginBottom: 10,
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              flexDirection: 'column',
              // alignContent: 'space-around',
              // paddingHorizontal: 10,
              // paddingVertical: 9,
              borderRadius: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '400',
                color: 'black',
                marginVertical: 2.5,
              }}>
              Total Sales
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                alignSelf: 'center',
                marginVertical: 2.5,
              }}>
              ₹1,00,000
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              flexDirection: 'column',
              // alignContent: 'space-around',
              // paddingHorizontal: 10,
              // paddingVertical: 9,
              borderRadius: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '400',
                color: 'black',
                marginVertical: 2.5,
              }}>
              Today's Lead
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                alignSelf: 'center',
                marginVertical: 2.5,
              }}>
              04
            </Text>
          </View>
          <View
            style={{
              flex: 1.2,
              backgroundColor: '#3dba45',
              flexDirection: 'column',
              // alignContent: 'space-around',
              //paddingHorizontal: 10,
              //paddingVertical: 9,
              borderRadius: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '400',
                color: 'black',
                marginVertical: 2.5,
              }}>
              Current Incentive
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                alignSelf: 'center',
                marginVertical: 2.5,
              }}>
              ₹1,00,000
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 10,
            marginTop: 20,
            marginBottom: 20,
          }}>
          <View
            style={{
              flex: 1,

              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  marginVertical: 2.5,
                }}>
                Month's Sale
              </Text>
              <Image
                source={require('../assets/dropdown.png')} // Update with the actual path to your back button image
                style={{
                  height: 20,
                  width: 20,
                  //tintColor: 'white', // You can customize the color of the back button
                }}
              />
            </View>
            <View
              style={{
                width: '90%',
                borderWidth: 1,
                borderColor: 'lightgray',
                alignSelf: 'center',
              }}></View>
            <View>
              <Text
                style={{
                  color: '#3dba45',
                  fontWeight: 'bold',
                  alignSelf: 'flex-start',
                  marginVertical: 2.5,
                }}>
                ₹ 1,00,000
              </Text>
              <Image
                source={require('../assets/MonthSale.png')} // Update with the actual path to your back button image
                resizeMode="contain"
                style={{
                  height: 150,
                  width: 150,

                  alignSelf: 'center',
                  //tintColor: 'white', // You can customize the color of the back button
                }}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assets/targets.png')} // Update with the actual path to your back button image
                  style={{
                    height: 20,
                    width: 20,
                    //tintColor: 'white', // You can customize the color of the back button
                  }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginVertical: 2.5,
                  }}>
                  Target
                </Text>
              </View>
              <Image
                source={require('../assets/dropdown.png')} // Update with the actual path to your back button image
                style={{
                  height: 20,
                  width: 20,
                  //tintColor: 'white', // You can customize the color of the back button
                }}
              />
            </View>
            <View
              style={{
                width: '90%',
                borderWidth: 1,
                borderColor: 'lightgray',
                alignSelf: 'center',
              }}></View>
            <View>
              <Text
                style={{
                  color: '#3dba45',
                  fontWeight: 'bold',
                  alignSelf: 'flex-start',
                  marginVertical: 2.5,
                }}></Text>
              <Image
                source={require('../assets/TargetBar.png')} // Update with the actual path to your back button image
                resizeMode="contain"
                style={{
                  height: 150,
                  width: 150,
                  alignSelf: 'center',
                  //tintColor: 'white', // You can customize the color of the back button
                }}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assets/green.png')} // Update with the actual path to your back button image
                  resizeMode="contain"
                  style={{
                    height: 10,
                    width: 10,
                    alignSelf: 'center',
                    //tintColor: 'white', // You can customize the color of the back button
                  }}
                />
                <Text>Achivement</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assets/gray.png')} // Update with the actual path to your back button image
                  resizeMode="contain"
                  style={{
                    height: 10,
                    width: 10,
                    alignSelf: 'center',
                    //tintColor: 'white', // You can customize the color of the back button
                  }}
                />
                <Text>Target</Text>
              </View>
            </View>
          </View>
        </View>
        <View
        //style={{ marginTop: -300 }}
        >
          <Image
            source={require('../assets/IncentiveChart.png')} // Update with the actual path to your back button image
            style={{
              width: '100%',
              height: '60%',
              borderRadius: 5,
              //tintColor: 'white', // You can customize the color of the back button
            }}
          />
          {/* <View
            style={{
              margin: 15,
              flex: 1,
              flexDirection: 'row',
              backgroundColor: 'white',
              // height: '10%',
              // width: '10%',
            }}></View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Incentive;

const styles = StyleSheet.create({});
