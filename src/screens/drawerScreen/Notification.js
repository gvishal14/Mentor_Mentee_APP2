import { StyleSheet, Text, View,Image,Switch} from 'react-native'
import React, { useState } from 'react'

const Notification = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const [isEnabled4, setIsEnabled4] = useState(false);
    const [isEnabled5, setIsEnabled5] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
    const toggleSwitch5 = () => setIsEnabled5(previousState => !previousState);
  return (
    <View>
      <View style={styles.container1}>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 18,
            color: '#313131',
            marginLeft: 10,
          }}>
          Notification Settings
        </Text>
        <Image
          source={require('../../assets/dashboard/Notification.png')}
          style={styles.image3}
        />
      </View>

      <View style={{marginTop:10,marginLeft:10}}>
        <Text style={{color:'#2C3A4B',fontSize:14}}>
            Enable Notification
        </Text>
      </View>

      <View style={{flexDirection:'row',marginTop:10,marginLeft:10,color:'#2C3A4B'}}>
        <View>
        <Text style={{color:'#2C3A4B',fontSize:16}}>
            Allow Notification
        </Text>
        </View>
        <View style={{marginLeft:170}}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        </View>
      </View>

      <View style={{marginTop:10,marginLeft:10}}>
        <Text style={{color:'#2C3A4B',fontSize:14}}>
        Notification Types
        </Text>
      </View>

      <View style={{flexDirection:'row',marginTop:10,marginLeft:10,color:'#2C3A4B'}}>
        <View>
        <Text style={{color:'#2C3A4B',fontSize:16}}>
        Updates & Offerings
        </Text>
        </View>
        <View style={{marginLeft:155}}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch2}
          value={isEnabled2}
        />
        </View>
      </View>

      <View style={{flexDirection:'row',marginTop:10,marginLeft:10,color:'#2C3A4B'}}>
        <View>
        <Text style={{color:'#2C3A4B',fontSize:16}}>
        Chat Notification
        </Text>
        </View>
        <View style={{marginLeft:170}}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled3 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch3}
          value={isEnabled3}
        />
        </View>
      </View>

      <View style={{flexDirection:'row',marginTop:10,marginLeft:10,color:'#2C3A4B'}}>
        <View>
        <Text style={{color:'#2C3A4B',fontSize:16}}>
        Rewards Alerts
        </Text>
        </View>
        <View style={{marginLeft:170}}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled4 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch4}
          value={isEnabled4}
        />
        </View>
      </View>

      <View style={{flexDirection:'row',marginTop:10,marginLeft:10,color:'#2C3A4B'}}>
        <View>
        <Text style={{color:'#2C3A4B',fontSize:16}}>
        Comments Alerts
        </Text>
        </View>
        <View >
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled5 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch5}
          value={isEnabled5}
        />
        </View>
      </View>


    </View> 
  )
}

export default Notification

const styles = StyleSheet.create({
    container1: {
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
      },
      image3: {
        marginLeft: 150,
        justifyContent: 'flex-end',
      },
})