import React from 'react'
import { View, Text ,TouchableOpacity,Image,StyleSheet} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: "100%",
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});


const MapScreen = ()=>{


    return (
     <>
      <View style={styles.container}>
     <MapView
       style={styles.map}
       region={{
         latitude: 24.9124544,
         longitude: 67.05455,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
     
     </>
    )
}

export default MapScreen
