import React, {useEffect, useState} from 'react'
import {Dimensions, Modal, Image, View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'


const phone = "82169511784"
const lastChange ="never"

const EditPhoneScreen = (props) => {
    const [isChange, setChange] = useState(false)
    const [modVisible, setModalVisible] = useState(false)

    const modalPop = (e)  => {
        setModalVisible(true)
        setChange(true)
    }

    const sendOTPCode = (e) => {
        //navigate to pin change screen first

        //code here
        // console.log("sendOTPCode")
    }
    const dontHaveOldNumber = (e) => {
        //navigate to pin change screen first

        //code here
        // console.log("dontHaveOldNumber")
    }

    // useEffect( () => {
    //     //
    // }, [save])

    return (
        <View style={styles.container}>
            {/* MODAL */}
            <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modVisible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    }}
                >
                    <View style={{marginLeft: 5}}>
                        <TouchableOpacity onPress={() => {
                                setModalVisible(!modVisible);
                                }}>
                            <Icon name="x" size={30} />
                        </TouchableOpacity>
                        <Text style= {{fontSize: 24, fontWeight:"bold"}}>Silahkan pilih metode verifikasi yang Anda inginkan.</Text>
                        <TouchableOpacity style= {{flexDirection: "row"}} onPress={(e) => sendOTPCode(e)}>
                            <View style={{borderRadius: 60, backgroundColor: "#fb9b1a"}}>
                                <Icon name="mail" size={12} color="white"/>
                            </View>
                            <Text style={{color: "#7abae1"}}>Kirim kode OTP ke nomor lama</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style= {{flexDirection: "row"}} onPress={(e) => dontHaveOldNumber(e)}>
                            <View style={{borderRadius: 60, backgroundColor: "#0e8ee7"}}>
                                <Icon name="more-horizontal" size={12} color="white"/>
                            </View>
                            <Text style={{color: "#7abae1"}}>Saya sudah tidak memiliki nomor lama</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

            {/* =========MAIN COMPONENT========== */}

            <View style={styles.imgContainer}>
                <Image source= {require('../../../../asset/icons/danain-logo.png')} style={styles.image}></Image>
            </View>
            <View style={styles.headerTitle}>
                <Text style={styles.title}>DANAIN ID kamu sudah terdaftar:</Text>
                <Text style={styles.subtitle}>DANAIN ID Anda terhubung dengan nomor handphone kamu untuk proses verifikasi keamanan akun Anda</Text>
            </View>
            <View style={styles.numContainer}>
                <Text style={{color: 'black'}}>62-{phone}</Text>
                <Text style={{color: '#ababab'}}>Last Chaged :{lastChange}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Icon name="info" size={12} color="#7abae1"/>
                <Text style={{color: "#7abae1"}}>
                    DANAIN ID Anda hanya dapat diganti setiap 90 hari.
                    Nomor yang sebelumnya telah Anda gunakan tidak dapat digunakan
                    untuk ganti DANAIN Id dari nomor lain.
                </Text>
            </View>
            <TouchableOpacity style={isChange? styles.changeButtonActive: styles.changeButton} onPress={e => modalPop(e)}>
                <Icon name="edit-2" size={12}/>
                <Text>GANTI</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditPhoneScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "green"
    },
    imgContainer: {
        backgroundColor: "red",
        height: 90,
        // justifyContent: "center",
        // alignItems: "center"
    },
    image: {
        height:90,
        width:360
        // resizeMode: 40
    },
    headerTitle: {
        // height : 100,
        backgroundColor: "purple"
    },
    title: {
        marginBottom:5,
        color: "black",
        fontWeight:"bold",
        fontSize: 24
    },
    subtitle: {
        marginBottom:5,
        color: "#ababab",
        fontSize: 20
    },
    numContainer: {
        marginBottom:4,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#fafafa"
    },
    infoContainer: {
        marginBottom:10,
        justifyContent:"center",
        flexDirection:"row",
        backgroundColor: "#fafafa"
    },
    changeButton: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#0e8ee7"
    },
    changeButtonActive: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#0e8ee7",
        backgroundColor: "#0e8ee7"
    }

})
