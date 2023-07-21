import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {} from '@react-native-segmented-control/segmented-control';
import SegmentedControlTab from 'react-native-segmented-control-tab';

// const signup = ({navigation}) => {
  
//   const handleNext5 = () => {
//     navigation.navigate('Signup2');
//   };
  


  const signup = ({navigation}) => {
    
    const handleNext6 = () => {
        navigation.navigate('Login');
      };
    const handleContinue = () => {
      navigation.navigate('otp');
    }

        useEffect(() => {
    SplashScreen.hide();
  }, []);

    
    const [customStyleIndex, setCustomStyleIndex] = useState(0);

    const handleCustomIndexSelect = (index) => {
        // Tab selection for custom Tab Selection
        setCustomStyleIndex(index);
      };

  return (
    <ScrollView>
      <View style={styles.container}>
        { customStyleIndex == 0 ? (<Image
          source={require('../assets/signup/Group103.png')}
          style={styles.imageA}
        />
        ):(
          <Image
          source={require('../assets/signup2/Group2.png')}
          style={styles.imageA}
        />
        )}

        <Text style={{fontSize:36,marginRight:220,color:'#313131'}}>
          Sign up
        </Text>
        
        {/* <Image
          source={require('../assets/signup/Signup.png')}
          style={styles.imageB}
        /> */}
        <Text style={styles.text}>Hello, I guess you are new around here.</Text>
      </View>

      <View style={styles.container}>
      <SegmentedControlTab
          values={['Mentor', 'Mentee']}
          selectedIndex = {customStyleIndex}
          onTabPress={handleCustomIndexSelect}
          borderRadius={100}
          tabsContainerStyle={{
            height: 50,
            width:220,
            borderRadius:80,
            marginRight:120,
          }}
          tabStyle={{
            borderWidth: 0,
            borderColor: 'transparent',
            borderRadius:20,
          }}
          activeTabStyle={{backgroundColor: 'gray', marginTop:5}}
          tabTextStyle={{color: 'black', fontWeight: 'bold'}}
          activeTabTextStyle={{color: 'black'}}
        />
      </View>


      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Referral Code" />
        <Image
          source={require('../assets/signup/layer1.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="Email ID" />
        <Image
          source={require('../assets/signup/Group3.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="First Name" />
        <Image
          source={require('../assets/signup/Group3.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="Last Name" />
        <Image
          source={require('../assets/signup/Group3.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="Mobile Number" />
        <Image
          source={require('../assets/signup/Group102.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputWithIcon}
          placeholder="Password"
          secureTextEntry
        />
        <Image
          source={require('../assets/signup/image.png')}
          style={styles.icon}
        />
      </View>
      <View>
        <Image
          source={require('../assets/signup/bysingup.png')}
          style={{marginLeft: 20}}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.buttonn} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <View>
          <Text style={{marginLeft: 100, color: '#313131'}}>
            Joined us before?
            <TouchableOpacity style={styles.add} onPress={handleNext6}>
              <Text style={styles.addition}>Log in</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
          
        }
export default signup;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageA: {
    marginLeft: 25,
    marginTop: 45,
  },
  imageB: {
    marginTop: 20,
    marginRight: 220,
  },
  text: {
    marginRight: 100,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  button: {
    flex: 1,
    height: 50,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  leftButton: {
    borderRightWidth: 0,
    backgroundColor: 'black',
  },
  rightButton: {
    borderLeftWidth: 0,
    // backgroundColor: 'black',
  },
  buttonText1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonText2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  inputWithIcon: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingRight: 30,
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  buttonn: {
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
  selectedButton: {
    backgroundColor: 'black',
  },
  selectedButtonText: {
    color: 'white',
  },
  tabStyle: {
    borderColor: '',
    borderRadius:10,
  },
});
