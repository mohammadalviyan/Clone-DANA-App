import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Dimensions, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const {height, width} = Dimensions.get("window")

const styles = StyleSheet.create({
    mainContainer: {
        // alignContent : "space-between",
        backgroundColor: "#F5F5F5", 
        flex: 1
    },
    firstContainer: {
        backgroundColor: "white",
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
        // backgroundColor: "magenta",
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 13
    },
    subsubFirstContainer : {
        marginTop: 5,
        // backgroundColor: "lightblue",
        flexDirection : "row",
        justifyContent : "space-between"
    },  
    infoContainer : {
        flexDirection: "row",
        padding: 6,
        height: 50,
        width : 105,
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        borderRadius: 4
    },
    textContainer : {
        flexDirection: "column",
        alignItems: "flex-start",
        height: 30
    },  
    textInfo: {
        fontSize: 10,
        color: "#a0a0a0"
    },
    textValue: {
        fontSize: 12,
        
    },
    secondContainer: {
        backgroundColor: "white",
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
        backgroundColor: "white"
    },
    subThirdContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#F5F5F5",
        height: 100,
        justifyContent: "space-between"
    },
    iconAvatar : {
        alignItems : "center",
        width : 80
    },
    step : {
        alignItems : "center",
        width : 20
    },
    lihatButton: {
        backgroundColor: "#0e8ee7",
        alignItems : "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 60,
        borderRadius: 4
    },
    bottom :{
        height : 60,
        marginBottom: 2,
        alignItems : "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    bottomTitle : {
        fontSize : 18,
        color : "#FFF"
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
        "step" : 4,
        "order" : "Cashback akan didapatkan setelah transaksi berhasil"
    },
]

const PromoDetailScreen = () => {
    const renderProcedure = ({item}) => {
        return (
        <View style={styles.subThirdContainer}>
            <View style={styles.iconAvatar}>
                <Icon name={item.icon}/>
            </View>
            <View style={styles.step}>
                <Text style={{fontSize: 13}}>{item.step}</Text>
            </View>
            <View style={{width: 240}}>
                <Text style={{fontSize: 13}}>{item.order}</Text>
            </View>
        </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <View ><Text>{"< DANA"}</Text></View>
            <ScrollView>
                    <Image source={{uri: `https://clonedana.herokuapp.com/${voucher.image}`}} style={styles.imageStyle} />
                <View style={styles.firstContainer}>
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
                                    <Text style={styles.textValue}>- </Text>
                                </View>
                            </View>
                            <View style={styles.infoContainer}>
                                <Icon name="clock" size={16} color="#fb9b1a"/>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textInfo}>Periode promo</Text>
                                    <Text style={styles.textValue}>{voucher.created_at} - {voucher.expired_at}</Text>
                                </View>
                            </View>
                           
                        </View>
                    </View>
                </View>
                <View style={styles.secondContainer}>
                    <View style={styles.subSecondContainer}>
                        <Icon name="wallet" size={24} color= "#fb9b1a"/>
                        <View style= {styles.subsubSecondContainer}>
                            <Text style={{fontSize: 12, color: "#bfbfbf"}}>Metode Pembayaran</Text>
                            <Text>Saldo DANAIN, Kartu Debit/Kartu Kredit</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.thirdContainer}>
                    <FlatList
                        style={{padding:10}}
                        data={procedure} 
                        renderItem={renderProcedure}
                        keyExtractor={(item, index)=>index.toString()}/>
                </View>
            </ScrollView>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.lihatButton}>
                    <Text style={styles.bottomTitle}>LIHAT DATA MERCHANT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PromoDetailScreen
