import { StyleSheet, Text, View, Image, ScrollView,TextInput } from 'react-native'
import React, { useState } from 'react'
import { Card } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ProgCategory = ({navigation}) => {
    const [program, setProgram] = useState();
  return (
    <ScrollView>
      <View style={styles.container1}>
        <Image
          source={require('../../../assets/dashboard/Ellipse7.png')}
          style={styles.image}
        />
        <Text style={{fontWeight:500,fontSize:18,color: '#313131', marginLeft: 10}}>Programs</Text>
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
<TouchableOpacity>
    <View >
      <Card style={{marginTop:20,marginBottom:40,marginLeft:10,marginRight:10,borderRadius:10,backgroundColor:'#E9F3FE'}}>
      <Image   source={require('../../../assets/ProgCategory/Group13.png')} style={{ marginLeft:10,marginTop:20,resizeMode: 'cover',}} />
      <Text style={{marginLeft:20,fontSize: 18,fontWeight: 'bold',marginTop: 10,colorr:'#313131'}}> Immigration</Text>
      </Card>
    </View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('ProgramList')}>
    <View>
      <Card style={{marginBottom:40,marginLeft:10,marginRight:10,borderRadius:10,backgroundColor:'#BFB5FA'}}>
      <Image   source={require('../../../assets/ProgCategory/Group16.png')} style={{marginLeft:3, marginTop:20,resizeMode: 'cover',}} />
      <Text style={{marginLeft:20,fontSize: 18,fontWeight: 'bold',marginTop: 10,colorr:'#313131'}}> Career Consultation</Text>
      </Card>
    </View>
</TouchableOpacity>

<TouchableOpacity>
    <View>
      <Card style={{marginBottom:40,marginLeft:10,marginRight:10,borderRadius:10,backgroundColor:'#FEEAD0'}}>
      <Image   source={require('../../../assets/ProgCategory/Group19.png')} style={{marginLeft:35}} />
      <Text style={{marginLeft:20,fontSize: 18,fontWeight: 'bold',marginTop: 10,colorr:'#313131'}}>Investment or Business</Text>
      </Card>
    </View>
</TouchableOpacity>

<TouchableOpacity>
    <View>
      <Card style={{marginBottom:40,marginLeft:10,marginRight:10,borderRadius:10,backgroundColor:'#E9F3FE'}}>
      <Image source={require('../../../assets/ProgCategory/Group22.png')} style={{marginLeft:60, marginTop:10}} />
      <Text style={{marginLeft:20,fontSize: 18,fontWeight: 'bold',marginTop: 10,colorr:'#313131'}}>Education</Text>
      </Card>
    </View>
</TouchableOpacity>

    </ScrollView>
    

    
  )
}

export default ProgCategory

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
})