import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, ToastAndroid} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {useSelector, useDispatch} from 'react-redux';
import {updateUser} from '../../../Redux/Actions/auth'

const screenWidth = Dimensions.get('window').width;

const EditNameScreen = (props) => {
    const {resultLogin} = useSelector(state => state.auth);
    const dispatch = useDispatch()

    const [name, setName] = useState(resultLogin.name); //get from database
    const [isFill, setFill] =useState(false)
    const [isEmpty, empty] = useState(false)
    const [disable, setDisable] = useState(true)

 
    const modalPop = async (e)  => {
        if(name === resultLogin.name) {
            props.navigation.navigate("Settings")
        }
        else {
            // console.log("userid", user.activeUser.id)
            const newName = {
                name
            }
            await dispatch(updateUser(resultLogin.id, newName))
            .then( result => {
                console.log(resultLogin, 'resultlogiggi')
                if (result.value.data.status === "success"){
                    ToastAndroid.show('Berhasil Disimpan!', ToastAndroid.LONG);
                    props.navigation.navigate('SayaScreen', {screen: "Settings"})
                    
                  } else {
                    ToastAndroid.show('Gagal mengubah nama!', ToastAndroid.LONG);
                  }
            })
            .catch( err => ToastAndroid.show('Gagal Mengupdate!', ToastAndroid.LONG))

        }
    }


    const emptyWarning = () => {
        return (
            <View style={styles.warning}>
                <Text style={styles.warningText}>Nama Akun harus diisi</Text>
                <Icon name="warning" color="red" size={16} />
            </View>
        )
    }
    
    const handleChangeName = (name) => {
        setFill(true)
        if (name.length <= 0) {
            empty(true)
        } else{
            empty(false)
            setName(name)
            setDisable(false)
        }
        
    } 

    const emptyName = (e) => {
        setName("")
        empty(true)
        setDisable(true)
    }


    return (
        <View style={styles.container}>
            <View style={styles.editForm}>
                {/* label need floating lable */}
                <Text style= {{color: isEmpty? 'red':'#a0a0a0'}}>Ganti Nama Akun</Text> 
                <View style={isFill ? styles.inputActivate : isEmpty? styles.inputWarning : styles.input}>
                    <TextInput value={name} style={styles.textInput} onChangeText={name=> handleChangeName(name)} />
                    {isEmpty ? null : 
                    <TouchableOpacity onPress={e => emptyName(e)} style={styles.cancel}>
                        <Icon  name="cancel" size={16} color={isFill ? '#a0a0a0': 'red'} />
                    </TouchableOpacity>
                    }
                </View>
                {isEmpty ? emptyWarning() : null}
            </View>
            <TouchableOpacity style={disable? styles.buttonDeactivate : styles.button} onPress={e => modalPop(e)} disabled={disable}>
                <Text style={styles.butTitle}>SIMPAN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditNameScreen


const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flex: 1,
        margin: 20,
        // backgroundColor: 'red'
    },
    editForm: {
        marginHorizontal: 10,
        // backgroundColor: "green"
    },
    cancel: {
        alignItems: "center",
        justifyContent: "center",
        padding: 8
    },
    input: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ababab",
        // backgroundColor: "blue",
        justifyContent: "space-between", 
    },
    inputActivate: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#fb9b1a",
    },
    inputWarning : {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "red"
    },
    textInput: {
        width: screenWidth - 90,
        color: '#4a4a4a',
        // backgroundColor: "purple"
    },
    warning: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    warningText: {
        color: "red",
        fontSize: 12
    },
    button: {
        backgroundColor: "#0e8ee7",
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        borderRadius: 4
    },
    buttonDeactivate: {
        backgroundColor: "#a0a0a0",
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        borderRadius: 4
    },
    butTitle: {
        color: "#fff", 
        fontSize: 18
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 300
    }

})
