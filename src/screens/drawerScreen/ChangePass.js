import { StyleSheet, Text, View,ScrollView,TextInput,Image } from 'react-native'
import React from 'react'

const ChangePass = () => {
  return (
    <View style={styles.container1}>
    <Text
      style={{
        fontWeight: 500,
        fontSize: 18,
        color: '#313131',
        marginLeft: 10,
      }}>
      Change Password
    </Text>
    <Image
      source={require('../../assets/dashboard/Notification.png')}
      style={styles.image3}
    />
  </View>

  )
}

export default ChangePass

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  image3: {
    marginLeft: 150,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
})