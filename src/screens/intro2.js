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
  
  const Intro2 = ({navigation}) => {
    const handleNext2= () =>{
      navigation.navigate('Intro3')
    }
    return (
      <View style={{flex: 1}}>
        {/* <View style={{flex: 0.6,marginTop:120,alignItems:'center'}}> */}
        <View style={{position: 'relative'}}>
          <Image
            style={{position: 'absolute', zIndex: -1,width:'100%'}}
            source={require('../assets/intro2/Vector(1).png')}></Image>
  
          {/* <ImageBackground
          source={require('../assets/intro3/Vector2.png')}
          style={{flex: 1, marginTop: 120,position:'relative'}}> */}
          <Image
            source={require('../assets/intro2/Group91.png')}
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
            Find Best Mentors
          </Text>
          {/* <Text style={{fontWeight:'bold',fontSize:30,color:'#313131'}}>Best Mentors</Text> */}
          <View style={{marginTop: 6}}>
            <Text style={{color: '#313131'}}>
            We provide you with access to professionals, {' '}
            </Text>
            <Text style={{color: '#313131'}}>who would guide you in your journey to success.</Text>
          </View>
  
          <Image
            source={require('../assets/intro2/Group90.png')}
            style={{marginTop: 14}}></Image>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.skipButton} onPress={handleNext2}>
              <Text>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext2}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        {/* </ImageBackground> */}
  
        {/* </View> */}
      </View>
    );
  };
  
  export default Intro2;
  
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
      left:60,
      marginRight:40
      
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  