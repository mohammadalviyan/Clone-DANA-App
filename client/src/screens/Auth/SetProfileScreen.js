import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const ReferalScreen = (props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: 80}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('AuthScreen')}>
              <Text style={styles.textCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, justifyContent: 'center'}}>
            <Image
              source={require('../../assets/danain-text.png')}
              style={styles.image}
            />
          </View>

          <View style={{width: 80}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SetPinScreen')}>
              <Text style={styles.textRegister}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerText}>
          <Text style={styles.text}>(Step 1/3)</Text>
          <Text style={styles.textSet}>
            Set your picture and nickname so your friend will be easily
            recognize you
          </Text>
        </View>

        <View style={styles.containerInd}>
          <Image
            source={require('../../assets/camera-icon.png')}
            style={styles.imageIcon}
          />
        </View>

        <View style={styles.containerInd}>
          <TextInput
            style={styles.textInput}
            maxLength={16}
            placeholder="Your Nickname"
            placeholderTextColor="#84c8f9"
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.containerBorder}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
  imageIcon: {
    width: 133,
    height: 133,
    marginTop: 20,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: '#118eea',
    flex: 1
  },
  containerText: {
    marginHorizontal: 40,
    alignItems: 'center',
    marginTop: 45,
  },
  text: {
    color: '#FFF',
  },
  textCancel: {
    fontSize: 18,
    color: '#84c8f9',
    paddingTop: 20,
    textAlign: 'left',
    paddingLeft: 23
  },
  textRegister: {
    fontSize: 18,
    color: '#84c8f9',
    paddingTop: 20,
    textAlign: 'left',
  },
  textSet: {
    color: '#FFF',
    paddingTop: 15,
    textAlign: 'center'
  },
  containerInd: {
    marginTop: 45,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textInput: {
    marginTop: 20,
    fontSize: 35,
    color: '#FFF',
    fontWeight: '100',
  },
  containerBorder: {
    alignSelf: 'center',
    width: 40,
    height: 2,
    backgroundColor: '#FFF',
  },
  containerTitle: {
    paddingTop: 140,
    marginHorizontal: 50,
  },
  textTitle: {
    color: '#FFF',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 30,
  },
});

export default ReferalScreen;
