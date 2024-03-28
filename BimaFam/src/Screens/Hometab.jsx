import React, {useEffect, useMemo, useState} from 'react';
import {
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Linking,
  RefreshControl,
} from 'react-native';
import CustomDrawerButton from '../Components/CustomdrawerButton';
import NotificationBtn from '../Components/NotificationBtn';
import LinearGradient from 'react-native-linear-gradient';

import HomesixBtns from '../Components/HomesixBtns';
import ActiveLeadsHome from '../Components/ActiveLeadsData';
import ActiveProjects from '../Components/ActiveProjectsData';
import {getData} from '../utils/AsyncStorag';
import Loading from '../loadingcomponent/loading';
import axios from 'axios';
import {BASE_URL} from '../utils/constant';
import {useFocusEffect} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';

const Home = () => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [projectdata, setProjectdata] = useState(null);
  // useFocusEffect(
  //   React.useCallback(() => {
  //     fetchDashboardData();
  //     fetchActiveprojectData();
  //   }, [fetchDashboardData, fetchActiveprojectData]),
  // ); // Dependency ar
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetchDashboardData();
    fetchActiveprojectData();
  };
  const fetchDashboardData = useMemo(
    () => async () => {
      try {
        setLoad(true);
        const id = await getData('user');
        console.log(id);

        const response = await axios.post(`${BASE_URL}/api/getDashboard`, {
          user_id: id,
        });
        if (response.data.status === 200) {
          console.log(response.data.data);
          setData(response.data.data);
        } else if (response.data.data == null) {
          //navigation.goBack();
          throw new Error('No Active Dashboard data available ');
        } else {
          throw new Error('Invalid response from dashboard');
        }
      } catch (error) {
        Snackbar.show({
          text: error.message || 'Failed to get the data. Please try again.',
          textColor: 'white',
          backgroundColor: 'red',
          duration: Snackbar.LENGTH_SHORT,
          marginBottom: 70,
        });
        console.log('Error in Homepage', error);
      } finally {
        setLoad(false);
      }
    },
    [],
  );
  const fetchActiveprojectData = useMemo(
    () => async () => {
      try {
        setLoad(true);
        const id = await getData('user');
        console.log(id);

        const response = await axios.post(`${BASE_URL}/api/getProjects`, {
          user_id: id,
        });
        console.log('member', response.data);
        if (response.data.status === 200) {
          setProjectdata(response.data.data);
        } else if (response.data.data == null) {
          //navigation.goBack();
          throw new Error('No Active Project available ');
        } else {
          throw new Error('Invalid response from Active project');
        }
      } catch (error) {
        Snackbar.show({
          text: error.message || 'Failed to get the data. Please try again.',
          textColor: 'white',
          backgroundColor: 'red',
          duration: Snackbar.LENGTH_SHORT,
          marginBottom: 70,
        });
        console.log('Error in Homepage', error);
      } finally {
        setLoad(false);
      }
    },
    [],
  );
  // const memoizedFetchDashboardData = useMemo(() => fetchDashboardData, []);
  // const memoizedFetchActiveprojectData = useMemo(
  //   () => fetchActiveprojectData,
  //   [],
  // );
  // useFocusEffect(
  //   React.useCallback(() => {
  //     memoizedFetchDashboardData();
  //     memoizedFetchActiveprojectData();
  //   }, [memoizedFetchDashboardData, memoizedFetchActiveprojectData]),
  // ); // Dependency ar
  // useEffect(() => {
  //   memoizedFetchDashboardData();
  //   memoizedFetchActiveprojectData();
  // }, [memoizedFetchDashboardData, memoizedFetchActiveprojectData]);

  if (load) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f4f6ff'}}>
      {/* STARTING OF Homepage above logo and  drwaer button and notification */}
      <View style={{elevation: 5}}>
        <Image
          source={require('../assets/bcg.png')}
          style={{
            width: '100%',
            height: 180,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            //  tintColor: '#194c9e',
          }}
          //   resizeMode="cover"
        />
      </View>
      <View style={{position: 'absolute', top: 10, left: 10}}>
        <CustomDrawerButton />
      </View>
      <View style={{position: 'absolute', top: 10, right: 10, zIndex: 1}}>
        <NotificationBtn />
      </View>
      {/* </ImageBackground> */}
      {/* Ending OF Homepage above logo and  drwaer button and notification */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl onRefresh={fetchData} />}>
        <View style={{flex: 1, marginHorizontal: 20}}>
          {/* Display Board Start */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
              gap: 10,
            }}>
            <LinearGradient
              colors={['#7474BF', '#348AC7']}
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                //backgroundColor: 'gray',
                // borderRadius: 20,
                //  backgroundColor: 'gray',
                borderRadius: 10,
              }}
              start={{x: 0, y: 0}} // Horizontal start
              end={{x: 1, y: 0}} // Horizontal end
              // style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
              <Image
                source={require('../assets/TodaySale.png')}
                style={{
                  width: '40%',
                  height: 80,
                  marginHorizontal: -5,
                  tintColor: 'white',
                }}
                resizeMode="cover"
              />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  marginRight: 10,
                }}>
                <Text style={{color: 'white'}}>Monthly Sale</Text>
                <Text
                  style={{fontWeight: 'bold', color: 'white', fontSize: 17}}>
                  ₹{data?.monthly_sale}
                </Text>
              </View>
              {/* </View> */}
            </LinearGradient>
            <LinearGradient
              colors={['#36D1DC', '#5B86E5']}
              start={{x: 0, y: 0}} // Horizontal start
              end={{x: 1, y: 0}} // Horizontal end
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',

                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/TotalSale.png')}
                style={{
                  width: '40%',
                  height: 80,

                  tintColor: 'white',
                }}
                resizeMode="cover"
              />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  marginRight: 10,
                }}>
                <Text style={{color: 'white'}}>Total Sale</Text>
                <Text
                  style={{fontWeight: 'bold', color: 'white', fontSize: 17}}>
                  ₹{data?.total_sale}
                </Text>
              </View>
              {/* </View> */}
            </LinearGradient>
          </View>
          <LinearGradient
            colors={['#36D1DC', '#3790ee']}
            start={{x: 0, y: 0}} // Horizontal start
            end={{x: 1, y: 0}} // Horizontal end
            style={{
              //padding: 2,
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,

              borderRadius: 10,

              justifyContent: 'center',

              borderRadius: 10,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',

                justifyContent: 'space-between',
              }}>
              <Image
                source={require('../assets/TodayLead.png')}
                style={{
                  width: '40%',
                  height: 80,
                  tintColor: 'white',
                }}
                resizeMode="cover"
              />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  marginRight: 10,
                }}>
                <Text style={{color: 'white'}}>Monthly Lead</Text>
                <Text
                  style={{fontWeight: 'bold', color: 'white', fontSize: 17}}>
                  {data?.monthly_lead}
                </Text>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 5,
                backgroundColor: 'white',
                height: '70%',
                width: 1,
                alignSelf: 'center',
              }}></View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',

                justifyContent: 'space-between',
              }}>
              <Image
                source={require('../assets/TotalLead.png')}
                style={{
                  width: '40%',
                  height: 80,
                  tintColor: 'white',
                }}
                resizeMode="cover"
              />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  marginRight: 10,
                }}>
                <Text style={{color: 'white'}}>Total Lead</Text>
                <Text
                  style={{fontWeight: 'bold', color: 'white', fontSize: 17}}>
                  {data?.total_lead}
                </Text>
              </View>
            </View>
          </LinearGradient>
          {/* Display Board ends */}
          {/* Homepage 6 Mid Buttons */}
          <View style={{flex: 1}}>
            <HomesixBtns />
          </View>
          {/* Homepage 6 Mid Buttons ends */}
          {/* Starting of Active Leads */}
          <View style={{marginVertical: 10, marginTop: 15}}>
            <Text style={{fontSize: 19, fontWeight: 'bold', color: 'black'}}>
              Active Projects
            </Text>
          </View>
          {/* Showing some Active Projects */}
          {projectdata?.map((project, index) => (
            <ActiveProjects
              key={index}
              index={index}
              project={project}
              // members={project?.members}
            />
          ))}
          {/* End Showing some Active Leads */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 115,
    height: 115,
    backgroundColor: 'white', // Adjust the color as needed
    margin: 5,
    borderRadius: 20,
  },
});
