import React, {useEffect, useState} from 'react'
import {Dimensions, Image, View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const phone = "82169511784"
const lastChange ="never"

const EditPhoneScreen = (props) => {
    const [save, setSave] = useState(false)

    const modalPop = (e)  => {
        setSave(true)
        //show 
    }

    useEffect( () => {

    }, [save])

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source= {require('../../../../asset/icons/danain-logo.png')} style={styles.image}></Image>
            </View>
            <View style={styles.headerTitle}>
                <Text style={styles.title}>Your DANAIN ID has been registered below:</Text>
                <Text style={styles.title}>Your DANAIN ID is connected to your mobile number for security verification account</Text>
            </View>
            <View style={styles.numContainer}>
                <Text>62-{phone}</Text>
                <Text>Last Chaged :{lastChange}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Icon name="info" size={24}/>
                <Text>
                    Your DANAIN ID can only be changed every 90 days. Your previously used
                    mobile number cannot be used for DANAIN ID Change from a different number
                </Text>
            </View>
            <TouchableOpacity style={styles.changeButton} onPress={e => modalPop(e)}>
                <Icon name="edit-2" size={24}/>
                <Text>CHANGE</Text>
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
        fontWeight:"bold"
    },
    numContainer: {
        marginBottom:4,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "grey"
    },
    infoContainer: {
        marginBottom:10,
        justifyContent:"center",
        flexDirection:"row"
    },
    changeButton: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems: "center"
    }

})
