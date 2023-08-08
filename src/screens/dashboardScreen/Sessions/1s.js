import { StyleSheet, Text, View,ScrollView,Image,FlatList,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { Card } from 'react-native-paper';
import SessionHeader from '../../Header/SessionHeader';

const AddNewSession = ({navigation}) => {

  
const ProgramCat = [
  {
  id:1,
  image:require('../../../assets/Session/Mask.png'),

},
{
  id:2,
  image:require('../../../assets/Session/Mask2.png'),
},

]

  const [customStyleIndex, setCustomStyleIndex] = useState(0);

  const handleCustomIndexSelect = index => {
    // Tab selection for custom Tab Selection
    setCustomStyleIndex(index);
  };
  return (
    <ScrollView>
      <View>
        <SessionHeader/>
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
      <View style={{flexDirection:'row',marginLeft:10,marginTop:10,justifyContent:'space-between'}}>
      <View>
      <TouchableOpacity>
      <Image source={require('../../../assets/Session/list.png')}/>
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity>
      <Image source={require('../../../assets/Session/cal.png')}/>
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity>
      <Image source={require('../../../assets/Session/group.png')} style={{marginLeft:250}}/>
      </TouchableOpacity>
      </View>

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
<TouchableOpacity>
  <View >
    <View style={{marginTop:10,marginBottom:20,marginLeft:10,marginRight:10,borderRadius:10,backgroundColor:item.id==1?'#E9F3FE':item.id==2?'#BFB5FA':item.id==3?'#FEF7EC':'#C9F1FF'}}>
    <Image source={item.image}   style={{ marginLeft:5,marginTop:20,resizeMode: 'cover',}} />
    <Text style={{marginLeft:20,fontSize: 18,fontWeight: 'bold',marginTop: 10,colorr:'#313131'}}>{item.title}</Text>
    </View>
  </View>
  <View>
  <Text style={{marginLeft:10}}>
  Session Started
  </Text>
  </View>
</TouchableOpacity>
        )   
      }}
    />
    <View>
    
    </View>


    </ScrollView>
  )
}

export default AddNewSession

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