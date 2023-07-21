import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'

const Spash = ({navigation}) => {
    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate('Intro1')
        },3000)
    }, [])
  return (
    <View>
      
      <Image
          source={require('../assets/Splash1.png')}
          style={{marginTop: 14}}></Image>
    </View>
  )
}

export default Spash

const styles = StyleSheet.create({})