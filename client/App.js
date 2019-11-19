import React from 'react';
import {
  StatusBar,
} from 'react-native';

import MainNavigation from './src/navigations/MainNavigation'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#118eea" barStyle="light-content" />
      <MainNavigation />
    </>
  );
};

export default App;
