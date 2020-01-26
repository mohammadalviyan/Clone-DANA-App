import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);


//get all pending data from transaction table


const iconLabel = {
  phone: 'mobile',
  topup: 'plus',
  send: 'share',
}

const statusColor = {
  waiting: "#fb9b1a",
}

const CompleteScreen = () => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.sub}>
        <View style={[styles.leftWidth, styles.pad]}>
          <View style={styles.iconContainer}>
            <Icon name="mobile" size={25} color="#fb9b1a"/>
          </View>
        </View>
        <View style={[styles.centerWidth, styles.pad]}>
          <Text style={styles.status}>Waiting for Payment</Text>
          <Text style={styles.description}>
            Pulsa tekomsel 15.000 081198953
          </Text>
          <Text style={styles.type}>Dana Pulsa</Text>
        </View>
        <Text style={[styles.pad, styles.cenText]}>16 Nov 2019</Text>
      </View>
      
      <View style={styles.sub}>
          <View style={[styles.leftWidth,styles.pad]}></View>
            <Text style={[styles.centerWidth, styles.pad, styles.top]}>-Rp.15.000</Text>
            <View style={[styles.top, styles.cenn]}>
              <TouchableOpacity style={[styles.continue, styles.pad]}>
                <Text style={[styles.button, styles.pad]}>CONTINUE</Text>
              </TouchableOpacity>
            </View>
      </View>
      <View style={styles.noUpdate}>
        <Text style={styles.cenText}>No more updates</Text>
      </View>
    </ScrollView>
  );
};

export default CompleteScreen;


const styles = StyleSheet.create({
  main: {
    // height: screenHeight * 0.8,
    width: screenWidth *0.98,
    
  },
  leftWidth: {
    width: 0.15 * screenWidth, 
  },
  centerWidth: {
    width: 0.55 * screenWidth,
  },
  status: {
    color: '#fb9b1a',
    fontSize: 12
  },
  iconContainer: {
    borderRadius: 80,
    borderWidth: 1,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#efefef",
  }, 
  description: {
    fontWeight: "900",
    fontSize: 18,
  },
  type: {
    color: "#9f9f9f"
  },
  sub: {
    flex: 1,
    flexDirection: 'row',
  },
  iconCon:{
    flex: 1,
    alignItems:'center',
  },
  pad: {
    paddingVertical: 8, 
    paddingLeft: 8
  },
  cenText: {
    textAlign: 'center',
    color: "#a0a0a0",
  },
  top: {
    borderTopColor: "#a0a0a0",
    borderTopWidth: 1,
  },
  cenn: {
    height:  0.09 * screenHeight,
    justifyContent: 'center'
    
  },
  continue: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#0E8EE7',
    width: 0.28 * screenWidth, 
    height: 0.05 * screenHeight,
    justifyContent: 'center',
  },
  button: {
    textAlign: 'center',
    color: '#0E8EE7',
  },
  noUpdate:{
    backgroundColor: '#F5F5F5',
    height: screenHeight
  }
})