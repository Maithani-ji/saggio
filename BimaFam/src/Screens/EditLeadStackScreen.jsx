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

const EditLead = ({navigation}) => {
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

  const [options, setOptions] = useState([
    {label: 'Follow Up', value: 'Follow Up'},
    {label: 'Visit', value: 'Visit'},
  ]);

  const handleOptionChange = selectedOption => {
    setOptions(
      options.map(option => ({
        ...option,
        selected: option.value === selectedOption.value,
      })),
    );
  };

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

  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Life Insurance',
        value: 'option1',
      },
      {
        id: '2',
        label: 'General insurance',
        value: 'option2',
      },
    ],
    [],
  );
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

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#dee7f8'}}>
      <View
        style={{
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
        <Text style={{fontSize: 18, color: 'white'}}>Edit Lead</Text>
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
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              //alignSelf: 'center',
              marginVertical: 2.5,
              marginRight: 3,
            }}>
            Type:
          </Text>
          <View
            style={{
              flexDirection: 'row',
              //justifyContent: 'space-between',
              //margin: 8,
            }}>
            {/* <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                alignSelf: 'center',
                marginVertical: 2.5,
                marginRight: 3,
              }}>
              Type:
            </Text> */}
            <View style={{width: '100%', marginBottom: 5}}>
              <RadioGroup
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
                layout="row"
                containerStyle={
                  {
                    //alignSelf: 'flex-end'
                  }
                }
              />
            </View>
          </View>
          <View
            style={{
              borderWidth: 0.4,
              borderColor: 'black',
              borderRadius: 5,
              margin: 8,
              paddingHorizontal: 7,
              paddingVertical: 1,
            }}>
            <Text style={{marginHorizontal: 4}}>Plan</Text>
            <TextInput
              style={{
                // marginTop: -10,
                marginVertical: -13,
              }}
              placeholder="LIC Jeevan Amar"
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                borderWidth: 0.4,
                borderColor: 'black',
                borderRadius: 5,
                margin: 8,
                paddingHorizontal: 7,
                paddingVertical: 1,
              }}>
              <Text
                style={{
                  marginHorizontal: 3,
                }}>
                Case Code
              </Text>

              <TextInput
                style={{marginVertical: -14}}
                placeholder="BMF-54721"
              />
              {/* <Image
                  source={require('../assets/dropdown.png')} // Update with the actual path to your back button image
                  style={{
                    marginTop: -10,
                    width: 24,
                    height: 24,
                    // You can customize the color of the back button
                    marginRight: 10,
                    alignSelf: 'center',
                  }}
                /> */}
            </View>
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
            <TouchableOpacity
              onPress={() => showMode('date')}
              style={{
                flex: 1,
                borderWidth: 0.4,
                borderColor: 'black',
                borderRadius: 5,
                margin: 8,
                paddingHorizontal: 7,
                paddingVertical: 1,
              }}>
              <Text style={{marginHorizontal: 4}}>Sourcing Date</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  style={{marginVertical: -14, color: 'black'}}
                  placeholder="DD-MM-YYYY"
                  value={datesourcetext}
                  editable={false}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',

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
                borderColor: '#0e4caf',
                borderRadius: 5,
                margin: 8,
                paddingHorizontal: 7,
                paddingVertical: 1,
              }}>
              <TextInput style={{marginVertical: -5}} placeholder="Name" />
            </View>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#0e4caf',
                borderRadius: 5,
                margin: 8,
                paddingHorizontal: 7,
                paddingVertical: 1,
              }}>
              <TextInput
                style={{marginVertical: -5}}
                placeholder="Contact No"
              />
            </View>
          </View>
          <View
            style={{
              //flex: 1,
              borderWidth: 1,
              borderColor: '#0e4caf',
              borderRadius: 5,
              margin: 8,
              paddingHorizontal: 7,
              paddingVertical: 1,
            }}>
            <TextInput style={{marginVertical: -5}} placeholder="Address" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#0e4caf',
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
                  placeholder="Insurer Name"
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
                flex: 1,
                borderWidth: 1,
                borderColor: '#0e4caf',
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
                  data={data1}
                  search
                  // maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Plan Name"
                  searchPlaceholder="Search..."
                  value={value1}
                  onChange={item => {
                    setValue1(item.value);
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              //flex: 1,
              borderWidth: 1,
              borderColor: '#0e4caf',
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
                data={data2}
                search
                // maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Premium Payment Term "
                searchPlaceholder="Search..."
                value={value2}
                onChange={item => {
                  setValue2(item.value);
                }}
              />
            </View>
          </View>
          <View
            style={{
              //flex: 1,
              borderWidth: 1,
              borderColor: '#0e4caf',
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
                placeholder="Policy Term"
                searchPlaceholder="Search..."
                value={value3}
                onChange={item => {
                  setValue3(item.value);
                }}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#0e4caf',
                borderRadius: 5,
                margin: 8,
                paddingHorizontal: 7,
                paddingVertical: 3,
              }}>
              {/* <Text style={{marginHorizontal: 4}}>Case Code</Text> */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {options.map(option => (
                  <TouchableOpacity
                    key={option.value}
                    onPress={() => handleOptionChange(option)}>
                    <Text
                      style={{
                        color: option.selected ? 'black' : 'gray',
                        alignSelf: 'center',
                        marginTop: 5,
                        fontWeight: option.selected ? 'bold' : 'normal',
                        marginHorizontal: 5,
                      }}>
                      {option.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#0e4caf',
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
                    fontSize: 13,
                    marginVertical: -5,
                    color: 'black',
                  }}
                  editable={false}
                  value={datefollowtext}
                  placeholder="DD-MM-YYYY"
                />
                <Image
                  source={require('../assets/Evnt.png')} // Update with the actual path to your back button image
                  style={{
                    // marginTop: ,
                    width: 20,
                    height: 20,
                    tintColor: '#0e4caf',
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
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 25,
              marginTop: 20,
              marginBottom: 25,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Active Leads')}
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
              onPress={() => navigation.navigate('Home')}
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

export default EditLead;
