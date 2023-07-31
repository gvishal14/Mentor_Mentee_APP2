import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  { createDrawerNavigator } from '@react-navigation/drawer'
import DashboardStack from '../DashbaordStack';
import Home from '../../screens/dashboardScreen/Home';
import TabStack from '../TabNavigator';


const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  return (
   <Drawer.Navigator initialRouteName='DashboardStack'>
    <Drawer.Screen name='Home' component={TabStack} />
    <Drawer.Screen name="DashboardStack" component={DashboardStack}/>
    {/* <Drawer.Screen name='Home' component={Home}/> */}


   </Drawer.Navigator>
  )
}

export default DrawerStack

