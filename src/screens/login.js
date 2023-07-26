import { StyleSheet, Text, View, Image, TextInput,ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Login } from '../API';

const login = ({navigation, route}) => {
    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    


  const handleNext4 = ()=>{
    navigation.navigate('Signup')
  }
//   const handleNext22 = ()=>{
//     navigation.navigate('dashboard')


const [loading, setLoading] = useState(false)
const [error, setError] = useState('')





const onClick = () => {
    setLoading(true)
    let data={
        "email":email,
        "password":password,
        
    }

        Login(data).then(response => {  
     
            if(response.status == 'Success'){
              // setData(response.data.token)
              console.log('LoginData',data)
              navigation.navigate('dashboard')
              
            }
            else{
              Alert.alert("Login Failed")
      
            }
          }).finally(e => { setLoading(false) })

    
  }

    return (
        <ScrollView>
        <View>
            <Image source={require('../assets/login/Group93.png')} style={styles.image} />
            <Image source={require('../assets/login/LetLogin.png')} style={styles.image} /> 
            <Text style={styles.text}>Welcome Back, you've been missed!</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email Id" 
                    onChangeText={text => setEmail(text)} value={email} 
                    />
                
                <Image source={require('../assets/login/Vector7.png')} style={styles.icon} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true} 
                    onChangeText={text => setPassword(text)} value={password}
                />
                <Image source={require('../assets/login/Group2.png')} style={styles.icon} />
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.rememberContainer}>
                    <Image source={require('../assets/login/Rectangle51.png')} style={styles.picture} />
                    <Text style={styles.rememberText}>Keep me signed up</Text>
                </View>
               
                <TouchableOpacity>
                <Text style={styles.forgotText} onPress={()=> navigation.navigate("forget")}>Forgot password</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button}onPress={onClick}>
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>

            <View style={styles.rowContainer}>
                <Text style={styles.sign}>Don't have an account yet?</Text>
                <TouchableOpacity style={styles.add} onPress={handleNext4}>
                    <Text style={styles.addition}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
}

export default login

const styles = StyleSheet.create({
    image: {
        marginLeft: 40,
        marginTop: 40,
    },
    text: {
        marginLeft: 40,
        marginTop: 10,
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