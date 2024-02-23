import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomDrawerButton from '../Components/CustomdrawerButton';

const Packages = ({navigation}) => {
  const handleBackPress = () => {
    // Handle back button press (e.g., navigate back)
    navigation.goBack();
  };
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
        <Text style={{fontSize: 18, color: 'white'}}>Packages</Text>
      </View>
      <ScrollView>
        <View style={{margin: 20, flex: 1}}>
          <View style={styles.container}>
            {/* Row 1 */}
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => navigation.navigate('Packagedetails')}>
                <Image
                  source={require('../assets/Planone.png')}
                  style={styles.image}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => navigation.navigate('Packagedetails')}>
                <Image
                  source={require('../assets/Plantwo.png')}
                  style={styles.image}
                />
              </TouchableOpacity>
            </View>

            {/* Row 2 */}
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => navigation.navigate('Packagedetails')}>
                <Image
                  source={require('../assets/Planthree.png')}
                  style={styles.image}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => navigation.navigate('Packagedetails')}>
                <Image
                  source={require('../assets/Planone.png')}
                  style={styles.image}
                />
              </TouchableOpacity>
            </View>

            {/* Row 3 */}
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => navigation.navigate('Packagedetails')}>
                <Image
                  source={require('../assets/Plantwo.png')}
                  style={styles.image}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => navigation.navigate('Packagedetails')}>
                <Image
                  resizeMode="cover"
                  source={require('../assets/Planthree.png')}
                  style={styles.image}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Packages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    //justifyContent: 'center',
    // alignItems: 'center',
    //margin: 15,
    //marginBottom: 25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    //marginVertical: 10,
  },
  imageContainer: {
    flex: 1,
    marginBottom: 5,
    //borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
