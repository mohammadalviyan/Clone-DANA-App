import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import HistoryNavigation from '../../navigations/HistoryNavigation';


const RiwayatScreen = (props) => {

    return (
      <>
        <View
          style={{
            backgroundColor: '#118eea',
            justifyContent: 'center',
            height: 50,
          }}>
          <View
            style={{
              marginHorizontal: 15,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('TabScreen')}>
              <Image
                style={{width: 13, height: 13}}
                source={require('../../assets/arrow-left.png')}
              />
            </TouchableOpacity>
            <Text style={{color: 'white', fontSize: 19, paddingLeft: 25}}>
              Transaksi
            </Text>
          </View>
        </View>
        <HistoryNavigation />
      </>
    );

};

export default RiwayatScreen