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
    
    // const [data, setData] = useState();

    useEffect(() => {
        const getLoading = async () => {
           const disLoading = await dispatch(getToken())
            //  console.log('loading',disLoading)
            if(disLoading.value){
                // console.log(disLoading.value)
                props.navigation.navigate('TabScreen')
            } else {
                props.navigation.navigate('SwiperScreen')
            }
        }
        getLoading()
    }, []);
    

    return (
        <>
             {/* {console.log('OPO',resultLogin)} */}
        
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