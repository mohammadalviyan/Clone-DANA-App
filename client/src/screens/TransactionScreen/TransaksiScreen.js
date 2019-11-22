import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

const TransaksiScreen = (props) => {
    
  const [customer, setCustomer] = useState('');
  const amount = 6400

console.log(customer)
    return (
      <View style={{backgroundColor: '#f5f5f5', flex: 1}}>
        {/* COMPONENT HEADER */}
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
              Isi Ulang
            </Text>
          </View>
        </View>

        {/* COMPONENT BANNER */}
        <View>
          <Image
            style={{width: 420, height: 90}}
            source={require('../../assets/promo-icon/promo2.png')}
          />
        </View>

        <View style={{marginHorizontal: 15, height: 80, marginBottom: 35}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Nomor HP</Text>
            <Text style={{marginRight: 50, color: '#118eea'}}>
              No. Pasca Bayar ?
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <View style={{flex: 1, marginRight: 20}}>
              <TextInput
                onChangeText={Customer =>
                  setCustomer(Customer)
                }
                style={{
                  height: 40,
                  borderColor: '#e5e5e5',
                  backgroundColor: '#f8f8f8',
                  borderRadius: 5,
                  borderWidth: 1,
                }}
                keyboardType={'numeric'}
              />
            </View>
            <Image
              style={{width: 25, height: 25}}
              source={require('../../assets/saldo-icon/bank-icon.png')}
            />
          </View>
        </View>

        {/* COMPONENT PULSA */}
        <View style={{backgroundColor: '#FFF', flex: 1}}>
          <View style={{marginHorizontal: 15, marginVertical: 6}}>
            <Text>Pulsa</Text>
          </View>
          {/* COMPONENT CARD */}
          <View style={{flexDirection: 'row', marginBottom: 15}}>
            <View
              style={{
                width: '44%',
                paddingLeft: 15,
                justifyContent: 'center',
                marginLeft: 15,
                height: 80,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: '#eaeaea',
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('PulsaScreen',{customer, amount})}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 27, color: '#393939'}}>
                  5rb
                </Text>
                <Text style={{color: '#118eea'}}>Harga Rp. 6.400</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: '44%',
                paddingLeft: 15,
                justifyContent: 'center',
                marginLeft: 20,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: '#eaeaea',
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 27, color: '#393939'}}>
                10rb
              </Text>
              <Text style={{color: '#118eea'}}>Harga Rp. 11.500</Text>
            </View>
          </View>
          {/* COMPONENT CARD */}
          <View style={{flexDirection: 'row', marginBottom: 15}}>
            <View
              style={{
                width: '44%',
                paddingLeft: 15,
                justifyContent: 'center',
                marginLeft: 15,
                height: 80,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: '#eaeaea',
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 27, color: '#393939'}}>
                20rb
              </Text>
              <Text style={{color: '#118eea'}}>Harga Rp. 20.000</Text>
            </View>
            <View
              style={{
                width: '44%',
                paddingLeft: 15,
                justifyContent: 'center',
                marginLeft: 20,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: '#eaeaea',
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 27, color: '#393939'}}>
                25rb
              </Text>
              <Text style={{color: '#118eea'}}>Harga Rp. 25.000</Text>
            </View>
          </View>
          {/* COMPONENT CARD */}
          <View style={{flexDirection: 'row', marginBottom: 15}}>
            <View
              style={{
                width: '44%',
                paddingLeft: 15,
                justifyContent: 'center',
                marginLeft: 15,
                height: 80,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: '#eaeaea',
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 27, color: '#393939'}}>
                50rb
              </Text>
              <Text style={{color: '#118eea'}}>Harga Rp. 50.000</Text>
            </View>
            <View
              style={{
                width: '44%',
                paddingLeft: 15,
                justifyContent: 'center',
                marginLeft: 20,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: '#eaeaea',
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 27, color: '#393939'}}>
                80rb
              </Text>
              <Text style={{color: '#118eea'}}>Harga Rp. 75.000</Text>
            </View>
          </View>
          {/* COMPONENT CARD */}
          <View style={{flexDirection: 'row', marginBottom: 15}}>
            <View
              style={{
                width: '44%',
                paddingLeft: 15,
                justifyContent: 'center',
                marginLeft: 15,
                height: 80,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: '#eaeaea',
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 27, color: '#393939'}}>
                90rb
              </Text>
              <Text style={{color: '#118eea'}}>Harga Rp. 85.000</Text>
            </View>
            <View
              style={{
                width: '44%',
                paddingLeft: 15,
                justifyContent: 'center',
                marginLeft: 20,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: '#eaeaea',
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 27, color: '#393939'}}>
                100rb
              </Text>
              <Text style={{color: '#118eea'}}>Harga Rp. 90.500</Text>
            </View>
          </View>
        </View>
      </View>
    );
};

export default TransaksiScreen;