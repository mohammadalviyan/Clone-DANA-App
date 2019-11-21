import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';

import MainNavigation from './src/navigations/MainNavigation'
import {Provider} from 'react-redux';
import store from './src/Redux/Store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor="#118eea" barStyle="light-content" />
        <MainNavigation />
      </Provider>
      
    </>
  );
};

export default App;




