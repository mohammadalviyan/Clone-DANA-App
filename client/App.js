import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
// import ProfileScreen from './src/screens/PofileScreen'
// import PromoScreen from './src/screens/PromoScreen'
// import contactData from './src/mocks/profile.json'
import MainNavigation from './src/navigations/MainNavigation'

import {Provider} from 'react-redux';
import {store, persistor} from './src/Redux/Store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <>
      <Provider store={store}>
          <StatusBar backgroundColor="#118eea" barStyle="light-content" />
          <MainNavigation />
      </Provider>
      
      {/* <StatusBar barStyle="dark-content" backgroundColor="#0E8EE7"/>
      <View>
        <ProfileScreen {...contactData}/>
        <PromoScreen />
      </View> */}
    </>
  );
};

export default App;
