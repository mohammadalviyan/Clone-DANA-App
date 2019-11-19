import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Dimensions } from 'react-native'
import { Card} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PropTypes from 'prop-types'

const promo = [
    {
        "image": "https://codecanyon.img.customer.envatousercontent.com/files/218715001/banner-inline.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=6ed404df116ef3f3e65c3d7b59e67015",
        "title": "Simpan Kartu Debit BTN, Bonus Voucher Rp25rb",
        "dateExpire": "31 Jan 2020"
     },
     {
       "image": "https://codecanyon.img.customer.envatousercontent.com/files/218715001/banner-inline.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=6ed404df116ef3f3e65c3d7b59e67015",
       "title": "Simpan Kartu Debit BTN, Bonus Voucher Rp25rb",
       "dateExpire": "31 Jan 2020"
    },
    {
       "image": "https://codecanyon.img.customer.envatousercontent.com/files/218715001/banner-inline.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=6ed404df116ef3f3e65c3d7b59e67015",
       "title": "Simpan Kartu Debit BTN, Bonus Voucher Rp25rb",
       "dateExpire": "31 Jan 2020"
    },
    {
       "image": "https://codecanyon.img.customer.envatousercontent.com/files/218715001/banner-inline.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=6ed404df116ef3f3e65c3d7b59e67015",
       "title": "Simpan Kartu Debit BTN, Bonus Voucher Rp25rb",
       "dateExpire": "31 Jan 2020"
    },
    {
       "image": "https://codecanyon.img.customer.envatousercontent.com/files/218715001/banner-inline.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=6ed404df116ef3f3e65c3d7b59e67015",
       "title": "Simpan Kartu Debit BTN, Bonus Voucher Rp25rb",
       "dateExpire": "31 Jan 2020"
    }
]

class PromoScreen extends React.Component {
    renderRow = ({item}) => {
        const {image, title, dateExpire} = item
        return(
                  <Card
                containerStyle={styles.cardContainer}
                image={{uri: image}}
                imageStyle={styles.imgStyle}
                > 
        
                    {/* <Image
                    style={styles.imgStyle}
                    source={{uri: image}}
                  /> */}
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.infoContainer}>
                        <View style={styles.iconContainer}>
                            <Icon name="clock" color='#f18d0c' size={15} />
                            <Text style={styles.info}>
                                Valid until {dateExpire}
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.touchDetail}>
                            <Text style={styles.button}>DETAIL</Text>
                        </TouchableOpacity>
                    </View>
        
                </Card>
        )
    }

    render() {       
        return(
            <SafeAreaView>
                <FlatList
                    style={{padding:5}}
                    data={promo} 
                    renderItem={this.renderRow}
                    keyExtractor={(item, index)=>index.toString()}/>
            </SafeAreaView>
        )
    }


}





export default PromoScreen;

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 10,
        // backgroundColor: 'red',
        // margin: 10,
        flexDirection: "column",
        shadowColor: 'transparent',
        shadowOpacity: 0,
    },
    imgStyle: {
        borderTopLeftRadius:10,
        borderTopRightRadius: 10,
        // backgroundColor: 'green',
        height: 90, 
        margin: 0,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        height: 50,
        marginRight: 8,
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
        color: '#9f9f9f',
        fontSize: 10,
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