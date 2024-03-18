import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getData} from '../utils/AsyncStorag';
import Snackbar from 'react-native-snackbar';
import axios from 'axios';
import {BASE_URL} from '../utils/constant';
import Loading from '../loadingcomponent/loading';

const Incentive = ({navigation}) => {
  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.goBack();
  };
  const [incentive, setincentive] = useState(null);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    fetchData();
  }, [fetchData]); // Empty dependency array ensures this effect runs once when component mounts
  const fetchData = async () => {
    try {
      setLoad(true);
      // const datamail = await getData('usermail');
      // const datapass = await getData('userpass');
      const id = await getData('user');
      //console.log(datamail, datapass);
      const response = await axios.post(`${BASE_URL}/api/getIncentive`, {
        user_id: id,
      });
      console.log(response.data);
      if (response.data.status === 200) {
        // Assuming your API returns data in the response.data property
        const userData = response.data.data;
        setincentive(userData);
        console.log(userData.chart);
        // await storeData('id', userData.id);
        //setEmail(userData?.email);

        //setContact(userData?.phone);
        // setAddress(userData?.address);
        //setUser(userData); // Set user state after updating other states
        //  navigation.goBack();
      } else {
        throw new Error('Invalid user id');
      }
      // setLoad(false);
    } catch (error) {
      //setLoad(false);
      navigation.goBack();
      Snackbar.show({
        text:
          error.message ||
          'Failed to get the Incentive data. Please try again.',
        textColor: 'white',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_SHORT,
        marginBottom: 70,
      });
      //  console.error('Error:', error.message);
      // console.error('Error fetching data:', error);
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
          // flexDirection: 'row',
          // alignItems: 'center',
          // backgroundColor: '#0e4caf',
          // paddingBottom: 10,
          // padding: 20,
          // height: '13%',
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
        <Text style={{fontSize: 18, color: 'black'}}>Incentive</Text>
      </View>
      <ScrollView
        refreshControl={<RefreshControl onRefresh={fetchData} />}
        showsVerticalScrollIndicator={false}
        style={{flex: 1, marginHorizontal: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 9,
            marginVertical: 10,
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
              padding: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '400',
                color: 'black',
                fontSize: 13,
                // marginVertical: 2.5,
              }}>
              Total Sales
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: 'bold',
                alignSelf: 'center',
                //  marginVertical: 2.5,
              }}>
              ₹{incentive?.total_sale}
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
              padding: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '400',
                color: 'black',
                fontSize: 13,
                //  marginVertical: 2.5,
              }}>
              Total Lead
            </Text>
            <Text
              style={{
                //fontSize: 13,
                color: 'black',
                fontWeight: 'bold',
                alignSelf: 'center',
                //  marginVertical: 2.5,
                fontSize: 16,
              }}>
              {incentive?.total_lead}
            </Text>
          </View>
          <View
            style={{
              flex: 1.5,
              backgroundColor: 'red',
              flexDirection: 'column',
              // alignContent: 'space-around',
              //paddingHorizontal: 10,
              //paddingVertical: 9,
              borderRadius: 10,
              padding: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '400',
                color: 'white',
                fontSize: 13,
                //  marginVertical: 2.5,
              }}>
              Current Incentive
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
                // marginVertical: 2.5,
                fontSize: 16,
              }}>
              ₹{incentive?.current_incentive}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 10,
            marginTop: 10,
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
                width: '100%',
                borderWidth: 0.5,
                borderColor: 'lightgray',
                alignSelf: 'center',
                backgroundColor: 'lightgray',
              }}></View>
            <View>
              <Text
                style={{
                  color: '#3dba45',
                  fontWeight: 'bold',
                  alignSelf: 'flex-start',
                  marginVertical: 2.5,
                }}>
                ₹{incentive?.monthly_sale}
              </Text>
              <Image
                source={require('../assets/MonthSale.png')} // Update with the actual path to your back button image
                resizeMode="contain"
                style={{
                  height: 200,
                  width: 200,
                  marginBottom: -50,
                  marginTop: 20,
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
                width: '100%',
                borderWidth: 0.5,
                borderColor: 'lightgray',
                alignSelf: 'center',
                backgroundColor: 'lightgray',
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
                <Text style={{color: 'black'}}>Achivement</Text>
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
                <Text style={{color: 'black'}}>Target</Text>
              </View>
            </View>
          </View>
        </View>
        <View
        //style={{ marginTop: -300 }}
        >
          {/* <Image
            source={require('../assets/IncentiveChart.png')} // Update with the actual path to your back button image
            style={{
              width: '100%',
              height: '60%',
              borderRadius: 5,
              //tintColor: 'white', // You can customize the color of the back button
            }}
          /> */}
          <View
            style={{
              width: '100%',
              backgroundColor: '#efd6c9',
              padding: 10,
              borderRadius: 10,
              marginBottom: 20,
            }}>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <Image
                source={require('../assets/Leadsdetails.png')}
                style={{
                  width: 15,
                  height: 15,
                  tintColor: 'black', // You can customize the color of the back button
                  marginRight: 5,
                  marginTop: 2,

                  //marginTop: 1,
                }}
              />
              <Text style={{color: 'black', fontWeight: 600}}>
                Incentive Chart
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                height: 0.5,
                backgroundColor: 'gray',
                marginBottom: 10,
              }}></View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                marginBottom: 5,
              }}>
              <Text style={{color: 'black', fontWeight: 600}}>Sale</Text>
              <Text style={{color: 'black', fontWeight: 600}}>Incentive</Text>
            </View>
            <View style={{marginBottom: 5}}>
              {incentive != null &&
                incentive?.chart.map((item, index) => (
                  <TouchableOpacity
                    key={item.title} // Using the title property as a unique key
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: 20,
                      //borderColor:
                      //borderWidth: 0.6,
                      marginHorizontal: 10,
                      marginTop: 4,
                      backgroundColor:
                        item.selected === 1 ? '#3aba40' : '#ffc9ac',
                      marginBottom: 0,
                      paddingVertical: 3,
                      borderRadius: 5,

                      // item.selected === 1 ? '#3aba40' : '#ffc9ac ',
                    }}>
                    <Text
                      style={{color: item.selected === 1 ? 'white' : 'black'}}>
                      {item.title}
                    </Text>
                    <Text
                      style={{color: item.selected === 1 ? 'white' : 'black'}}>
                      {item.value}
                    </Text>
                  </TouchableOpacity>
                ))}
            </View>
          </View>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Incentive;

const styles = StyleSheet.create({});
