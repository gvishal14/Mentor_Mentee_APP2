import { StyleSheet, Text, View, Image, TextInput,ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { Reset } from '../../API'

const reset = ({navigation, route}) => {
//   const handleNext4 = ()=>{
//     navigation.navigate('Signup')
//   }

// const type = route.params?.type;
// let token = type === 'inside' ? route.params?.token:'';
let token = route.params?.token
// let types = route.params?.type


const [newPassword, setNewPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')

const [loading, setLoading] = useState(false)
const [error, setError] = useState('')


const handleSavePassword = () => {
    if(!newPassword || ! confirmPassword){
        return Alert.alert('Please fill in both fields')
    }
    if(newPassword !== confirmPassword){
        Alert.alert('Password do not match')
    }
    
    const data = {
        
        password: newPassword,
    }
    console.log("data", data)

    Reset(data,token)
    .then(response => {  
        setLoading(false);
        console.log('response', response);
     
        if(response.status == 'Success'){
          // setData(response.data.token)
          console.log('newpassword',newPassword);
          console.log('ConfirmPassword', confirmPassword)
          navigation.navigate('alldone');
          
        }
        else{
          Alert.alert("Password does not match")
  
        }
      })  .catch(error => {
        console.error('Error occurred during API call:', error);
        Alert.alert("An error occurred while processing your request.");
      })
     
}


    return (

        <ScrollView>
        <View>
            <Image source={require('../../assets/reset/Group107.png')} style={styles.image} />
            <Image source={require('../../assets/reset/Reset.png')} style={styles.image} /> 
            <Text style={styles.text}>Your new password must be different </Text>
            <Text style={styles.text}>from previous used passwords.</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="******"
                    onChangeText={text => setNewPassword(text)}
                    value={newPassword}/>
                
               <Image source={require('../../assets/reset/image.png')} style={styles.icon} />
            </View>
            <Text style={styles.text1}>Must be at least 8 characters.</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    onChangeText={text => setConfirmPassword(text)}
                    value={confirmPassword}
                />
                <Image source={require('../../assets/login/Group2.png')} style={styles.icon} />
            </View>
            <View>
                <Text style={styles.text1}>Both passwords must match.</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSavePassword}>
                <Text style={styles.buttonText}>Save Password</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

export default reset

const styles = StyleSheet.create({
    image: {
        marginLeft: 40,
        marginTop: 40,
    },
    text: {
        marginLeft: 40,
        marginTop: 10,
    },
    text1:{
        marginLeft:40
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 40,
        marginVertical: 10,
        paddingHorizontal: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:10,
    },
    icon: {
        marginLeft: 5,
    },
    input: {
        flex: 1,
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 40,
        marginVertical: 10,
        marginTop: 60,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 40,
        marginTop: 10,
    },
    rememberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    picture: {
        marginRight: 5,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 40,
        marginTop: 10,
    },
    sign: {
        marginRight: 5,
    },
    add: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    addition: {
        color: 'black',
        fontWeight: 'bold',
    },
});