import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getToken} from '../Redux/Actions/auth'

import {
    StatusBar,
    View,
    Image,
    StyleSheet
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

    const LoadingScreen = (props) => {
    const {resultLogin} = useSelector(state => state.auth);
    const dispatch = useDispatch()

    useEffect(() => {
        const getLoading = async () => {
           const disLoading = await dispatch(getToken())
            if(disLoading.value){
                props.navigation.navigate('TabScreen')
            } else {
                props.navigation.navigate('SwiperScreen')
            }
        }
        getLoading()
    }, []);
    

    return (
        <>
            <View style={styles.container}>
                <Image source={require('../assets/danain-text.png')} style={styles.image} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#118eea'
    },
    image: {
        width: 250,
        height: 40
    }
})

export default LoadingScreen;