import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import dashboard from '../../screens/dashboardScreen/dashboard';
import TabStack from '../TabNavigator';
import DrawerStack from '../drawer';


const Stack = createNativeStackNavigator();
const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="dashboard" component={dashboard} />
      <Stack.Screen name="TabNavigator" component={TabStack} options={{headerShown:false}}/>
      <Stack.Screen name="drawer" component={DrawerStack}/>
    </Stack.Navigator>
  )
}

export default DashboardStack
