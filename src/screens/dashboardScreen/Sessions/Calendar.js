import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity,FlatList } from 'react-native'
import React, { useState } from 'react'
import SegmentedControlTab from 'react-native-segmented-control-tab';
// import { Calendar } from 'react-native-calendars';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { Card } from 'react-native-paper';

const ProgramData = [
    {
      id: 1,
      image: require('../../../assets/ProgramDetailsS/Rectangle1.png'),
      title: 'CAREER CONSULTATION',
      disc: 'Aliqua id fugiat nostrud',
      disc2:'Economics Nature',
      image2: require('../../../assets/ProgList/Calendar.png'),
      date:'01-21-2022 | 03:50 PM'
    },
    {
      id: 2,
      image: require('../../../assets/ProgramDetailsS/Rectangle2.png'),
      title: 'EDUCATION ',
      disc: 'Aliqua id fugiat nostrud',
      disc2:'Deserunt ullamco est',
      image2: require('../../../assets/ProgList/Calendar.png'),
      date:'01-23-2022 | 03:50 PM'
    },
    {
      id: 3,
      image: require('../../../assets/ProgramDetailsS/Rectangle3.png'),
      title: 'INVESTMENT OR BUSINESS',
      disc: 'Aliqua id fugiat nostrud',
      disc2:'Deserunt ullamco est',
      image2: require('../../../assets/ProgList/Calendar.png'),
      date:'01-25-2022 | 03:50 PM'
    },
    {
        id: 4,
        image: require('../../../assets/ProgramDetailsS/Rectangle3.png'),
        title: 'EDUCATION',
        disc: 'Aliqua id fugiat nostrud',
        disc2:'Deserunt ullamco est',
        image2: require('../../../assets/ProgList/Calendar.png'),
        date:'01-29-2022 | 03:50 PM'
      },
  ];

const Calendars = ({navigation}) => {

    // const [showModal, setShowModal] = useState(false);
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
    const [customStyleIndex, setCustomStyleIndex] = useState(0);
    const [selectedIndices, setSelectedIndices] = useState([0]);

    const handleMultipleIndexSelect = (index) => {
        // For multi Tab Selection SegmentedControlTab
        if (selectedIndices.includes(index)) {
          // Included in the selected array then remove
          setSelectedIndices(
            selectedIndices.filter((i) => i !== index)
          );
        } else {
          // Not included in the selected array then add
          setSelectedIndices([...selectedIndices, index]);
        }
      };

    const role = customStyleIndex === 0 ? 'Online' : 'Offline';
    const role2 =selectedIndices === 0 ? 'List' : selectedIndices === 1 ? 'Calendar' : 'AddNew';
  

    const handleCustomIndexSelect = index => {
        // Tab selection for custom Tab Selection
        setCustomStyleIndex(index);
      };

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
          Sessions
        </Text>
        <Image
          source={require('../../../assets/dashboard/Notification.png')}
          style={styles.image3}
        />
      </View>

      <View style={styles.container}>
        <SegmentedControlTab
          values={['Online', 'Offline']}
          selectedIndex={customStyleIndex}
          onTabPress={handleCustomIndexSelect}
          borderRadius={100}
          tabsContainerStyle={{
            height: 50,
            width: 220,
            borderRadius: 80,
            marginRight: 120,
          }}
          tabStyle={{
            borderWidth: 0,
            borderColor: 'transparent',
            borderRadius: 20,
          }}
          activeTabStyle={{backgroundColor: 'gray', marginTop: 5}}
          tabTextStyle={{color: 'black', fontWeight: 'bold'}}
          activeTabTextStyle={{color: 'black'}}
        />
      </View>

      {customStyleIndex === 0 ? (
        <View>
            <View>
            <View style={{flexDirection:'row',marginLeft:10,marginTop:10,justifyContent:'space-between'}}>
      <View>
      <TouchableOpacity onPress={()=> navigation.navigate('SessionList')}>
      <Image source={require('../../../assets/Session/list.png')}/>
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity>
      <Image source={require('../../../assets/Session/calendar.png')}/>
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity onPress={()=> navigation.navigate('AddNewSession1')}>
      <Image source={require('../../../assets/Session/group.png')} style={{marginLeft:250}}/>
      </TouchableOpacity>
      </View>

      </View>
        {/* <SegmentedControlTab
          values={[
            <Image source={require('../../../assets/segmented/list.png')}/>,
            <Image source={require('../../../assets/segmented/calendar.png')}/>,
            <Image source={require('../../../assets/segmented/add.png')}/>,

          ]}
          multiple
          //You need to add the multiple as conpared to single select
          selectedIndices={selectedIndices}
          //pass the selected index array for the default selection
          onTabPress={handleMultipleIndexSelect}
          //Pushing the selected option index in selected item array
        /> */}
            </View>
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

    <View>
    <FlatList
          data={ProgramData}
          renderItem={({item}) => {
            console.log('item--->', item);
            return (

            <TouchableOpacity >
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
                source={item.image}
                style={{marginLeft: 10, marginTop: 10, marginBottom: 10}}
              />
              
              <View>
                <Text style={{marginTop: 10, marginLeft: 10}}>
                  {item.title}
                </Text>
                <View style={{flexDirection:'row'}}>
                <Image source={item.image2} style={{marginTop:13,marginLeft:10}}/>
                <Text style={{marginTop: 10, marginLeft:5}}>
                  {item.date}
                </Text>
                </View>
      
                <View >
                  <Text style={{marginTop: 10, marginLeft: 10}}>{item.disc}</Text>
                 
                </View>
                <View >
                  <Text style={{marginTop: 10, marginLeft: 10}}>{item.disc2}</Text>
                 
                </View>
              </View>
            </View>
            </Card>
            </TouchableOpacity>
            );
          }}
        />

    </View>


        </View>

      ) : (
       <Text>
        hello
       </Text>
           
      )}
      </ScrollView>
  )
}

export default Calendars

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
})