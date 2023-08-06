import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddNewSession from '../../screens/dashboardScreen/Sessions/AddNewSession';
import EditSession from '../../screens/dashboardScreen/Sessions/EditSession';


const Stack = createNativeStackNavigator();
const Session = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name='AddNewSession' component={AddNewSession}/>
    <Stack.Screen name='EditSession' component={EditSession}/>
    </Stack.Navigator>
  )
}

export default Session

const styles = StyleSheet.create({})