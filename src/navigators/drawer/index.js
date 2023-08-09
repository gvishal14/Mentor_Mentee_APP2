import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  { createDrawerNavigator } from '@react-navigation/drawer'
import DashboardStack from '../DashbaordStack';
import Home from '../ProgramStack/Home';
import TabStack from '../TabNavigator';
import Account from '../../screens/drawerScreen/Account';
import EmergencyContact from '../../screens/drawerScreen/EmergencyContact';
import BankDetails from '../../screens/drawerScreen/BankDetails';
import ChangePass from '../../screens/drawerScreen/ChangePass';
import DefaultUser from '../../screens/drawerScreen/DefaultUser';
import PaymentHistory from '../../screens/drawerScreen/PaymentHistory';
import Rating from '../../screens/drawerScreen/Rating';
import ReferEarn from '../../screens/drawerScreen/ReferEarn';
import Social from '../../screens/drawerScreen/Social';
import Support from '../../screens/drawerScreen/Support';
import Terms from '../../screens/drawerScreen/Terms';
import Account1 from '../../screens/drawerScreen/Account1';


const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  return (
   <Drawer.Navigator initialRouteName='TabStack' screenOptions={{headerShown:false}}>
    <Drawer.Screen name='TabStack' component={TabStack} options={{headerShown:false}}/>
    {/* <Drawer.Screen name="DashboardStack" component={DashboardStack} options={{headerShown:false}}/>
    <Drawer.Screen name='Home' component={Home}/> */}
    <Drawer.Screen name='DefaultUser' component={DefaultUser}/>
    <Drawer.Screen name='Account1' component={Account1}/>
    {/* <Drawer.Screen name='Account' component={Account}/> */}
    <Drawer.Screen name='EmergencyContact' component={EmergencyContact}/>
    <Drawer.Screen name='BankDetails' component={BankDetails}/>
    <Drawer.Screen name='PaymentHistory' component={PaymentHistory}/>
    <Drawer.Screen name='ChangePass' component={ChangePass}/>
    <Drawer.Screen name='ReferEarn' component={ReferEarn}/>
    <Drawer.Screen name='Social' component={Social}/>
    <Drawer.Screen name='Rating' component={Rating}/>
    <Drawer.Screen name='Terms' component={Terms}/>
    <Drawer.Screen name='Support' component={Support}/>



   </Drawer.Navigator>
  )
}

export default DrawerStack

