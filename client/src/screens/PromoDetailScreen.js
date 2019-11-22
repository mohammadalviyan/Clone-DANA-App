import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Dimensions, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const {height, width} = Dimensions.get("window")

const styles = StyleSheet.create({
    mainContainer: {
        alignContent : "space-between",
        backgroundColor: "#d6d6d6", 
    },
    firstContainer: {
        backgroundColor: "red",
        marginBottom: 8
    },
    subFirstContainer :{
        padding: 10
    },
    imageStyle :{
        height: height - 520,
        backgroundColor: "black"
    },
    title: {
        backgroundColor: "magenta",
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 13
    },
    subsubFirstContainer : {
        marginTop: 5,
        backgroundColor: "lightblue",
        flexDirection : "row",
        justifyContent : "space-between"
    },  
    infoContainer : {
        flexDirection: "row",
        padding: 6,
        height: 60,
        width : 105,
        alignItems: "center",
        backgroundColor: "cyan",
        borderRadius: 10
    },
    textContainer : {
        flexDirection: "column",
        alignItems: "flex-start"
    },  
    textInfo: {
        fontSize: 10
    },
    textValue: {
        fontSize: 12
    },
    secondContainer: {
        backgroundColor: "green",
        marginBottom: 8, 
        paddingLeft: 10,
        justifyContent: "center",
        height: 45
    },
    subSecondContainer: {
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    subsubSecondContainer : {
        marginLeft: 10,
        justifyContent: "center"
    },
    thirdContainer: {
        backgroundColor: "blue"
    },
    subThirdContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    lihatButton: {
        backgroundColor: "purple"
    }

})

const voucher= 
    {"id":7,
    "name":"Hello",
    "amount":200,
    "created_at":"2019-11-20",
    "expired_at":"2019-12-20",
    "image":"images/uploads/image-1574275539570.jpg"}

const procedure = [
    {
        "icon" : "wallet",
        "step" : 1,
        "order" : "Kunjungi merchant offline DANAIN"
    },
    {
        "icon" : "wallet",
        "step" : 2,
        "order" : "Buka aplikasi DANAIN, dan tekan Pay"
    },
    {
        "icon" : "wallet",
        "step" : 3,
        "order" : "Untuk pembayaran arahkan kode QR kamu untuk discan oleh kasir"
    },
    {
        "icon" : "wallet",
        "step" : 3,
        "order" : "Cashback akan didapatkan setelah transaksi berhasil"
    },
]

const PromoDetailScreen = () => {
    const renderProcedure = ({item}) => {
        return (
        <View style={styles.subThirdContainer}>
            <View>
                <Icon name={item.icon}/>
            </View>
            <View>
                <Text>{item.step}</Text>
            </View>
            <View>
                <Text>{item.order}</Text>
            </View>
        </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <View ><Text>{"< DANA"}</Text></View>
            <ScrollView>
                <View style={styles.firstContainer}>
                    <Image source={{uri: `https://clonedana.herokuapp.com/${voucher.image}`}} style={styles.imageStyle} />
                    <View style={styles.subFirstContainer}>
                        <Text style={styles.title}>{voucher.name}</Text>
                        <View style={styles.subsubFirstContainer}>
                            <View style={styles.infoContainer}>
                                <Icon name="gift-outline" size={16} color="#fb9b1a"/>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textInfo}>Maks. potongan</Text>
                                    <Text style={styles.textValue}>Rp {voucher.amount}</Text>
                                </View>
                            </View>
                            <View style={styles.infoContainer}>
                                <Icon name="cash" size={16} color="#fb9b1a"/>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textInfo}>Min. transaksi</Text>
                                    <Text style={styles.textInfo}>- </Text>
                                </View>
                            </View>
                            <View style={styles.infoContainer}>
                                <Icon name="clock" size={16} color="#fb9b1a"/>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textInfo}>Periode promo</Text>
                                    <Text style={styles.textInfo}>{voucher.created_at} - {voucher.expired_at}</Text>
                                </View>
                            </View>
                           
                        </View>
                    </View>
                </View>
                <View style={styles.secondContainer}>
                    <View style={styles.subSecondContainer}>
                        <Icon name="wallet" size={24} color= "#fb9b1a"/>
                        <View style= {styles.subsubSecondContainer}>
                            <Text style={{fontSize: 12, color: "#d6d6d6"}}>Metode Pembayaran</Text>
                            <Text>Saldo DANAIN, Kartu Debit/Kartu Kredit</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.thirdContainer}>
                    <FlatList
                        style={{padding:10, height: height * 0.8}}
                        data={procedure} 
                        renderItem={renderProcedure}
                        keyExtractor={(item, index)=>index.toString()}/>
                </View>
                <Text>PROMO DETAIL SCREEN</Text>
            </ScrollView>
            <View>
                <TouchableOpacity style={styles.lihatButton}>
                    <Text>LIHAT DATA MERCHANT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PromoDetailScreen
