/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import ProfileScreen from './src/screens/PofileScreen'
import contactData from './src/mocks/profile.json'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#0E8EE7"/>
      <View>
        <ProfileScreen {...contactData}/>
      </View>
    </>
  );
};



export default App;
