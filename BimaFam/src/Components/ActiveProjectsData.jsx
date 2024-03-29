import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import {storeData} from '../utils/AsyncStorag';

const ActiveProjects = ({index, project}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={async () => {
        //console.log(project.id);
        await storeData('projectid', project?.id);
        navigation.navigate('Leadsfollowup');
      }}
      key={project.id}
      style={{
        backgroundColor: 'white',
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
      }}>
      <View>
        <View
          style={{
            //marginBottom: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontWeight: 'bold', color: '#3081ec'}}>
              {project?.title}
            </Text>
          </View>
          <TouchableOpacity style={{marginBottom: 5}}>
            <Image
              source={require('../assets/searchh.png')}
              style={{height: 23, width: 23}}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{fontWeight: 'bold', color: 'black', marginBottom: 5}}>
              Members
            </Text>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Progress</Text>
          </View>
          <View style={{alignSelf: 'center', marginBottom: 5}}>
            {!project.members || project.members.length === 0 ? (
              <View style={{flexDirection: 'row', marginBottom: 5}}>
                {Array.from({length: 4}, (_, index) => (
                  <TouchableOpacity key={index}>
                    <Image
                      source={require('../assets/membericon.png')}
                      style={{height: 23, width: 23}}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <View style={{flexDirection: 'row', marginBottom: 5}}>
                {project?.members?.slice(0, 3).map((member, index) => (
                  <TouchableOpacity key={index}>
                    <Image
                      source={require('../assets/membericon.png')}
                      style={{height: 23, width: 23, marginRight: 5}}
                    />
                  </TouchableOpacity>
                ))}
                {project.members.length > 3 && (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 10, color: 'red', marginRight: 5}}>
                      +{project.members.length - 3}
                    </Text>
                    <Text style={{fontSize: 10, color: 'red'}}>more</Text>
                  </View>
                )}
              </View>
            )}

            <View style={{flexDirection: 'row'}}>
              <Progress.Bar
                style={{alignSelf: 'center'}}
                progress={parseFloat(project?.progress.replace('%', '')) / 100}
                width={110}
                color="#3aba40"
                height={4}
                borderRadius={40}
                borderColor="rgba(0,0,0,0.1)"
              />

              <Text style={{marginLeft: 4, fontSize: 12, color: 'gray'}}>
                {project?.progress}
              </Text>
            </View>
          </View>
          <View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  alignSelf: 'center',
                  marginBottom: 5,
                }}>
                Confirm Leads
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',

                alignSelf: 'center',
              }}>
              <Text style={{fontWeight: 'bold', color: 'green'}}>
                {project?.confirm_leads}
              </Text>
              {/* <Text style={{fontWeight: 'bold', color: 'green'}}>6</Text>
              <Text style={{fontWeight: 'bold', color: 'green'}}>/</Text>
              <Text style={{fontWeight: 'bold', color: 'green'}}>130</Text> */}
            </View>
          </View>
        </View>
        <View style={{marginLeft: -40}}>
          <Text style={{fontSize: 12, alignSelf: 'center', color: 'gray'}}>
            Remaining Leads:{project?.remain_leads}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ActiveProjects;

const styles = StyleSheet.create({});
