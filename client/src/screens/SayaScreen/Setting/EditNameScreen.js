import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {useSelector, useDispatch} from 'react-redux';

const nameDefault = "811989593"

const screenHeight = Dimensions.get('window').height;

const EditNameScreen = (props) => {
    const user =  useSelector (state => state.user)

    const [save, setSave] = useState(false)
    const [name, setName] = useState (user.resultUser.name) //get from database
    const [isFill, setFill] =useState(false)
    const [isEmpty, empty] = useState(false)

    

    const modalPop = (e)  => {
        setSave(true)
        //check according to database
    }

    const emptyWarning = () => {
        return (
            <View style={styles.warning}>
                <Text>Nama Akun harus diisi</Text>
                <Icon name="warning" color="red" size={20} />
            </View>
        )
    }
    
    const handleChangeName = (name) => {
        if (name.length <= 0) {
            empty(true)
        }
        setName(name)
        setFill(true)
    } 

    const emptyName = (e) => {
        setName("")
    }

    useEffect( () => {

    }, [save])

    return (
        <View style={styles.container}>
            <View style={styles.editForm}>
                {/* label need floating lable */}
                <Text style= {{color: isEmpty? 'red':'#a0a0a0'}}>Ganti Nama Akun</Text> 
                <View style={isFill ? styles.inputActivate : isEmpty? styles.inputWarning : styles.input}>
                    <TextInput value={name} style={{color: isFill ? "#fb9b1a" : '#666666' }} onChangeText={name=> handleChangeName(name)} />
                    {isEmpty ? null : 
                    <TouchableOpacity onPress={e => emptyName(e)}>
                        <Icon  name="cancel" />
                    </TouchableOpacity>
                    }
                    {isEmpty ? emptyWarning() : null}
                </View>
            </View>
            <TouchableOpacity style={isEmpty? styles.button: styles.buttonDeactivate} onPress={e => modalPop(e)}>
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
        backgroundColor: 'red'
    },
    editForm: {
        marginHorizontal: 10,
        backgroundColor: "green"
    },
    input: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ababab"
    },
    inputActivate: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#fb9b1a"
    },
    inputWarning : {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "red"
    },
    warning: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        backgroundColor: "#0e8ee7",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonDeactivate: {
        backgroundColor: "#a0a0a0",
        alignItems: "center",
        justifyContent: "center"
    },
    butTitle: {
        color: "#fff"
    }

})
