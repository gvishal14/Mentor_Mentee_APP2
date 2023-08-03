import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProgCategory from '../../screens/dashboardScreen/Programs/ProgCategory'

import ProgDetailsS from '../../screens/dashboardScreen/Programs/ProgDetailsS'
import ProgList from '../../screens/dashboardScreen/Programs/ProgList'
import RegisteredMentees from '../../screens/dashboardScreen/Programs/RegisteredMentees'
import CompletedSessions from '../../screens/dashboardScreen/Programs/ProgDetailsMore/CompletedSessions'


const Stack = createNativeStackNavigator();
const Program = () => {
  return (
   <Stack.Navigator initialRouteName='ProgramCategory' >
    <Stack.Screen name='ProgramCategory' component={ProgCategory}  options={{headerShown:false}} />
    <Stack.Screen name='Session' component={ProgDetailsS} options={{headerShown:false}}/>
    <Stack.Screen name='ProgramList' component={ProgList}  options={{headerShown:false}}/>
    <Stack.Screen name='RegisteredMentees' component={RegisteredMentees}  options={{headerShown:false}}/>
    <Stack.Screen name='CompletedSessions' component={CompletedSessions} options={{headerShown:false}}/>
   </Stack.Navigator> 

  )
}

export default Program

const styles = StyleSheet.create({})