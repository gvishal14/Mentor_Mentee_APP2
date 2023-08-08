import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Online = () => {
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
          Economics Times
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
            fontWeight: 500,
            fontSize: 18,
            color: '#313131',
            marginLeft: 10,
          }}>
          1. Introduction
        </Text>
    </View>
    <View>
    <Text style={{marginLeft:10,marginTop:10,color:'#313131',fontSize:14}}>
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
         Sunt qui esse pariatur duis deserunt mollit dolore cillum minim 
         tempor enim. Elit aute irure tempor cupidatat incididunt sint 
         deserunt ut voluptate aute id deserunt nisi Aliqua id fugiat 
         nostrud irure ex duis ea quis id quis ad et. Sunt qui esse 
         pariatur duis deserunt mollit dolore cillum minim tempor enim. 
         Elit aute irure.
        </Text>
    </View>
    <View style={{marginLeft:10,marginTop:10}}>
        <Text style={{color:'#313131'}}>
            Session link
        </Text>
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

                  <View style={{marginLeft:10,marginTop:10}}>
                    <Text style={{color:'#313131'}}>
                        Location
                    </Text>
                    <Text style={{color:'#313131'}}>
                        Online Mode
                    </Text>
                  </View>


                  <TouchableOpacity style={styles.nextButton} >
            <Text style={styles.buttonText}>Edit Session</Text>
          </TouchableOpacity>

    </ScrollView>
  )
}

export default Online

const styles = StyleSheet.create({
    container1: {
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
      },
      image3: {
        marginLeft: 160,
        justifyContent: 'flex-end',
      },
      nextButton: {
        backgroundColor: '#FE4D4D',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width:140,
        height:50,
        marginLeft:10
        
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        justifyContent: 'center',
      },
})