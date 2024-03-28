import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
const Intro = ({navigation}) => {
  const images = [
    require('../assets/intro1.jpg'),
    require('../assets/intro2.jpg'),
    require('../assets/intro3.jpg'),
    require('../assets/intro4.jpg'),
  ];
  return (
    <SafeAreaView>
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        resizeMode="cover"
        source={require('../assets/introbcg.jpg')}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{alignSelf: 'flex-end', marginRight: 20, marginTop: 20}}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Skip</Text>
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{
            alignSelf: 'center',
            marginTop: 20,
            position: 'absolute',
            top: 30,
          }}>
          <Image
            source={require('../assets/backg.png')}
            style={{height: 135, width: 210}}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0)',
            position: 'absolute',
            top: '21%',
            width: '100%',
            //  height: 380,
            marginTop: 50,
            borderRadius: 0,
            // overflow: 'hidden',
            alignSelf: 'center',
          }}>
          <SliderBox
            activeOpacity={0.1}
            disableOnPress={true}
            images={images}
            sliderBoxHeight={380}
            dotColor="red"
            autoplay={true}
            imageLoadingColor={'red'}
            autoplayInterval={3000}
            //circleLoop={true}
            //resizeMode={'cover'}
            // resizeMethod={'resize'}
            ImageComponentStyle={{
              width: '100%',

              borderRadius: 50,
              //backgroundColor: rgba(0, 0, 0),
              resizeMode: 'cover',
              //marginTop: 5,
            }}
            dotStyle={{
              width: 12,
              height: 12,
              // marginBottom: 30,
              borderRadius: 10,
              position: 'relative',
              bottom: -25,
              //marginb: -10,
            }}
            inactiveDotColor="darkgray"
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            position: 'absolute',
            bottom: 20,
            alignSelf: 'center',
            backgroundColor: 'red',
            paddingHorizontal: 20,
            width: '80%',

            borderRadius: 40,
            paddingVertical: 15,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Intro;

const styles = StyleSheet.create({});
