import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  { createDrawerNavigator } from '@react-navigation/drawer'
import DashboardStack from '../DashbaordStack';
import Home from '../TabNavigator/Home';
import TabStack from '../TabNavigator';


const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  return (
   <Drawer.Navigator screenOptions={{headerShown:false}}>
    <Drawer.Screen name='TabStack' component={TabStack} options={{headerShown:false}}/>
    <Drawer.Screen name="DashboardStack" component={DashboardStack} options={{headerShown:false}}/>
    <Drawer.Screen name='Home' component={Home}/>


   </Drawer.Navigator>
  )
}

export default DrawerStack

