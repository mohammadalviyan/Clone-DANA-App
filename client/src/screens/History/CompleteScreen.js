import React from 'react';
import { Dimensions, Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const InfoText = ({ text }) => (
  <View style={styles.infoTextContainer}>
    <Text style={styles.infoText}>{text}</Text>
  </View>
)

const IconButton = ({name, color}) => (
  <View style={[styles.iconContainer]}>
    <Icon name={name} color={color} size={20}/>
  </View>
)



const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const dataDes = [
  {
    date: "24 Des",
    iconLabel: "mobile",
    iconColor: '#ec5548',
    amount: 64000,
    description: 'Pulsa Telkomsel, Payment',
    id: 'BL1913VAVQPGINV',
  },
  {
    date: "16 Des",
    iconLabel: "plus",
    iconColor: '#19e',
    amount: 10000,
    description: 'Top up',
    id: null,
  },
  {
    date: "30 Aug",
    iconLabel: "mobile",
    iconColor: '#ec5548',
    amount: 1,
    description: 'Pulsa Telkomsel, Payment',
    id: 'BL1913MOMP9EINV',
  },
  {
    date: "10 Aug",
    iconLabel: "send",
    iconColor: '#19e',
    amount: 12000,
    description: 'Pulsa Telkomsel, Payment',
    id: 'BL1913MOMP9EINV',
  },

]


const ProgressScreen = (props) => {
    
    const {resultLogin} = useSelector(state => state.auth);
    const RenderList = () => {
      return dataDes.map(data => {
        return(
            <View style={styles.subContainer}>
              <View style={styles.leftWidth}>
                <Text style={styles.pad}>{data.date}</Text>
              </View>
              <View style={styles.iconWidth}>
                <IconButton name={data.iconLabel} color={data.iconColor}/>
              </View>
              <View style={[styles.pad, styles.centerWidth]}>
                <Text style={[styles.textPad, styles.title]}>Rp{data.amount}</Text>
                <Text style={styles.subtitle}>{data.description}</Text>
                <Text style={[styles.textPad, styles.subtitle]}>{data.id}</Text>
              </View>
              <View style={[styles.padRight, styles.rightWidth]}>
                <TouchableOpacity>
                  <Icon name="chevron-right" size={15} color="#666"/>
                </TouchableOpacity>
              </View>
            </View>
        )

      })
    }

    // console.log(resultLogin)
    return (
      <ScrollView style={styles.mainContainer}>
        {/* LIST ITEM */}
        <InfoText text="Desember 2019"/>
        {RenderList()}
      </ScrollView>
    );
};

export default ProgressScreen;


const styles = StyleSheet.create({
  iconContainer: {
    width: 30, 
    height: 30,
    borderRadius: 80, 
    borderWidth:1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPad: {
    paddingVertical: 5
  },
  leftWidth: {
    width: 0.15 * screenWidth,
  },
  centerWidth: {
    width: 0.6 * screenWidth,
  },
  iconWidth: {
    width: 0.10 * screenWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightWidth: {
    width: 0.1 * screenWidth,
  },
  mainContainer: {
    backgroundColor: '#F5F5F5'
  },
  subContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: screenWidth,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
    backgroundColor: '#fff'
  },
  pad: {
    paddingLeft: 20,
  },
  padRight: {
    paddingRight: 20,
  },
  infoTextContainer: {
    paddingTop: 9,
    paddingBottom: 9,
    backgroundColor: '#F5F5F5'
  },
  infoText: {
    fontSize: 15,
    marginLeft: 20,
    color: 'gray',
    fontWeight: '400',
  },
  title: {
    fontSize: 17,
    color: "#666",
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'gray'
  }
})