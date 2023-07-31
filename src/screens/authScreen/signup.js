
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {} from '@react-native-segmented-control/segmented-control';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import axios from 'axios'
import { Registration } from '../../API';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/userReducer';


  const signup = ({navigation,route}) => {

    const [refCode,setRefCode]= useState('')
    const [email,setEmail]= useState('')
    const [firstName,setFirstname]= useState('')
    const [lastName, setLastname]= useState('')
    const [mobileNo, setMobileno]= useState('')
    const [password, setPassword]= useState('')
    const [data, setData]= useState('')
    
    // const [country_code, setCountryCode] = useState('')

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const [customStyleIndex, setCustomStyleIndex] = useState(0);

    const role = customStyleIndex === 0 ? 'Mentor' : 'Mentee';

    
    
    const handleNext6 = () => {
        navigation.navigate('Login');
      };
   

        useEffect(() => {
    SplashScreen.hide();
    retrieveEmailFromStorage();
  }, []);

  useEffect(() => {
    // Check if the email state is not empty
    if (email) {
      console.log('Email retrieved from AsyncStorage:', email);
      // You can also use the email state value for further processing, if needed
    }
  }, [email]);


    const handleCustomIndexSelect = (index) => {
        // Tab selection for custom Tab Selection
        setCustomStyleIndex(index);
      };

      const retrieveEmailFromStorage = async ()=>{
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

      // const dispatch = useDispatch();


    
      
  //     const submit = () => {
  //     const apiUrl = 'https://mean.stagingsdei.com:452/mentor/register'
  //     const formData = new FormData();
  //       formData.append('refferalCode', refCode);
  //       formData.append('email',email);
  //       formData.append('firstName',firstName);
  //       formData.append('lastName',lastName);
  //       formData.append('mobileno',mobileNo);
  //       formData.append('password',password);

  //       console.log('formData',refCode,email,firstName,lastName,mobileNo,password)

  //     axios.post(apiUrl, formData, {
  //       headers: {
  //         'Content-Type' : 'multipart/form-data',
  //       },
  //     })
  //   .then((response) => {
  //     setLoading(false);
  //     console.log('response',response)
  //     // Handle successful signup response, e.g., navigate to the next screen
  //     // navigation.navigate('otp');
  //   })
  //   .catch((error) => {
  //     setLoading(false);
  //     setError('Error occurred during signup. Please try again.');
  //     console.error('API Error:',error);
  //   });
  // }

  const submit = () => {
    setLoading(true)
    let formData = new FormData();
        formData.append('refferalCode', refCode);
        formData.append('email',email);
        formData.append('firstName',firstName);
        formData.append('lastName',lastName);
        formData.append('phone',mobileNo);
        formData.append('password',password);
        formData.append('role', 1);
        formData.append('country_code','+91')

    Registration(formData).then(response => {  
      console.log('formData',formData)
      console.log('response',response)
     
      if(response.status == 'Success'){
        AsyncStorage.setItem('email',email)
        // setData(response.data.token)
       

        console.log('token1--->', response.data.token)
        navigation.navigate('otp',{token:response.data.token,email:email,password:password,type:'register'})
      }
      else{
        Alert.alert("Registration Failed Please Try again later")

      }
    }).finally(e => { setLoading(false) })
    //  dispatch(setUser({ refCode, email, firstName, lastName, mobileNo, password, role }));
    
   
}

  return (
    <ScrollView>
      {loading && <ActivityIndicator size={'large'} />}
      <View style={styles.container}>
        { customStyleIndex == 0 ? (<Image
          source={require('../../assets/signup/Group103.png')}
          style={styles.imageA}
        />
        ):(
          <Image
          source={require('../../assets/signup2/Group2.png')}
          style={styles.imageA}
        />
        )}

        <Text style={{fontSize:36,marginRight:220,color:'#313131'}}>
          Sign up
        </Text>
        
      
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
        <TextInput style={styles.input} placeholder="Referral Code" 
        onChangeText={text => setRefCode(text)}
        value={refCode}/>
        <Image
          source={require('../../assets/signup/layer1.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="Email ID" onChangeText={text => setEmail(text)} value={email} />
        <Image
          source={require('../../assets/signup/Group3.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="First Name" onChangeText={text => setFirstname(text)} value={firstName} />
        <Image
          source={require('../../assets/signup/Group3.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="Last Name" onChangeText={text => setLastname(text)} value={lastName} />
        <Image
          source={require('../../assets/signup/Group3.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="Mobile Number" onChangeText={text => setMobileno(text)} value={mobileNo} />
        <Image
          source={require('../../assets/signup/Group102.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputWithIcon}
          placeholder="Password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <Image
          source={require('../../assets/signup/image.png')}
          style={styles.icon}
        />
      </View>
      <View>
        <Image
          source={require('../../assets/signup/bysingup.png')}
          style={{marginLeft: 20}}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.buttonn} onPress={()=> submit()}>
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