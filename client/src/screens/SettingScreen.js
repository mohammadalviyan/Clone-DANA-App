import React, { useState, useEffect } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View, 
} from 'react-native'
import {ListItem} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-picker';
import {TextMask} from 'react-native-masked-text'
  


const SettingScreen = (props) => {
  const [state, setState] = useState({
    type: '',
    image: null,
    name: '',
    phone: null,
    email: null,
    security: "Off"

})

  const selectImage = async () => {
    ImagePicker.showImagePicker({noData:true, mediaType:'photo'}, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {   
          setState({
            image: response.uri,
          });
        }
      });
  }

  useEffect( () => {
    const { avatar, name, phoneNum, type, email } = props
    setState({
        name,
        phone: phoneNum,
        image: avatar,
        type,
        email
    })
  }, [])


  let list = [
    {
      title: 'Account Type',
      rightTitle: state.type,
      command: "acc-type"
    },
    {
      title: 'Change Profile Picture',
      rightTitle: state.image ? <Image source ={state.image} style={{height:10}}/> : <Icon name="user" style={{color: "0E8EE7"}}/>,
      command: "picture"
    },
    {
      title: 'Change Name',
      rightTitle: state.name ? state.name : state.phone,
      command: "name"
    },]

    let list2 = [
    {
      title: 'Mobile No.',
      rightTitle: <TextMask value={state.phone}
                    type={'cel-phone'}
                    options= {{obfuscated: true}}
      />,
      command: "phone"
    },
    {
      title: 'Email Address',
      rightTitle: state.email ? <TextMask value={state.email}
                   type={'zip-code'}
                   options= {{obfuscated: true}}
                   /> : "Unset",
      command: "email"
    },
    {
      title: 'Change Pin',
      rightTitle: null,
      command: "pin"
    },
    {
        title: 'Security Questions',
        rightTitle: state.security,
        command: "security"
      },
]


  const onPressOptions = (e, command) => {
    switch (command) {
        case 'acc-type':
            console.log('acc-type is pressed')
            return {

            };
        case 'picture':
            console.log('picture is pressed')
            selectImage()
            return {
                
            };
        case 'name':
            console.log('name is pressed')
            return {

            };
        case 'phone':
            console.log('phone is pressed')
            return {
    
            };
        case 'email':
            console.log('email is pressed')
            return {

            };
        case 'pin':
            console.log('pin is pressed')
            return {

            };
        case 'security':
            console.log('security is pressed')
            return {

            };
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
              onPress={(e) => onPressOptions(e,l.command)}
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
            onPress={(e) => onPressOptions(e,l.command)}
            containerStyle={styles.listItemContainer}
            subtitle={l.subtitle}
            chevron={{size:24}}
            pad={20}
            />
          ))
        }
        </View>
        {/* ---------- */}

        <View style={{height: 400}}>
          <Image source={state.image} style={{width:'80%', height:20, resizeMode:'contain'}}/>
        </View>

      </ScrollView>
      </View>
    )
}

export default SettingScreen


const InfoText = ({ text }) => (
  <View style={styles.infoTextContainer}>
    <Text style={styles.infoText}>{text}</Text>
  </View>
)

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
