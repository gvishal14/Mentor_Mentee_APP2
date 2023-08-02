import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity,ScrollView} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';



const ProgList = ({navigation}) => {
  
  return (
    <ScrollView>
      <View style={styles.container1}>
        <Image
          source={require('../../../assets/dashboard/Ellipse7.png')}
          style={styles.image}
        />
        <Text
          style={{
            fontWeight: 500,
            fontSize: 18,
            color: '#313131',
            marginLeft: 10,
          }}>
          Programs
        </Text>
        <Image
          source={require('../../../assets/dashboard/Notification.png')}
          style={styles.image3}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../../../assets/dashboard/Search.png')}
          style={styles.icon}
        />
        <TextInput style={styles.input} placeholder="Search" />
      </View>

      <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:20,fontWeight:500,color:'#313131',marginTop:10,marginBottom:10,marginLeft:10}}>Career Consultation</Text>
        <Image source={require('../../../assets/ProgList/Filter.png')}style={{marginTop:10,marginLeft:130,justifyContent: 'flex-end',}}/>
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate('Session')}>
      <Card style={{marginTop:10,marginBottom:10,borderRadius:10,marginLeft:10,marginRight:10,backgroundColor:'white'}}>
      <View
        style={{
          flexDirection: 'row',
          borderRadius: 10,
          backgroundColor: '',
          marginLeft: 10,
          marginRight: 10,
        }}>
        <Image
          source={require('../../../assets/ProgList/Rectangle1.png')}
          style={{marginLeft: 10, marginTop: 10, marginBottom: 10}}
        />
        
        <View>
          <Text style={{marginTop: 10, marginLeft: 10}}>
            Aliqua id fugiat nostr...
          </Text>
          <View style={{flexDirection:'row'}}>
          <Image source={require('../../../assets/ProgList/Calendar.png')} style={{marginTop:13,marginLeft:10}}/>
          <Text style={{marginTop: 10, marginLeft:5}}>
            02-21-2022 | 03:50 PM
          </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{marginTop: 10, marginLeft: 10}}>Price</Text>
            <Text style={{marginTop: 10, marginLeft: 10}}>Total Sessions</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginTop: 10, marginLeft: 10}}>$14.99</Text>
            <Text style={{marginTop: 10, marginLeft: 10}}>12</Text>
          </View>
        </View>
      </View>
      </Card>
      </TouchableOpacity>

      <TouchableOpacity>
      <Card style={{marginTop:10,marginBottom:10,borderRadius:10,marginLeft:10,marginRight:10,backgroundColor:'white'}}>
      <View
        style={{
          flexDirection: 'row',
          borderRadius: 10,
          backgroundColor: '',
          marginLeft: 10,
          marginRight: 10,
          marginTop:15
        }}>
        <Image
          source={require('../../../assets/ProgList/Rectangle2.png')}
          style={{marginLeft: 10, marginTop: 10, marginBottom: 10}}
        />
        <View>
          <Text style={{marginTop: 10, marginLeft: 10}}>
            Career Seeker
          </Text>
          <View style={{flexDirection:'row'}}>
          <Image source={require('../../../assets/ProgList/Calendar.png')} style={{marginTop:13,marginLeft:10}}/>
          <Text style={{marginTop: 10, marginLeft:5}}>
            02-21-2022 | 03:50 PM
          </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{marginTop: 10, marginLeft: 10}}>Price</Text>
            <Text style={{marginTop: 10, marginLeft: 10}}>Total Sessions</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginTop: 10, marginLeft: 10}}>$14.99</Text>
            <Text style={{marginTop: 10, marginLeft: 10}}>12</Text>
          </View>
        </View>
      </View>
      </Card>
      </TouchableOpacity>

      <TouchableOpacity>
      <Card style={{marginTop:10,marginBottom:10,borderRadius:10,marginLeft:10,marginRight:10,backgroundColor:'white'}}>
      <View
        style={{
          flexDirection: 'row',
          borderRadius: 10,
          backgroundColor: '',
          marginLeft: 10,
          marginRight: 10,
          marginTop:15
        }}>
        <Image
          source={require('../../../assets/ProgList/Rectangle3.png')}
          style={{marginLeft: 10, marginTop: 10, marginBottom: 10}}
        />
        <View>
          <Text style={{marginTop: 10, marginLeft: 10}}>
            Career Seeker
          </Text>
          <View style={{flexDirection:'row'}}>
          <Image source={require('../../../assets/ProgList/Calendar.png')} style={{marginTop:13,marginLeft:10}}/>
          <Text style={{marginTop: 10, marginLeft:5}}>
            02-21-2022 | 03:50 PM
          </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{marginTop: 10, marginLeft: 10}}>Price</Text>
            <Text style={{marginTop: 10, marginLeft: 10}}>Total Sessions</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginTop: 10, marginLeft: 10}}>$14.99</Text>
            <Text style={{marginTop: 10, marginLeft: 10}}>12</Text>
          </View>
        </View>
      </View>
      </Card>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} >Add New Program</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

export default ProgList;

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },

  image: {
    marginLeft: 4,
    justifyContent: 'flex-end',
  },
  image3: {
    marginLeft: 180,
    justifyContent: 'flex-end',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 40,
    borderColor: '',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  icon: {
    width: 40,
    height: 35,
    marginLeft: 2,
    resizeMode: 'contain',
    marginTop: 5,
    marginBottom: 5,
    border: 10,
  },
  button: {
    backgroundColor: '#FE4D4D',
    width: 350,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20
    
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
