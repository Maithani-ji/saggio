import React, {useEffect, useState} from 'react';
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

const Home = () => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [projectdata, setProjectdata] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const id = await getData('id');
        console.log(id);

        const response = await axios.get(
          'https://bimaafamily.techiedom.com/lms/api/getDashboard',
          {user_id: 1},
        );

        // Assuming your API returns data in the response.data property
        //console.log(response.data.data);
        setData(response.data.data);
        const projectresponse = await axios.get(
          'https://bimaafamily.techiedom.com/lms/api/getProjects',
          {user_id: 1},
        );
        console.log('member', projectresponse.data.data[0].members);
        setProjectdata(projectresponse.data.data);
        setLoad(false);
      } catch (error) {
        setLoad(false);
        console.log('Error in Homepage', error);
      }
    };

    fetchData();
  }, []); // Dependency ar
  if (load) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#dee7f8'}}>
      {/* STARTING OF Homepage above logo and  drwaer button and notification */}
      <ImageBackground
        source={require('../assets/topimage.png')}
        style={{
          width: '100%',
          height: 140,
          tintColor: '#194c9e',
        }}
        resizeMode="cover">
        <View style={{position: 'absolute', top: 10, left: 10}}>
          <CustomDrawerButton />
        </View>
        <View style={{position: 'absolute', top: 10, right: 10, zIndex: 1}}>
          <NotificationBtn />
        </View>
      </ImageBackground>
      {/* Ending OF Homepage above logo and  drwaer button and notification */}

      <ScrollView>
        <View style={{flex: 1, margin: 20}}>
          {/* Display Board Start */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',

              gap: 5,
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
                  height: 90,
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
                <Text style={{color: 'white'}}>Today Sale</Text>
                <Text
                  style={{fontWeight: 'bold', color: 'white', fontSize: 17}}>
                  ₹{data?.today_sale}
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
                  height: 90,

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
            colors={['#36D1DC', '#5B86E5']}
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
                  height: 90,
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
                <Text style={{color: 'white'}}>Today Lead</Text>
                <Text
                  style={{fontWeight: 'bold', color: 'white', fontSize: 17}}>
                  {data?.today_lead}
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
                  height: 90,
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
