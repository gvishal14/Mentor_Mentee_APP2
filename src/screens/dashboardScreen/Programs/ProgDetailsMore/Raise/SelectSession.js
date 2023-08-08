import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react'
import {Card} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const Completed = [
  {
    id: 1,
    image: require('../../../../../assets/CompletedSessions/Rectangle1.png'),

    title: '1. Introduction',
    disc: 'Aliqua id fugiat nostrud irure ex duisea quis id quis ad et. Sunt.',
  },
  {
    id: 2,
    image: require('../../../../../assets/CompletedSessions/Rectangle2.png'),

    title: '2. Deserunt mollit',
    disc: 'Aliqua id fugiat nostrud irure ex duisea quis id quis ad et. Sunt.',
  },
  {
    id: 3,
    image: require('../../../../../assets/CompletedSessions/Rectangle3.png'),

    title: '3. Deserunt mollit',
    disc: 'Aliqua id fugiat nostrud irure ex duisea quis id quis ad et. Sunt.',
  },
  {
    id: 4,
    image: require('../../../../../assets/CompletedSessions/Rectangle1.png'),

    title: '4. nostrud irure ex',
    disc: 'Aliqua id fugiat nostrud irure ex duisea quis id quis ad et. Sunt.',
  },
  {
    id: 5,
    image: require('../../../../../assets/CompletedSessions/Rectangle2.png'),

    title: '5. Deserunt mollit',
    disc: 'Aliqua id fugiat nostrud irure ex duisea quis id quis ad et. Sunt.',
  },
  {
    id: 6,
    image: require('../../../../../assets/CompletedSessions/Rectangle3.png'),

    title: '6. Deserunt mollit',
    disc: 'Aliqua id fugiat nostrud irure ex duisea quis id quis ad et. Sunt.',
  },
  {
    id: 7,
    image: require('../../../../../assets/CompletedSessions/Rectangle1.png'),

    title: '7. Deserunt mollit',
    disc: 'Aliqua id fugiat nostrud irure ex duisea quis id quis ad et. Sunt.',
  },
];

const SelectSession = () => {
  const navigation = useNavigation();
  
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
          Raise a Dispute
        </Text>
        <Image
          source={require('../../../../../assets/dashboard/Notification.png')}
          style={styles.image3}
        />
      </View>

      <View>
      <Text
          style={{
            fontWeight: 500,
            fontSize: 18,
            color: '#313131',
            marginLeft: 10,
          }}>
          Select Session
        </Text>
      </View>

      <FlatList
        data={Completed}
        renderItem={({item}) => {
          console.log('item--->', item);
          return (
            <TouchableOpacity  onPress={() => navigation.navigate('SelectMentees', {selectedSession: item})}>
              <View
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  flex:1,
                  flexDirection:'row',
                  backgroundColor: 'white',
                }}>
                  <View style={{flexDirection:'row',flex:0.9}}>
                  <View>
                <Image
                  source={item.image}
                  style={{marginLeft: 10, marginTop: 10, marginBottom: 10}}
                />
                </View>
                <View style={{flex:0.8}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: '#313131',
                    marginTop: 10,
                    marginLeft: 10,
                  }}>
                  {item.title}
                </Text>
                <Text style={{marginLeft: 10}}>{item.disc}</Text>

               
                </View>
                  </View>
                 
               
              </View>
            </TouchableOpacity>
          );
        }}
      />

    </ScrollView>
  )
}

export default SelectSession

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  image3: {
    marginLeft: 140,
    justifyContent: 'flex-end',
  },
})