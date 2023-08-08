import { StyleSheet, Text, View, TextInput,Image } from 'react-native'
import React, { useState } from 'react'
import { Card } from 'react-native-paper';

const EditProg = () => {
const [programName, setProgramName] = useState();
  return (
    <View>

        <View>
            <Card>
            <Image source={require('../../../assets/ProgList/Rectangle20413.png')} style={{height:200,width:400}}/>
            </Card>
        </View>


      <View style={styles.inputContainer}>
        <TextInput style={styles.inputWithIcon} placeholder="Program Name" onChangeText={text => setProgramName(text)} value={programName} />
      </View>
    </View>
  )
}

export default EditProg

const styles = StyleSheet.create({
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