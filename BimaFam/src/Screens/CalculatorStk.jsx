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
  // const [selectedOption, setSelectedOption] = useState('');
  // const [selectedOption1, setSelectedOption1] = useState('');
  // const [insurancetype, setInsurancetype] = useState([]);
  const [load, setLoad] = useState(false);
  //const [premium, setpremium] = useState(null);
  const [investfor, setinvestfor] = useState(5);
  const [investedfor, setinvestedfor] = useState(5);
  const [investedrate, setinvestedrate] = useState(0);
  const [calcvalue, setcalcvalue] = useState(0);
  // useEffect(() => {
  //   fetchInsuranceptype();
  // }, [fetchInsuranceptype]);
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
  // const data = insurancetype?.map(item => ({
  //   label: item.title,
  //   value: item.id.toString(),
  // }));
  const data = [
    {label: 'Monthly', value: 'monthly'},
    {label: 'HalfYearly', value: 'halfyearly'},
    {label: 'Yearly', value: 'yearly'},
    {label: 'Once', value: 'once'},
  ];

  // const data1 = [
  //   {label: '1 years', value: '1'},
  //   {label: '2 years', value: '2'},
  //   {label: '3 years', value: '3'},
  //   {label: '4 years', value: '4'},
  //   {label: '5 years', value: '5'},
  //   {label: '6 years', value: '6'},
  //   {label: '7 years', value: '7'},
  //   {label: '8 years', value: '8'},
  //   {label: '9 years', value: '9'},
  //   {label: '10 years', value: '10'},
  //   {label: '11 years', value: '11'},
  //   {label: '12 years', value: '12'},
  //   {label: '13 years', value: '13'},
  //   {label: '14 years', value: '14'},
  //   {label: '15 years', value: '15'},
  //   {label: '16 years', value: '16'},
  //   {label: '17 years', value: '17'},
  //   {label: '18 years', value: '18'},
  //   {label: '19 years', value: '19'},
  //   {label: '20 years', value: '20'},
  //   {label: '21 years', value: '21'},
  //   {label: '22 years', value: '22'},
  //   {label: '23 years', value: '23'},
  //   {label: '24 years', value: '24'},
  //   {label: '25 years', value: '25'},
  //   {label: '26 years', value: '26'},
  //   {label: '27 years', value: '27'},
  //   {label: '28 years', value: '28'},
  //   {label: '29 years', value: '29'},
  //   {label: '30 years', value: '30'},
  //   {label: '31 years', value: '31'},
  //   {label: '32 years', value: '32'},
  //   {label: '33 years', value: '33'},
  //   {label: '34 years', value: '34'},
  //   {label: '35 years', value: '35'},
  //   {label: '36 years', value: '36'},
  //   {label: '37 years', value: '37'},
  //   {label: '38 years', value: '38'},
  //   {label: '39 years', value: '39'},
  //   {label: '40 years', value: '40'},
  //   {label: '41 years', value: '41'},
  //   {label: '42 years', value: '42'},
  //   {label: '43 years', value: '43'},
  //   {label: '44 years', value: '44'},
  //   {label: '45 years', value: '45'},
  //   {label: '46 years', value: '46'},
  //   {label: '47 years', value: '47'},
  //   {label: '48 years', value: '48'},
  //   {label: '49 years', value: '49'},
  //   {label: '50 years', value: '50'},
  //   {label: '51 years', value: '51'},
  //   {label: '52 years', value: '52'},
  //   {label: '53 years', value: '53'},
  //   {label: '54 years', value: '54'},
  //   {label: '55 years', value: '55'},
  //   {label: '56 years', value: '56'},
  //   {label: '57 years', value: '57'},
  //   {label: '58 years', value: '58'},
  //   {label: '59 years', value: '59'},
  //   {label: '60 years', value: '60'},
  //   {label: '61 years', value: '61'},
  //   {label: '62 years', value: '62'},
  //   {label: '63 years', value: '63'},
  //   {label: '64 years', value: '64'},
  //   {label: '65 years', value: '65'},
  //   {label: '66 years', value: '66'},
  //   {label: '67 years', value: '67'},
  //   {label: '68 years', value: '68'},
  //   {label: '69 years', value: '69'},
  //   {label: '70 years', value: '70'},
  //   {label: '71 years', value: '71'},
  //   {label: '72 years', value: '72'},
  //   {label: '73 years', value: '73'},
  //   {label: '74 years', value: '74'},
  //   {label: '75 years', value: '75'},
  //   {label: '76 years', value: '76'},
  //   {label: '77 years', value: '77'},
  //   {label: '78 years', value: '78'},
  //   {label: '79 years', value: '79'},
  //   {label: '80 years', value: '80'},
  //   {label: '81 years', value: '81'},
  //   {label: '82 years', value: '82'},
  //   {label: '83 years', value: '83'},
  //   {label: '84 years', value: '84'},
  //   {label: '85 years', value: '85'},
  //   {label: '86 years', value: '86'},
  //   {label: '87 years', value: '87'},
  //   {label: '88 years', value: '88'},
  //   {label: '89 years', value: '89'},
  //   {label: '90 years', value: '90'},
  //   {label: '91 years', value: '91'},
  //   {label: '92 years', value: '92'},
  //   {label: '93 years', value: '93'},
  //   {label: '94 years', value: '94'},
  //   {label: '95 years', value: '95'},
  //   {label: '96 years', value: '96'},
  //   {label: '97 years', value: '97'},
  //   {label: '98 years', value: '98'},
  //   {label: '99 years', value: '99'},
  //   {label: '100 years', value: '100'},
  // ];
  // const data2 = [
  //   {label: '10 Lakh', value: '1000000'},
  //   {label: '20 Lakh', value: '2000000'},
  //   {label: '30 Lakh', value: '3000000'},
  //   {label: '40 Lakh', value: '4000000'},
  //   {label: '50 Lakh', value: '5000000'},
  //   {label: '60 Lakh', value: '6000000'},
  //   {label: '70 Lakh', value: '7000000'},
  //   {label: '80 Lakh', value: '8000000'},
  //   {label: '90 Lakh', value: '9000000'},
  //   {label: '1.0 cr ', value: '10000000'},
  //   {label: '1.1 cr', value: '11000000'},
  //   {label: '1.2 cr', value: '12000000'},
  //   {label: '1.3 cr', value: '13000000'},
  //   {label: '1.4 cr', value: '14000000'},
  //   {label: '1.5 cr', value: '15000000'},
  //   {label: '1.6 cr', value: '16000000'},
  //   {label: '1.7 cr', value: '17000000'},
  //   {label: '1.8 cr', value: '18000000'},
  //   {label: '1.9 cr', value: '19000000'},
  //   {label: '2.0 cr', value: '20000000'},
  // ];
  // const data3 = [
  //   {label: '1 years', value: '1'},
  //   {label: '2 years', value: '2'},
  //   {label: '3 years', value: '3'},
  //   {label: '4 years', value: '4'},
  //   {label: '5 years', value: '5'},
  //   {label: '6 years', value: '6'},
  //   {label: '7 years', value: '7'},
  //   {label: '8 years', value: '8'},
  //   {label: '9 years', value: '9'},
  //   {label: '10 years', value: '10'},
  //   {label: '11 years', value: '11'},
  //   {label: '12 years', value: '12'},
  //   {label: '13 years', value: '13'},
  //   {label: '14 years', value: '14'},
  //   {label: '15 years', value: '15'},
  //   {label: '16 years', value: '16'},
  //   {label: '17 years', value: '17'},
  //   {label: '18 years', value: '18'},
  //   {label: '19 years', value: '19'},
  //   {label: '20 years', value: '20'},
  //   {label: '21 years', value: '21'},
  //   {label: '22 years', value: '22'},
  //   {label: '23 years', value: '23'},
  //   {label: '24 years', value: '24'},
  //   {label: '25 years', value: '25'},
  //   {label: '26 years', value: '26'},
  //   {label: '27 years', value: '27'},
  //   {label: '28 years', value: '28'},
  //   {label: '29 years', value: '29'},
  //   {label: '30 years', value: '30'},
  //   {label: '31 years', value: '31'},
  //   {label: '32 years', value: '32'},
  //   {label: '33 years', value: '33'},
  //   {label: '34 years', value: '34'},
  //   {label: '35 years', value: '35'},
  //   {label: '36 years', value: '36'},
  //   {label: '37 years', value: '37'},
  //   {label: '38 years', value: '38'},
  //   {label: '39 years', value: '39'},
  //   {label: '40 years', value: '40'},
  //   {label: '41 years', value: '41'},
  //   {label: '42 years', value: '42'},
  //   {label: '43 years', value: '43'},
  //   {label: '44 years', value: '44'},
  //   {label: '45 years', value: '45'},
  //   {label: '46 years', value: '46'},
  //   {label: '47 years', value: '47'},
  //   {label: '48 years', value: '48'},
  //   {label: '49 years', value: '49'},
  //   {label: '50 years', value: '50'},
  //   {label: '51 years', value: '51'},
  //   {label: '52 years', value: '52'},
  //   {label: '53 years', value: '53'},
  //   {label: '54 years', value: '54'},
  //   {label: '55 years', value: '55'},
  //   {label: '56 years', value: '56'},
  //   {label: '57 years', value: '57'},
  //   {label: '58 years', value: '58'},
  //   {label: '59 years', value: '59'},
  //   {label: '60 years', value: '60'},
  //   {label: '61 years', value: '61'},
  //   {label: '62 years', value: '62'},
  //   {label: '63 years', value: '63'},
  //   {label: '64 years', value: '64'},
  //   {label: '65 years', value: '65'},
  //   {label: '66 years', value: '66'},
  //   {label: '67 years', value: '67'},
  //   {label: '68 years', value: '68'},
  //   {label: '69 years', value: '69'},
  //   {label: '70 years', value: '70'},
  //   {label: '71 years', value: '71'},
  //   {label: '72 years', value: '72'},
  //   {label: '73 years', value: '73'},
  //   {label: '74 years', value: '74'},
  //   {label: '75 years', value: '75'},
  //   {label: '76 years', value: '76'},
  //   {label: '77 years', value: '77'},
  //   {label: '78 years', value: '78'},
  //   {label: '79 years', value: '79'},
  //   {label: '80 years', value: '80'},
  //   {label: '81 years', value: '81'},
  //   {label: '82 years', value: '82'},
  //   {label: '83 years', value: '83'},
  //   {label: '84 years', value: '84'},
  //   {label: '85 years', value: '85'},
  //   {label: '86 years', value: '86'},
  //   {label: '87 years', value: '87'},
  //   {label: '88 years', value: '88'},
  //   {label: '89 years', value: '89'},
  //   {label: '90 years', value: '90'},
  //   {label: '91 years', value: '91'},
  //   {label: '92 years', value: '92'},
  //   {label: '93 years', value: '93'},
  //   {label: '94 years', value: '94'},
  //   {label: '95 years', value: '95'},
  //   {label: '96 years', value: '96'},
  //   {label: '97 years', value: '97'},
  //   {label: '98 years', value: '98'},
  //   {label: '99 years', value: '99'},
  //   {label: '100 years', value: '100'},
  // ];

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
              // flexDirection: 'row',
              // justifyContent: 'space-between',
              // padding: 10,
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
                //mode="modal"
                style={{
                  // height: 30,
                  width: '100%',
                  // borderColor: 'black',
                  //borderWidth: 0.5,
                  padding: 5,
                  color: 'black',
                  fontSize: 14,
                  // borderRadius: 5,
                  //backgroundColor: '#f4f6ff',
                }}
                //itemTextStyle={{fontSize: 14, color: 'black'}}
                placeholderStyle={{
                  color: 'gray',
                  fontSize: 14,
                }}
                // selectedTextStyle={{color: 'black', fontSize: 14}}
                //data={data1}
                // search
                //  labelField="label"
                // valueField="value"
                placeholder="00000"
                //Placeholder="Search..."
                value={value1}
                keyboardType="number-pad"
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
