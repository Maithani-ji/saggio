import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import RadioGroup from 'react-native-radio-buttons-group';
import {BASE_URL} from '../utils/constant';
import axios from 'axios';
import Loading from '../loadingcomponent/loading';
import Snackbar from 'react-native-snackbar';
import {getData} from '../utils/AsyncStorag';
import Slider from '@react-native-community/slider';
const Calculator = ({navigation}) => {
  const [load, setLoad] = useState(false);
  //const [premium, setpremium] = useState(null);
  const [investfor, setinvestfor] = useState(5);
  const [investedfor, setinvestedfor] = useState(5);
  const [investedrate, setinvestedrate] = useState(0);
  const [calcvalue, setcalcvalue] = useState(0);

  // const fetchInsuranceptype = async () => {
  //   try {
  //     setLoad(true);

  //     const response = await axios.get(
  //       `${BASE_URL}/api/getInsuranceType`,
  //       // project_id: 8,
  //     );
  //     console.log(response.data);
  //     // console.log(response.data.status_code);
  //     if (response.data.status === 200) {
  //       setInsurancetype(response.data.data);
  //       //  console.log('policyplan', policyplan);
  //     } else {
  //       //navigation.goBack();
  //       throw new Error('Invalid Insurance type ');
  //     }
  //     // setLoad(false);
  //   } catch (error) {
  //     //setLoad(false);
  //     navigation.goBack();
  //     Snackbar.show({
  //       text:
  //         error.message ||
  //         'Failed to get the Insurance type data. Please try again.',
  //       textColor: 'white',
  //       backgroundColor: 'red',
  //       duration: Snackbar.LENGTH_SHORT,
  //       marginBottom: 70,
  //     });
  //   } finally {
  //     setLoad(false);
  //   }
  // };
  // const handleRadioPress = option => {
  //   setSelectedOption(option);
  // };
  // const handleRadioPress1 = option => {
  //   setSelectedOption1(option);
  // };
  // const renderRadioButton = (option, label) => {
  //   return (
  //     <TouchableOpacity
  //       style={{
  //         flexDirection: 'row',
  //         marginTop: 5,
  //         alignItems: 'center', // Align items vertically in the center
  //       }}
  //       onPress={() => handleRadioPress(option)}>
  //       <View
  //         style={{
  //           width: 18,
  //           height: 18,
  //           borderRadius: 10,
  //           borderWidth: 1.5,
  //           borderColor: 'black',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           marginRight: 10,
  //         }}>
  //         {selectedOption === option && (
  //           <View
  //             style={{
  //               width: 10,
  //               height: 10,
  //               borderRadius: 6,
  //               backgroundColor: 'black',
  //             }}
  //           />
  //         )}
  //       </View>
  //       <View style={{marginRight: 5, width: 50, height: 20}}>
  //         <Text
  //           style={{
  //             fontSize: 14,
  //             fontWeight: selectedOption === option ? 'normal' : 'normal',
  //             color: 'gray',
  //           }}>
  //           {label}
  //         </Text>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

  // const renderRadioButton1 = (option, label) => {
  //   return (
  //     <TouchableOpacity
  //       style={{
  //         flexDirection: 'row',
  //         marginTop: 5,
  //         alignItems: 'center', // Align items vertically in the center
  //       }}
  //       onPress={() => handleRadioPress1(option)}>
  //       <View
  //         style={{
  //           width: 18,
  //           height: 18,
  //           borderRadius: 10,
  //           borderWidth: 1.5,
  //           borderColor: 'black',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           marginRight: 10,
  //         }}>
  //         {selectedOption1 === option && (
  //           <View
  //             style={{
  //               width: 10,
  //               height: 10,
  //               borderRadius: 6,
  //               backgroundColor: 'black',
  //             }}
  //           />
  //         )}
  //       </View>
  //       <View style={{marginRight: 5, width: 50, height: 20}}>
  //         <Text
  //           style={{
  //             fontSize: 14,
  //             fontWeight: selectedOption1 === option ? 'normal' : 'normal',
  //             color: 'gray',
  //           }}>
  //           {label}
  //         </Text>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };
  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.goBack();
  };

  const data = [
    {label: 'Monthly', value: 'monthly'},
    {label: 'HalfYearly', value: 'halfyearly'},
    {label: 'Yearly', value: 'yearly'},
    {label: 'Once', value: 'once'},
  ];

  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);

  const handlecalcbtn = async () => {
    try {
      setLoad(true);
      if (!value || value1 == 0 || investedrate == 0) {
        throw new Error('Please select all the fields');
      }
      // const datamail = await getData('usermail');
      // const datapass = await getData('userpass');
      const id = await getData('user');

      //console.log('projectid', projectid);
      const body = {
        user_id: id,
        principal: value1,
        rate: investedrate * 0.01,
        time: investfor,
        compounded: investedfor,
      };
      console.log('body', body);
      const response = await axios.post(
        `${BASE_URL}/api/getCompoundCalculate`,
        body,
      );
      console.log('fetch data', response.data);
      if (response.status === 200) {
        Snackbar.show({
          text: 'Premium Calculated Successfully',
          textColor: 'white',

          backgroundColor: '#3aba40',
          duration: Snackbar.LENGTH_SHORT,
          //marginBottom: 70,
        });
        setcalcvalue(response?.data?.data);
      } else {
        //navigation.goBack();
        throw new Error('Invalid selection in calculation');
      }
      setLoad(false);
    } catch (error) {
      //setLoad(false);
      //navigation.goBack();
      Snackbar.show({
        text:
          error.message ||
          'Failed to calculate the premium data. Please try again.',
        textColor: 'white',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_SHORT,
        // marginBottom: 70,
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
              tintColor: 'black', // You can customize the color of the back button
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18, color: 'black'}}>
          Compound Interest Calculator
        </Text>
      </View>
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 10,
          backgroundColor: 'white',
          paddingVertical: 10,
          borderRadius: 10,
        }}>
        <View style={{marginHorizontal: 10}}>
          <Text style={{color: 'gray'}}>I want to invest</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // width: '100%',
          }}>
          <View>
            <View
              style={{
                padding: 10,
                width: 160,
              }}>
              <Dropdown
                // mode="modal"
                style={{
                  height: 30,
                  //width: '30%',
                  borderColor: 'black',
                  borderWidth: 0.5,
                  padding: 5,
                  borderRadius: 5,
                  backgroundColor: '#f4f6ff',
                }}
                placeholderStyle={{
                  color: 'gray',
                  fontSize: 14,
                }}
                itemTextStyle={{fontSize: 14, color: 'black'}}
                selectedTextStyle={{color: 'black', fontSize: 14}}
                data={data}
                search
                labelField="label"
                valueField="value"
                placeholder="Monthly/Yearly"
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                  setValue(item.value);
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: 150,
              height: 30,
              borderColor: 'black',
              borderWidth: 0.5,
              //marginBottom: -15,
              borderRadius: 5,
              backgroundColor: '#f4f6ff',
              marginTop: 10,
              marginRight: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: 'black',
                  textAlignVertical: 'center',
                  marginLeft: 5,
                }}>
                ₹
              </Text>
              <TextInput
                style={{
                  // height: 30,
                  width: '100%',

                  padding: 5,
                  color: 'black',
                  fontSize: 14,
                }}
                placeholderTextColor={'gray'}
                placeholder="00000"
                value={value1}
                keyboardType="numeric"
                onChangeText={setValue1}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 0.6,
            backgroundColor: 'lightgray',
            marginBottom: 10,
          }}></View>
        <View>
          <View
            style={{
              marginHorizontal: 10,
              marginBottom: 0,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flex: 1, alignSelf: 'center'}}>
                <Text style={{color: 'gray', verticalAlign: 'middle'}}>
                  I want to invest for
                </Text>
              </View>

              <View
                style={{
                  height: 30,
                  width: 130,
                  backgroundColor: '#f4f6ff',
                  borderColor: 'gray',
                  borderWidth: 0.7,
                  padding: 5,
                  borderRadius: 5,
                }}>
                <Text style={{color: 'black', textAlign: 'center'}}>
                  {investfor} year
                </Text>
              </View>
            </View>
            <Slider
              style={{width: '100%', height: 40}}
              minimumValue={5}
              maximumValue={30}
              //  lowerLimit={5}
              value={investfor}
              minimumTrackTintColor="red"
              maximumTrackTintColor="red"
              step={1}
              onValueChange={setinvestfor}
              thumbTintColor="red"
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 0.6,
            backgroundColor: 'lightgray',
            marginBottom: 10,
          }}></View>
        <View>
          <View
            style={{
              marginHorizontal: 10,
              marginBottom: 0,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flex: 1, alignSelf: 'center'}}>
                <Text style={{color: 'gray'}}>I will stay invested for</Text>
              </View>

              <View
                style={{
                  height: 30,
                  width: 130,
                  backgroundColor: '#f4f6ff',
                  borderColor: 'gray',
                  borderWidth: 0.7,
                  padding: 5,
                  borderRadius: 5,
                }}>
                <Text style={{color: 'black', textAlign: 'center'}}>
                  {investedfor} year
                </Text>
              </View>
            </View>
            <Slider
              style={{width: '100%', height: 40}}
              minimumValue={5}
              maximumValue={30}
              // lowerLimit={5}
              value={investedfor}
              minimumTrackTintColor="red"
              maximumTrackTintColor="red"
              step={1}
              onValueChange={setinvestedfor}
              thumbTintColor="red"
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 0.6,
            backgroundColor: 'lightgray',
            marginBottom: 10,
          }}></View>
        <View>
          <View
            style={{
              marginHorizontal: 10,
              marginBottom: 0,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flex: 1, alignSelf: 'center'}}>
                <Text
                  style={{
                    color: 'gray',
                    //verticalAlign: 'middle',
                    // textAlignVertical: 'center',
                  }}>
                  I expect rate of return of(Annually)
                </Text>
              </View>
              <View
                style={{
                  height: 30,
                  width: 130,
                  backgroundColor: '#f4f6ff',
                  borderColor: 'gray',
                  borderWidth: 0.7,
                  padding: 5,
                  borderRadius: 5,
                }}>
                <Text style={{color: 'black', textAlign: 'center'}}>
                  {investedrate} %
                </Text>
              </View>
            </View>
            <Slider
              style={{width: '100%', height: 40}}
              minimumValue={0}
              maximumValue={30}
              //lowerLimit={0}
              value={investedrate}
              minimumTrackTintColor="red"
              maximumTrackTintColor="red"
              step={0.5}
              onValueChange={setinvestedrate}
              thumbTintColor="red"
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#f4f6ff',
            padding: 10,
            marginHorizontal: 10,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-between',
              backgroundColor: 'white',
              borderRadius: 10,
              marginBottom: 10,
              paddingHorizontal: 10,
            }}>
            <View style={{flex: 1}}>
              <Image
                source={require('../assets/invest-icon.png')} // Update with the actual path to your back button image
                style={{
                  width: 80,
                  height: 80,

                  // marginBottom: 10,
                }}
              />
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                You invest
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                ₹ {value1 == null || value1 == '' ? '0' : value1}
              </Text>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 13,
                  //fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Over {investfor} year
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              borderRadius: 10,
              marginBottom: 5,
              paddingHorizontal: 10,
            }}>
            <View style={{flex: 1}}>
              <Image
                source={require('../assets/plann-icon.png')} // Update with the actual path to your back button image
                style={{
                  width: 80,
                  height: 80,
                }}
              />
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                You get
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                ₹ {calcvalue}
              </Text>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 13,
                  textAlign: 'center',
                }}>
                After {investedfor} year @ {investedrate}% p.a
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={handlecalcbtn}
            style={{
              alignSelf: 'center',
              borderColor: '#3081ec',
              borderWidth: 1,
              backgroundColor: 'white',
              padding: 5,
              borderRadius: 10,
              marginVertical: 10,
            }}>
            <Text style={{color: '#3081ec'}}>Check Your Compound</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Calculator;

const styles = StyleSheet.create({});
