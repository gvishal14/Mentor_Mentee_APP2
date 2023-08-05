import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProgCategory from '../../screens/dashboardScreen/Programs/ProgCategory'

import ProgDetailsS from '../../screens/dashboardScreen/Programs/ProgDetailsS'
import ProgList from '../../screens/dashboardScreen/Programs/ProgList'
import RegisteredMentees from '../../screens/dashboardScreen/Programs/RegisteredMentees'
import CompletedSessions from '../../screens/dashboardScreen/Programs/ProgDetailsMore/CompletedSessions'
import SelectSession from '../../screens/dashboardScreen/Programs/ProgDetailsMore/Raise/SelectSession'
import SelectMentees from '../../screens/dashboardScreen/Programs/ProgDetailsMore/Raise/SelectMentees'
import AddComment from '../../screens/dashboardScreen/Programs/ProgDetailsMore/Raise/AddComment'
import Rating from '../../screens/dashboardScreen/Programs/ProgDetailsMore/Rating'
import AddNewProgram from '../../screens/dashboardScreen/Programs/AddNewProgram'


const Stack = createNativeStackNavigator();
const Program = () => {
  return (
   <Stack.Navigator initialRouteName='ProgramCategory' >
    <Stack.Screen name='ProgramCategory' component={ProgCategory}  />
    <Stack.Screen name='Session' component={ProgDetailsS}/>
    <Stack.Screen name='ProgramList' component={ProgList} />
    <Stack.Screen name='RegisteredMentees' component={RegisteredMentees} />
    <Stack.Screen name='CompletedSessions' component={CompletedSessions}/>
    <Stack.Screen name='SelectSession' component={SelectSession}/>
    <Stack.Screen name='SelectMentees' component={SelectMentees}/>
    <Stack.Screen name='AddComment' component={AddComment}/>
    <Stack.Screen name='Rating' component={Rating}/>
    <Stack.Screen name='AddNewProgram' component={AddNewProgram}/>

   </Stack.Navigator> 

  )
}

export default Program

const styles = StyleSheet.create({})