import React, {useEffect, useState} from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


const email = "ditanurhalimah@gmail.com"

const EditEmailScreen = (props) => {
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
                    <View style={styles.imgContainer}>
                        <Image source= {require('../../../../asset/icons/danain-logo.png')} style={styles.image}></Image>
                    </View>
                    <Text style={styles.titleText}>Register your email address!</Text>
                    <Text style={styles.subtitleText}>Your email will only be used for DANAIN account verification process</Text>
                </View>
                <View style={styles.editForm}>
                    
                    <Text>Email address</Text>
                    <TextInput value={email}></TextInput>
                    <Icon name="cancel" size={24}/>
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={e => modalPop(e)}>
                <Text style={styles.butTitle}>SAVE EMAIL ADDRESS</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditEmailScreen

const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        height: screenHeight - 30,
        alignItems: "center",
        backgroundColor: "green"
    },
    topHeader: {
        alignItems: "center",
        justifyContent: "space-between"
    },
    titleText: {
        // alignItems: "center",
        backgroundColor: "blue"
    },
    subtitleText: {
        alignItems: "center",
        backgroundColor: "blue",
        fontSize: 12
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
