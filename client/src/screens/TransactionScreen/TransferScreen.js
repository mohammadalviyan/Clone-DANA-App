import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';

const TransferScreen = (props) => {
    return (
      <View>
        <View
          style={{
            backgroundColor: '#118eea',
            height: 53,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '38%',
                paddingHorizontal: 15,
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('TabScreen')}>
                <Image
                  style={{width: 13, height: 13}}
                  source={require('../../assets/arrow-left.png')}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{color: 'white', fontSize: 19}}> Kirim Danain</Text>
            </View>
          </View>
        </View>

        <ScrollView>
          {/* COMPONENT TEXT */}
          <View
            style={{
              marginTop: 20,
              marginHorizontal: 15,
              width: 190,
              marginBottom: 10,
            }}>
            <Text style={{fontSize: 27}}>Siapa yang ingin Anda kirim</Text>
            <Text style={{paddingTop: 10, color: '#adacac'}}>
              Silahkan memilih penerima
            </Text>
          </View>
          <Image
            style={{width: 415, height: 124}}
            source={require('../../assets/kirimsiapa-card.png')}
          />
          <View style={{marginHorizontal: 15, marginTop: 5}}>
            <TextInput
              placeholder="Ketik nomor telepon atau nama"
              keyboardType={'numeric'}
              maxLength={16}
              autoFocus={true}
              style={{
                height: 37,
                borderColor: '#e3e3e3',
                borderWidth: 1,
                borderRadius: 4,
                paddingHorizontal: 15,
              }}
            />
          </View>

          {/* COMPONENT BANK */}
          <View style={{borderBottomWidth: 0.5, borderColor: '#b7b7b7'}}>
            <View
              style={{marginHorizontal: 15, marginTop: 15, marginBottom: 5}}>
              <Text style={{color: '#b7b7b7', fontSize: 12}}>
                BANK TERSIMPAN
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderColor: '#b7b7b7',
              justifyContent: 'center',
              height: 60,
            }}>
            <View style={{marginHorizontal: 15}}>
              <View
                style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={{width: 25, height: 25}}
                    source={require('../../assets/plus-icon.png')}
                  />
                  <Text
                    style={{
                      paddingLeft: 10,
                      color: '#118eea',
                      fontWeight: 'bold',
                    }}>
                    Kirim ke Rekening Bank
                  </Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Image
                    style={{width: 13, height: 13}}
                    source={require('../../assets/arrow-grey.png')}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* COMPONENT NOMOE TELEPON */}
          <View style={{borderBottomWidth: 0.5, borderColor: '#b7b7b7'}}>
            <View
              style={{marginHorizontal: 15, marginTop: 15, marginBottom: 5}}>
              <Text style={{color: '#b7b7b7', fontSize: 12}}>SEMUA KONTAK</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderColor: '#b7b7b7',
              justifyContent: 'center',
              height: 60,
            }}>
            <View style={{marginHorizontal: 15}}>
              <View
                style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={{width: 25, height: 25}}
                    source={require('../../assets/plus-icon.png')}
                  />
                  <Text
                    style={{
                      paddingLeft: 10,
                      color: '#118eea',
                      fontWeight: 'bold',
                    }}>
                    Kirim ke Nomor Telepon
                  </Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Image
                    style={{width: 13, height: 13}}
                    source={require('../../assets/arrow-grey.png')}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{marginHorizontal: 15, marginTop:10}}>
            <Image
              style={{width: 373, height: 577}}
              source={require('../../assets/kontak-card.png')}
            />
          </View>
        </ScrollView>
      </View>
    );
};

export default TransferScreen;