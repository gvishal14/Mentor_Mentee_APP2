import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, { useState } from 'react';
  import OTPInputView from '@twotalltotems/react-native-otp-input'

  
  const otp = ({route, navigation}) => {

    const [otp, setOTP] = useState();

    // const { otpData } = route.params;
    // useEffect(() => {
    //   console.log('Received OTP Data:', otpData);
    // }, []);
  


      // const handleNext4 = ()=>{
      //   navigation.navigate('Signup')
      // }
    return (
      <View style={{flex:1}}>
        <Image
          source={require('../assets/otp/Group105.png')}
          style={styles.image}
        />
        <Image
          source={require('../assets/otp/EnterOTP.png')}
          style={styles.image}
        />
        <Text style={styles.text}>A 5 digit code has been sent to </Text>
        <Text style={styles.text}>user123@mail.com</Text>
  
      
           
           <OTPInputView
        style={{width: '80%', height: 150,marginHorizontal:25}}
        pinCount={6}
        autoFocusOnLoad={true}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
       
        onCodeFilled = {(code => {
        console.log(`Code is ${code}, you are good to go!`)
    })}
/>
          
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
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
  });
  