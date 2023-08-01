import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProgCategory from '../../screens/dashboardScreen/Programs/ProgCategory'
import ProgDetailsM from '../../screens/dashboardScreen/Programs/ProgDetailsM'
import ProgDetailsS from '../../screens/dashboardScreen/Programs/ProgDetailsS'
import ProgList from '../../screens/dashboardScreen/Programs/ProgList'


const Stack = createNativeStackNavigator();
const Program = () => {
  return (
   <Stack.Navigator initialRouteName='ProgramCategory' >
    <Stack.Screen name='ProgramCategory' component={ProgCategory}  options={{headerShown:false}} />
    <Stack.Screen name='More' component={ProgDetailsM}/>
    <Stack.Screen name='Session' component={ProgDetailsS}/>
    <Stack.Screen name='ProgramList' component={ProgList}/>
   </Stack.Navigator> 

  )
}

export default Program

const styles = StyleSheet.create({})