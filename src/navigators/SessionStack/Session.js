import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddNewSession from '../../screens/dashboardScreen/Sessions/AddNewSession';
import EditSession from '../../screens/dashboardScreen/Sessions/EditSession';
import AddNewSession1 from '../../screens/dashboardScreen/Sessions/AddNewSession1';
import SessionList from '../../screens/dashboardScreen/Sessions/SessionList';
import SessionHeader from '../../screens/Header/SessionHeader';
import Calendars from '../../screens/dashboardScreen/Sessions/Calendar';
// import AddNewSession from '../../screens/dashboardScreen/Sessions/1s'

const Stack = createNativeStackNavigator();
const Session = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='SessionList' component={SessionList}/>
      <Stack.Screen name='Calendars' component={Calendars} />
      <Stack.Screen name='AddNewSession1' component={AddNewSession1} />
      <Stack.Screen name='AddNewSession' component={AddNewSession}/>
    {/* <Stack.Screen name='EditSession' component={EditSession} options={{headerShown:false}}/> */}

    {/* <Stack.Screen name='1s' component={AddNewSession}/> */}

    

    </Stack.Navigator>
  )
}

export default Session

const styles = StyleSheet.create({})