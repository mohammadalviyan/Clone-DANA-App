import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const name = "811989593"

const EditName = (props) => {
    const [save, setSave] = useState(false)

    const modalPop = (e)  => {
        setSave(true)
        //show 
    }

    useEffect( () => {

    }, [save])

    return (
        <View style={styles.container}>
            <View style={styles.editForm}>
                <Text>Change User Account Name</Text>
                <TextInput value={name}></TextInput>

            </View>
            <TouchableOpacity style={styles.button} onPress={e => modalPop(e)}>
                <Text style={styles.butTitle}>SAVE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditName


const styles = StyleSheet.create({
    container: {
        justifyContent: "space-around",
        alignItems: "center"
    },
    editForm: {
        marginHorizontal: 10,
    },
    button: {
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
    },
    butTitle: {
        color: "#fff"
    }

})
