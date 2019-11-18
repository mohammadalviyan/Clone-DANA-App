import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 9,
    backgroundColor: '#F5F5F5'
    // backgroundColor: '#F4F5F4',
  },
  infoText: {
    fontSize: 9,
    marginLeft: 20,
    color: 'gray',
    fontWeight: '400',
  },
})
const InfoText = ({ text }) => (
  <View style={styles.container}>
    <Text style={styles.infoText}>{text}</Text>
  </View>
)

InfoText.propTypes = {
  text: PropTypes.string.isRequired,
}

export default InfoText