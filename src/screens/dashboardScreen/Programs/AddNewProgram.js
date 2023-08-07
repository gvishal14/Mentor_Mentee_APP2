import {StyleSheet, Text, View, ScrollView, Card, Image,TextInput,TouchableOpacity} from 'react-native';
import React , { useState }from 'react';
import { Calendar } from 'react-native-calendars';



const AddNewProgram = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  
  const handleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <ScrollView>

    <View style={styles.container1}>
    <Text
      style={{
        fontWeight: 500,
        fontSize: 18,
        color: '#313131',
        marginLeft: 10,
      }}>
      Add New Program
    </Text>
    <Image
      source={require('../../../assets/dashboard/Notification.png')}
      style={styles.image3}
    />
  </View>


<TouchableOpacity>
<View style={styles.inputContainer1}>
<Image source={require('../../../assets/Add/Group.png')} style={{marginLeft:70}}/>
</View>
</TouchableOpacity>



    <View style={styles.inputContainer}>
    <TextInput style={styles.input2} placeholder="Program Name" />
  </View>

  <View style={styles.inputContainer}>
  <TextInput style={styles.input2} placeholder="Mentorship Mode" />
  <TouchableOpacity>
  <View>
  <Image source={require('../../../assets/Add/Vector.png')} style={{marginRight:10}}/>
  </View>
  </TouchableOpacity>
</View>

<View style={styles.inputContainer}>
<TextInput style={styles.input2} placeholder="Years of Experience" />
<TouchableOpacity>
<View>
<Image source={require('../../../assets/Add/Vector.png')} style={{marginRight:10}}/>
</View>
</TouchableOpacity>
</View>

<View style={styles.inputContainer}>
<TextInput style={styles.input2} placeholder="Start Date" />
<TouchableOpacity onPress={handleShowCalendar} style={styles.calendarButton}>
<View>
<Image source={require('../../../assets/Add/Calendar.png')} style={{marginRight:10,width: '100%',height: '100%',resizeMode: 'contain' }}/>
</View>
</TouchableOpacity>

{showCalendar && (
  <View style={styles.calendarContainer}>
    
</View>
)}
</View>

<View style={styles.inputContainer}>
<TextInput style={styles.input2} placeholder="Price" />
</View>

<View style={styles.inputContainer}>
<TextInput style={styles.input2} placeholder="Mentee allowed" />
</View>

<View style={styles.inputContainer}>
<TextInput style={styles.input2} placeholder="Mentor Availability" />
</View>

<View style={styles.inputContainer}>
<TextInput style={styles.input2} placeholder="Program Expiry Date" />
<TouchableOpacity>
<View>
<Image source={require('../../../assets/Add/Calendar.png')} style={{marginRight:10}}/>
</View>
</TouchableOpacity>
</View>

<View style={styles.inputContainer}>
<TextInput style={styles.input2} placeholder="Upload Skill Certificate" />
<TouchableOpacity>
<View>
<Image source={require('../../../assets/Add/Group1.png')} style={{marginRight:10}}/>
</View>
</TouchableOpacity>
</View>

<View style={styles.inputContainer}>
<TextInput style={styles.input} placeholder="Program Description" />
</View>

<TouchableOpacity style={styles.button} >
<Text style={styles.buttonText} >Add Program</Text>
</TouchableOpacity>
    </ScrollView>
  );
};

export default AddNewProgram;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer1: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',

  },
  input2: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 150,
    fontSize: 16,
    paddingHorizontal: 10,
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
  container1: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  image3: {
    marginLeft: 200,
    justifyContent: 'flex-end',
  },
  calendarButton: {
    marginLeft: 10,
    width: 50, // Set a suitable width here for the TouchableOpacity
    height: 50, // Set a suitable height here for the TouchableOpacity
  },
  calendarContainer: {
    position: 'absolute',
    top: 100, // Customize the position of the calendar when it appears
    left: 20, // Customize the position of the calendar when it appears
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
    zIndex: 10,
  },
});
