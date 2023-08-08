import { StyleSheet, Text, View,Image,TextInput} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
            <View style={styles.container1}>
        <Image
          source={require('../../assets/dashboard/Ellipse7.png')}
          style={styles.image}
        />
        <Text style={{fontWeight:500,fontSize:18,color: '#313131', marginLeft: 10}}>Programs</Text>
        <Image
          source={require('../../assets/dashboard/Notification.png')}
          style={styles.image3}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/dashboard/Search.png')}
          style={styles.icon}
        />
        <TextInput style={styles.input} placeholder="Search" />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container1: {
      alignItems: 'center',
      padding: 10,
      flexDirection: 'row',
    },

    image: {
      marginLeft: 4,
      justifyContent: 'flex-end',
    },
    image3: {
      marginLeft: 180,
      justifyContent: 'flex-end',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 40,
      marginVertical: 10,
      paddingHorizontal: 10,
      height: 40,
      borderColor: '',
      borderWidth: 1,
      borderRadius: 10,
      marginRight: 10,
      marginLeft: 10,
    }
})