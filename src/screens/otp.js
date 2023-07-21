import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import OTPInputView from '@twotalltotems/react-native-otp-input'

  
  const otp = ({navigation}) => {
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
  
        {/* <View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="" />
          </View>
        </View> */}
  
        {/* <View>
          <View style={styles.inputContainer2}>
            <TextInput style={styles.input} placeholder="" />
          </View>
        </View> */}


            {/* <View style={styles.main}>
                <OTPTextInput
                    ref={otpInput}
                    handleTextChange={(text) => {
                        if (text.length === 5) {
                            console.log('OTP:', text);
                        }
                    }}
                    inputCount={5}
                    keyboardType="numeric"
                    tintColor="black"
                    inputCellLength={1}
                    containerStyle={styles.otpContainer}
                    textInputStyle={styles.otpInput}
                />
            </View> */}
           
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
  