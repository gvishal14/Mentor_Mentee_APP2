import { StyleSheet, Text, View, ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {Card} from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';

const AddComment = ({route}) => {

  const  selectedSession  = route.params.selectedSession;
  const selectedMentess  = route.params.selectedMentess;
  console.log('Selected Session:', selectedSession);
  console.log('Selected Mentee:', selectedMentess);

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
          Selected Session & Mentee
        </Text>
      </View>

      <TouchableOpacity>
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
                  source={selectedSession.image}
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
                  {selectedSession.title}
                </Text>
                <Text style={{marginLeft: 10}}>{selectedSession.disc}</Text>

               
                </View>
                  </View>
                 
               
              </View>
            </TouchableOpacity>

      

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
                      source={selectedMentess.image}
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
                        {selectedMentess.title}
                      </Text>
                      <Text style={{marginTop: 10, marginLeft: 10}}>
                        {selectedMentess.disc}
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                  </View>
                </Card>
              </TouchableOpacity>

              <View>
      <Text
          style={{
            fontWeight: 500,
            fontSize: 18,
            color: '#313131',
            marginLeft: 10,
          }}>
          Add Comment
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Referral Code" 
        // onChangeText={text => setRefCode(text)}
        //value={refCode}
        />
      </View>






    </ScrollView>
  )
}

export default AddComment

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
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
  },
})