import React, {useEffect, useState} from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const email = "ditanurhalimah@gmail.com"

const editEmail = (props) => {
    const [save, setSave] = useState(false)

    const modalPop = (e)  => {
        setSave(true)
        //show 
    }

    useEffect( () => {

    }, [save])

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.topHeader}>
                    <Image style={{alignItems: "stretch"}} source= {require('../../../asset/icons/danain-text.png')}></Image>
                    <Text>Register your email address!</Text>
                    <Text>Your email will only be used for DANAIN account verification process</Text>
                </View>
                <View style={styles.editForm}>
                    
                    <Text>Email address</Text>
                    <TextInput value={email}></TextInput>
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={e => modalPop(e)}>
                <Text style={styles.butTitle}>SAVE EMAIL ADDRESS</Text>
            </TouchableOpacity>
        </View>
    )
}

export default editEmail


const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center"
    },
    topHeader: {
        alignItems: "center",
        justifyContent: "space-between"
    },
    editForm: {
        marginHorizontal: 10,
    },
    button: {
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    butTitle: {
        color: "#fff"
    }

})
