import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const name = "811989593"

const EditNameScreen = (props) => {
    const [save, setSave] = useState(false)
    const [name, setName] = useState ("")
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

    useEffect( () => {

    }, [save])

    return (
        <View style={styles.container}>
            <View style={styles.editForm}>
                {/* label need floating lable */}
                <Text style= {{color: isEmpty? 'red':'#a0a0a0'}}>Ganti Nama Akun</Text> 
                <View style={isFill ? styles.inputActivate : isEmpty? styles.inputWarning : styles.input}>
                    <TextInput value={name} style={{color: isFill ? "#fb9b1a" : '#666666' }} onChangeText={name=> handleChangeName(name)} />
                    {isEmpty ? null : <Icon  name="cancel" />}
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
        justifyContent: "space-around",
        alignItems: "center"
    },
    editForm: {
        marginHorizontal: 10,
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
