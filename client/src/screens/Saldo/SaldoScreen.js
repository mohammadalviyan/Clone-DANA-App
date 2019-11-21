import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

const SaldoScreen = () => (
    <View style={{ backgroundColor:'#f5f5f5', flex: 1}}>
        {/* COMPONENT HEADER */}
        <View style={{ backgroundColor: '#118eea', justifyContent: 'center', height: 50}}>
            <View style={{marginHorizontal: 15,alignItems:'center', flexDirection:'row'}}>
                <Image style={{width:20, height: 20}}source={require('../../assets/arrow-left.png')} />
                <Text style={{color: 'white', fontSize: 16}}>TOP UP</Text>
            </View>
        </View>

        {/* COMPONENT SCROLL */}
        <View style={{marginHorizontal: 15, height: 20, justifyContent:'center'}}>
            <Text style={{color:'#b6b6b6'}}>SELECT TOP UP METHOD</Text>
        </View>

        {/* DEBIT CARD */}
        <View style={{borderBottomWidth: 1, height: 121}}>
            <View style={{marginHorizontal:15,backgroundColor:'red', height: 60, alignItems:'center', flexDirection:'row'}}>
                <View style={{ width: 50, alignItems:'center'}}>
                    <Text>ICON</Text>
                </View>
                <View style={{flex: 1, backgroundColor:'yellow'}}>
                    <Text>Debit Card</Text>
                </View>
            </View>

            {/* NEW CARD */}
            <View style={{ backgroundColor: 'purple', marginHorizontal: 15, marginLeft: 70, height: 60,flexDirection:'row',alignItems:'center', justifyContent: 'space-between'}}>
                <View style={{flexDirection:'row'}}>
                    <Text>ICON</Text>
                    <Text style={{marginLeft: 15}}>NEW CARD</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{marginRight:20}}>1</Text>
                    <Text style={{ marginRight: 20 }}>2</Text>
                    <Text>3</Text>
                </View>
            </View>
        </View>
        {/* BANK TRANSFER */}
        <View style={{ borderBottomWidth: 1, height: 361 }}>
            <View style={{ marginHorizontal: 15, backgroundColor: 'red', height: 60, alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ width: 50, alignItems: 'center' }}>
                    <Text>ICON</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                    <Text>Debit Card</Text>
                </View>
            </View>

            {/* NEW CARD */}
            <View style={{ backgroundColor: 'purple', marginHorizontal: 15, marginLeft: 70, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>ICON</Text>
                    <Text style={{ marginLeft: 15 }}>NEW CARD</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginRight: 20 }}>1</Text>
                    <Text style={{ marginRight: 20 }}>2</Text>
                    <Text>3</Text>
                </View>
            </View>
            <View style={{ backgroundColor: 'purple', marginHorizontal: 15, marginLeft: 70, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>ICON</Text>
                    <Text style={{ marginLeft: 15 }}>NEW CARD</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginRight: 20 }}>1</Text>
                    <Text style={{ marginRight: 20 }}>2</Text>
                    <Text>3</Text>
                </View>
            </View>
            <View style={{ backgroundColor: 'purple', marginHorizontal: 15, marginLeft: 70, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>ICON</Text>
                    <Text style={{ marginLeft: 15 }}>NEW CARD</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginRight: 20 }}>1</Text>
                    <Text style={{ marginRight: 20 }}>2</Text>
                    <Text>3</Text>
                </View>
            </View>

            <View style={{ backgroundColor: 'purple', marginHorizontal: 15, marginLeft: 70, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>ICON</Text>
                    <Text style={{ marginLeft: 15 }}>NEW CARD</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginRight: 20 }}>1</Text>
                    <Text style={{ marginRight: 20 }}>2</Text>
                    <Text>3</Text>
                </View>
            </View>

            <View style={{ backgroundColor: 'purple', marginHorizontal: 15, marginLeft: 70, height: 60, justifyContent: 'center', }}>
                <Text>SHOW ALL BANK</Text>
                <Text>And another bank</Text>
            </View>
        </View>

    </View>
);

export default SaldoScreen;