import React from 'react'
import { Icon } from 'react-native-elements'
// import {Icon} from "native-base"
import Colors from '../../constants'

const Chevron = () => (
  <Icon
    name="chevron-right"
    type="entypo"
    color={Colors.lightGray2}
    style={{ marginLeft: -15, width: 20 }}
  />
)

export default Chevron