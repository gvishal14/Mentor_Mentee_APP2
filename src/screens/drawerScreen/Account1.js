import { StyleSheet, Text, View,Image, TextInput,ScrollView } from 'react-native'
import React from 'react'

const Account1 = () => {
  return (
    <ScrollView>
    <View>
              <View style={styles.container1}>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 18,
            color: '#313131',
            marginLeft: 10,
          }}>
          Account
        </Text>
        <Image
          source={require('../../assets/dashboard/Notification.png')}
          style={styles.image3}
        />
      </View>

      <View style={{marginLeft: 10}}>
        <Image source={require('../../assets/Account/profile.png')} />
      </View>
      
      

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="First Name" 
        // onChangeText={text => setProgramName(text)} 
        // value={programName} 
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="Last Name" 
        // onChangeText={text => setProgramName(text)} 
        // value={programName} 
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="Email Id" 
        // onChangeText={text => setProgramName(text)} 
        // value={programName} 
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="Date Of Birth" 
        // onChangeText={text => setProgramName(text)} 
        // value={programName} 
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="Gender" 
        // onChangeText={text => setProgramName(text)} 
        // value={programName} 
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="Verification ID*" 
        // onChangeText={text => setProgramName(text)} 
        // value={programName} 
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="Language*" 
        // onChangeText={text => setProgramName(text)} 
        // value={programName} 
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="Address*" 
        // onChangeText={text => setProgramName(text)} 
        // value={programName} 
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="City*" 
        // onChangeText={text => setProgramName(text)} 
        // value={programName} 
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="Province*" 
        // onChangeText={text => setProgramName(text)} 
        // value={programName} 
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="Postal Code*" 
        // onChangeText={text => setProgramName(text)} 
        // value={programName} 
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="Country*" 
        // onChangeText={text => setProgramName(text)} 
        // value={programName} 
        />
      </View>

    </View>
    </ScrollView>
    
  )
}

export default Account1

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