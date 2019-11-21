import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';

import MainNavigation from './src/navigations/MainNavigation';
import PromoScreen from './src/screens/PromoScreen';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor="#118eea" barStyle="light-content" />
        <MainNavigation />
        {/* <PromoScreen/> */}

      </Provider>
      
    </>
  );
};

export default App;




