import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const reset = ({navigation}) => {
//   const handleNext4 = ()=>{
//     navigation.navigate('Signup')
//   }
    return (

        
        <View>
            <Image source={require('../assets/reset/Group107.png')} style={styles.image} />
            <Image source={require('../assets/reset/Reset.png')} style={styles.image} /> 
            <Text style={styles.text}>Your new password must be </Text>
            <Text style={styles.text}>different from previous used passwords.</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="******"
                />
               <Image source={require('../assets/reset/image.png')} style={styles.icon} />
            </View>
            <Text style={styles.text1}>Must be at least 8 characters.</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                />
                <Image source={require('../assets/login/Group2.png')} style={styles.icon} />
            </View>
            <View>
                <Text style={styles.text1}>Both passwords must match.</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save Password</Text>
            </TouchableOpacity>
        </View>
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