import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image,FlatList } from 'react-native'
import React, { useState } from 'react'
import SessionHeader from '../../Header/SessionHeader'
import SegmentedControlTab from 'react-native-segmented-control-tab';

const SessionList = ({navigation}) => {
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

  return (
    <ScrollView>
    <View>
    <SessionHeader/>
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


  </ScrollView>
  )
}

export default SessionList

const styles = StyleSheet.create({})