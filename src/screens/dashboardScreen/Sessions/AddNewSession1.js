import { StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { Card } from 'react-native-paper';

const AddNewSession1 = ({navigation}) => {
    const [selected, setSelected] = useState('');

    const customTheme = {
        backgroundColor: '#f0f0f0', // Background color of the calendar
        calendarBackground: '#ffffff', // Background color of the calendar container
        textSectionTitleColor: '#b6c1cd', // Color of month title text
        selectedDayBackgroundColor: 'orange', // Background color of the selected day
        selectedDayTextColor: '#ffffff', // Text color of the selected day
        todayTextColor: 'blue', // Text color of today's date
        dayTextColor: '#2d4150', // Text color of regular days
        textDisabledColor: '#d9e1e8', // Text color of disabled days
        dotColor: 'orange', // Color of dots indicating events
        selectedDotColor: '#ffffff', // Color of selected dots
        arrowColor: 'orange', // Color of the arrows
        monthTextColor: 'blue', // Text color of the month
        indicatorColor: 'blue', // Color of the current date indicator
        textDayFontFamily: 'monospace', // Font family for day text
        textMonthFontFamily: 'monospace', // Font family for month text
        textDayHeaderFontFamily: 'monospace', // Font family for day header text
        textMonthFontWeight: 'bold', // Font weight for month text
        textDayFontSize: 16, // Font size for day text
        textMonthFontSize: 20, // Font size for month text
        textDayHeaderFontSize: 14, // Font size for day header text
      };
  return (
  <ScrollView>
    <View>
    <Card style={{marginTop:20,marginLeft:10,marginRight:10}}>
        <Calendar
  onDayPress={day => {
    setSelected(day.dateString);
  }}
  markedDates={{
    [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'},
  }}
  theme={customTheme}
/>
     </Card>
</View>


<View style={styles.inputContainer}>
<TextInput style={styles.input2} placeholder="Select Time" />
<TouchableOpacity>
<View>
<Image source={require('../../../assets/Add/Time.png')} style={{marginRight:10}}/>
</View>
</TouchableOpacity>
</View>

<View style={styles.inputContainer}>
<TextInput style={styles.input2} placeholder="Select Program" />
<TouchableOpacity>
<View>
<Image source={require('../../../assets/Add/Vector.png')} style={{marginRight:10}}/>
</View>
</TouchableOpacity>
</View>

<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('AddNewSession')}>
<Text style={styles.buttonText} >Next</Text>
</TouchableOpacity>

</ScrollView>  
  )
}

export default AddNewSession1

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
      input2: {
        flex: 1,
        height: 40,
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
        marginTop: 60
        
      },
      buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
      },
})