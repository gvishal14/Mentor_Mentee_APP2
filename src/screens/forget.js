import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const forget = ({navigation}) => {
  const handleNext7 = ()=>{
    navigation.navigate('otp')
  }
    return (
        <View>
            <Image source={require('../assets/foget/Group104.png')} style={styles.image} />
            <Image source={require('../assets/foget/Forgot.png')} style={styles.image} /> 
            <Text style={styles.text}>Don't worry! It happens. </Text>
            <Text style={styles.text}>Please enter the address associated with your account.</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email Id"
                />
                <Image source={require('../assets/login/Vector7.png')} style={styles.icon} />
            </View>


            

            <TouchableOpacity style={styles.button} onPress={handleNext7}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>

            
        </View>
    )
}

export default forget

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
        borderRadius:10
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