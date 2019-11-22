import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'

//Content
import Beranda from './BerandaScreen';
import Riwayat from './RiwayatScreen';
import Pay from './PayScreen';
import Pocket from './PocketScreen';
import Saya from '../SayaScreen'
import ButtonPay from './ButtonPay';


const BottomNavigator = createBottomTabNavigator({
    Beranda: {
        screen: Beranda,
        navigationOptions: {
            tabBarLabel: 'Beranda',
        }
    },
    Riwayat: {
        screen: Riwayat,
        navigationOptions: {
            tabBarLabel: 'Riwayat',
        }
    },
    Pay: {
        screen: () => null, // Empty screen
        navigationOptions: () => ({
            tabBarIcon: <ButtonPay />, // Plus button component
             tabBarOptions: {
                activeTintColor: 'white',
                tabStyle: {
                    paddingVertical: 7
                },
                style: {
                    backgroundColor: '#fafafa',
                    height: 62,
                    borderTopColor: '#e6e6e6',
                },
            },
        })
    },
    Pocket: {
        screen: Pocket,
        navigationOptions: {
            tabBarLabel: 'Pocket',
        }
    },
    // Saya: {
    //     screen: Saya,
    //     navigationOptions: {
    //         tabBarLabel: 'Profile',
            
    //     }
    // },
    Saya: {
        screen: Saya,
        navigationOptions: {
            tabBarLabel: 'Profile',
            
        }
    },
}, {
    //router config
    initialRouteName: 'Beranda',
    Beranda: ['Beranda', 'Riwayat', 'Pay', 'Pocket', 'Saya'],
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state;
            let focus = { width: 28, height: 28 };
            let sourceImage;

            if (routeName === 'Beranda') {
                sourceImage = require('../../assets/icons-navi/beranda-icon.png');
            } else if (routeName === 'Riwayat') {
                sourceImage = require('../../assets/icons-navi/riwayat-icon.png');
            } else if (routeName === 'Saya') {
                sourceImage = require('../../assets/icons-navi/saya-icon.png');
            } else {
                sourceImage = require('../../assets/icons-navi/pocket-icon.png');
            }

            return <Image style={focus} source={sourceImage} />;
        },
        tabBarOptions: {
            activeTintColor: '#7a7a7a',
            tabStyle: {
                paddingVertical: 7
            },
            style: {
                backgroundColor: '#fafafa',
                height: 62,
                borderTopColor: '#e6e6e6',
            },
        },
    }),
})

const TabNavigation = createAppContainer(BottomNavigator);
export default TabNavigation;