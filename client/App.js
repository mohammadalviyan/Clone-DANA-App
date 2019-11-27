import React from 'react';
import {
  View,
  StatusBar,
  
} from 'react-native';

import MainNavigation from './src/navigations/MainNavigation';
import PromoDetailScreen from './src/screens/PromoDetailScreen';
import PromoScreen from './src/screens/PromoScreen';
import EditEmailScreen from './src/screens/SayaScreen/Setting/EditEmailScreen'
import {Provider} from 'react-redux';
import store from './src/Redux/Store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor="#118eea" barStyle="light-content" />
        {/* <EditEmailScreen/> */}
        <MainNavigation />
        {/* <PromoScreen/> */}
        {/* <PromoDetailScreen/> */}


      </Provider>
      
    </>
  );
};

export default App;




