import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



import { NavigationContainer } from '@react-navigation/native'
import AuthStack from '../authStack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DrawerStack from '../drawer'
import TabStack from '../TabNavigator'
import DashboardStack from '../DashbaordStack'

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AuthStack" component={AuthStack}/>
      <Stack.Screen name="DashboardStack" component={DashboardStack}/>
      <Stack.Screen name="TabStack" component={TabStack}/>
      <Stack.Screen name="DrawerStack" component={DrawerStack} options={{headerShown:false}}/>
      
        
    </Stack.Navigator>
    
  )
}

export default RootStack

