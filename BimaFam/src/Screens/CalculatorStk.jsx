import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import RadioGroup from 'react-native-radio-buttons-group';
import {BASE_URL} from '../utils/constant';
import axios from 'axios';
import Loading from '../loadingcomponent/loading';
import Snackbar from 'react-native-snackbar';
import {getData} from '../utils/AsyncStorag';
const Calculator = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [insurancetype, setInsurancetype] = useState([]);
  const [load, setLoad] = useState(false);
  const [premium, setpremium] = useState('0');
  useEffect(() => {
    fetchInsuranceptype();
  }, [fetchInsuranceptype]);
  const fetchInsuranceptype = async () => {
    try {
      setLoad(true);

      const response = await axios.get(
        `${BASE_URL}/api/getInsuranceType`,
        // project_id: 8,
      );
      console.log(response.data);
      // console.log(response.data.status_code);
      if (response.data.status === 200) {
        setInsurancetype(response.data.data);
        //  console.log('policyplan', policyplan);
      } else {
        //navigation.goBack();
        throw new Error('Invalid Insurance type ');
      }
      // setLoad(false);
    } catch (error) {
      //setLoad(false);
      navigation.goBack();
      Snackbar.show({
        text:
          error.message ||
          'Failed to get the Insurance type data. Please try again.',
        textColor: 'white',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_SHORT,
        marginBottom: 70,
      });
    } finally {
      setLoad(false);
    }
  };
  const handleRadioPress = option => {
    setSelectedOption(option);
  };
  const handleRadioPress1 = option => {
    setSelectedOption1(option);
  };
  const renderRadioButton = (option, label) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginTop: 5,
          alignItems: 'center', // Align items vertically in the center
        }}
        onPress={() => handleRadioPress(option)}>
        <View
          style={{
            width: 18,
            height: 18,
            borderRadius: 10,
            borderWidth: 1.5,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}>
          {selectedOption === option && (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 6,
                backgroundColor: 'black',
              }}
            />
          )}
        </View>
        <View style={{marginRight: 5, width: 50, height: 20}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: selectedOption === option ? 'normal' : 'normal',
              color: 'gray',
            }}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderRadioButton1 = (option, label) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginTop: 5,
          alignItems: 'center', // Align items vertically in the center
        }}
        onPress={() => handleRadioPress1(option)}>
        <View
          style={{
            width: 18,
            height: 18,
            borderRadius: 10,
            borderWidth: 1.5,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}>
          {selectedOption1 === option && (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 6,
                backgroundColor: 'black',
              }}
            />
          )}
        </View>
        <View style={{marginRight: 5, width: 50, height: 20}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: selectedOption1 === option ? 'normal' : 'normal',
              color: 'gray',
            }}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.goBack();
  };
  const data = insurancetype?.map(item => ({
    label: item.title,
    value: item.id.toString(),
  }));

  const data1 = [
    {label: '1 years', value: '1'},
    {label: '2 years', value: '2'},
    {label: '3 years', value: '3'},
    {label: '4 years', value: '4'},
    {label: '5 years', value: '5'},
    {label: '6 years', value: '6'},
    {label: '7 years', value: '7'},
    {label: '8 years', value: '8'},
    {label: '9 years', value: '9'},
    {label: '10 years', value: '10'},
    {label: '11 years', value: '11'},
    {label: '12 years', value: '12'},
    {label: '13 years', value: '13'},
    {label: '14 years', value: '14'},
    {label: '15 years', value: '15'},
    {label: '16 years', value: '16'},
    {label: '17 years', value: '17'},
    {label: '18 years', value: '18'},
    {label: '19 years', value: '19'},
    {label: '20 years', value: '20'},
    {label: '21 years', value: '21'},
    {label: '22 years', value: '22'},
    {label: '23 years', value: '23'},
    {label: '24 years', value: '24'},
    {label: '25 years', value: '25'},
    {label: '26 years', value: '26'},
    {label: '27 years', value: '27'},
    {label: '28 years', value: '28'},
    {label: '29 years', value: '29'},
    {label: '30 years', value: '30'},
    {label: '31 years', value: '31'},
    {label: '32 years', value: '32'},
    {label: '33 years', value: '33'},
    {label: '34 years', value: '34'},
    {label: '35 years', value: '35'},
    {label: '36 years', value: '36'},
    {label: '37 years', value: '37'},
    {label: '38 years', value: '38'},
    {label: '39 years', value: '39'},
    {label: '40 years', value: '40'},
    {label: '41 years', value: '41'},
    {label: '42 years', value: '42'},
    {label: '43 years', value: '43'},
    {label: '44 years', value: '44'},
    {label: '45 years', value: '45'},
    {label: '46 years', value: '46'},
    {label: '47 years', value: '47'},
    {label: '48 years', value: '48'},
    {label: '49 years', value: '49'},
    {label: '50 years', value: '50'},
    {label: '51 years', value: '51'},
    {label: '52 years', value: '52'},
    {label: '53 years', value: '53'},
    {label: '54 years', value: '54'},
    {label: '55 years', value: '55'},
    {label: '56 years', value: '56'},
    {label: '57 years', value: '57'},
    {label: '58 years', value: '58'},
    {label: '59 years', value: '59'},
    {label: '60 years', value: '60'},
    {label: '61 years', value: '61'},
    {label: '62 years', value: '62'},
    {label: '63 years', value: '63'},
    {label: '64 years', value: '64'},
    {label: '65 years', value: '65'},
    {label: '66 years', value: '66'},
    {label: '67 years', value: '67'},
    {label: '68 years', value: '68'},
    {label: '69 years', value: '69'},
    {label: '70 years', value: '70'},
    {label: '71 years', value: '71'},
    {label: '72 years', value: '72'},
    {label: '73 years', value: '73'},
    {label: '74 years', value: '74'},
    {label: '75 years', value: '75'},
    {label: '76 years', value: '76'},
    {label: '77 years', value: '77'},
    {label: '78 years', value: '78'},
    {label: '79 years', value: '79'},
    {label: '80 years', value: '80'},
    {label: '81 years', value: '81'},
    {label: '82 years', value: '82'},
    {label: '83 years', value: '83'},
    {label: '84 years', value: '84'},
    {label: '85 years', value: '85'},
    {label: '86 years', value: '86'},
    {label: '87 years', value: '87'},
    {label: '88 years', value: '88'},
    {label: '89 years', value: '89'},
    {label: '90 years', value: '90'},
    {label: '91 years', value: '91'},
    {label: '92 years', value: '92'},
    {label: '93 years', value: '93'},
    {label: '94 years', value: '94'},
    {label: '95 years', value: '95'},
    {label: '96 years', value: '96'},
    {label: '97 years', value: '97'},
    {label: '98 years', value: '98'},
    {label: '99 years', value: '99'},
    {label: '100 years', value: '100'},
  ];
  const data2 = [
    {label: '10 Lakh', value: '1000000'},
    {label: '20 Lakh', value: '2000000'},
    {label: '30 Lakh', value: '3000000'},
    {label: '40 Lakh', value: '4000000'},
    {label: '50 Lakh', value: '5000000'},
    {label: '60 Lakh', value: '6000000'},
    {label: '70 Lakh', value: '7000000'},
    {label: '80 Lakh', value: '8000000'},
    {label: '90 Lakh', value: '9000000'},
    {label: '1.0 cr ', value: '10000000'},
    {label: '1.1 cr', value: '11000000'},
    {label: '1.2 cr', value: '12000000'},
    {label: '1.3 cr', value: '13000000'},
    {label: '1.4 cr', value: '14000000'},
    {label: '1.5 cr', value: '15000000'},
    {label: '1.6 cr', value: '16000000'},
    {label: '1.7 cr', value: '17000000'},
    {label: '1.8 cr', value: '18000000'},
    {label: '1.9 cr', value: '19000000'},
    {label: '2.0 cr', value: '20000000'},
  ];
  const data3 = [
    {label: '1 years', value: '1'},
    {label: '2 years', value: '2'},
    {label: '3 years', value: '3'},
    {label: '4 years', value: '4'},
    {label: '5 years', value: '5'},
    {label: '6 years', value: '6'},
    {label: '7 years', value: '7'},
    {label: '8 years', value: '8'},
    {label: '9 years', value: '9'},
    {label: '10 years', value: '10'},
    {label: '11 years', value: '11'},
    {label: '12 years', value: '12'},
    {label: '13 years', value: '13'},
    {label: '14 years', value: '14'},
    {label: '15 years', value: '15'},
    {label: '16 years', value: '16'},
    {label: '17 years', value: '17'},
    {label: '18 years', value: '18'},
    {label: '19 years', value: '19'},
    {label: '20 years', value: '20'},
    {label: '21 years', value: '21'},
    {label: '22 years', value: '22'},
    {label: '23 years', value: '23'},
    {label: '24 years', value: '24'},
    {label: '25 years', value: '25'},
    {label: '26 years', value: '26'},
    {label: '27 years', value: '27'},
    {label: '28 years', value: '28'},
    {label: '29 years', value: '29'},
    {label: '30 years', value: '30'},
    {label: '31 years', value: '31'},
    {label: '32 years', value: '32'},
    {label: '33 years', value: '33'},
    {label: '34 years', value: '34'},
    {label: '35 years', value: '35'},
    {label: '36 years', value: '36'},
    {label: '37 years', value: '37'},
    {label: '38 years', value: '38'},
    {label: '39 years', value: '39'},
    {label: '40 years', value: '40'},
    {label: '41 years', value: '41'},
    {label: '42 years', value: '42'},
    {label: '43 years', value: '43'},
    {label: '44 years', value: '44'},
    {label: '45 years', value: '45'},
    {label: '46 years', value: '46'},
    {label: '47 years', value: '47'},
    {label: '48 years', value: '48'},
    {label: '49 years', value: '49'},
    {label: '50 years', value: '50'},
    {label: '51 years', value: '51'},
    {label: '52 years', value: '52'},
    {label: '53 years', value: '53'},
    {label: '54 years', value: '54'},
    {label: '55 years', value: '55'},
    {label: '56 years', value: '56'},
    {label: '57 years', value: '57'},
    {label: '58 years', value: '58'},
    {label: '59 years', value: '59'},
    {label: '60 years', value: '60'},
    {label: '61 years', value: '61'},
    {label: '62 years', value: '62'},
    {label: '63 years', value: '63'},
    {label: '64 years', value: '64'},
    {label: '65 years', value: '65'},
    {label: '66 years', value: '66'},
    {label: '67 years', value: '67'},
    {label: '68 years', value: '68'},
    {label: '69 years', value: '69'},
    {label: '70 years', value: '70'},
    {label: '71 years', value: '71'},
    {label: '72 years', value: '72'},
    {label: '73 years', value: '73'},
    {label: '74 years', value: '74'},
    {label: '75 years', value: '75'},
    {label: '76 years', value: '76'},
    {label: '77 years', value: '77'},
    {label: '78 years', value: '78'},
    {label: '79 years', value: '79'},
    {label: '80 years', value: '80'},
    {label: '81 years', value: '81'},
    {label: '82 years', value: '82'},
    {label: '83 years', value: '83'},
    {label: '84 years', value: '84'},
    {label: '85 years', value: '85'},
    {label: '86 years', value: '86'},
    {label: '87 years', value: '87'},
    {label: '88 years', value: '88'},
    {label: '89 years', value: '89'},
    {label: '90 years', value: '90'},
    {label: '91 years', value: '91'},
    {label: '92 years', value: '92'},
    {label: '93 years', value: '93'},
    {label: '94 years', value: '94'},
    {label: '95 years', value: '95'},
    {label: '96 years', value: '96'},
    {label: '97 years', value: '97'},
    {label: '98 years', value: '98'},
    {label: '99 years', value: '99'},
    {label: '100 years', value: '100'},
  ];

  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);

  const handlePremiumbtn = async () => {
    try {
      setLoad(true);
      if (!value || !value1 || !value2 || !value3) {
        throw new Error('Please select all the fields');
      }
      // const datamail = await getData('usermail');
      // const datapass = await getData('userpass');
      const id = await getData('user');

      //console.log('projectid', projectid);
      const body = {
        user_id: id,
        type: value,
        age: value1,
        cover: value2,
        till_age: value3,
        gender: selectedOption,
        tobacco: selectedOption1,
      };
      console.log('body', body);
      const response = await axios.post(
        `${BASE_URL}/api/getPremiumCalculate`,
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
        setpremium(response?.data?.data);
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
        <Text style={{fontSize: 18, color: 'black'}}>Premium Calculator</Text>
      </View>
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 10,
          backgroundColor: 'white',
          paddingVertical: 10,
          borderRadius: 10,
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text style={{color: 'gray'}}>Type</Text>
            <Dropdown
              // mode="modal"
              style={{
                height: 25,
                width: '30%',
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
              placeholder="Life"
              searchPlaceholder="Search..."
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text style={{color: 'gray'}}>What is your age?</Text>
            <Dropdown
              //mode="modal"
              style={{
                height: 25,
                width: '30%',
                borderColor: 'black',
                borderWidth: 0.5,
                padding: 5,
                borderRadius: 5,
                backgroundColor: '#f4f6ff',
              }}
              itemTextStyle={{fontSize: 14, color: 'black'}}
              placeholderStyle={{
                color: 'gray',
                fontSize: 14,
              }}
              selectedTextStyle={{color: 'black', fontSize: 14}}
              data={data1}
              search
              labelField="label"
              valueField="value"
              placeholder="22 years"
              searchPlaceholder="Search..."
              value={value1}
              onChange={item => {
                setValue1(item.value);
              }}
            />
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text style={{color: 'gray'}}>Life cover required</Text>
            <Dropdown
              // mode="modal"
              style={{
                height: 25,
                width: '30%',
                borderColor: 'black',
                borderWidth: 0.5,
                padding: 5,
                borderRadius: 5,
                backgroundColor: '#f4f6ff',
              }}
              itemTextStyle={{fontSize: 14, color: 'black'}}
              placeholderStyle={{
                color: 'gray',
                fontSize: 14,
              }}
              selectedTextStyle={{color: 'black', fontSize: 14}}
              data={data2}
              search
              labelField="label"
              valueField="value"
              placeholder="1 cr"
              searchPlaceholder="Search..."
              value={value2}
              onChange={item => {
                setValue2(item.value);
              }}
            />
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <Text style={{color: 'gray'}}>Cover till age</Text>
              <Dropdown
                //   mode="modal"
                style={{
                  height: 25,
                  width: '30%',
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
                selectedTextStyle={{color: 'black', fontSize: 14}}
                itemTextStyle={{fontSize: 14, color: 'black'}}
                data={data3}
                search
                labelField="label"
                valueField="value"
                placeholder="38 years"
                searchPlaceholder="Search..."
                value={value3}
                onChange={item => {
                  setValue3(item.value);
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            //     width: '80%',
            // marginBottom: 5,
            flexDirection: 'row',
            // justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text style={{flex: 1, marginTop: 6, color: 'gray'}}>Gender</Text>
          {/* <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout="row"
            containerStyle={{}}

            //  borderSize={10}
          /> */}
          <View style={{flexDirection: 'row'}}>
            {renderRadioButton('Male', 'Male')}
            {renderRadioButton('Female', 'Female')}
          </View>
        </View>
        <View
          style={{
            //     width: '80%',
            // marginBottom: 5,
            flexDirection: 'row',
            //justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text style={{marginTop: 6, flex: 1, color: 'gray'}}>
            Consume Tobacco?
          </Text>
          <View style={{flexDirection: 'row'}}>
            {renderRadioButton1('1', 'Yes')}
            {renderRadioButton1('0', 'No')}
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#f4f6ff',
            padding: 10,
            marginHorizontal: 10,
            borderRadius: 10,
          }}>
          <View style={{alignSelf: 'center'}}>
            <Image
              source={require('../assets/Premium.png')} // Update with the actual path to your back button image
              style={{
                width: 80,
                height: 80,

                marginBottom: 10,
              }}
            />
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: 'black',
              //fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Premium starts from
          </Text>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 30,
                color: 'black',
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              ₹{premium}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: 'black',
                //fontWeight: 'bold',
                marginBottom: 14,
                textAlignVertical: 'bottom',
              }}>
              /month
            </Text>
          </View>
          <TouchableOpacity
            onPress={handlePremiumbtn}
            style={{
              alignSelf: 'center',
              borderColor: '#3081ec',
              borderWidth: 1,
              backgroundColor: 'white',
              padding: 5,
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <Text style={{color: '#3081ec'}}>Check Your Premium</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Calculator;

const styles = StyleSheet.create({});
