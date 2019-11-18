import React, { Component } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View, TouchableOpacity, Dimensions
} from 'react-native'
import {ListItem, Icon } from 'react-native-elements'
import {} from 'react-native-reanimated'
import PropTypes from 'prop-types'

import BaseIcon from './Icon'
import Chevron from './Chevron'
import InfoText from './InfoText'
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  mainHeader: {
    backgroundColor: '#0E8EE7',
    height: 50
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#0E8EE7',
    marginBottom: 10
  },
  avatarContainer:{
    marginBottom: 5,
    marginTop: 10,
    borderRadius: 10,
    height: 100,
    width: 100,
    backgroundColor:'#FFF', 
    alignItems: 'center'
  },
  scroll: {
    backgroundColor: '#F5F5F5',
  },
  userBioRow: {
    marginLeft: 40,
    marginRight: 40,
  },
  userBioText: {
    color: '#fff',
    fontSize: 13.5,
    textAlign: 'center',
  },
  userImage: {
    borderRadius: 60,
    height: 60,
    marginTop: 20,
    marginBottom: 20,
    width: 60,
  },
  userNameRow: {
    marginBottom: 0,
  },
  userNameText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 12,
    height: 150
  },
  verifyContainer: {
    height: 40,
    padding: 12,
    marginHorizontal: 10,
    backgroundColor: '#0E8EE7',
    borderRadius: 3,
    alignItems:'center',
    
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
  listFont: {
      color: "#4a4a4a"
  }
})

class ProfileScreen extends Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phoneNum: PropTypes.number.isRequired,
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    navigation: PropTypes.object.isRequired,
  }

  static defaultProps = {
    containerStyle: {},
  }

  state = {
    pushNotifications: true,
  }

  list = [
    {
      title: 'Balance',
      icon: '../../../asset/icons/dana-icon-set.png',
      rightTitle: 'Rp.1840'
    },
    {
      title: 'Saved Card',
      icon: '../../../asset/icons/dana-icon-set.png',
      rightTitle: '0 Cards'
    },
    {
      title: 'My Bills',
      icon: '../../../asset/icons/dana-icon-set.png',
      rightTitle: null
    },]
    list2 = [
    {
      title: 'Apply DANAIN Bisnis Now!',
      icon: '../../../asset/icons/dana-icon-set.png',
      rightTitle: null
    },
    {
      title: 'Referral Code',
      icon: '../../../asset/icons/dana-icon-set.png',
      rightTitle: null
    },
    {
      title: 'Promo Quest',
      icon: '../../../asset/icons/dana-icon-set.png',
      rightTitle: null
    },]
    list3 = [
    {
      title: 'Tutorial',
      icon: '../../../asset/icons/dana-icon-set.png',
      rightTitle: null
    },
    {
      title: 'FAQ',
      icon: '../../../asset/icons/dana-icon-set.png',
      rightTitle: null
    },
    {
      title: 'Terms & Condition',
      icon: '../../../asset/icons/dana-icon-set.png',
      rightTitle: null
    },
    {
      title: 'Privacy Policy',
      icon: '../../../asset/icons/dana-icon-set.png',
      rightTitle: null
    },]
    list4 = [
    {
      title: 'Settings',
      icon: '../../../asset/icons/dana-icon-set.png',
      rightTitle: null
    },
    {
      title: 'App Version',
      icon: '../../../asset/icons/dana-icon-set.png',
      rightTitle: '1.5.1'
    },
    {
      title: 'Logout',
      icon: '../../../asset/icons/dana-icon-set.png',
      rightTitle: null
    },
  ]

  onPressOptions = () => {
    //navigate
    console.log('option is pressed')
  }

  onChangePushNotifications = () => {
    this.setState(state => ({
      pushNotifications: !state.pushNotifications,
    }))
  }


  renderContactHeader = () => {
    const { avatar, name, phoneNum } = this.props
    return (
      <View style={styles.headerContainer}>
        <View style={styles.userRow}>
            <View style={styles.avatarContainer}>          
                <Image
            style={styles.userImage}
            source={{
              uri: avatar,
            }}
          /></View>

          <View style={styles.userNameRow}>
            <Text style={styles.userNameText}>{name}</Text>
          </View>
          <View style={styles.userBioRow}>
            <Text style={styles.userBioText}>{phoneNum}</Text>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View>
      <View style={styles.mainHeader}></View>
      <ScrollView style={styles.scroll}>
        <View style={[styles.container, this.props.containerStyle]}>
          <View style={styles.cardContainer}>
            {this.renderContactHeader()}
          </View>
          <View style ={styles.verifyContainer}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={{color:'#FFF'}}>VERIFY YOUR ACCOUNT</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{position:"absolute", right: "10%", top: "21%", backgroundColor: 'red'}}>
            <Text style={{color:'#FFF'}}>X</Text>
        </View>
         {/* ---------- */}
        <View >
        {
          this.list.map((l) => (
            <ListItem
              title={l.title}
              titleStyle={styles.listFont}
              rightTitle={l.rightTitle}
              rightTitleStyle={{ fontSize: 15 }}
              onPress={() => this.onPressOptions()}
              containerStyle={styles.listItemContainer}
              // leftIcon={
              //   <Icon source={require(l.icon)} size={10}/>}
              leftIcon={
                <BaseIcon
                  containerStyle={{ backgroundColor: '#FEA8A1' }}
                  icon={{
                    type: 'material',
                    name: 'language',
                  }}
                />
              }
              rightIcon={<Chevron />}
              />
          ))
        }
        <InfoText text="FEATURE" />
        {
          this.list2.map((l) => (
            <ListItem
            title={l.title}
            titleStyle={styles.listFont}
            rightTitle={l.rightTitle}
            rightTitleStyle={{ fontSize: 15 }}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#FEA8A1' }}
                icon={{
                  type: 'material',
                  name: 'language',
                }}
              />
            }
            rightIcon={<Chevron />}
            />
          ))
        }
        <InfoText text="GENERAL INFO" />
        {
          this.list3.map((l) => (
            <ListItem
            title={l.title}
            titleStyle={styles.listFont}
            rightTitle={l.rightTitle}
            rightTitleStyle={{ fontSize: 15 }}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            // leftIcon={
            //   <Icon source={require(l.icon)} size={10}/>}
            rightIcon={<Chevron />}
            />
          ))
        }
        <InfoText text="ACCOUNT" />
        {
          this.list4.map((l) => (
            <ListItem
            title={l.title}
            titleStyle={styles.listFont}
            rightTitle={l.rightTitle}
            rightTitleStyle={{ fontSize: 15 }}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            // leftIcon={
            //   <Icon source={require(l.icon)} size={10}/>}

            rightIcon={<Chevron />}
            />
          ))
        }
        </View>
        {/* ---------- */}

        <View style={{height: 250}}></View>
      </ScrollView>
      </View>
    )
  }
}

export default ProfileScreen