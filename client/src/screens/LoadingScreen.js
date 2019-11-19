import React, {useEffect} from 'react';
import {
    StatusBar,
    View,
    Image,
    StyleSheet
} from 'react-native';

const LoadingScreen = (props) => {

    setTimeout(() => {
        props.navigation.navigate('SwiperScreen')
    }, 3000);

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