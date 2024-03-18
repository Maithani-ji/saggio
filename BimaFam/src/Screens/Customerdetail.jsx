import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

const Customerdetail = ({navigation}) => {
  const [selectedId, setSelectedId] = useState();
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [date, setdate] = useState(new Date());
  const [mode, setmode] = useState('');
  const [show, setshow] = useState(false);
  const [date1, setdate1] = useState(new Date());
  const [mode1, setmode1] = useState('');
  const [show1, setshow1] = useState(false);

  const [datesourcetext, setdatesourcetext] = useState('');
  const [datefollowtext, setdatefollowtext] = useState('');

  const handlesourceDateChange = (event, selectedDate) => {
    setshow(false);
    const currentDate = selectedDate || date;
    //setshow(Platform.OS === 'android'); // Temporarily keep visible on Android
    setdate(currentDate);
    const tempDate = new Date(currentDate);
    const fdate = `${tempDate.getDate()}-${
      tempDate.getMonth() + 1
    }-${tempDate.getFullYear()}`;

    const ftime = `${tempDate.getHours()}:${tempDate.getMinutes()}`;
    setdatesourcetext(fdate);
  };
  const handlesourceDateChange1 = (event, selectedDate) => {
    setshow1(false);
    const currentDate = selectedDate || date1;
    //setshow(Platform.OS === 'android'); // Temporarily keep visible on Android
    setdate1(currentDate);
    const tempDate = new Date(currentDate);
    const fdate = `${tempDate.getDate()}-${
      tempDate.getMonth() + 1
    }-${tempDate.getFullYear()}`;

    const ftime = `${tempDate.getHours()}:${tempDate.getMinutes()}`;
    setdatefollowtext(fdate);
  };

  const showMode = currentMode => {
    setshow(!show);
    setmode(currentMode);
  };
  const showMode1 = currentMode => {
    setshow1(!show1);
    setmode1(currentMode);
  };
  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.goBack();
  };

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
          alignItems: 'center',
          // Align items vertically in the center
        }}
        onPress={() => handleRadioPress(option)}>
        <View
          style={{
            width: 15,
            height: 15,
            borderRadius: 10,
            borderWidth: 1.5,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 5,
          }}>
          {selectedOption === option && (
            <View
              style={{
                width: 5,
                height: 5,
                borderRadius: 6,
                backgroundColor: 'black',
              }}
            />
          )}
        </View>
        <View style={{marginRight: 5}}>
          <Text
            style={{
              fontSize: 12,
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
          alignItems: 'center',
          // Align items vertically in the center
        }}
        onPress={() => handleRadioPress1(option)}>
        <View
          style={{
            width: 15,
            height: 15,
            borderRadius: 10,
            borderWidth: 1.5,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 5,
          }}>
          {selectedOption1 === option && (
            <View
              style={{
                width: 5,
                height: 5,
                borderRadius: 6,
                backgroundColor: 'black',
              }}
            />
          )}
        </View>
        <View style={{marginRight: 5}}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: selectedOption === option ? 'normal' : 'normal',
              color: 'gray',
            }}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const data = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Others', value: 'others'},
    // {label: 'Item 4', value: '4'},
  ];
  const data1 = [
    {label: 'Married', value: 'Married'},
    {label: 'Single', value: 'Single'},
    {label: 'Widowed', value: 'Widowed'},
    {label: 'Divorced', value: 'Divorced'},
    {label: 'Seperated', value: 'Seperated'},
  ];
  const data2 = [
    {label: 'Salaried', value: 'Salaried'},
    {
      label: 'Self Employed/Business Owner',
      value: 'Self Employed/Business Owner ',
    },
    {label: 'Student', value: 'Student'},
    {label: 'Others', value: 'Others'},
  ];
  const data3 = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
    {label: '6', value: '6'},
    {label: '7', value: '7'},
    {label: '8', value: '8'},
    {label: '9', value: '9'},
    {label: '10', value: '10'},
  ];

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
        <Text style={{fontSize: 18, color: 'black'}}>Edit Customer</Text>
      </View>
      <ScrollView>
        <View
          style={{
            margin: 20,
            flex: 1,
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
          }}>
          {show && (
            <DateTimePicker
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={handlesourceDateChange}
              //onDismiss={() => setshowsourceDatePicker(false)}
            />
          )}

          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              marginLeft: 8,
              marginVertical: 5,
              //marginHorizontal: 3,
            }}>
            Customer Details
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 5,
                margin: 8,
                paddingHorizontal: 7,
                paddingVertical: 1,
              }}>
              <TextInput
                style={{marginVertical: -5, color: 'black', fontSize: 14}}
                placeholder="Name"
                placeholderTextColor={'gray'}
              />
            </View>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 5,
                margin: 8,
                paddingHorizontal: 7,
                paddingVertical: 1,
              }}>
              <TextInput
                style={{marginVertical: -5, color: 'black', fontSize: 14}}
                placeholder="Contact No"
                placeholderTextColor={'gray'}
              />
            </View>
          </View>
          <View
            style={{
              //flex: 1,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 5,
              margin: 8,
              paddingHorizontal: 7,
              paddingVertical: 1,
            }}>
            <TextInput
              style={{marginVertical: -5, color: 'black', fontSize: 14}}
              placeholder="Address"
              placeholderTextColor={'gray'}
            />
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 5,
                margin: 8,
                paddingHorizontal: 7,
                paddingVertical: 3,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  //justifyContent: 'space-between',
                }}>
                <Dropdown
                  style={{flex: 1, marginHorizontal: 5}}
                  placeholderStyle={{
                    color: 'gray',
                    fontSize: 14,
                  }}
                  data={data}
                  search
                  labelField="label"
                  valueField="value"
                  placeholder="Gender"
                  searchPlaceholder="Search..."
                  value={value}
                  onChange={item => {
                    setValue(item.value);
                  }}
                  itemTextStyle={{color: 'black'}}
                  selectedTextStyle={{color: 'black', fontSize: 14}}
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 5,
                margin: 8,
                paddingHorizontal: 7,
                paddingVertical: 1,
              }}>
              {/* <Text style={{marginHorizontal: 4}}>Insurer Name</Text> */}
              {show1 && (
                <DateTimePicker
                  value={date1}
                  mode={mode1}
                  is24Hour={true}
                  display="default"
                  onChange={handlesourceDateChange1}
                  //onDismiss={() => setshowsourceDatePicker(false)}
                />
              )}
              <TouchableOpacity
                onPress={() => showMode1('date')}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  style={{
                    flex: 1,
                    fontSize: 14,
                    marginVertical: -5,
                    color: 'black',
                  }}
                  editable={false}
                  value={datefollowtext}
                  placeholder="DOB"
                  placeholderTextColor={'gray'}
                />
                <Image
                  source={require('../assets/Evnt.png')} // Update with the actual path to your back button image
                  style={{
                    // marginTop: ,
                    width: 20,
                    height: 20,
                    tintColor: 'gray',
                    // You can customize the color of the back button
                    marginRight: 10,
                    alignSelf: 'center',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 5,
              margin: 8,
              paddingHorizontal: 7,
              paddingVertical: 3,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Dropdown
                style={{flex: 1, marginHorizontal: 5}}
                placeholderStyle={{
                  color: 'gray',
                  fontSize: 14,
                }}
                data={data2}
                search
                // maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Occupation"
                searchPlaceholder="Search..."
                value={value2}
                onChange={item => {
                  setValue2(item.value);
                }}
                itemTextStyle={{color: 'black'}}
                selectedTextStyle={{color: 'black', fontSize: 14}}
              />
            </View>
          </View>
          <View
            style={{
              //flex: 1,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 5,
              margin: 8,
              paddingHorizontal: 7,
              paddingVertical: 3,
            }}>
            {/* <Text style={{marginHorizontal: 4}}>Insurer Name</Text> */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Dropdown
                style={{flex: 1, marginHorizontal: 5}}
                placeholderStyle={{color: 'gray', fontSize: 14}}
                //selectedTextStyle={styles.selectedTextStyle}
                // inputSearchStyle={styles.inputSearchStyle}
                //iconStyle={styles.iconStyle}
                data={data1}
                search
                // maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Marital Status "
                searchPlaceholder="Search..."
                value={value1}
                onChange={item => {
                  setValue1(item.value);
                }}
                itemTextStyle={{color: 'black'}}
                selectedTextStyle={{color: 'black', fontSize: 14}}
              />
            </View>
          </View>
          <View
            style={{
              //flex: 1,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 5,
              margin: 8,
              paddingHorizontal: 7,
              paddingVertical: 3,
            }}>
            {/* <Text style={{marginHorizontal: 4}}>Insurer Name</Text> */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Dropdown
                style={{flex: 1, marginHorizontal: 5}}
                placeholderStyle={{
                  color: 'gray',
                  fontSize: 14,
                }}
                //selectedTextStyle={styles.selectedTextStyle}
                // inputSearchStyle={styles.inputSearchStyle}
                //iconStyle={styles.iconStyle}
                data={data3}
                search
                // maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Children"
                searchPlaceholder="Search..."
                value={value3}
                onChange={item => {
                  setValue3(item.value);
                }}
                itemTextStyle={{color: 'black'}}
                selectedTextStyle={{color: 'black', fontSize: 14}}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 5,
                margin: 8,
                paddingHorizontal: 7,
                paddingVertical: 3,
              }}>
              <View
                style={{
                  marginLeft: 5,
                  //flexDirection: 'row',
                  //justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 13, color: 'gray'}}>
                  Health Insurance
                </Text>
                <View style={{flexDirection: 'row', gap: 10}}>
                  {renderRadioButton('Yes', 'Yes')}
                  {renderRadioButton('No', 'No')}
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 5,
                margin: 8,
                paddingHorizontal: 7,
                paddingVertical: 3,
              }}>
              {/* <Text style={{marginHorizontal: 4}}>Insurer Name</Text> */}
              <View
                style={{
                  marginLeft: 5,
                  // flexDirection: 'row',
                  //justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 13, color: 'gray'}}>
                  Motor Insurance
                </Text>
                <View style={{flexDirection: 'row', gap: 10, marginBottom: 2}}>
                  {renderRadioButton1('Yes', 'Yes')}
                  {renderRadioButton1('No', 'No')}
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 25,
              marginTop: 20,
              marginBottom: 25,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Customers')}
              style={{
                //marginVertical: 10,
                // flex: 1,
                // height: '70%',
                // width: '35%',

                backgroundColor: '#0e4caf',
                borderRadius: 10,
                padding: 10,
                paddingHorizontal: 25,
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

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                //marginVertical: 10,
                // flex: 1,
                // height: '100%',
                // width: '35%',

                backgroundColor: 'red',
                borderRadius: 10,
                padding: 10,
                paddingHorizontal: 25,
              }}>
              <Text
                style={{
                  //alignSelf: 'center',
                  color: 'white',
                  fontSize: 13,
                  fontWeight: 'bold',
                  //marginHorizontal: 10,
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Customerdetail;
