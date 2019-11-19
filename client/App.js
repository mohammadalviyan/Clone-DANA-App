import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import ProfileScreen from './src/screens/PofileScreen/ProfileScreen'
import PromoScreen from './src/screens/PromoScreen'
import contactData from './src/mocks/profile.json'
import MainNavigation from './src/navigations/MainNavigation'
import VoucherScreen from './src/screens/VoucherScreen'

const App = () => {
  return (
    <>
      {/* <StatusBar backgroundColor="#118eea" barStyle="light-content" />
      <MainNavigation /> */}
      <StatusBar barStyle="dark-content" backgroundColor="#0E8EE7"/>
      <View>
        {/* <ProfileScreen {...contactData}/> */}
        <PromoScreen />
        {/* <VoucherScreen/> */}
      </View>
    </>
  );
};

export default App;




