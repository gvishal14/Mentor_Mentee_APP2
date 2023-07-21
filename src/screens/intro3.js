import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Intro3 = ({navigation}) => {
  const handleNext3= () =>{
    navigation.navigate('Login')
  }
  return (
    <View style={{flex: 1}}>
      {/* <View style={{flex: 0.6,marginTop:120,alignItems:'center'}}> */}
      <View style={{position: 'relative'}}>
        <Image
          style={{position: 'absolute', zIndex: -1,width:'100%'}}
          source={require('../assets/intro3/Vector2.png')}></Image>

        {/* <ImageBackground
        source={require('../assets/intro3/Vector2.png')}
        style={{flex: 1, marginTop: 120,position:'relative'}}> */}
        <Image
          source={require('../assets/intro3/Group92.png')}
          style={{
            alignSelf: 'center',
            flex: 0.6,
            position: 'absolute',
            zIndex: 1,
            top:100
          }}></Image>
      </View>

      <View
        style={{
          marginLeft: 20,
          flex: 0.4,
          position: 'absolute',
          zIndex: 1,
          bottom: 60,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            color: '#313131',
            marginTop: 40,
          }}>
          Guide a Mentee
        </Text>
        {/* <Text style={{fontWeight:'bold',fontSize:30,color:'#313131'}}>Best Mentors</Text> */}
        <View style={{marginTop: 6}}>
          <Text style={{color: '#313131'}}>
            Join Pxalm as a Mentor and help Mentees{' '}
          </Text>
          <Text style={{color: '#313131'}}>become experts tomorrow</Text>
        </View>

        <Image
          source={require('../assets/intro3/Group90.png')}
          style={{marginTop: 14}}></Image>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.skipButton} onPress={handleNext3}>
            <Text>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext3}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* </ImageBackground> */}

      {/* </View> */}
    </View>
  );
};

export default Intro3;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    // paddingHorizontal: 20,
    // marginBottom:0
    top:40,
   

  },
  skipButton: {
    color: '#313131',
    fontSize: 14,
  },
  nextButton: {
    backgroundColor: '#FE4D4D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    left:90,
    marginRight:40
    
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
