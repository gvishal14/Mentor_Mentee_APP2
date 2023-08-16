import { StyleSheet, Text, View, Image, TextInput,ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Login } from '../../API';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch,useSelector} from 'react-redux'
// import {loginSuccess} from '../../Redux/authActions'
import { loginSuccess } from '../../Redux/loginSlice';
import {setUserData} from '../../Redux/userSlice'


const login = ({navigation, route}) => {

    const dispatch = useDispatch();

    
    
   
    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        SplashScreen.hide();
        retrieveLoginFromStorage();
      }, []);

      useEffect(() => {
        // Check if the email state is not empty
        if (email) {
          console.log('Email retrieved from AsyncStorage:', email);
          // You can also use the email state value for further processing, if needed
        }
      }, [email]);
    
    


  const handleNext4 = ()=>{
    navigation.navigate('Signup')
  }

  const retrieveLoginFromStorage = async ()=>{
    try{
      const storedEmail = await AsyncStorage.getItem(email);

      if (storedEmail !== null ){
        setEmail(storedEmail)
        console.log(email,'email')
      }
      
    }catch (error){
      console.log('Error retrieving data', error)
    }
  }

  

const onClick = async() => {
    setLoading(true)
    let data={
        "email":email,
        "password":password,
        
    }
    

    try {
        const response = await Login(data);

        // Login(data).then(response => {  
     
            if(response.status == 'Success'){
                // const {userData, token} = response.data;
                // dispatch(setUserData(JSON.stringify(response.data)))
                dispatch(setUserData(response.data))
               await AsyncStorage.setItem('email',email)
              await  AsyncStorage.setItem('userData',JSON.stringify(response.data)) 
              await AsyncStorage.setItem('token', response.data.token);
              await AsyncStorage.setItem('isLoggedIn', 'true');
              console.log('data------->',response.data)
              console.log('LoginData',data)
              console.log('token--->', response.data.token)
              
            //   navigation.reset({index: 1, routes: [{name: 'DrawerStack'}]});
              navigation.navigate('DrawerStack',{token:response.data.token,type:'login'});
            }
            else{
              Alert.alert("Login Failed")
              console.warn("Login Failed ")

      
            }
          }
        //   ).finally(e => { setLoading(false) })
        catch (error) {
            console.error('Error during login:', error);
          }
          finally {
            setLoading(false);
          }
    
  }

    return (
        <ScrollView>
        <View>
            <Image source={require('../../assets/login/Group93.png')} style={styles.image} />
            <Image source={require('../../assets/login/LetLogin.png')} style={styles.image} /> 
            <Text style={styles.text}>Welcome Back, you've been missed!</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email Id" 
                    onChangeText={text => setEmail(text)} value={email} 
                    />
                
                <Image source={require('../../assets/login/Vector7.png')} style={styles.icon} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true} 
                    onChangeText={text => setPassword(text)} value={password}
                />
                <Image source={require('../../assets/login/Group2.png')} style={styles.icon} />
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.rememberContainer}>
                    <Image source={require('../../assets/login/Rectangle51.png')} style={styles.picture} />
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