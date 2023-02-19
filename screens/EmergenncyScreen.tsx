import React from 'react'
import { View, Text ,TouchableOpacity,Image} from 'react-native'
import styles from '../styles'
import Icon from 'react-native-vector-icons/MaterialIcons';



const EmergencyScreen = ({navigation}) => {






    return (
     <>
     <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",margin:10}}>
<Text style={[styles.textBold,styles.textBlack,styles.fs3,styles.textCenter,styles.m1]}>Emergency Help Line </Text><Icon name="contact-phone" color="grey" size={30}/>
     </View>





<View>
   <Text style={[styles.textBold,styles.textBlack,styles.textCenter,styles.mt1,styles.fs1]}>Choose Your Emergency</Text>

   <Text style={[styles.textCenter,styles.mt5]}><Icon name="healing" color="red" size={200}/></Text>
</View>

<View style={{position:"absolute",bottom:50,width:"100%"}}>

     <TouchableOpacity style={[styles.w100,styles.flexCenter,styles.m1]} onPress={()=>{
        navigation.navigate("MapScreen")
     }}>
        <Text style={[styles.roundedPill,styles.textLight,styles.textCenter,styles.w75,styles.bgDanger,styles.fs2,styles.p1]}>Fire</Text>
     </TouchableOpacity>

     <TouchableOpacity style={[styles.w100,styles.flexCenter,styles.m1]} onPress={()=>{
        navigation.navigate("MapScreen")
     }}>
        <Text style={[styles.roundedPill,styles.textLight,styles.textCenter,styles.w75,styles.bgDanger,styles.fs2,styles.p1]}>Medical</Text>
     </TouchableOpacity>

     <TouchableOpacity style={[styles.w100,styles.flexCenter,styles.m1]} onPress={()=>{
        navigation.navigate("MapScreen")
     }}>
        <Text style={[styles.roundedPill,styles.textLight,styles.textCenter,styles.w75,styles.bgDanger,styles.fs2,styles.p1]}>Accident</Text>
     </TouchableOpacity>
     </View>
     
     </>
    )
}

export default EmergencyScreen
