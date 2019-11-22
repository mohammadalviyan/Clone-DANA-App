import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native';
import {useSelector} from 'react-redux';
import {topUp} from '../../Redux/Actions/topUp';
import {useDispatch} from 'react-redux';

const MethodScreen = (props) => {
    const [isLoading, setIsloading] = useState(false)
    const {resultLogin} = useSelector(state => state.auth);
    const [input, setInput] = useState({id_user: resultLogin.id, amount:0, id_services:2, description:'', payment_method:'BANK' });
    const dispatch = useDispatch();


    const handleSubmit = () => {
        setIsloading(true)
        dispatch(topUp(input))
          .then(response => {
            if (response.value.data.status === 'success') {
              setIsloading(false);
              setTimeout(() => {
                props.navigation.navigate('TabScreen');
              }, 5000);
            } else {
              ToastAndroid.show(
                response.value.data.message,
                ToastAndroid.SHORT,
              );
            }
          })
          .catch(error => alert(error));
    } 

    return (
    <View style={{ backgroundColor: '#FFF', flex: 1 }}>
        {/* COMPONENT HEADER */}
        <View style={{ backgroundColor: '#118eea', justifyContent: 'center', height: 50 }}>
            <View style={{ marginHorizontal: 15, alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('SaldoScreen')}>
                    <Image style={{ width: 13, height: 13 }} source={require('../../assets/arrow-left.png')} />
                </TouchableOpacity>    
                <Text style={{ color: 'white', fontSize: 19, paddingLeft: 25 }}>BCA</Text>
            </View>
        </View>

        {/* COMPONENT METODE */}
        <View style={{ borderBottomWidth: 2, borderColor:'#ededed'}}>
            <View style={{marginHorizontal:15, justifyContent:'center'}}>
                <View style={{paddingTop:16}}>
                    <Text style={{fontSize:20}}>Metode Isi Saldo</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 70}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View>
                            <Image style={{ width: 24, height: 24 }} source={require('../../assets/saldo-icon/bca-icon.png')} />
                        </View>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:19}}>Transfer Bank (BCA)</Text>
                            <Text style={{ fontSize: 19 }}>Bca</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <View>
                            <Text style={{ fontSize: 18, marginRight: 8, color:'#3dacfb'}}>Ganti</Text>
                        </View>
                        <View>
                            <Image style={{ width: 12, height: 12}} source={require('../../assets/saldo-icon/arrow-grey.png')} />
                        </View>
                    </View>
                </View>
            </View>

        </View>
        {/* COMPONENT METODE */}
        <View style={{backgroundColor:'#FAFAFA', height:283, justifyContent:'center'}}>
            <View style={{ alignItems: 'center', borderBottomWidth: 1, marginHorizontal: 15, borderColor:'#e9e8e8'}}>
                <Text style={{ fontSize: 20, color:'#a6a6a6'}}>Nomor Akun Virtual BCA</Text>
                <Text style={{ fontSize: 28, color:'#ff9000' }}>3901 0857 2563 9268</Text>
                <View style={{marginVertical:20}}>
                    {isLoading === true ? (
                        <ActivityIndicator
                            animating={true}
                            color="blue"
                            size="small"
                            style={{justifyContent: 'center' }}
                        />
                    ) : (
                        <TouchableOpacity  onPress={() => handleSubmit()} style={{ justifyContent:'center', alignItems:'center', backgroundColor: 'white', borderWidth: 1, borderRadius: 4, borderColor:'#4d99c7', height: 38, width:170}}>
                            <Text style={{ color:'#4d99c7', fontSize:18}}>SALIN KODE</Text>
                        </TouchableOpacity>
                    )}
                </View>
                    <Text style={{fontSize:18, color:'#676767', marginBottom:15}}>Nama Akun {resultLogin.name}</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 10}}>
                <Text style={{color:'#bfbfbf'}}>Saldo maksimum Anda adalah Rp.2.000.000.</Text>
                <Text style={{ color: '#bfbfbf' }}>Maksimum nilai penambahan saldo adalah Rp.1.996.000</Text>
                <Text style={{ color: '#bfbfbf' }}>Sisa akumulatif saldo Anda bulan ini untuk isi saldo adalah</Text>
                <Text style={{ color: '#bfbfbf' }}> Rp.20.000.</Text>
            </View>
        </View>
        <View style={{ borderBottomWidth: 1, borderColor: '#f4f4f4',height:30, justifyContent:'center'}}>
            <Text style={{marginHorizontal:15, fontSize:16}}>CARA TRANSFER</Text>
        </View>

        <View style={{ borderBottomWidth: 1, borderColor: '#f4f4f4', height: 50, justifyContent: 'space-between', alignItems:'center', flexDirection:'row' }}>
            <Text style={{ marginHorizontal: 15, fontSize: 16 }}>ATM BCA</Text>
            <Image style={{ width: 12, height: 12, marginHorizontal: 15 }} source={require('../../assets/saldo-icon/arrow-grey.png')} />
        </View>

        <View style={{ borderBottomWidth: 1, borderColor: '#f4f4f4', height: 50, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ marginHorizontal: 15, fontSize: 16 }}>KLIK BCA</Text>
            <Image style={{ width: 12, height: 12, marginHorizontal: 15 }} source={require('../../assets/saldo-icon/arrow-grey.png')} />
        </View>

        <View style={{ borderBottomWidth: 1, borderColor: '#f4f4f4', height: 50, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ marginHorizontal: 15, fontSize: 16 }}>m-BCA (BCA MOBILE)</Text>
            <Image style={{ width: 12, height: 12, marginHorizontal: 15 }} source={require('../../assets/saldo-icon/arrow-grey.png')} />
        </View>

        <View style={{ borderBottomWidth: 1, borderColor: '#f4f4f4', height: 50, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ marginHorizontal: 15, fontSize: 16 }}>m-BCA (STK - SIM Tool Kit)</Text>
            <Image style={{ width: 12, height: 12, marginHorizontal: 15 }} source={require('../../assets/saldo-icon/arrow-grey.png')} />
        </View>

        <Text style={{textAlign:'center', marginTop: 10, color:'#bfbfbf'}}>Anda juga dapat mengakses halaman ini dari menu Transaksi</Text>
    </View>
)}

export default MethodScreen;