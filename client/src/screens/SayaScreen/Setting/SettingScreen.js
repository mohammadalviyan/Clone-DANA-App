import React, { useState, useEffect } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View, 
  ToastAndroid
} from 'react-native'
import {ListItem} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-picker'
import {TextMask} from 'react-native-masked-text'
import {useSelector, useDispatch} from 'react-redux';
import {getUser, updateUser} from '../../../Redux/Actions/user';


const SettingScreen = (props) => {
  const user =  useSelector (state => state.user)
  const {resultLogin, isFulfilled} = useSelector((state) => state.auth)

  const dispatch = useDispatch()



  const selectImage = async (e) => {
    ImagePicker.showImagePicker({noData:true, mediaType:'photo'}, (response) => {
        // console.log('Response = ', response);
      
        if (response.didCancel) {
          // console.log('User cancelled image picker');
        } else if (response.error) {
          // console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          // console.log('User tapped custom button: ', response.customButton);
        } else {
          // console.log(response.uri, "response image")
          const newUser = {
            ...resultLogin,
            image: {
              uri: response.uri,
              name: response.fileName,
              type: response.type
            }
          }   
          dispatch(updateUser("image", resultLogin.id, newUser))
          // console.log(user.resultUser, "after updating")
          if (isFulfilled) {
            ToastAndroid.show('Berhasil Disimpan!', ToastAndroid.LONG);
          }  
        }
      });
  }

  useEffect( () => {
  }, [])


  let list = [
    {
      title: 'Account Type',
      rightTitle: isFulfilled ? resultLogin.type_user : null,
      screen: "UserType"
    },
    {
      title: 'Change Profile Picture',
      rightTitle: !isFulfilled ?  <Icon name="user"/> : resultLogin.image === "/images/avatar.png" ?
      <Icon name="user"/> : <Image source ={{uri: `https://clonedana.herokuapp.com${resultLogin.image}`}} style={styles.profileImage}/>,
      screen: "Picture"
    },
    {
      title: 'Change Name',
      rightTitle: isFulfilled ? resultLogin.name : null,
      screen: "Name"
    },]

    let list2 = [
    {
      title: 'Mobile No.',
      rightTitle: isFulfilled ? <TextMask value={resultLogin.phone}
        type={'cel-phone'}
        options= {{withDDD: true, dddMask: "(+62)"}}
      /> : null,
      screen: "Phone"
    },
    {
      title: 'Email Address',
      rightTitle: isFulfilled ? 
      <Text>{resultLogin.email}</Text>
      : "Unset",
      screen: "Email"
    },
    {
      title: 'Change Pin',
      rightTitle: null,
      screen: "Pin"
    },
    {
        title: 'Security Questions',
        rightTitle: "OFF",
        screen: "Security"
      },
]


  const onPressOptions = (e, screen) => {
    if (screen === "Picture") {
      // // console.log('picture is pressed')
      selectImage(e)
    } else if (screen === "Security") {
      // console.log('security is pressed')
    } else {
      // console.log(`Navigate to ${screen}`)
      props.navigation.navigate(screen)
    }
  }

    return (
      <View>
      <View style={styles.mainHeader}>
        <Text style={styles.textHeader}>Settings</Text>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
        </View>
         {/* ---------- */}
        <View >
        <InfoText text="PROFILE SETTINGS" />
        {
          list.map((l) => (
            <ListItem
              title={l.title}
              titleStyle={styles.listFont}
              rightTitle={l.rightTitle}
              rightTitleStyle={{ fontSize: 15 }}
              chevron={{size:24}}
              onPress={(e) => onPressOptions(e,l.screen)}
              containerStyle={styles.listItemContainer}
              pad={0}
              />
          ))
        }
        <InfoText text="SECURITY SETTINGS" />
        {
          list2.map((l) => (
            <ListItem
            title={l.title}
            titleStyle={styles.listFont}
            rightTitle={l.rightTitle}
            subtitleStyle={{fontSize: 12}}
            onPress={(e) => onPressOptions(e,l.screen)}
            containerStyle={styles.listItemContainer}
            subtitle={l.subtitle}
            chevron={{size:24}}
            pad={20}
            />
          ))
        }
        </View>
        {/* ---------- */}

        <View style={{height: 200}}>
        </View>

      </ScrollView>
      </View>
    )
}

export default SettingScreen;


const InfoText = ({ text }) => (
  <View style={styles.infoTextContainer}>
    <Text style={styles.infoText}>{text}</Text>
  </View>
)

const styles = StyleSheet.create({
  profileImage:{
    height: 40,
    width: 40,
    borderRadius: 20,

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
