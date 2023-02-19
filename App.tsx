import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import AppNavigation from './config/AppNavigation';
import store from './redux/store';
// import {enableLatestRenderer} from 'react-native-maps';






function App() {
//  enableLatestRenderer();
  return (
    <>
    <Provider store={store}>

    
    
       <AppNavigation />
      
     
    </Provider>

    </>
  );
}

export default App;
