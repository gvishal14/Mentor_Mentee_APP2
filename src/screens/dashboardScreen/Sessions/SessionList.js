import {StyleSheet, Text, View, Image,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { useNavigation } from '@react-navigation/native';
import { fetchSessionList } from '../../../API';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SessionList = () => {

  const ProgramCat = [
    {
    id:1,
    image:require('../../../assets/Session/Mask.png'),
    image2:require('../../../assets/Add/Calendar.png'),
    title1:'Sessin Started',
    title2:'Career Consultation',
    title3:'Aliqua id fugiat nostrud irure.',
    title4:'Economics Nature',
    title5:'Amet minim mollit non deserunt ullamco est...'
  
  },
  {
    id:2,
    image:require('../../../assets/Session/Mask2.png'),
    image2:require('../../../assets/Add/Calendar.png'),
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
  const [sessionData, setSessionData] = useState([]);

  

  const handleCustomIndexSelect = index => {
    // Tab selection for custom Tab Selection
    setCustomStyleIndex(index);
  }

//   useEffect(() => {
//     fetchSessionData();
//     setTimeout(()=>{
//       const userdata =  AsyncStorage.getItem("userData") 
//     },1500)
//    // Fetch session data when the component mounts
//   }, [customStyleIndex]);
// console.log('userdata',userdata)
 
//   const fetchSessionData = async () => {


//     try {
//       const mentorid = '64d1d72c8222b058983b8f86'; // Replace with the actual mentor id
//       const sessionType = customStyleIndex === 0 ? 'online' : 'offline';
//       const response = await fetchSessionList(userdata.mentorid, userdata.sessionType,userdata.token);
//       setSessionData(response); // Update the state with fetched data
//     } catch (error) {
//       console.error('Error fetching session data:', error);
//     }
//   };

const fetchSessionData = async () => {
  try {
    const userdata = await AsyncStorage.getItem("userData");
    if (!userdata) {
      console.log('UserData not available');
      return;
    }

    const parsedUserData = JSON.parse(userdata); // Parse the JSON string
    const mentorid = '64d1d72c8222b058983b8f86'; // Replace with the actual mentor id
    const sessionType = customStyleIndex === 0 ? 'online' : 'offline';
    const response = await fetchSessionList(parsedUserData.mentorid, parsedUserData.sessionType, parsedUserData.token);
    setSessionData(response);
  } catch (error) {
    console.error('Error fetching session data:', error);
  }
};

useEffect(() => {
  fetchSessionData();
}, [customStyleIndex]);

  // const fetchSessionData = async () => {
  //   try {
  //     const userdata = await AsyncStorage.getItem("userData");
      
  //     if (userdata) {
  //       const { mentorid, sessionType, token } = JSON.parse(userdata);
  //       const response = await fetchSessionList(mentorid, sessionType, token);
  //       setSessionData(response); // Update the state with fetched data
  //     } else {
  //       console.error('User data not found in AsyncStorage.');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching session data:', error);
  //   }
  // };

  useEffect(() => {
    // Process data when sessionData changes
    if (sessionData.length > 0) {
      const response = sessionData; // Replace with your actual response structure
      if (response.status === 'Success') {
        AsyncStorage.setItem('mentorid', mentorid); // Set mentorid in AsyncStorage
        console.log('data------->', response.data);
        console.log('mentorid', mentorid);
        // navigation.reset({index: 1, routes: [{name: 'DrawerStack'}]});
        // navigation.navigate('DrawerStack');
      } else {
        Alert.alert('Login Failed');
        console.warn('Login Failed');
      }
    }
  }, [sessionData]);


    



  return (
    <ScrollView>
    <View>
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
      <View style={{flexDirection:'row',marginLeft:10,marginTop:10,justifyContent:'space-between'}}>
      <View>
      <TouchableOpacity>
      <Image source={require('../../../assets/Session/list.png')}/>
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity onPress={()=> navigation.navigate('Calendars') }>
      <Image source={require('../../../assets/Session/cal.png')}/>
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity onPress={()=> navigation.navigate('AddNewSession1')}>
      <Image source={require('../../../assets/Session/group.png')} style={{marginLeft:250}}/>
      </TouchableOpacity>
      </View>

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

      </View>

      {customStyleIndex === 0 ? (
        <View>
    <FlatList 
      data={ProgramCat}
      renderItem={({item})=>{
        console.log('item--->',item)
        return(
          // <TouchableOpacity onPress={()=>navigation.navigate('ProgramList',{item:item})}/>
<TouchableOpacity onPress={()=> navigation.navigate('Online')}>
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
<TouchableOpacity onPress={()=> navigation.navigate('Offline')} >
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

      
      </View>
    </View>
    </ScrollView>
  );
};

export default SessionList;

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
