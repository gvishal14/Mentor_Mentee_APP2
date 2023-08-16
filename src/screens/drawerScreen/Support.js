import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Support = () => {
  return (
    <View>
            <View style={styles.container1}>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 18,
            color: '#313131',
            marginLeft: 10,
          }}>
          Help & Support
        </Text>
        <Image
          source={require('../../assets/dashboard/Notification.png')}
          style={styles.image3}
        />
      </View>

      <Image source={require('../../assets/social/Group.png')} style={{marginTop:20,marginLeft:140}}/>

      <Image source={require('../../assets/social/Group4.png')} style={{marginTop:250,marginLeft:100}}/>
      
    </View>
  )
}

export default Support

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  image3: {
    marginLeft: 160,
    justifyContent: 'flex-end',
  },  
})