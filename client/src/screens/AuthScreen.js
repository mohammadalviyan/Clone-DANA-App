import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';

import Modal, {ModalContent} from 'react-native-modals';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import {useDispatch} from 'react-redux';
import {check, otpreq, login} from '../Redux/Actions/auth';

const AuthScreen = (props) => {
  const [bottomModal, setBottomModal] = useState(false);
  const [user, setUser] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [input, setInput] = useState('');
  const [pin, setPin] = useState('');
  const dispatch = useDispatch();
  
  const handleCheck = () => {
    setIsLoading(true)
    dispatch(check(input))
      .then(response => {
        if (response.value.data.message === 'new') {
          setIsLoading(false);
          setTimeout(() => {
            setUser(response.value.data.message);
            setBottomModal(true);
            // props.navigation.navigate('ReferalScreen',{input});
          }, 500);
        } else {
          setIsLoading(false);
          setTimeout(() => {
            setUser(response.value.data.message);
            setBottomModal(true);
          }, 500);
        }
      })
      .catch(error => alert(error));
  }

  const handleOtp = (code) => {
    dispatch(otpreq(code, input))
      .then(response => { 
        if (response.value.data.status === 'success') {
          props.navigation.navigate('ReferalScreen', {input});
        } else {
          ToastAndroid.show(response.value.data.response, ToastAndroid.SHORT);
        }
        setBottomModal(false);
      })
      .catch(error => alert(error));
  } 
  

  const handleLogin = (pin) => {
    setBottomModal(false);
    dispatch(login(pin, input))
    .then(response => { 
      if (response.value.data.status === 'success') {
        props.navigation.navigate('TabScreen');
      } else {
        ToastAndroid.show(response.value.data.response, ToastAndroid.SHORT);
      }
      })
      .catch(error => alert(error));
    }

  return (
    <>
      <Modal.BottomModal
        visible={bottomModal}
        onTouchOutside={() => setBottomModal(false)}>
        <ModalContent
          style={{
            height: 300,
          }}>
          {user === 'old' ? (
            <View style={{alignItems: 'center'}}>
              <Text>Anda telah terdaftar di DANAIN</Text>
              <Text>Masukkan PIN yang terdaftar pada nomor ini</Text>
              <TextInput
                maxLength={6}
                placeholderTextColor="#84c8f9"
                underlineColorAndroid="transparent"
                keyboardType={'numeric'}
                autoFocus={true}
                selectionColor={'#FFF'}
                secureTextEntry={true}
                onChangeText={Pin => setPin(Pin)}
                style={{
                  fontSize: 56,
                  height: 150,
                  width: '80%',
                  textAlign: 'center',
                  letterSpacing: 30,
                }}
              />
              <TouchableOpacity
                onPress={() => handleLogin(pin)}
                style={{
                  backgroundColor: '#118eea',
                  width: 100,
                  height: 40,
                  borderRadius: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#FFF'}}>SUBMIT</Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: '#118eea',
                  marginTop: 20,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Lupa Pin
              </Text>
            </View>
          ) : (
            <>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{paddingTop: 25, fontWeight: 'bold', fontSize: 25}}>
                  Enter OTP
                </Text>
                <Text style={{fontSize: 18}}>
                  The OTP has been sent to your number
                </Text>
                <OTPInputView
                  style={{width: '100%', height: 150}}
                  pinCount={6}
                  autoFocusOnLoad
                  codeInputFieldStyle={styles.underlineStyleBase}
                  codeInputHighlightStyle={styles.underlineStyleHighLighted}
                  onCodeFilled={code => handleOtp(code)}
                />
              </View>
              <Text
                style={{
                  paddingTop: 20,
                  fontWeight: 'bold',
                  fontSize: 19,
                  textAlign: 'right',
                  paddingRight: 25,
                  color: 'grey',
                }}>
                RESEND(48S)
              </Text>
            </>
          )}
        </ModalContent>
      </Modal.BottomModal>

      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, paddingLeft: 60}}>
            <Image
              source={require('../assets/danain-text.png')}
              style={styles.image}
            />
          </View>
          <View style={{width: 60}}>
            {input.length >= 10 ? (
              isLoading ? (
                <ActivityIndicator
                  animating={true}
                  color="white"
                  size="small"
                  style={{
                    paddingTop: 20,
                    paddingRight: 25,
                    justifyContent: 'center',
                  }}
                />
              ) : (
                <TouchableOpacity onPress={() => handleCheck()}>
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
              )
            ) : (
              <Text
                style={{
                  fontSize: 18,
                  color: '#84c8f9',
                  paddingTop: 20,
                  textAlign: 'left',
                }}>
                Next
              </Text>
            )}
          </View>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>
            Enter your phone nmber to sign in or create a new account.
          </Text>
        </View>

        <View style={styles.containerInd}>
          <Text style={styles.textInd}>+62</Text>
          <TextInput
            style={styles.textInput}
            maxLength={16}
            placeholder="Phone Number"
            placeholderTextColor="#84c8f9"
            underlineColorAndroid="transparent"
            keyboardType={'numeric'}
            autoFocus={true}
            onChangeText={Auth => setInput(Auth)}
          />
        </View>

        <View style={styles.containerBorder}></View>

        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>DANAIN also connected with</Text>
        </View>

        <View style={styles.containerIcon}>
          <Image
            source={require('../assets/bl-icon.png')}
            style={styles.iconCon}
          />
          <Image
            source={require('../assets/laz-icon.png')}
            style={styles.iconCon}
          />
          <Image
            source={require('../assets/tix-icon.png')}
            style={styles.iconCon}
          />
          <Image
            source={require('../assets/many-icon.png')}
            style={styles.iconCon}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#118eea',
  },
  image: {
    width: 130,
    height: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
  containerText: {
    marginHorizontal: 20,
    alignSelf: 'center',
    marginTop: 45,
  },
  containerTitle: {
    paddingTop: 40,
    alignItems: 'center',
  },
  containerIcon: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerInd: {
    marginTop: 50,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  containerBorder: {
    alignSelf: 'center',
    width: 40,
    height: 2,
    backgroundColor: '#84c8f9',
  },
  text: {
    color: '#FFF',
  },
  textTitle: {
    color: '#FFF',
    fontSize: 15,
  },
  textInd: {
    fontSize: 25,
    color: '#FFF',
    opacity: 0.5,
    paddingTop: 10,
  },
  textInput: {
    fontSize: 25,
    paddingLeft: 15,
    color: '#FFF',
    fontWeight: '100',
    paddingHorizontal: 15,
  },
  iconCon: {
    width: 40,
    height: 40,
  },
  borderStyleHighLighted: {
    borderColor: '#FFF',
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    backgroundColor: '#F7F7F7',
    borderColor: '#FFF',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  underlineStyleHighLighted: {
    borderColor: '#FFF',
  },
});

export default AuthScreen;

