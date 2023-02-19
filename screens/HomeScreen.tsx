import React from 'react'
import { View, Text ,TouchableOpacity,Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles';

const HomeScreen = ({navigation}) => {


const gotoEmergency=()=>{
    navigation.navigate("Emergency")
}



    return (
        <View style={[styles.m1]}>
        <View style={[styles.flexCenter,styles.m2]}>
            <Text style={[styles.textBold,styles.textBlack,styles.fs3]}>Choose Your Emergency <Icon name="medical-services" size={30} color="red" /></Text>
        </View>



<View style={{flexDirection:"row"}}>


        <View style={[styles.rounded,styles.border1,styles.w45,styles.flexCenter,styles.m1]}>
<TouchableOpacity onPress={gotoEmergency}>
    <View>
        <Image source={{uri:"https://seeklogo.com/images/S/sindh-police-pakistan-logo-AB33B35AB3-seeklogo.com.png",width:150,height:150}} style={{resizeMode:"contain"}} />
    </View>
<Text style={[styles.textBlack,styles.m2,styles.fs5,styles.textBold]}>Police <Icon name="arrow-forward" color="red" size={13}/></Text>
</TouchableOpacity>

        </View>
        <View style={[styles.rounded,styles.border1,styles.w45,styles.p1,styles.m1,styles.flexCenter]}>
<TouchableOpacity onPress={gotoEmergency}>
    <View>
        <Image source={{uri:"https://freepngimg.com/thumb/ambulance/4-2-ambulance-transparent.png",width:150,height:150}} style={{resizeMode:"contain"}} />
    </View>
<Text style={[styles.textBlack,styles.m2,styles.fs5,styles.textBold]}>Ambulance <Icon name="arrow-forward" color="red"  size={13}/></Text>
</TouchableOpacity>
</View>       
        </View>

        <View style={[styles.rounded,styles.border1,styles.w45,styles.p1,styles.m1,styles.flexCenter]}>
<TouchableOpacity onPress={gotoEmergency}>
    <View>
        <Image source={{uri:"https://png.pngtree.com/png-clipart/20220824/ourlarge/pngtree-fire-brigade-perspective-view-transparent-png-image_6121743.png",width:150,height:150}} style={{resizeMode:"contain"}} />
    </View>
<Text style={[styles.textBlack,styles.m2,styles.fs5,styles.textBold]}>Fire <Icon name="arrow-forward" color="red"  size={13}/></Text>
</TouchableOpacity>
</View>





        </View>
    )
}

export default HomeScreen
