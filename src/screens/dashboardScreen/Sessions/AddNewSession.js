import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image,TextInput } from 'react-native'
import React from 'react'

const AddNewSession = () => {
  return (
    <ScrollView>
    <TouchableOpacity>
<View style={styles.inputContainer1}>
<Image source={require('../../../assets/Add/Group12.png')} style={{marginLeft:70}}/>
</View>
</TouchableOpacity>


<View style={styles.inputContainer}>
<TextInput style={styles.input2} placeholder="Session Name" />
</View>


<View style={styles.inputContainer}>
<TextInput style={styles.input2} placeholder="Session Link" />
</View>


<View style={styles.inputContainer}>
<TextInput style={styles.input2} placeholder="Session Duration" />
</View>


<View style={styles.inputContainer}>
<TextInput style={styles.input2} placeholder="Location " />
</View>

<View style={styles.inputContainer}>
<TextInput style={styles.input} placeholder="Session Description" />
</View>

<TouchableOpacity style={styles.button} >
<Text style={styles.buttonText} >Add Session</Text>
</TouchableOpacity>

    </ScrollView>
  )
}

export default AddNewSession

const styles = StyleSheet.create({
  inputContainer1: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',

  },
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input2: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 150,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FE4D4D',
    width: 350,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20
    
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
})