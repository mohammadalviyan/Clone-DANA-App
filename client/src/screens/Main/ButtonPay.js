import React from 'react';
import { Image } from 'react-native';

const ButtonPay = () => {
    return (
        <>
            <Image source={require('../../assets/icons-navi/pay-icon.png')} style={{width: 58, height: 58, marginTop:13}} />
        </>
    )
};

export default ButtonPay;