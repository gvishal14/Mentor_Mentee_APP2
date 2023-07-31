import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/dashboardScreen/Home';
import Program from '../../screens/dashboardScreen/Program';
import Session from '../../screens/dashboardScreen/Session';
import Chat from '../../screens/dashboardScreen/Chat';

const Tab = createBottomTabNavigator();
const TabStack = () => {
  return (
    <Tab.Navigator
      // screenOptions={{
      //   tabBarStyle: { position: 'absolute' },
      //   headerShown:true
      // }}
      //   tabBarPosition="bottom"
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Session" component={Program} />
        <Tab.Screen name="Program" component={Session} />
        <Tab.Screen name="Chat" component={Chat} />
        
        
      </Tab.Navigator>
  )
}

export default TabStack

const styles = StyleSheet.create({})