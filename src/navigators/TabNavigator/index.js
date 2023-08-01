import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Program from './Program';
import Session from './Session';
import Chat from './Chat';

const Tab = createBottomTabNavigator();
const TabStack = () => {
  return (
    <Tab.Navigator options={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Tab.Screen name="Session" component={Session} />
        <Tab.Screen name="Program" component={Program} options={{headerShown:false}} />
        <Tab.Screen name="Chat" component={Chat} />
        
        
      </Tab.Navigator>
  )
}

export default TabStack

const styles = StyleSheet.create({})