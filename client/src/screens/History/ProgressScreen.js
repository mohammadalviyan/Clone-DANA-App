import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

const ProgressScreen = (props) => {
    
    const {resultLogin} = useSelector(state => state.auth);

    const deleteToken = () => {
      try {
        AsyncStorage.removeItem('user');
        props.navigation.navigate('LoadingScreen');
      } catch (err) {
        console.log(`The error is: ${err}`);
      }
    };

    // console.log(resultLogin)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => deleteToken()}
          style={{backgroundColor: 'red', width: 100}}>
          <Text>ASD</Text>
        </TouchableOpacity>
      </View>
    );
};

export default ProgressScreen;