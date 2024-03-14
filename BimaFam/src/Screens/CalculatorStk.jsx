import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import RadioGroup from 'react-native-radio-buttons-group';
const Calculator = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
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
  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
  ];
  const data1 = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
  ];
  const data2 = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
  ];
  const data3 = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
  ];
  //   const radioButtons = useMemo(
  //     () => [
  //       {
  //         id: '1', // acts as primary key, should be unique and non-empty string
  //         label: 'Male',
  //         value: 'male',
  //       },
  //       {
  //         id: '2',
  //         label: 'Female',
  //         value: 'female',
  //       },
  //     ],
  //     [],
  //   );
  //   const radioButtons1 = useMemo(
  //     () => [
  //       {
  //         id: '1', // acts as primary key, should be unique and non-empty string
  //         label: 'Yes',
  //         value: 'yes',
  //       },
  //       {
  //         id: '2',
  //         label: 'No',
  //         value: 'no',
  //       },
  //     ],
  //     [],
  //   );
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  //   const [selectedId, setSelectedId] = useState();
  //   const [selectedId1, setSelectedId1] = useState();
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
              mode="modal"
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
              mode="modal"
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
              mode="modal"
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
                mode="modal"
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
            {renderRadioButton('male', 'Male')}
            {renderRadioButton('female', 'Female')}
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
            {renderRadioButton1('yes', 'Yes')}
            {renderRadioButton1('no', 'No')}
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
              ₹473
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
