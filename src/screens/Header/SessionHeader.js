import {StyleSheet, Text, View, Image,TouchableOpacity,FlatList} from 'react-native';
import React, { useState } from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { useNavigation } from '@react-navigation/native';

const SessionHeader = () => {

  const ProgramCat = [
    {
    id:1,
    image:require('../../assets/Session/Mask.png'),
    image2:require('../../assets/Add/Calendar.png'),
    title1:'Sessin Started',
    title2:'Career Consultation',
    title3:'Aliqua id fugiat nostrud irure.',
    title4:'Economics Nature',
    title5:'Amet minim mollit non deserunt ullamco est...'
  
  },
  {
    id:2,
    image:require('../../assets/Session/Mask2.png'),
    image2:require('../../assets/Add/Calendar.png'),
    title1:'03-16-2022',
    title2:'Education',
    title3:'Aliqua id fugiat nostrud irure.',
    title4:'Deserunt ullamco est',
    title5:'Amet minim mollit non deserunt ullamco est...'
  },
  
  ]


  const navigation = useNavigation();

  const [customStyleIndex, setCustomStyleIndex] = useState(0);
  const role = customStyleIndex === 0 ? 'Online' : 'Offline';


  const handleCustomIndexSelect = index => {
    // Tab selection for custom Tab Selection
    setCustomStyleIndex(index);
  }

  return (
    <View>
      <View style={styles.container1}>
        <Image
          source={require('../../assets/dashboard/Ellipse7.png')}
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
          source={require('../../assets/dashboard/Notification.png')}
          style={styles.image3}
        />
      </View>

      <View>
      
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

          </View>
      ):(
        <View>
  <View>
      <Text
          style={{
            fontWeight: 500,
            fontSize: 18,
            color: '#313131',
            marginLeft: 10,
            marginTop:10
          }}>
          Scheduled  Session
        </Text>
      </View>

      <FlatList 
      data={ProgramCat}
      renderItem={({item})=>{
        console.log('item--->',item)
        return(
          // <TouchableOpacity onPress={()=>navigation.navigate('ProgramList',{item:item})}/>
<TouchableOpacity >
  <View >
    <View style={{marginTop:10,marginBottom:20,marginLeft:10,marginRight:10,borderRadius:10,backgroundColor:item.id==1?'#E9F3FE':item.id==2?'#BFB5FA':item.id==3?'#FEF7EC':'#C9F1FF'}}>
    <Image source={item.image}   style={{ marginLeft:5,marginTop:20,resizeMode: 'cover',}} />
    {/* <Text style={{marginLeft:20,fontSize: 18,fontWeight: 'bold',marginTop: 10,colorr:'#313131'}}>{item.title}</Text> */}
    </View>
  </View>
  <View style={{flexDirection:'row'}}>
    <Image source={item.image2} style={{marginLeft:10}}/>
  <Text style={{marginLeft:10}}>
  {item.title1}
  </Text>
  </View>

  <View>
  <Text style={{marginLeft:10}}>
  {item.title2}
  </Text>
  </View>

  <View>
  <Text style={{marginLeft:10}}>
  {item.title3}
  </Text>
  </View>

  <View>
  <Text style={{marginLeft:10}}>
  {item.title4}
  </Text>
  </View>

  <View>
  <Text style={{marginLeft:10}}>
  {item.title5}
  </Text>
  </View>

</TouchableOpacity>
        )   
      }}
    />
          </View>
      )
      }

      <View style={{flexDirection:'row',marginLeft:10,marginTop:10,justifyContent:'space-between'}}>
      <View>
      <TouchableOpacity>
      <Image source={require('../../assets/Session/list.png')}/>
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity onPress={()=> navigation.navigate('Calendars') }>
      <Image source={require('../../assets/Session/cal.png')}/>
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity onPress={()=> navigation.navigate('AddNewSession1')}>
      <Image source={require('../../assets/Session/group.png')} style={{marginLeft:250}}/>
      </TouchableOpacity>
      </View>

      </View>
      </View>
    </View>
  );
};

export default SessionHeader;

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
});
