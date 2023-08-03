import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Card} from 'react-native-paper';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const ProgramData = [
  {
    id: 1,
    image: require('../../../assets/ProgramDetailsS/Rectangle1.png'),
    title: '1. Introduction',
    disc: 'Aliqua id fugiat nostrud irure ex duisea quis id quis ad et. Sunt.',
  },
  {
    id: 2,
    image: require('../../../assets/ProgramDetailsS/Rectangle2.png'),
    title: '2. Deserunt mollit ',
    disc: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt.',
  },
  {
    id: 3,
    image: require('../../../assets/ProgramDetailsS/Rectangle3.png'),
    title: '3. Deserunt mollit',
    disc: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt.',
  },
];

const ProgDetailsS = ({navigation}) => {
  const [customStyleIndex, setCustomStyleIndex] = useState(0);
  const role = customStyleIndex === 0 ? 'Session' : 'More';

  const handleCustomIndexSelect = index => {
    // Tab selection for custom Tab Selection
    setCustomStyleIndex(index);
  };

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
          Programs
        </Text>
        <Image
          source={require('../../../assets/dashboard/Notification.png')}
          style={styles.image3}
        />
      </View>

      <View>
        <Image
          source={require('../../../assets/ProgList/Screenshot.png')}
          style={{
            height: 200,
            width: 350,
            borderRadius: 10,
            marginLeft: 5,
            marginTop: 10,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            color: '#313131',
            fontWeight: 500,
            fontSize: 20,
            marginTop: 10,
            marginLeft: 10,
          }}>
          Aliqua id fugiat nostrud irure
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../../assets/ProgList/Calendar.png')}
          style={{marginTop: 13, marginLeft: 10}}
        />
        <Text style={{color: '#313131', marginTop: 10, marginLeft: 10}}>
          02-21-2022 | 03:50 PM
        </Text>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: '#313131',
              marginTop: 10,
              justifyContent: 'flex-end',
              marginLeft: 100,
            }}>
            $14.99
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <SegmentedControlTab
          values={['Session', 'More']}
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
        <FlatList
          data={ProgramData}
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
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 400,
                          color: '#313131',
                          marginTop: 10,
                          marginLeft: 20,
                        }}>
                        Session duration
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: '#313131',
                          marginTop: 10,
                          marginLeft: 20,
                        }}>
                        15:20 Min
                      </Text>
                    </View>

                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 400,
                          color: '#313131',
                          marginTop: 10,
                          marginLeft: 20,
                        }}>
                        Date
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: '#313131',
                          marginTop: 10,
                          marginLeft: 20,
                        }}>
                        06-21-2022
                      </Text>
                    </View>

                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 400,
                          color: '#313131',
                          marginTop: 10,
                          marginLeft: 20,
                        }}>
                        Scheduled time
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: '#313131',
                          marginTop: 10,
                          marginLeft: 20,
                        }}>
                        10:30 AM(EST)
                      </Text>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <View>
          <View style={{marginLeft: 10, marginTop: 10}}>
            <Text style={{fontWeight: 400, fontSize: 16, color: '#313131'}}>
              Program Description
            </Text>
          </View>

          <View style={{marginLeft: 10, marginTop: 10}}>
            <Text style={{fontWeight: 400, fontSize: 14, color: '#313131'}}>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt.
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
            <Text style={{fontWeight: 400, fontSize: 12, color: '#313131'}}>
              Mentorship Mode
            </Text>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 12,
                color: '#313131',
                marginLeft: 100,
              }}>
              Availability
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <Text style={{fontWeight: 400, fontSize: 12, color: '#313131'}}>
              Online
            </Text>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 12,
                color: '#313131',
                marginLeft: 160,
              }}>
              24*7
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
            <Text style={{fontWeight: 400, fontSize: 12, color: '#313131'}}>
              Mentee allowed
            </Text>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 12,
                color: '#313131',
                marginLeft: 100,
              }}>
              Mentee registered
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <Text style={{fontWeight: 400, fontSize: 12, color: '#313131'}}>
              150
            </Text>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 12,
                color: '#313131',
                marginLeft: 160,
              }}>
              150
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Image
                  source={require('../../../assets/ProgramDetailsS/clock.png')}
                />
                <Text style={styles.buttonText}>Add New Session</Text>
                <Image
                  source={require('../../../assets/ProgramDetailsS/Stroke.png')}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('RegisteredMentees')}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Image
                  source={require('../../../assets/ProgramDetailsS/3User.png')}
                />
                <Text style={styles.buttonText}>Registered Mentees</Text>
                <Image
                  source={require('../../../assets/ProgramDetailsS/Stroke.png')}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Image
                  source={require('../../../assets/ProgramDetailsS/Chat.png')}
                />
                <Text style={styles.buttonText}>Chat With Mentees</Text>
                <Image
                  source={require('../../../assets/ProgramDetailsS/Stroke.png')}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('CompletedSessions')}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Image
                  source={require('../../../assets/ProgramDetailsS/complete.png')}
                />
                <Text style={styles.buttonText}>Completed Session</Text>
                <Image
                  source={require('../../../assets/ProgramDetailsS/Stroke.png')}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Image
                  source={require('../../../assets/ProgramDetailsS/raise.png')}
                />
                <Text style={styles.buttonText}>Raise a Dispute</Text>
                <Image
                  source={require('../../../assets/ProgramDetailsS/Stroke.png')}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Image
                  source={require('../../../assets/ProgramDetailsS/Star.png')}
                />
                <Text style={styles.buttonText}>View Ratings</Text>
                <Image
                  source={require('../../../assets/ProgramDetailsS/Stroke.png')}
                />
              </View>
            </TouchableOpacity>
          </View>

        </View>
      )}
    </ScrollView>
  );
};

export default ProgDetailsS;

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  image3: {
    marginLeft: 200,
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
  button: {
    backgroundColor: '#FFFFFF',
    width: 350,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    color: '#313131',
    marginHorizontal: 40,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop:10
  },
});
