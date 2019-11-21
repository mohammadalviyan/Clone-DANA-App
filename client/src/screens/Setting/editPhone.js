import React, {useEffect, useState} from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const phone = "82169511784"
const lastChange ="never"

const editPhone = (props) => {
    const [save, setSave] = useState(false)

    const modalPop = (e)  => {
        setSave(true)
        //show 
    }

    useEffect( () => {

    }, [save])

    return (
        <View style={styles.container}>
            <Image style={styles.imgContainer} source= {require('../../../asset/icons/danain-text.png')}></Image>
            <View>
                <Text style={styles.title}>Your DANAIN ID has been registered below:</Text>
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
                <Icon name="pencil" size={24}/>
                <Text>CHANGE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default editPhone


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgContainer: {
        marginBottom:10
    },
    title: {
        marginBottom:5,
        color: "black",
        fontWeight:"bold"
    },
    numContainer: {
        marginBottom:4,
        justifyContent:"center",
        alignItems:"center"
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
