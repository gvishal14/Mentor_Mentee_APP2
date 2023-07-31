import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const dashboard = () => {
  const [selectedIndices, setSelectedIndices] = useState([0]);

  const handleMultipleIndexSelect = index => {
    // For multi Tab Selection SegmentedControlTab
    if (selectedIndices.includes(index)) {
      // Included in the selected array then remove
      setSelectedIndices(selectedIndices.filter(i => i !== index));
    } else {
      // Not included in the selected array then add
      setSelectedIndices([...selectedIndices, index]);
    }
  };

  const session = [
    {
      id:1,
      session_started: 'Session Started',
      date:'03-16-2020',
      career_consultation: 'CAREER CONSULTATION', 
      eductaion_consultation:'EDUCATIONAL CONSULTATION',
      image:require('../../assets/dashboard/Calendar.png'),
    },
    // {
    //   id:2,
    //   session_started: '',
    //   career_consultation: '', 
    //   eductaion_consultation:'',
    //   image:require('../../assets/dashboard/Calendar.png'),
    // }
  ]
  return (
    <ScrollView >
      <View style={styles.container1}>
        <Image
          source={require('../../assets/dashboard/Ellipse7.png')}
          style={styles.image}
        />
        <Text style={{color: '#313131', marginLeft: 10}}>Hello, Cameron</Text>
        <Image
          source={require('../../assets/dashboard/Notification.png')}
          style={styles.image3}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/dashboard/Search.png')}
          style={styles.icon}
        />
        <TextInput style={styles.input} placeholder="Search" />
      </View>

      <View style={styles.container1}>
       
        <View
          style={{
            borderRadius: 10,
            backgroundColor: '#FEF0F1',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
            height: 70,
            width: 70,
          }}>
          <Image
            source={require('../../assets/dashboard/Group123.png')}
            style={{}}
          />
        </View>

        <View style={{flex: 1, marginBottom: 30}}>
          <Text
            style={{
              color: '#313131',
              fontSize: 14,
              marginLeft: 10,
              fontWeight: 500,
              width: 95,
              height: 17,
            }}>
            Total Revenue
          </Text>
          <View
            style={{
              flex: 1,

              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  color: '#313131',
                  fontSize: 30,
                  marginLeft: 10,
                  fontWeight: 700,
                }}>
                $54178
              </Text>
            </View>

            <View
              style={{
                marginRight: 100,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/dashboard/Arrow.png')}
                style={{}}
              />
              <Text style={{color: '#313131', fontSize: 15}}>7.52%</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#FEF0F1',
          borderRadius: 10,
          marginLeft: 10,
          marginRight: 10,
          flexDirection: 'row',
        }}>
        <View>
          <Text
            style={{
              color: '#313131',
              fontSize: 18,
              fontWeight: 500,
              width: 146,
              height: 21,
              marginLeft: 35,
              marginTop: 10,
            }}>
            Current Mentees
          </Text>
          <Text
            style={{
              color: '#313131',
              fontSize: 30,
              fontWeight: 700,
              marginLeft: 35,
              width: 75,
              height: 36,
              marginTop: 10,
            }}>
            5412
          </Text>
        </View>
        <View style={{marginLeft: 2, marginBottom: 1}}>
          <Image
            source={require('../../assets/dashboard/CurrentMentees.png')}
            style={{height: 85.02, width: 116, marginRight: 10, marginLeft: 20}}
          />
        </View>
      </View>
      <Text
        style={{
          color: '#313131',
          fontSize: 20,
          fontWeight: 500,
          width: 337,
          height: 24,
          fontFamily: 'SF Pro Text',
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          marginBottom: 10,
        }}>
        Number of Mentees who signed up
      </Text>

      <View
        style={{
          marginTop: 10,
          marginRight: 10,
          marginLeft: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
          backgroundColor: '',
        }}>
        <View
          style={{
            height: 76,
            width: 98,
            borderRadius: 5,
            flexDirection: 'column',
            backgroundColor: '#FF00001A',
          }}>
          <Text
            style={{
              color: '#313131',
              fontWeight: 700,
              fontSize: 24,
              marginLeft: 5,
            }}>
            21
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#313131',
              marginLeft: 5,
              fontWeight: 500,
              fontSize: 12,
            }}>
            In Past day
          </Text>
        </View>

        <View
          style={{
            height: 76,
            width: 98,
            borderRadius: 5,
            flexDirection: 'column',
            backgroundColor: '#F0FFF0',
          }}>
          <Text
            style={{
              color: '#313131',
              fontWeight: 700,
              fontSize: 24,
              marginLeft: 5,
            }}>
            87
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#313131',
              marginLeft: 5,
              fontWeight: 500,
              fontSize: 12,
            }}>
            In Past Week
          </Text>
        </View>

        <View
          style={{
            height: 76,
            width: 98,
            borderRadius: 5,
            flexDirection: 'column',
            backgroundColor: '#B0C4DE',
          }}>
          <Text
            style={{
              color: '#313131',
              fontWeight: 700,
              fontSize: 24,
              marginLeft: 5,
            }}>
            21
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#313131',
              marginLeft: 5,
              fontWeight: 500,
              fontSize: 12,
            }}>
            In Past Month
          </Text>
        </View>
      </View>

      <Text
        style={{
          color: '#313131',
          fontSize: 20,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          marginBottom: 10,
        }}>
        Total Number of Sessions
      </Text>

      <View style={styles.container}>
        <SegmentedControlTab
          values={['Current', 'Past', 'Upcoming']}
          multiple
          //You need to add the multiple as conpared to single select
          selectedIndices={selectedIndices}
          //pass the selected index array for the default selection
          onTabPress={handleMultipleIndexSelect}
          //Pushing the selected option index in selected item array
          activeTabStyle={{backgroundColor: '#313131'}}
          tabStyle={{
            borderColor: 'lightgray',
            backgroundColor:'lightgray',
            marginHorizontal:5,
            borderRadius: 7,
            width: 85,
            height: 39,
          }}
          tabContent={{color: 'white'}}
        />
      </View>

      <Text
        style={{
          color: '#313131',
          fontSize: 20,
          fontFamily: 'SF Pro Text',
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          marginBottom: 10,
        }}>
        10 Current Sessions
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginRight: 10,
          marginLeft: 10,
          justifyContent: 'space-between',
          backgroundColor: '',
          borderRadius: 10,
          flex:1
        }}>
        <View
          style={{
            backgroundColor: '#FAF2EF',
            borderRadius: 10,
            
          }}>
          <Image
            source={require('../../assets/dashboard/Maskgroup.png')}
            style={styles.image2}
          />
          <View>
             <FlatList 
        data={session}
        keyExtractor={(item)=>item.id}
        renderItem={({item,index})=>{
          console.log('session',item,index)
          return(
            <>
            <View style={{flexDirection:'row'}}>
              <Image source={item.image} />
               <Text>{item.session_started}</Text>
            </View>
            
            <Text>{item.career_consultation}</Text>
           
            </>
          )
        }}
        />
          </View>

          {/* <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/dashboard/Calendar.png')}
              style={styles.image}
            />

         
          </View> */}

        </View>
        <View style={{backgroundColor: '#E7F7FE', width: 90, borderRadius: 10}}>
          <Image
            source={require('../../assets/dashboard/Group482722.png')}
            style={styles.image1}
          />
          <View>
             <FlatList 
        data={session}
        keyExtractor={(item)=>item.id}
        renderItem={({item,index})=>{
          console.log('session',item,index)
          return(
            <>
            <View style={{flexDirection:'row'}}>
              <Image source={item.image} />
               <Text>{item.date}</Text>
            </View>
            
            <Text>{item.eductaion_consultation}</Text>
           
            </>
          )
        }}
        />
          </View>
        </View>
      </View>

      <View style={{flexDirection:'row',backgroundColor:'',marginTop:10,alignItems:'center',justifyContent:'space-evenly'}}>

        <View style={{flexDirection:'column'}}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/dashboard/Home.png')}
            
          />
        </TouchableOpacity>
        </View>
        
        <View style={{flexDirection:'column'}}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/dashboard/2nd.png')}
          />
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:'column'}}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/dashboard/3rd.png')}
          />
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:'column'}}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/dashboard/Chat.png')}
          />
        </TouchableOpacity>
        </View>
       
      </View>
    </ScrollView>
  );
};

export default dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  container1: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
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

  image: {
    marginLeft: 4,
    justifyContent: 'flex-end',
  },
  image1: {
    marginLeft: 55,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'flex-end',
  },
  image2: {
    justifyContent: 'center',
    height: 130,
    width: 220,
  },
  image3: {
    marginLeft: 180,
    justifyContent: 'flex-end',
  },
});
