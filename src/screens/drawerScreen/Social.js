import { StyleSheet, Text, View, Image,TextInput,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'

const Social = () => {
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
          Post on Social Media
        </Text>
        <Image
          source={require('../../assets/dashboard/Notification.png')}
          style={styles.image3}
        />
      </View>
      <View style={{marginLeft:30}}>
      <Image source={require('../../assets/social/Frame.png')}/>
      </View>

      <View style={{marginLeft:110,marginTop:30,color:'#313131'  }}>
        <Text style={{fontSize:22}}>
          Post On Social
        </Text>
      </View>
      <View style={{marginLeft:90,color:'#313131' }}>
        <Text style={{fontSize:22}}>
        Media & Get 5% off
        </Text>
      </View>

      <View style={{marginLeft:70,marginTop:10  ,color:'#313131' }}>
        <Text style={{fontSize:16}}>
        On next mentorship session pay
        </Text>
      </View>

      <View style={{marginLeft:10,marginTop:10  ,color:'#313131' }}>
        <Text>
        Paste Your Post Link
        </Text>
      </View>

      <View>
        <TextInput style={styles.inputContainer}
        placeholder='Intergram/test.dsfrghjozisdhvxcguh'/>
      </View>

      <View style={{marginLeft:10,marginRight:60,marginTop:10  ,color:'#313131' }}>
        <Text>
        Terms & Conditions for how it would be awarded to next payment
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Post Now</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Social

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  image3: {
    marginLeft: 130,
    justifyContent: 'flex-end',
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
  button: {
    backgroundColor: '#FE4D4D',
    width: 350,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop:10
    
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
})