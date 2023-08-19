import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import RootStack from './src/navigators/root';
import { Calendar } from 'react-native-calendars';




const Stack = createNativeStackNavigator();
const App = () => {
 
 
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (

    <Provider store={store}>
      <NavigationContainer>
    <RootStack/>

    </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

