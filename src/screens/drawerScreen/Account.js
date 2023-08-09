import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Switch,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import { Card } from 'react-native-paper';

const Account = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ScrollView>
    <View>
      <View style={styles.container1}>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 18,
            color: '#313131',
            marginLeft: 10,
          }}>
          Account
        </Text>
        <Image
          source={require('../../assets/dashboard/Notification.png')}
          style={styles.image3}
        />
      </View>

      <View style={{marginLeft: 10}}>
        <Image source={require('../../assets/Account/profile.png')} />
      </View>

      <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
        <Text style={{fontSize: 20, color: '#313131'}}>Mentor</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{fontSize: 20, color: '#313131'}}>Mentee</Text>
      </View>
      <View style={{marginTop: 10, marginLeft: 10,marginBottom:10}}>
        <Text style={{fontSize: 18, color: '#313131'}}>Personal Info</Text>
      </View>

   <Card style={{marginLeft:10,marginRight:10}}>
   <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{marginTop: 10}}>
            <Text>First Name</Text>
            <Text>Cameron</Text>
          </View>
          <View style={{marginTop: 10, marginLeft: 10}}>
            <Text>First Name</Text>
            <Text>Cameron</Text>
          </View>
          <View style={{marginTop: 10, marginLeft: 10}}>
            <Text>First Name</Text>
            <Text>Cameron</Text>
          </View>      
        </View>
      
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{marginTop: 10}}>
            <Text>Date of birth</Text>
            <Text>01/01/1970</Text>
          </View>
          <View style={{marginTop: 10, marginLeft: 10}}>
            <Text>Age</Text>
            <Text>58 yrs</Text>
          </View>
          <View style={{marginTop: 10, marginLeft: 10}}>
            <Text> Language</Text>
            <Text>English</Text>
          </View>      
        </View>

        <View style={{flexDirection: 'row',marginLeft:40}}>
          <View style={{marginTop: 10}}>
            <Text>Mobile No.</Text>
            <Text>+1450 1450 1885</Text>
          </View>     
        </View>

        <View style={{flexDirection: 'row',marginLeft:40}}>
          <View style={{marginTop: 10}}>
            <Text>Verification ID</Text>
            <Image source={require('../../assets/Account/certificate.png')}/>
          </View>
    
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{marginTop: 10}}>
            <Text>Address</Text>
            <Text>8502 Preston Rd. Inglewood, Maine 98380</Text>
          </View>     
        </View>

        <View style={{flexDirection: 'row', marginLeft:40,marginBottom:10,marginRight:10}}>
          <View style={{marginTop: 10}}>
            <Text>Bio</Text>
            <Text style={{fontSize:14,color:'#313131'}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
          </View>      
        </View>
   </Card>

   <View style={{marginTop: 10, marginLeft: 10,marginBottom:10}}>
        <Text style={{fontSize: 18, color: '#313131'}}>Skill Certification Info</Text>
      </View>

   <Card style={{marginLeft:10,marginRight:10,marginBottom:10}}>
   <View style={{flexDirection: 'row', marginLeft:40}}>
          <View style={{marginTop: 10}}>
            <Text>Skill Type</Text>
            <Text style={{fontSize:14,fontWeight:500}}>Career Consultation</Text>
          </View>   
        </View>
      
        <View style={{flexDirection: 'row',marginLeft:40}}>
          <View style={{marginTop: 10}}>
            <Text>Skill Name</Text>
            <Text style={{fontSize:14,fontWeight:500}}>Career Consultation</Text>
          </View>    
        </View>

        <View style={{flexDirection: 'row',marginLeft:40}}>
          <View style={{marginTop: 10}}>
            <Text>Skill Certificate</Text>
            <Image source={require('../../assets/Account/certificate.png')}/>
          </View>
    
        </View>

        <View style={{flexDirection: 'row',marginLeft:40}}>
          <View style={{marginTop: 10}}>
            <Text>Skill Type</Text>
            <Text style={{fontSize:14,fontWeight:500}}>Career Consultation</Text>
          </View>     
        </View>



        <View style={{flexDirection: 'row',marginLeft:40}}>
          <View style={{marginTop: 10}}>
            <Text>Skill Name</Text>
            <Text style={{fontSize:14,fontWeight:500}}>Career Consultation</Text>
          </View>     
        </View>

        <View style={{flexDirection: 'row',marginLeft:40,marginBottom:10}}>
          <View style={{marginTop: 10}}>
            <Text>Skill Certificate</Text>
            <Image source={require('../../assets/Account/certificate.png')}/>
          </View>
        </View>

   </Card>


    </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  image3: {
    marginLeft: 220,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Account = () => {
//   return (
//     <View>

//     </View>
//   )
// }

// export default Account

// const styles = StyleSheet.create({})
