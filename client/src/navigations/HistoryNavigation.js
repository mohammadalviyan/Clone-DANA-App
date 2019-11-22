import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import ProgressScreen from '../screens/History/ProgressScreen';
import CompleteScreen from '../screens/History/CompleteScreen';

const TabScreen = createMaterialTopTabNavigator(
  {
    Progress: {screen: ProgressScreen},
    Completed: {screen: CompleteScreen},
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#118eea',
      inactiveTintColor: '#b8b8b8',
      style: {
        backgroundColor: '#eaeaea',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#118eea',
        borderBottomWidth: 2,
      },
    },
  },
);

const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      header: null,
    },
  },
});
export default createAppContainer(App);

