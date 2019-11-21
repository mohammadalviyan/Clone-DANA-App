import React, {useEffect, useState} from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


const email = "ditanurhalimah@gmail.com"

const EditEmailScreen = (props) => {
    const [save, setSave] = useState(false)
    const [isEdit, setEdit] = useState(false)
    const [isEmpty, empty] = useState(false)
    const [isEmailValid, setEmailValid] = useState(false)

    const modalPop = (e)  => {
        setSave(true)
        //show 
    }

    const handleChangeEmail = (email) => {
        setEdit(true)
        if (email.length <= 0) {
            empty(true)
        }
    //source : https://stackoverflow.com/questions/39356826/how-to-check-if-it-a-text-input-has-a-valid-email-format-in-reactjs
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ( re.test(email) ) {
            // this is a valid email address
            // or update the data in redux store.
            console.log("valid email")
            setEmailValid(true)
        }
        else {
            // invalid email, maybe show an error to the user.
            setEmailValid(false)
        }
    }

    const validWarning = () => {
        return (
            <View style={styles.inputWarning}>
                <Text color="red">Masukkan alamat email dengan benar</Text>
                <Icon name="warning" color="red" size={20} />
            </View>
        )
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
                    <Text style={styles.titleText}>Daftarkan alamat email kamu!</Text>
                    <Text style={styles.subtitleText}>Email kamu tidak akan dipublikasikan dan hanya digunakan untuk proses verifikasi akun DANAIN kamu</Text>
                </View>
                <Text style= {{color: !isEdit? "#ababab" : isEmpty ? "#fb9b1a" : isEmailValid ? "#ababab" : 'red'}}>Alamat email</Text>
                <View style={!isEdit? styles.editForm : isEmailValid ? styles.editActivate : styles.editWarning}>
                    <TextInput value={email} placeholder="Ketik disini" textContentType="emailAddress" onChangeText={email=> handleChangeEmail(email)} style={{color: !isEdit ? "#ababab" : 'black'}}/>
                    {isEmpty ? null :<Icon name="cancel" size={24}/>}
                    {isEmailValid ? null: validWarning()}
                </View>
            </View>

            <TouchableOpacity style={!isEdit && isEmailValid ? styles.button : styles.buttonDeactivate} onPress={e => modalPop(e)}>
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
        backgroundColor: "blue",
        fontSize: 16,
        fontWeight: "bold",
        
    },
    subtitleText: {
        alignItems: "center",
        backgroundColor: "blue",
        fontSize: 12,
        color: "#ababab"
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
        borderBottomWidth : 1,
        borderColor: "#ababab"
    },
    editActivate: {
        marginHorizontal: 10,
        borderBottomWidth : 1,
        borderColor: "#fb9b1a"
    },
    editWarning: {
        marginHorizontal: 10,
        borderBottomWidth : 1,
        borderColor: "red"
    },
    inputWarning: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        backgroundColor: "#0e8ee7",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    buttonDeactivate: {
        backgroundColor: "#a0a0a0",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    butTitle: {
        color: "#fff"
    }

})
