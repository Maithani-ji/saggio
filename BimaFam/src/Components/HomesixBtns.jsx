import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomesixBtns = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        //flex: 1,
        // flexDirection: 'column',
        //justifyContent: 'space-between',
        // alignItems: 'center',
        marginTop: 10,
        // marginVertical: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
          gap: 10,
        }}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Customers')}>
          {/* <View style={styles.box}> */}
          <Image
            source={require('../assets/Customers.png')}
            style={{marginTop: 10, height: 70, width: 70, tintColor: '#194c9e'}}
            resizeMode="cover"
          />
          <Text style={{color: 'gray', marginVertical: 5}}>Customers</Text>
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Active Leads')}>
          {/* <View style={styles.box}> */}
          <Image
            source={require('../assets/Leads.png')}
            style={{marginTop: 10, height: 70, width: 70, tintColor: '#194c9e'}}
            resizeMode="cover"
          />
          <Text style={{color: 'gray', marginVertical: 5}}>Leads</Text>
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Packages')}>
          {/* <View style={styles.box}> */}
          <Image
            source={require('../assets/Pacakages.png')}
            style={{marginTop: 10, height: 70, width: 70, tintColor: '#194c9e'}}
            resizeMode="cover"
          />
          <Text style={{color: 'gray', marginVertical: 5}}>Packages</Text>
          {/* </View> */}
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
          gap: 10,
        }}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Events')}>
          {/* <View style={styles.box}> */}
          <Image
            source={require('../assets/Evnt.png')}
            style={{marginTop: 10, height: 70, width: 70, tintColor: '#194c9e'}}
            resizeMode="cover"
          />
          <Text style={{color: 'gray', marginVertical: 5}}>Events</Text>
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Incentive')}>
          {/* <View style={styles.box}> */}
          <Image
            source={require('../assets/Incentive.png')}
            style={{marginTop: 10, height: 70, width: 70, tintColor: '#194c9e'}}
            resizeMode="cover"
          />
          <Text style={{color: 'gray', marginVertical: 5}}>Incentives</Text>
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Profile')}>
          {/* <View style={styles.box}> */}
          <Image
            source={require('../assets/Profile.png')}
            style={{marginTop: 10, height: 70, width: 70, tintColor: '#194c9e'}}
            resizeMode="cover"
          />
          <Text style={{color: 'gray', marginVertical: 5}}>Profile</Text>
          {/* </View> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomesixBtns;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    // flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    //width: 115,
    //height: 115,
    backgroundColor: 'white', // Adjust the color as needed
    //margin: 5,
    borderRadius: 10,
    // elevation: 5,

    // Set the elevation value
    // shadowColor: 'black',
    // shadowOffset: {width: 5, height: 5},
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
  },
});
