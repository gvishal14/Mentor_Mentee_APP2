import { StyleSheet, Text, View,ScrollView,Image,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const EditSession = () => {
 return(
  <ScrollView>
  <View style={styles.container1}>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 18,
            color: '#313131',
            marginLeft: 10,
          }}>
          Edit Session
        </Text>
        <Image
          source={require('../../../assets/dashboard/Notification.png')}
          style={styles.image3}
        />
      </View>
      <View>
      <Image
        source={require('../../../assets/ProgList/Screenshot.png')}
        style={{
          height: 200,
          width: 350,
          borderRadius: 10,
          marginLeft: 5,
          marginTop: 10,
        }}
      />
    </View>

    <View style={styles.inputContainer}>
    <TextInput style={styles.input2} placeholder="Session Name" />
  </View>

  <View style={styles.inputContainer}>
  <TextInput style={styles.input2} placeholder="Session Link" />
</View>

<View style={styles.inputContainer}>
<TextInput style={styles.input2} placeholder="Date" />
<TouchableOpacity>
<View>
<Image source={require('../../../assets/Add/Calendar.png')} style={{marginRight:10}}/>
</View>
</TouchableOpacity>
</View>


<View style={styles.inputContainer}>
<TextInput style={styles.input2} placeholder="Time" />
<TouchableOpacity>
<View>
<Image source={require('../../../assets/Add/Calendar.png')} style={{marginRight:10}}/>
</View>
</TouchableOpacity>
</View>

<View style={styles.inputContainer}>
<TextInput style={styles.input2} placeholder="Session Duration" />
</View>

<View style={styles.inputContainer}>
<TextInput style={styles.input2} placeholder="Location" />
</View>

<View style={styles.inputContainer}>
<TextInput style={styles.input} placeholder="Session Description" />
</View>

<TouchableOpacity style={styles.button} >
<Text style={styles.buttonText} >Save Session</Text>
</TouchableOpacity>


  </ScrollView>
 )
}

export default EditSession

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  image3: {
    marginLeft: 200,
    justifyContent: 'flex-end',
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