import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity,FlatList} from 'react-native'
import React from 'react'
import {Card} from 'react-native-paper';

const Mentees = [
  {
    id: 1,
    image: require('../../../assets/RegisteredMentess/Rectangle.png'),
    image2:require('../../../assets/RegisteredMentess/Chat.png'),
    title: 'Smith Mathew',
    disc: 'dolore cillum minim tempor',
  },
  {
    id: 2,
    image: require('../../../assets/RegisteredMentess/Rectangle.png'),
    image2:require('../../../assets/RegisteredMentess/Chat.png'),
    title: 'Floyd Miles',
    disc: 'dolore cillum minim enim',
  },
  {
    id: 3,
    image: require('../../../assets/RegisteredMentess/Rectangle6.png'),
    image2:require('../../../assets/RegisteredMentess/Chat.png'),
    title: 'Kathryn Murphy',
    disc: 'dolore cillum minim enim',
  },
  {
    id: 4,
    image: require('../../../assets/RegisteredMentess/Rectangle.png'),
    image2:require('../../../assets/RegisteredMentess/Chat.png'),
    title: 'Esther Howard',
    disc: 'dolore cillum minim enim',
  },
  {
    id: 5,
    image: require('../../../assets/RegisteredMentess/Rectangle.png'),
    image2:require('../../../assets/RegisteredMentess/Chat.png'),
    title: 'Jacob Jones',
    disc: 'dolore cillum minim enim',
  },
  {
    id: 6,
    image: require('../../../assets/RegisteredMentess/Rectangle.png'),
    image2:require('../../../assets/RegisteredMentess/Chat.png'),
    title: 'Darrell Steward',
    disc: 'dolore cillum minim enim',
  },
  {
    id: 7,
    image: require('../../../assets/RegisteredMentess/Rectangle.png'),
    image2:require('../../../assets/RegisteredMentess/Chat.png'),
    title: 'Savannah Nguyen',
    disc: 'dolore cillum minim enim',
  },
  {
    id: 8,
    image: require('../../../assets/RegisteredMentess/Rectangle7.png'),
    image2:require('../../../assets/RegisteredMentess/Chat.png'),
    title: 'Devon Lane',
    disc: 'dolore cillum minim enim',
  },
  {
    id: 9,
    image: require('../../../assets/RegisteredMentess/Rectangle.png'),
    image2:require('../../../assets/RegisteredMentess/Chat.png'),
    title: 'Albert Flores',
    disc: 'dolore cillum minim enim',
  },
  {
    id: 10,
    image: require('../../../assets/RegisteredMentess/Rectangle5.png'),
    image2:require('../../../assets/RegisteredMentess/Chat.png'),
    title: 'Eleanor Pena',
    disc: 'dolore cillum minim enim',
  },
]

const RegisteredMentees = () => {
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
            Registered Mentees
        </Text>
        <Image
          source={require('../../../assets/dashboard/Notification.png')}
          style={styles.image3}
        />
      </View>

      <FlatList
          data={Mentees}
          renderItem={({item}) => {
            console.log('item--->', item);
            return (
      <TouchableOpacity>
                <Card
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    backgroundColor: 'white',
                  }}>
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
                      <Text style={{marginTop: 10, marginLeft: 10}}>
                        {item.disc}
                      </Text>
                    </View>
                    <View>
                    <Image
                      source={item.image2}
                      style={{marginLeft:50, marginTop: 25, marginBottom: 10}}
                    />
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                  </View>
                </Card>
              </TouchableOpacity>
          )
        }
      }/>

    </ScrollView>
  )
}

export default RegisteredMentees

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