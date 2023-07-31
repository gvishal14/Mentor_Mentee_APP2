import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import signup from '../../screens/authScreen/signup';
import Spash from '../../screens/authScreen/Spash';
import Intro from '../../screens/authScreen/intro';
import Intro2 from '../../screens/authScreen/intro2';
import Intro3 from '../../screens/authScreen/intro3';
import login from '../../screens/authScreen/login';
import forget from '../../screens/authScreen/forget';
import otp from '../../screens/authScreen/otp';
import reset from '../../screens/authScreen/reset';
import Done from '../../screens/authScreen/done';

const Stack = createNativeStackNavigator();
const AuthStack = () => {

  
  return (
    
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Spash} />
        <Stack.Screen name="Intro1" component={Intro} />
        <Stack.Screen name="Intro2" component={Intro2} />
        <Stack.Screen name="Intro3" component={Intro3} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Signup" component={signup} />
        {/* <Stack.Screen name="Signup2" component={signup2} /> */}
        <Stack.Screen name="forget" component={forget} />
        <Stack.Screen name="otp" component={otp} />
        <Stack.Screen name="Reset" component={reset} />
        <Stack.Screen name="alldone" component={Done}/>
      </Stack.Navigator>
   
    
  )
}

export default AuthStack

