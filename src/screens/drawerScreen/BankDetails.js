import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React from 'react'

const BankDetails = () => {
  return (
    <ScrollView>
      <View style={styles.container1}>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 18,
            color: '#313131',
            marginLeft: 10,
          }}>
          Bank Details
        </Text>
        <Image
          source={require('../../assets/dashboard/Notification.png')}
          style={styles.image3}
        />
      </View>
    </ScrollView>
  )
}

export default BankDetails

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  image3: {
    marginLeft: 220,
    justifyContent: 'flex-end',
  },
})