import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

const BottomNavigation = () => {
    return (
        <>
            <View style={{ height: 63, backgroundColor: '#fafafa', flexDirection: 'row', borderTopWidth: 1, borderTopColor:'#e6e6e6' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity>
                        <Image style={styles.iconNav} source={require('../assets/icons-navi/beranda-icon.png')} />
                        <Text style={styles.textIcon}>Beranda</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.iconNav} source={require('../assets/icons-navi/riwayat-icon.png')} />
                    <Text style={styles.textIcon}>Riwayat</Text>
                </View>

                <View style={{ flex: 1, alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity style={{borderRadius:100, width:57, height:57, backgroundColor: '#118eea', alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={styles.iconNavPay} source={require('../assets/icons-navi/pay-icon.png')} />
                        <Text style={styles.textPay}>Pay</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.iconNav} source={require('../assets/icons-navi/pocket-icon.png')} />
                    <Text style={styles.textIcon}>Pocket</Text>
                </View>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.iconNav} source={require('../assets/icons-navi/saya-icon.png')} />
                    <Text style={styles.textIcon}>Saya</Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    iconNav: {
        width: 30,
        height: 30,
        marginBottom: 2
    }, 
    iconNavPay: {
        width: 30,
        height: 30,
        marginBottom: 2,
        marginTop:3
    },
    textIcon: {
        fontSize: 11,
        color: '#7a7a7a',
        marginBottom: 5
    },
    textPay: {
        fontSize: 11,
        color: '#FFF',
        marginBottom: 5
    }
})

export default BottomNavigation;