import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SaldoScreen = (props) => {
    return (
        <View style={{ backgroundColor:'#FFF', flex: 1}}>
            {/* COMPONENT HEADER */}
            <View style={{ backgroundColor: '#118eea', justifyContent: 'center', height: 50}}>
                <View style={{marginHorizontal: 15,alignItems:'center', flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('TabScreen')}>
                        <Image style={{width:13, height: 13}}source={require('../../assets/arrow-left.png')} />
                    </TouchableOpacity>
                    <Text style={{color: 'white', fontSize: 19, paddingLeft:25}}>Top Up</Text>
                </View>
            </View>

            {/* COMPONENT SCROLL */}
            <View style={{ marginHorizontal: 15, height: 30, justifyContent: 'center', backgroundColor:'#fafafa'}}>
                <Text style={{ color:'#6e6e6e'}}>PILIH METODE ISI SALDO</Text>
            </View>

            {/* DEBIT CARD */}
            <View style={{borderBottomWidth: 1, borderColor:'#e9e8e8', height: 121}}>
                <View style={{marginHorizontal:15, height: 58, alignItems:'center', flexDirection:'row'}}>
                    <View style={{ width: 50, alignItems:'center'}}>
                        <Image style={{ width: 28, height: 28 }} source={require('../../assets/saldo-icon/debit-icon.png')} />
                    </View>
                    <View style={{flex: 1,}}>
                        <Text style={{fontSize:17}}>Kartu Debit</Text>
                    </View>
                </View>

                {/* NEW CARD */}
                <View style={{ borderTopWidth: 1, borderColor: '#e9e8e8', marginLeft: 70, height: 60,flexDirection:'row',alignItems:'center', justifyContent: 'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                        <Image style={{ width: 20, height: 20 }} source={require('../../assets/saldo-icon/add-icon.png')} />
                        <Text style={{marginLeft: 15}}>Kartu Baru</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image style={{ width: 30, height: 11 }} source={require('../../assets/saldo-icon/visa-icon.png')} />
                        <Image style={{ marginLeft:7, width: 24, height: 15 }} source={require('../../assets/saldo-icon/master-icon.png')} />
                        <Image style={{ marginHorizontal: 17, width: 12, height: 12 }} source={require('../../assets/saldo-icon/arrow-grey.png')} />


                    </View>
                </View>
            </View>

            {/* BANK TRANSFER */}
            <View style={{ borderBottomWidth: 1, borderColor:'#e9e8e8', height: 361 }}>
                <View style={{ marginHorizontal: 15, height: 60, alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ width: 50, alignItems: 'center' }}>
                        <Image style={{ width: 28, height: 28 }} source={require('../../assets/saldo-icon/bank-icon.png')} />
                    </View>
                    <View style={{ flex: 1,}}>
                        <Text style={{ fontSize: 17 }}>Transfer Bank</Text>
                    </View>
                </View>

                {/* NEW CARD */}
                <View style={{ borderTopWidth: 1, borderColor: '#e9e8e8', marginLeft: 70, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                    <TouchableOpacity onPress={() => props.navigation.navigate('MethodScreen')}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ width: 24, height: 24 }} source={require('../../assets/saldo-icon/bca-icon.png')} />
                            <Text style={{ marginLeft: 15, fontSize:16  }}>BCA</Text>
                        </View>
                    </TouchableOpacity>
                        <View style={{ flexDirection: 'row', marginHorizontal:18 }}>
                            <Image style={{ width: 12, height: 12 }} source={require('../../assets/saldo-icon/arrow-grey.png')} />
                        </View>
                </View>

                <View style={{ borderTopWidth: 1, borderColor: '#e9e8e8', marginLeft: 70, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ width: 24, height: 24 }} source={require('../../assets/saldo-icon/bri-icon.png')} />
                        <Text style={{ marginLeft: 15, fontSize:16  }}>BRI</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal:18 }}>
                        <Image style={{ width: 12, height: 12 }} source={require('../../assets/saldo-icon/arrow-grey.png')} />
                    </View>
                </View>

                <View style={{ borderTopWidth: 1, borderColor: '#e9e8e8', marginLeft: 70, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ width: 24, height: 24 }} source={require('../../assets/saldo-icon/bni-icon.png')} />
                        <Text style={{ marginLeft: 15, fontSize:16  }}>BNI</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal:18 }}>
                        <Image style={{ width: 12, height: 12 }} source={require('../../assets/saldo-icon/arrow-grey.png')} />
                    </View>
                </View>

                <View style={{ borderTopWidth: 1, borderColor: '#e9e8e8', marginLeft: 70, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ width: 24, height: 24 }} source={require('../../assets/saldo-icon/mandiri-icon.png')} />
                        <Text style={{ marginLeft: 15, fontSize:16  }}>MANDIRI</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal:18 }}>
                        <Image style={{ width: 12, height: 12 }} source={require('../../assets/saldo-icon/arrow-grey.png')} />
                    </View>
                </View>

                <View style={{ borderTopWidth: 1, borderColor: '#e9e8e8', marginLeft: 70, height: 60, justifyContent: 'center', }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color:'#1b8bdf' }}>Lihat Semua Bank</Text>
                    <Text>CIMB Niaga, Panin, dan bank lain</Text>
                </View>
            </View>

            {/* DEBIT CARD */}
            <View style={{ borderBottomWidth: 1, borderColor: '#e9e8e8', height: 201 }}>
                <View style={{ marginHorizontal: 15, height: 80, alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ width: 50, alignItems: 'center' }}>
                        <Image style={{ width: 28, height: 28 }} source={require('../../assets/saldo-icon/agen-icon.png')} />
                    </View>
                    <View style={{ flex: 1, }}>
                        <Text style={{ fontSize: 17 }}>Agen</Text>
                        <Text style={{ fontSize: 14 }}>Temukan Top Up Agent</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonLihatSemua}>
                            <Text style={styles.textLihatSemua}>LIHAT AGEN</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* NEW CARD */}
                <View style={{ borderTopWidth: 1, borderColor: '#e9e8e8', marginLeft: 70, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ width: 180, height: 12 }} source={require('../../assets/saldo-icon/alfa-icon.png')} />
                    </View>
                    <View style={{ flexDirection: 'row' }}> 
                        <Image style={{ marginHorizontal:17, width: 12, height: 12 }} source={require('../../assets/saldo-icon/arrow-grey.png')} />
                    </View>
                </View>
                <View style={{ borderTopWidth: 1, borderColor: '#e9e8e8', marginLeft: 70, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ width: 180, height: 12 }} source={require('../../assets/saldo-icon/ramayana-icon.png')} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ marginHorizontal: 17, width: 12, height: 12 }} source={require('../../assets/saldo-icon/arrow-grey.png')} />
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    buttonLihatSemua: {
        backgroundColor: '#FFF',
        width: 89,
        height: 35,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#118eea',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLihatSemua: {
        color: '#118eea',
        fontSize: 12,
        fontWeight: 'bold'
    },

})

export default SaldoScreen;