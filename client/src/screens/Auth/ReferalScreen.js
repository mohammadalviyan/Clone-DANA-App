import React, { useState, useEffect, useLayoutEffect } from 'react';
import { 
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

const ReferalScreen = (props) => {

  const [input, setInput] = useState(props.navigation.getParam('input'))
  const [refferal, setRefferal] = useState({refferal: ''})
  const [isLoading, setIsLoading] = useState(false)

  useEffect( () => {
    setInput({phone:props.navigation.getParam('input')})
  },[])
  
  const handleNext = () => {
    setIsLoading(true)
    setTimeout(() => {
      props.navigation.navigate('SetProfileScreen', {
        phone: input,
        refferal: refferal
      })
      setIsLoading(false)
    }, 5000)
  }

  console.log('REFERAL', refferal);

    return (
      <>
        <View style={{backgroundColor: '#118eea', flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, paddingLeft: 60}}>
              <Image
                source={require('../../assets/danain-text.png')}
                style={styles.image}
              />
            </View>

            <View style={{width: 60}}>
              { isLoading ? (
                <ActivityIndicator
                  animating={true}
                  color="white"
                  size="small"
                  style={{ paddingTop: 20, paddingRight: 25, justifyContent: 'center' }}
                />
              ) : (
                refferal.refferal.length >= 1 ? (
                  <TouchableOpacity
                    onPress={() => handleNext()}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#FFF',
                        paddingTop: 20,
                        textAlign: 'left',
                      }}>
                      Next
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => handleNext()}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#FFF',
                        paddingTop: 20,
                        textAlign: 'left',
                      }}>
                      Skip
                    </Text>
                  </TouchableOpacity>
                )
                )}
            </View>
          </View>

          <View style={styles.containerText}>
            <Text style={styles.text}>
              Enter your referral code to get free voucher
            </Text>
          </View>

          <View style={styles.containerInd}>
            <Image
              source={require('../../assets/voucher-icon.png')}
              style={styles.imageIcon}
            />
          </View>

          <View style={styles.containerInd}>
            <TextInput
              style={styles.textInput}
              maxLength={16}
              placeholder="Referral Code"
              placeholderTextColor="#84c8f9"
              underlineColorAndroid="transparent"
              autoCapitalize='characters'
              onChangeText={Refferal =>
                setRefferal({...refferal, refferal: Refferal})
              }
            />
          </View>

          <View style={styles.containerBorder}></View>

          <View style={styles.containerTitle}>
            <Text style={styles.textTitle}>
              Dont have a code yet? No worries, just ask your friend who already
              join DANAIN or you can skip it
            </Text>
          </View>
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
    width: 200,
    height: 133,
    marginTop: 20,
    alignSelf: 'center',
  },
  containerText: {
    marginHorizontal: 20,
    alignSelf: 'center',
    marginTop: 45,
  },
  text: {
    color: '#FFF',
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
    textAlign: 'center'
  },
  containerBorder: {
    alignSelf: 'center',
    width: 40,
    height: 2,
    backgroundColor: '#FFF',
  },
  containerTitle: {
    paddingTop: 140,
    marginHorizontal:50
  },
  textTitle: {
    color: '#FFF',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 30
  },
});

export default ReferalScreen;