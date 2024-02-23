import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const Loading = ({color}) => {
  return (
    <SafeAreaView>
      {color ? (
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#0e4caf',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <ActivityIndicator size={60} color={'white'} />
          </View>
        </View>
      ) : (
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <ActivityIndicator size={60} color={'#0e4caf'} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Loading;

const styles = StyleSheet.create({});
