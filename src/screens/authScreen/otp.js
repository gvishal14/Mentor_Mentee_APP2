


import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import OtpInputs from 'react-native-otp-inputs'
import KeyboardAwareScrollView from 'react-native-keyboard-aware-scroll-view'
import { Otp } from '../../API';
import login from './login';
import axios from 'axios';


const otp = ({navigation,route}) => {
  const type = route.params?.type;
// let token = route.params?.token
// let token = type === 'inside' ? route.params?.token:'';
let token = route.params?.token
let types = route.params?.type

  console.log('token2--->',route.params?.token);
  // const [otp,  setOtp] = useState('');
  const [otp, setOtp] = useState(type === 'inside' ? route.params.email : '');
  

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // const { otpData } = route.params;
  // useEffect(() => {
  //   console.log('Received OTP Data:', otpData);
  // }, []);



    // const handleNext4 = ()=>{
    //   navigation.navigate('Signup')
    // }
 
  //   setLoading(true);
  //   let data={
  //     "otp":otp,
  //     "type":'register'
  // }
 

  // Otp(data,token).then(response => {
  //   console.log('formData', data)
  //   console.log('response', response)
  //   if(response.status=='Success'){
  //     navigation.navigate('Login',{token:token,email:route.params.email,password:route.params.password})
  //   }else{
  //     Alert.alert('Error')
  //   }
   
  //   // navigation.navigate('Login',{token:token,email:route.params.email,password:route.params.password})
  // }).finally(e => { setLoading(false).catch(err=> console.log('err',err))
  // })

  // }


  // const verifyOtp = () => {
    // if (!otp) {
    //     return Alert.alert('Enter OTP');
    // }
    const OtpVerify = () =>{
      if(!otp){
        return Alert.alert('Enter OTP')
      }
    setLoading(true);
    console.log('type', type)
    if(types === 'register'){
      console.log('yes i m register')
    const data = {
        "otp": otp,
        "type": 'register',
    }

    Otp(data, token)
        .then(response => {
            setLoading(false);
            console.log('otp', otp);
            console.log('response', response);

            if (response.status === 'Success') {
                navigation.navigate('Login',{token:token,email:route.params.email,password:route.params.password, type:'inside'});
            } else {
                Alert.alert('Enter a valid OTP.');
            }
        })
        .catch(error => {
            setLoading(false);
            console.error('Error', error);
            Alert.alert('Error occurred during the process.');
        });
    }
    else{
      console.log('yes i m forget')
        const data = {
            otp: otp
        }
        console.log(data,'data')
        Otp(data,token)
        .then(response => {
            setLoading(false);
            // console.log('otp', otp);
            console.log('response', response);
            if (response.status === 'Success') {
              navigation.navigate('Reset',{token:token});
          } else {
              Alert.alert('Enter a valid OTP.');
          }
        })
        .catch(error => {
            setLoading(false);
            console.error('Error', error);
            Alert.alert('Error occurred during the process.');
        });
    }
    }




  return (
    
    <ScrollView style={{flex:1}}>
      <Image
        source={require('../../assets/otp/Group105.png')}
        style={styles.image}
      />
      <Image
        source={require('../../assets/otp/EnterOTP.png')}
        style={styles.image}
      />
      <Text style={styles.text}>A 5 digit code has been sent to </Text>
      <Text style={styles.text}>user123@mail.com</Text>

    
         
      <View style={styles.textInputstyle}>
      <OtpInputs
                          handleChange={code => setOtp(code)}
                          numberOfInputs={6}
                          inputStyles={styles.otpInputStyles}
                          inputContainerStyles={styles.otpContainerStyles} />
      </View>
        
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => OtpVerify()}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
    
  );

};

export default otp;

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
    width: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  inputContainer2:{
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 40,
    width: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10
  },
  icon: {
    marginLeft: 5,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 40,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
 
  underlineStyleBase: {
    borderRadius:10,
    color:'black',
    
  },
  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
  textInputstyle: {
    flexDirection: 'row',
    marginHorizontal: 50,
    marginTop: 80,
},
otpInputStyles: {
    color: '#313131',
    fontSize: 20,
    textAlign: 'center',
    justifyContent:'center'
},
otpContainerStyles: {
    borderColor: 'black',
    borderRadius:10,
    backgroundColor:'white',
    borderWidth: 1,
    padding: 5,
    marginRight: 10
},
});