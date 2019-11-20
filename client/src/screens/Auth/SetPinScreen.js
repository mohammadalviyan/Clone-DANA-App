import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
 } from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../Redux/Actions/auth';

import PinView from 'react-native-pin-view';

const SetPinScreen = (props) => {

    const {navigation} = props
    const [input, setInput] = useState({
      phone: navigation.state.params.phone.phone,
      refferal: navigation.state.params.refferal.refferal,
      name: navigation.state.params.name.name,
      pin: ''
    });

    const [pin, setPin] = useState({pin: ''});
    const dispatch = useDispatch();

    // console.log('PIN', input);

    const handleRegister = () => {
      dispatch(register(input, pin))
        .then(response => { console.log(response)
          if (response.value.status === 200) {
            setTimeout(() => {
              props.navigation.navigate('MainScreen');
            }, 500);
          } 
        })
        .catch(error => alert(error));
    };

    return (
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
              onPress={() => handleRegister()}>
              <Text style={styles.textRegister}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerText}>
          <Text style={styles.text}>(Step 2/3)</Text>
          <Text style={styles.textSet}>
            Create PIN to secure your DANAIN Account
          </Text>
        </View>
        <View style={{paddingTop: 60}}>
          <PinView
            onComplete={Pin => setInput({...input, pin: Pin})}
            pinLength={6}
            keyboardContainerStyle={{marginTop: 50}}
            buttonDeletePosition={'right'}
            inputViewStyle={{width: 10, height: 10, margin: 20}}
            buttonBgColor={'#76c1f8'}
            inputActiveBgColor={'#FFF'}
          />
        </View>
      </View>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#118eea',
        flex: 1
    },
    containerText: {
        marginHorizontal: 40,
        alignItems: 'center',
        marginTop: 45,
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
    image: {
        width: 130,
        height: 20,
        marginTop: 20,
        alignSelf: 'center',
    },
    text: {
        color: '#FFF',
    },
    textSet: {
        color: '#FFF',
        paddingTop: 15,
        textAlign: 'center'
    },

})

export default SetPinScreen;