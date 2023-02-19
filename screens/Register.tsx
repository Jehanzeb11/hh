import React,{useState} from 'react'
import { View,Text , Image, ImageBackground, TextInput, Button, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/userSlice';
import styles from '../styles';


const Register = ({navigation}) => {
  const [username,setName] = useState('')

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {user,loading} = useSelector((state)=>state.user)
    const dispatch = useDispatch()


if (loading) {
  return <View><Text style={[styles.fs3,styles.textBlack]}>Loading...</Text></View>
}
const userData = {username,email,password}

    const gotoHome=()=>{
      dispatch(registerUser(userData))
      navigation.navigate("Home")
    }


  return (
<View>

<View>
  <Text style={[styles.textBold,styles.textBlack,styles.fs1,styles.m2,styles.textCenter]}>Register <Icon name="healing" size={40} color="red" /></Text>
</View>


<View style={[styles.flexCenter,styles.mt5]}>
    <View><Text style={[styles.textBlack,styles.p1]}>User Name : </Text></View>
    
  <TextInput placeholder='Name' onChangeText={(e) => setName(e)} style={[styles.border1,styles.w75,styles.rounded,styles.p1,styles.textDanger,styles.bgBlack]} />
  </View> 


<View style={[styles.flexCenter,styles.mt5]}>
    <View><Text style={[styles.textBlack,styles.p1]}>Email : </Text></View>
    
  <TextInput keyboardType="email-address" placeholder='Email' onChangeText={(e) => setEmail(e)} style={[styles.border1,styles.w75,styles.rounded,styles.p1,styles.textDanger,styles.bgBlack]} />
  </View> 
  <View style={[styles.flexCenter,styles.mt5]}>
  <View><Text style={[styles.textBlack,styles.p1]}>Password : </Text></View>

  <TextInput  secureTextEntry={true} placeholder="Password" onChangeText={(e) => setPassword(e)} style={[styles.border1,styles.w75,styles.rounded,styles.p1,styles.textDanger,styles.bgBlack]} />
  </View>

  <TouchableOpacity style={[styles.flexCenter]} onPress={gotoHome}>
  <Text style={[styles.mt4,styles.p1,styles.bgDanger,styles.textLight,styles.w25,styles.fs4,styles.roundedPill,styles.textCenter]}>Register</Text>
  </TouchableOpacity>

</View>
  )
}

export default Register
