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
            style={{marginTop: 10, height: 60, width: 60, tintColor: 'gray'}}
            resizeMode="cover"
          />
          <Text
            style={{
              color: 'gray',
              marginVertical: 5,
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            Customers
          </Text>
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Active Leads')}>
          {/* <View style={styles.box}> */}
          <Image
            source={require('../assets/Leads.png')}
            style={{marginTop: 10, height: 60, width: 60, tintColor: 'gray'}}
            resizeMode="cover"
          />
          <Text
            style={{
              color: 'gray',
              marginVertical: 5,
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            Leads
          </Text>
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Packages')}>
          {/* <View style={styles.box}> */}
          <Image
            source={require('../assets/Pacakages.png')}
            style={{marginTop: 10, height: 60, width: 60, tintColor: 'gray'}}
            resizeMode="cover"
          />
          <Text
            style={{
              color: 'gray',
              marginVertical: 5,
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            Packages
          </Text>
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
            style={{marginTop: 10, height: 60, width: 60, tintColor: 'gray'}}
            resizeMode="cover"
          />
          <Text
            style={{
              color: 'gray',
              marginVertical: 5,
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            Events
          </Text>
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Incentive')}>
          {/* <View style={styles.box}> */}
          <Image
            source={require('../assets/Incentive.png')}
            style={{marginTop: 10, height: 60, width: 60, tintColor: 'gray'}}
            resizeMode="cover"
          />
          <Text
            style={{
              color: 'gray',
              marginVertical: 5,
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            Incentives
          </Text>
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Calculator')}>
          {/* <View style={styles.box}> */}
          <Image
            source={require('../assets/Calculator.png')}
            style={{marginTop: 10, height: 60, width: 60, tintColor: 'gray'}}
            resizeMode="cover"
          />
          <Text
            style={{
              color: 'gray',
              marginVertical: 5,
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            Calculator
          </Text>
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
