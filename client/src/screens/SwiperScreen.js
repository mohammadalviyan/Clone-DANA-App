import React from 'react';
import {
  StatusBar,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Swiper from 'react-native-swiper';
const {width, height} = Dimensions.get('window');

const SwiperScreen = (props) => {
  return (
    <>
      <StatusBar backgroundColor="#118eea" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.viewLogo}>
          <Image
            source={require('../assets/danain-text.png')}
            style={styles.imageLogo}
          />
        </View>

        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          dot={
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,.3)',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#fff',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7,
              }}
            />
          }
          loop={false}>
          <View style={styles.containerMid}>
            <Text style={styles.textActivate}>ACTIVATE DANAIN</Text>
            <Image
              source={require('../assets/splash1-icon.png')}
              style={styles.imageMid}
            />
            <Text style={styles.textDanaAccount}>
              Activate your DANAIN account now and have the convenience of
              transactions such as credit, bils, and, installments
            </Text>
          </View>

          <View style={styles.containerMid}>
            <Text style={styles.textActivate}>GUARANTEED 100% SECURE</Text>
            <Image
              source={require('../assets/splash2-icon.png')}
              style={styles.imageMid}
            />
            <Text style={styles.textDanaAccount}>
              DANAIN provides the most advanced security feature and data
              storage systems that guarantee your fund and all a your
              transactions are 100% secure!
            </Text>
          </View>

          <View style={styles.containerMid}>
            <Text style={styles.textActivate}>SEND DANAIN</Text>
            <Image
              source={require('../assets/splash3-icon.png')}
              style={styles.imageMid}
            />
            <Text style={styles.textDanaAccount}>
              Send DANAIN to anymore, anywhere and anytime without cost!
            </Text>
          </View>
        </Swiper>

        <View style={styles.containerBottom}>
          <TouchableOpacity
            style={styles.buttonSkip}
            onPress={() => props.navigation.navigate('AuthScreen')}>
            <Text style={styles.textSkip}>SKIP</Text>
          </TouchableOpacity>
          <Text style={styles.termCondition}>
            By tapping skip button, you agree to our Terms & Conditions
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#118eea',
  },
  containerMid: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  containerBottom: {
    height: 100,
    alignItems: 'center',
  },
  imageLogo: {
    width: 125,
    height: 20,
  },
  textActivate: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '700',
    paddingTop: 35,
    paddingBottom: 88,
  },
  textDanaAccount: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 13,
    paddingTop: 100,
  },
  textSkip: {
    color: '#118eea',
  },
  slide1: {
    width: 15,
    height: 15,
  },
  slide2: {
    width: 15,
    height: 15,
    opacity: 0.3,
    marginLeft: 5,
    marginRight: 5,
  },
  slide3: {
    width: 15,
    height: 15,
    opacity: 0.3,
  },
  viewLogo: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  imageMid: {
    width: 260,
    height: 260,
  },
  buttonSkip: {
    backgroundColor: '#FFF',
    width: 350,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  termCondition: {
    textAlign: 'center',
    color: '#FFF',
    marginHorizontal: 26,
    fontSize: 13,
  },
  wrapper: {
    // backgroundColor: '#f00'
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  image: {
    width,
    height,
  },
});

export default SwiperScreen;
