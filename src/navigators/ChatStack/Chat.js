import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Chats from '../../screens/dashboardScreen/Chat/Chats';
import ChatList from '../../screens/dashboardScreen/Chat/ChatList'



const Stack = createNativeStackNavigator();
const Chat = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Chats' component={Chats} options={{headerShown:false}}/>
        <Stack.Screen name='ChatScreen' component={ChatList}/>



    </Stack.Navigator>
  )
}

export default Chat

const styles = StyleSheet.create({})