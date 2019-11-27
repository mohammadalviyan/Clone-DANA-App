import React, {useEffect} from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text, ImageBackground,
  View, TouchableOpacity, Dimensions
} from 'react-native'
import {ListItem} from 'react-native-elements'
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome'
import {getUser} from '../../Redux/Actions/user'

const UserIcon = () => {
  return (
    <View style={styles.customIcon}>
      <Icon name="user" size={35} color="#F5F5F5"/>
    </View>
  )
}

const SayaScreen = (props) => {
  // const user =  useSelector (state => state.user)
  const {resultLogin, isFulfilled} = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  // useEffect( () => {
  //   const getData = async () => {
  //       await dispatch( getUser())
  //       // console.log(user.resultUser)
  //   }
  //   getData();
  // }, [])

  let list = [
    {
      title: 'Saldo',
      icon: require('../../../asset/icons/dana-icon-set.png'),
      rightTitle: `Rp ${resultLogin.balance}`,
      screen: 'Balance'
    },
    {
      title: 'Kartu Tersimpan',
      icon: require('../../../asset/icons/dana-icon-set.png'),
      rightTitle: '0 Cards',
      screen: 'Cards'
    },
    {
      title: 'Tagihanku',
      icon: require('../../../asset/icons/dana-icon-set.png'),
      rightTitle: null,
      screen: 'Bills'
    },]
    let list2 = [
    {
      title: 'Daftar DANAIN Bisnis Sekarang!',
      icon: require('../../../asset/icons/dana-icon-set.png'),
      rightTitle: null,
      subtitle: 'Punya bisnis? Pakai DANAIN Bisnis untuk menjangkau lebih banyak pelanggan',
      screen: 'Apply'
    },
    {
      title: 'Kode Undangan',
      icon: require('../../../asset/icons/dana-icon-set.png'),
      rightTitle: null,
      subtitle: null,
      screen: 'Referral'
    },
    {
      title: 'Promo Quest',
      icon: require('../../../asset/icons/dana-icon-set.png'),
      rightTitle: null,
      subtitle: null,
      screen: 'Promo'
    },]
    let list3 = [
    {
      title: 'Tutorial',
      rightTitle: null,
      screen: 'Tutorial'
    },
    {
      title: 'FAQ',
      rightTitle: null,
      screen: 'Faq'
    },
    {
      title: 'Syarat & Kondisi',
      rightTitle: null,
      screen: 'Terms',
    },
    {
      title: 'Kebijakan Privasi',
      rightTitle: null,
      screen: 'Privacy'
    },]
    let list4 = [
    {
      title: 'Pengaturan',
      rightTitle: null,
      screen: 'Setting'
    },
    {
      title: 'Versi App',
      rightTitle: '1.5.1',
      screen: 'Version'
    },
    {
      title: 'Keluar',
      rightTitle: null,
      screen: 'Logout'
    },
  ]

  const deleteToken = () => {
    try {
      AsyncStorage.removeItem('user');
      props.navigation.navigate('LoadingScreen');
    } catch (err) {
      console.log(`The error is: ${err}`);
    }
  };

  const onPressOptions = (e, screen) => {
    if (screen === "Setting" || "Promo") {
      // console.log(`Navigate to ${screen}`)
      props.navigation.navigate(screen)
    } else if (screen === 'Logout') {
      deleteToken()
      props.navigation.navigate('AuthScreen');
    } else {
      // console.log(`Command to ${screen}`)
    }
  }

  const renderContactHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.userRow}>
          <View style={styles.avatarContainer}>
            <ImageBackground
              source={{
                uri: 'http://pngimg.com/uploads/qr_code/qr_code_PNG2.png',
              }}
              imageStyle={styles.qrcodeBackground}
              style={{width: '100%', height: '100%'}}>
              {!isFulfilled ? (
                <UserIcon />
              ) : resultLogin.image === '/images/avatar.png' ? (
                <UserIcon />
              ) : (
                <Image
                  style={styles.userImage}
                  source={{
                    uri: `https://clonedana.herokuapp.com/${resultLogin.image}`,
                  }}
                />
              )}
            </ImageBackground>
          </View>

          <View style={styles.userNameRow}>
            <Text style={styles.userNameText}>{resultLogin.name}</Text>
          </View>
          <View style={styles.userBioRow}>
            <Text style={styles.userBioText}>{resultLogin.phone}</Text>
          </View>
        </View>
      </View>
    );
  }


    return (
      <View>
      <View style={styles.mainHeader}>
        <Text style={styles.textHeader}>Akun Saya</Text>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            {renderContactHeader()}
          </View>
          <View style ={styles.verifyContainer}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={{color:'#FFF', marginRight: 40, fontSize: 15}}>VERIFIKASI AKUN KAMU</Text>
              <Icon name="shield" size={25} color="white"/>
            </TouchableOpacity>
          </View>
        </View>
         {/* ---------- */}
        <View >
        {
          list.map((l) => (
            <ListItem
              title={l.title}
              titleStyle={styles.listFont}
              rightTitle={l.rightTitle}
              rightTitleStyle={{ fontSize: 15, color:  "#78b9e3"}}
              chevron={{size:24}}
              onPress={(e) => onPressOptions(e, l.screen)}
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
            onPress={(e) => onPressOptions(e, l.screen)}
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
            onPress={(e) => onPressOptions(e, l.screen)}
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
            onPress={(e) => onPressOptions(e, l.screen)}
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

export default SayaScreen


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
    marginBottom: 10,
    paddingTop: 10
  },
  avatarContainer:{
    marginBottom: 5,
    marginTop: 30,
    borderRadius: 10,
    height: 120,
    width: 120,
    backgroundColor:'#FFF', 
    alignItems: 'center',
    justifyContent: "center"
  },
  customIcon :{
    borderRadius: 50,
    height: 40,
    width: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 40,

  },
  qrcodeBackground : {
    opacity: 0.8,
    alignItems: "center"
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
    marginHorizontal: 15,
    backgroundColor: '#0E8EE7',
    borderRadius: 3,
    justifyContent: "center",
    alignItems:'center',
    marginBottom: 10
    
  },
  buttonContainer: {
    flexDirection: "row",
    paddingHorizontal: 60,
    justifyContent: 'space-evenly',
    alignItems: "center",
    // backgroundColor: "red",
    flex: 1
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
