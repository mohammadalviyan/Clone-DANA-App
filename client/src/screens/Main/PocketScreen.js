import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Dimensions, ImageBackground } from 'react-native'
// import { Card} from 'react-native-elements'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const voucher = [
    {
        "image": "https://lh3.googleusercontent.com/WnDx3fK6U4A9vmXo-aX6lzKWDiRKmy3bytWLBfFV665ONgc3G-eNlc6WJR-2XwBV7A",
        "dateStart": "16 Nov 2019",
        "dateExpire": "23 Nov 2019",
        "timeExpire": "15:32",
        "supriseType": "DANA Surprize Pulsa Voucher",
        "amount": 5000,
        "minAmount": 24000
     },
     {
        "image": "https://lh3.googleusercontent.com/WnDx3fK6U4A9vmXo-aX6lzKWDiRKmy3bytWLBfFV665ONgc3G-eNlc6WJR-2XwBV7A",
        "dateStart": "16 Nov 2019",
        "dateExpire": "30 Nov 2019",
        "timeExpire": "15:32",
        "supriseType": "DANA Surprize Biller Voucher",
        "amount": 5000,
        "minAmount": 21500
     },
     {
        "image": "https://lh3.googleusercontent.com/WnDx3fK6U4A9vmXo-aX6lzKWDiRKmy3bytWLBfFV665ONgc3G-eNlc6WJR-2XwBV7A",
        "dateStart": "16 Nov 2019",
        "dateExpire": "23 Nov 2019",
        "timeExpire": "15:32",
        "supriseType": "DANA Surprize Pulsa Voucher",
        "amount": 5000,
        "minAmount": 24000
     }
]

const PocketScreen = (props) => {
    const renderRow = ({item}) => {
        const {image, dateStart, dateExpire, timeExpire, supriseType, amount, minAmount} = item
        return(
            <View
            style={styles.cardContainer}
            > 
                <View >
                    <ImageBackground 
                    style={styles.imgBackground}
                    source={{uri: image}}
                    imageStyle={{opacity:0.4}}>
                        <View style={styles.imgContent}>
                            <Text style={styles.imgText}>{supriseType}</Text>
                            <Text style={styles.imgText}>Rp {amount}</Text>
                            <Text style={styles.imgText}>Minimum transaction Rp{minAmount}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.info}>
                        VALID
                    </Text>
                    <Text style={styles.info2}>
                        {dateStart} {timeExpire} - {dateExpire} {timeExpire}
                    </Text>
                </View>
    
            </View>
        )
    }

        return(
            <View style={styles.mainContainer}>
            <SafeAreaView>
                <FlatList
                    style={{padding:10}}
                    data={voucher} 
                    renderItem={renderRow}
                    keyExtractor={(item, index)=>index.toString()}/>
            <View style={{height:10}}></View>
            </SafeAreaView>
            </View>

        )

}



export default PocketScreen;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#fafafa"
    },
    cardContainer: {
        borderRadius: 10,
        // backgroundColor: 'red',
        margin: 10,
        flexDirection: "column",
        shadowColor: 'transparent',
        shadowOpacity: 0,
        
    },
    imgBackground: {
        borderTopLeftRadius:10,
        borderTopRightRadius: 10,
        backgroundColor: '#34aae8',
        height: 180, 
        margin: 0,
    },
    imgContent: {
        marginLeft: 90,
        justifyContent: 'center',
        paddingVertical: 20,
        height: 180,
        

        
    },
    imgText: {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom:10
    },
    infoContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: 90,
        paddingRight: 8,
        borderWidth:1,
        borderColor: "#9f9f9f"
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        width:125,
        marginHorizontal: 5,
        marginTop: 18

    },
    title: {
        color: '#585858',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10

    },
    info: {
        color: '#afafaf',
        fontWeight:"bold",
        fontSize: 14,
        marginBottom:10
    }, 
    button: {
        fontSize: 12, 
        color: '#52a6d8', 
        fontWeight: "bold"
    },
    touchDetail: {
        borderRadius: 7,
        color: "white",
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 33,
        borderColor: "#52a6d8",
        borderWidth: 1,
        marginTop: 10
    }
})