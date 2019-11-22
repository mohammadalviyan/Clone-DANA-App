import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const PulsaScreen = (props) => {
    return (
      <View style={{backgroundColor: '#f5f5f5', flex: 1}}>
        <View style={{backgroundColor: '#118eea', height: 150}}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 15,
              paddingTop: 15,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('TransaksiScreen')}>
              <Image
                style={{width: 13, height: 13}}
                source={require('../../assets/arrow-left.png')}
              />
            </TouchableOpacity>
            <Text style={{color: '#FFF', fontSize: 20, paddingLeft: 19}}>
              {' '}
              Yuk Bayar!{' '}
            </Text>
          </View>

          {/* COMPONENT HEADER */}
          <View
            style={{
              marginHorizontal: 15,
              justifyContent: 'center',
              height: 80,
            }}>
            <Text style={{color: '#9fdeff'}}>Jumlah yang dibayarkan</Text>
            <Text style={{fontSize: 27, color: '#FFF'}}>Rp6.400</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 15,
            }}>
            <Text style={{color: '#FFF'}}>Dari DANAIN Pulsa</Text>
            <Text style={{color: '#FFF'}}>Rincian pesanan v</Text>
          </View>
        </View>

        {/* COMPONENT BAGAIMANA */}
        <ScrollView>
          <View
            style={{
              marginHorizontal: 15,
              flexDirection: 'row',
              marginTop: 15,
              justifyContent: 'space-between',
            }}>
            <View style={{width: 280}}>
              <Text style={{fontSize: 28}}>Bagaimana Anda mau membayar?</Text>
            </View>
            <Image
              style={{width: 27, height: 27}}
              source={require('../../assets/tanda-icon.png')}
            />
          </View>
          <View style={{paddingTop: 10, paddingLeft: 10}}>
            <Image
              style={{width: 170, height: 57}}
              source={require('../../assets/danaprot-icon.png')}
            />
          </View>

          {/* COMPONENT SALDO */}
          <View style={{marginTop: 20, marginHorizontal: 15}}>
            <Text style={{color: '#b5b5b5'}}>SALDO</Text>
            <View
              style={{
                backgroundColor: '#FFF',
                height: 60,
                flexDirection: 'row',
                borderRadius: 4,
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 15,
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 41, height: 41}}
                  source={require('../../assets/danablue-icon.png')}
                />

                <View style={{marginLeft: 15}}>
                  <Text style={{fontSize: 16}}>Saldo DANAIN (Rp.4000)</Text>
                  <Text style={{color: '#ea6661'}}>Saldo anda tidak cukup</Text>
                </View>
              </View>
              <View style={{justifyContent: 'center', marginRight: 15}}>
                <Image
                  style={{width: 13, height: 13}}
                  source={require('../../assets/arrow-grey.png')}
                />
              </View>
            </View>
          </View>

          <View style={{marginTop: 20, marginHorizontal: 15}}>
            <Text style={{color: '#b5b5b5'}}>EXPRESS PAY</Text>

            <View>
              <Image
                style={{width: 380, height: 132}}
                source={require('../../assets/express-card.png')}
              />
            </View>
          </View>

          <View style={{marginTop: 20, marginHorizontal: 15}}>
            <Text style={{color: '#b5b5b5'}}>
              KARTU YANG SAYA SIMPAN (DEBIT / KREDIT)
            </Text>

            <View>
              <Image
                style={{width: 380, height: 64}}
                source={require('../../assets/kartubaru-card.png')}
              />
            </View>
          </View>

          <View style={{marginTop: 20, marginHorizontal: 15}}>
            <Text style={{color: '#b5b5b5'}}>TRANSFER BANK (VA)</Text>

            <View>
              <Image
                style={{width: 380, height: 561}}
                source={require('../../assets/bankshow-card.png')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
};

export default PulsaScreen;