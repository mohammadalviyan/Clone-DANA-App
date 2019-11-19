import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import LoadingScreen from '../screens/LoadingScreen';
import SwiperScreen from '../screens/SwiperScreen';
import AuthScreen from '../screens/AuthScreen';
import ReferalScreen from '../screens/Auth/ReferalScreen';
import SetProfileScreen from '../screens/Auth/SetProfileScreen';
import SetPinScreen from '../screens/Auth/SetPinScreen';

const StackLoading = createStackNavigator(
  {
    LoadingScreen,
    SwiperScreen,
  },
  {
    initialRouteName: 'LoadingScreen',
    headerMode: 'none',
  },
);

const StackAuth = createStackNavigator(
  {
    AuthScreen,
    ReferalScreen,
    SetProfileScreen,
    SetPinScreen,
  },
  {
    initialRouteName: 'AuthScreen',
    headerMode: 'none',
  },
);

const Router = createSwitchNavigator(
  {
    StackLoading,
    StackAuth,
  },
  {
    initialRouteName: 'StackAuth',
    headerMode: 'none',
  },
);

export default createAppContainer(Router);