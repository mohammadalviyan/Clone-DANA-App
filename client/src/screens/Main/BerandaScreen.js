import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'
import { Text, View, Image, StyleSheet, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {mount} from '../../Redux/Actions/mount';
import {useDispatch} from 'react-redux';

const BerandaScreen = (props) => {

  const [data, setData] = useState()
  const {resultLogin} = useSelector((state) => state.auth)
  const {resultMount} = useSelector(state => state.mount);
  const dispatch = useDispatch();

  const getID = async() => {
    dispatch(mount(resultLogin.id))
  }

  useEffect(() => {
    getID()
  },[])

    const deleteToken = () => {
      try {
        AsyncStorage.removeItem('user');
        props.navigation.navigate('LoadingScreen');
      } catch (err) {
        console.log(`The error is: ${err}`);
      }
    };

    return (
      <View style={styles.container}>
        {/* COMPONENT HEADER */}
        <View style={styles.containerHeader}>
          <View style={styles.containerTop}>
            <View style={styles.containerFlexTop}>
              <Image
                style={styles.iconDana}
                source={require('../../assets/top-icon/iconapp-icon-01.png')}
              />
              <Text style={styles.textRp}>Rp</Text>
                {resultMount === null ? (
                  <Text style={styles.textNominal}>
                    0
                  </Text>
                ) : (
                  <Text style={styles.textNominal}>
                    {resultMount}
                  </Text>
                )}
            </View>
            <View>
              <TouchableOpacity onPress={() => getID()}>
                <Image
                  style={styles.iconChart}
                  source={require('../../assets/top-icon/chart-icon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerIconTop}>
            <View style={styles.containerImageTop}>
              <Image
                style={styles.iconTop}
                source={require('../../assets/top-icon/pindai-icon.png')}
              />
              <Text style={styles.textIcon}>Pindai</Text>
            </View>

            <View style={styles.containerImageTop}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('SaldoScreen')}>
                <Image
                  style={styles.iconTop}
                  source={require('../../assets/top-icon/saldo-icon.png')}
                />
              </TouchableOpacity>
              <Text style={styles.textIcon}>Isi Saldo</Text>
            </View>

            <View style={styles.containerImageTop}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('TransferScreen')}>
                <Image
                  style={styles.iconTop}
                  source={require('../../assets/top-icon/kirim-icon.png')}
                />
              </TouchableOpacity>
              <Text style={styles.textIcon}>Kirim</Text>
            </View>
            <View style={styles.containerImageTop}>
              <Image
                style={styles.iconTop}
                source={require('../../assets/top-icon/minta-icon.png')}
              />
              <Text style={styles.textIcon}>Minta</Text>
            </View>
          </View>
        </View>

        <ScrollView>
          {/* COMPONENT PULSA */}
          <View style={styles.containerPulsa}>
            <View style={styles.topCard}>
              <View style={styles.containerFlexPulsa}>
                <View style={styles.containerImagePulsa}>
                  <Image
                    style={styles.imagePulsa}
                    source={require('../../assets/mid-icon/pulsa-icon2.png')}
                  />
                </View>
                <View style={styles.containerTextPulsa}>
                  <Text style={styles.textPulsa}>Pulsa</Text>
                  <Text style={styles.textBeliPulsa}>Beli Pulsa Yuk!</Text>
                </View>
                <View style={styles.containerButtonBeli}>
                  <TouchableHighlight
                    onPress={() => props.navigation.navigate('TransaksiScreen')}
                    style={styles.buttonBeli}>
                    <Text style={styles.textBeli}>BELI</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottomCard}>
            <View style={styles.containerImageService}>
              <View style={styles.containerImageTop}>
                <Image
                  style={styles.iconMid}
                  source={require('../../assets/mid-icon/games-icon.png')}
                />
                <Text style={styles.textMid}>Games</Text>
              </View>

              <View style={styles.containerImageTop}>
                <Image
                  style={styles.iconMid}
                  source={require('../../assets/mid-icon/listrik-icon.png')}
                />
                <Text style={styles.textMid}>Listrik</Text>
              </View>

              <View style={styles.containerImageTop}>
                <Image
                  style={styles.iconMid}
                  source={require('../../assets/mid-icon/bpjs-icon.png')}
                />
                <Text style={styles.textMid}>BPJS</Text>
              </View>
              <View style={styles.containerImageTop}>
                <Image
                  style={styles.iconMid}
                  source={require('../../assets/mid-icon/telepon-icon.png')}
                />
                <Text style={styles.textMid}>Telepon</Text>
              </View>
            </View>
            <View style={styles.containerImageService2}>
              <View style={styles.containerImageTop}>
                <Image
                  style={styles.iconMid}
                  source={require('../../assets/mid-icon/pascabayar-icon.png')}
                />
                <Text style={styles.textMid}>Pascabayar</Text>
              </View>

              <View style={styles.containerImageTop}>
                <Image
                  style={styles.iconMid}
                  source={require('../../assets/mid-icon/tariksaldo-icon.png')}
                />
                <Text style={styles.textMid}>Tarik Saldo</Text>
              </View>

              <View style={styles.containerImageTop}>
                <Image
                  style={styles.iconMid}
                  source={require('../../assets/mid-icon/danakaget-icon.png')}
                />
                <Text style={styles.textMid}>DANAIN Kaget</Text>
              </View>
              <View style={styles.containerImageTop}>
                <Image
                  style={styles.iconMid}
                  source={require('../../assets/mid-icon/lihatsemua-icon.png')}
                />
                <Text style={styles.textMid}>Lihat Semua</Text>
              </View>
            </View>
          </View>

          {/* COMPONENT PROMO BANNER */}
          <View style={styles.cardPromo}>
            <View style={styles.containerPromo}>
              <View style={styles.containerTextPromo}>
                <Text style={styles.textAdaPromo}>Ada Promo Apa?</Text>
                <Text style={styles.textHidupLebih}>
                  Hidup lebih indah dengan promo!
                </Text>
              </View>
              <View>
                <TouchableOpacity style={styles.buttonLihatSemua}>
                  <Text style={styles.textLihatSemua}>LIHAT SEMUA</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* COMPONENT IMAGEBANNER */}
          <View style={styles.bannerPromo}>
            <Image
              style={styles.imagePromo}
              source={require('../../assets/promo-icon/promo1.png')}
            />
          </View>

          {/* COMPONENT HOTBANNER */}
          <View style={styles.containerHotPromo}>
            <Image
              style={styles.imageHotPromo}
              source={require('../../assets/promo-icon/promo4.png')}
            />
          </View>

          {/* COMPONENT NEARBY */}
          <View style={styles.cardNearby}>
            <View style={styles.containerPromo}>
              <View style={styles.containerTextPromo}>
                <Text style={styles.textNearby}>Nearby Me</Text>
                <Text style={styles.textHidupLebih}>
                  Temukan merchant DANAIN didekat kamu!
                </Text>
              </View>
              <View>
                <TouchableOpacity style={styles.buttonLihatSemua}>
                  <Text style={styles.textLihatSemua}>LIHAT SEMUA</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.containerNearby}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View>
                <Image
                  style={styles.imageNear}
                  source={require('../../assets/near-icon/yoshi-icon.png')}
                />
                <Text style={styles.textNear}>0,3 Km</Text>
              </View>
              <View>
                <Image
                  style={styles.imageNear}
                  source={require('../../assets/near-icon/hokben-icon.png')}
                />
                <Text style={styles.textNear}>0,4 Km</Text>
              </View>
              <View>
                <Image
                  style={styles.imageNear}
                  source={require('../../assets/near-icon/indo-icon.png')}
                />
                <Text style={styles.textNear}>1,2 Km</Text>
              </View>
              <View>
                <Image
                  style={styles.imageNear}
                  source={require('../../assets/near-icon/kfc-icon.png')}
                />
                <Text style={styles.textNear}>1,0 Km</Text>
              </View>
              <View>
                <Image
                  style={styles.imageNear}
                  source={require('../../assets/near-icon/danas-icon.png')}
                />
                <Text style={styles.textNear}>2,0 Km</Text>
              </View>
            </View>
          </View>

          <View style={{marginHorizontal: 15, paddingTop: 10}}>
            <Text style={{fontSize: 12, color: '#b6b6b6'}}>BERITA DANA</Text>
          </View>

          {/* COMPONENT NEWS */}
          <View
            style={{
              marginBottom: 3,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFF',
              height: 78,
              marginTop: 5,
              marginHorizontal: 15,
              borderRadius: 6,
              borderWidth: 1,
              borderColor: '#e3e3e3',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 15,
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <Image
                  style={{width: 57, height: 50}}
                  source={require('../../assets/news-icon/ajakteman-icon.png')}
                />
              </View>
              <View style={{width: 265}}>
                <Text style={{fontSize: 16, fontWeight: '900'}}>
                  Bayar Bluebird
                </Text>
                <Text style={{fontSize: 13}}>Gampang, ini caranya!</Text>
              </View>
              <View style={{width: 20}}>
                <Image
                  style={{width: 10, height: 10}}
                  source={require('../../assets/arrow.png')}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              marginBottom: 5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFF',
              height: 78,
              marginTop: 5,
              marginHorizontal: 15,
              borderRadius: 6,
              borderWidth: 1,
              borderColor: '#e3e3e3',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 15,
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <Image
                  style={{width: 57, height: 50}}
                  source={require('../../assets/news-icon/danaloyalty-icon.png')}
                />
              </View>
              <View style={{width: 265}}>
                <Text style={{fontSize: 16, fontWeight: '900'}}>
                  Dana Loyalty Card
                </Text>
                <Text style={{fontSize: 13}}>Ini cara bikinnya</Text>
              </View>
              <View style={{width: 20}}>
                <Image
                  style={{width: 10, height: 10}}
                  source={require('../../assets/arrow.png')}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              marginBottom: 5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFF',
              height: 78,
              marginTop: 5,
              marginHorizontal: 15,
              borderRadius: 6,
              borderWidth: 1,
              borderColor: '#e3e3e3',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 15,
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <Image
                  style={{width: 57, height: 50}}
                  source={require('../../assets/news-icon/lazada-icon.png')}
                />
              </View>
              <View style={{width: 265}}>
                <Text style={{fontSize: 16, fontWeight: '900'}}>
                  Danain di Lazada
                </Text>
                <Text style={{fontSize: 13}}>Parkir di Centre Park</Text>
              </View>
              <View style={{width: 20}}>
                <Image
                  style={{width: 10, height: 10}}
                  source={require('../../assets/arrow.png')}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
              height: 60,
            }}>
            <TouchableOpacity
              onPress={() => deleteToken()}
              style={{backgroundColor: '#118eea', justifyContent:'center', width: 120, height: 40, borderRadius:6}}>
              <Text style={{textAlign:'center', color:'#FFF'}}>LOGOUT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1
    },
    containerHeader: {
        height: 120,
        backgroundColor: '#118eea'
    },
    containerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 15,
        marginHorizontal: 15
    },
    containerFlexTop: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerIconTop: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    containerImageTop: {
        alignItems: 'center'
    },
    containerPulsa: {
        backgroundColor:'#118eea',
        height: 90
    },
    containerFlexPulsa: {
        flexDirection: 'row',
        height: 92,
        paddingBottom: 20
    },
    containerImagePulsa: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerTextPulsa: {
        width: 170,
        justifyContent: 'center'
    },
    containerButtonBeli: {
        width: 125,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2
    },
    containerImageService: {
        flexDirection: 'row',
        height: '55%'
    },
    containerImageService2: {
        flexDirection: 'row',
        flex: 1
    },
    containerPromo: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center'
    },
    containerTextPromo: {
        flex: 1
    },
    containerHotPromo: {
        marginTop: 12
    },
    containerArrow: {
        width: 30,
        height: 30,
        borderRadius: 20,
        position: 'absolute',
        top: '84%',
        right: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#118eea'
    },
    containerNearby: {
        height: 90,
        backgroundColor: '#eff8ff',
        marginHorizontal: 15,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6, borderColor: '#e3e3e3'
    },
    topCard: {
        backgroundColor: '#FFF',
        marginHorizontal: 15,
        height: 90,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#e3e3e3',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6    
    },
    bottomCard:{
        backgroundColor: '#FFF',
        marginHorizontal: 15,
        height: 184,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderColor: '#e3e3e3'
    },
    cardPromo: {
        backgroundColor: '#FFF',
        justifyContent: 'center',
        marginHorizontal: 15,
        marginTop: 15,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#e3e3e3',
        height: 55
    },
    cardNearby: {
        backgroundColor: '#FFF',
        justifyContent: 'center',
        marginHorizontal: 15,
        marginTop: 15,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#e3e3e3',
        height: 75
    },
    bannerPromo: {
        marginHorizontal: 15,
        height: 99,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#e3e3e3',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    iconDana: {
        width: 24,
        height: 24
    },
    iconChart: {
        width: 33,
        height: 33
    },
    iconTop: {
        width: 40,
        height: 40,
        marginHorizontal: 28,
        marginBottom: 3
    },
    iconMid: {
        width: 38,
        height: 38,
        marginHorizontal: 28,
        marginBottom: 10
    },
    imagePromo: {
        height: 97,
        width: 378,
        alignSelf: 'center',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    imagePulsa: {
        width: 32,
        height: 47
    },
    imageHotPromo: {
        height: 86,
        width: 378,
        alignSelf: 'center',
        borderRadius: 6
    },
    imageArrow:{
        width: 18,
        height: 18
    },
    imageNear: {
        marginTop: 13,
        marginHorizontal: 15,
        width: 43,
        height: 43,
        alignItems:'center'
    },
    textIcon: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 12
    },
    textMid: {
        color: '#313131',
        fontSize: 12
    },
    textRp: {
        marginLeft: 9,
        color: '#a2d8fb'
    },
    textNominal: {
        marginLeft: 9,
        fontWeight: 'bold',
        fontSize: 17,
        color: '#FFF'
    },
    textPulsa: {
        fontWeight: '900',
        fontSize: 16
    },
    textBeliPulsa: {
        fontSize: 12,
        color: '#fb8b01'
    },
    textBeli: {
        color: '#FFF',
        fontSize: 12
    },
    textAdaPromo: {
        fontWeight: 'bold'
    },
    textHidupLebih: {
        fontSize: 12,
        marginTop: 3,
        color: '#313131'
    },
    textLihatSemua: {
        color: '#118eea',
        fontSize: 12,
        fontWeight: 'bold'
    },
    textNearby: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 5
    },
    textNear: {
        fontSize: 12,
        color: '#313131',
        alignSelf:'center',
        paddingTop: 5
    },
    buttonBeli: {
        backgroundColor: '#118eea',
        width: 92,
        height: 37,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLihatSemua: {
        backgroundColor: '#FFF',
        width: 89,
        height: 35,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#118eea',
        justifyContent: 'center',
        alignItems: 'center'
    }
    
})

export default BerandaScreen;