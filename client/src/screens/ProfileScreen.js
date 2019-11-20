import React from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View, TouchableOpacity, Dimensions
} from 'react-native'
import {ListItem} from 'react-native-elements'




const ProfileScreen = (props) => {

  let list = [
    {
      title: 'Balance',
      icon: require('../../asset/icons/dana-icon-set.png'),
      rightTitle: 'Rp.1840'
    },
    {
      title: 'Saved Card',
      icon: require('../../asset/icons/dana-icon-set.png'),
      rightTitle: '0 Cards'
    },
    {
      title: 'My Bills',
      icon: require('../../asset/icons/dana-icon-set.png'),
      rightTitle: null
    },]
    let list2 = [
    {
      title: 'Apply DANAIN Bisnis Now!',
      icon: require('../../asset/icons/dana-icon-set.png'),
      rightTitle: null,
      subtitle: 'Have a business? Use DANAIN Bisnis to engange more customers'
    },
    {
      title: 'Referral Code',
      icon: require('../../asset/icons/dana-icon-set.png'),
      rightTitle: null,
      subtitle: null
    },
    {
      title: 'Promo Quest',
      icon: require('../../asset/icons/dana-icon-set.png'),
      rightTitle: null,
      subtitle: null
    },]
    let list3 = [
    {
      title: 'Tutorial',
      rightTitle: null
    },
    {
      title: 'FAQ',
      rightTitle: null
    },
    {
      title: 'Terms & Condition',
      rightTitle: null
    },
    {
      title: 'Privacy Policy',
      rightTitle: null
    },]
    list4 = [
    {
      title: 'Settings',
      rightTitle: null
    },
    {
      title: 'App Version',
      rightTitle: '1.5.1'
    },
    {
      title: 'Logout',
      rightTitle: null
    },
  ]

  const onPressOptions = (e) => {
    //navigate
    console.log('option is pressed')
  }

  renderContactHeader = () => {
    const { avatar, name, phoneNum } = props
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


    return (
      <View>
      <View style={styles.mainHeader}>
        <Text style={styles.textHeader}>My Account</Text>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            {renderContactHeader()}
          </View>
          <View style ={styles.verifyContainer}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={{color:'#FFF'}}>VERIFY YOUR ACCOUNT</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{position:"absolute", right: "10%", top: "15%"}}>
            <Text style={{color:'#FFF'}}>X</Text>
        </View>
         {/* ---------- */}
        <View >
        {
          list.map((l) => (
            <ListItem
              title={l.title}
              titleStyle={styles.listFont}
              rightTitle={l.rightTitle}
              rightTitleStyle={{ fontSize: 15 }}
              chevron={{size:24}}
              onPress={(e) => onPressOptions(e)}
              containerStyle={styles.listItemContainer}
              leftIcon={
                <Image
                source={l.icon}
                style={styles.imgconContainer}
              />}
              pad={0}
              />
          ))
        }
        <InfoText text="FEATURE" />
        {
          list2.map((l) => (
            <ListItem
            title={l.title}
            titleStyle={styles.listFont}
            rightTitle={l.rightTitle}
            subtitleStyle={{fontSize: 12}}
            onPress={(e) => onPressOptions(e)}
            containerStyle={styles.listItemContainer}
            subtitle={l.subtitle}
            chevron={{size:24}}
            leftIcon={
              <Image
              source={l.icon}
              style={styles.imgconContainer}
            />}
            pad={0}
            />
          ))
        }
        <InfoText text="GENERAL INFO" />
        {
          list3.map((l) => (
            <ListItem
            title={l.title}
            titleStyle={styles.listFont}
            rightTitle={l.rightTitle}
            chevron={{size:24}}
            rightTitleStyle={{ fontSize: 15 }}
            onPress={(e) => onPressOptions(e)}
            containerStyle={styles.listItemContainer}
            />
          ))
        }
        <InfoText text="ACCOUNT" />
        {
          list4.map((l) => (
            <ListItem
            title={l.title}
            titleStyle={styles.listFont}
            rightTitle={l.rightTitle}
            rightTitleStyle={{ fontSize: 15 }}
            chevron={{size:24}}
            onPress={(e) => onPressOptions(e)}
            containerStyle={styles.listItemContainer}
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

export default ProfileScreen


const InfoText = ({ text }) => (
  <View style={styles.infoTextContainer}>
    <Text style={styles.infoText}>{text}</Text>
  </View>
)

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  imgconContainer:{
      alignItems: 'center',
      backgroundColor: '#0E8EE7',
      borderColor: 'transparent',
      height: 30,
      justifyContent: 'center',
      marginLeft: 10,
      marginRight: 18,
      width: 30,
  },
  cardContainer: {
    flex: 1,
    paddingBottom: 1
  },
  container: {
    flex: 1,
  },
  mainHeader: {
    backgroundColor: '#0E8EE7',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 18,
    marginBottom: 10,
    color: '#FFF'
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#0E8EE7',
    marginBottom: 10
  },
  avatarContainer:{
    marginBottom: 5,
    marginTop: 30,
    borderRadius: 10,
    height: 120,
    width: 120,
    backgroundColor:'#FFF', 
    alignItems: 'center',
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
    height: 45,
    width: 45,
    marginVertical: 37.5,
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
    marginBottom: 60,
    height: 150
  },
  verifyContainer: {
    height: 50,
    padding: 15,
    marginHorizontal: 15,
    backgroundColor: '#0E8EE7',
    borderRadius: 3,
    alignItems:'center',
    marginBottom: 10
    
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  listItemContainer: {
    height:70,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
  listFont: {
      color: "#4a4a4a", 
      fontSize: 15,
  },
  infoTextContainer: {
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
