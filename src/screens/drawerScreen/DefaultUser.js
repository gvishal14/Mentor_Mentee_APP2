import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'

const DefaultUser = () => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };

    //   const handleRoleSelect = (role) => {
    //     setSelectedRole(role);
    //     toggleModal();
    //   };
  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <Text>Show Role Selection</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}>
        <View>
          <Text>Select Your Role</Text>
          <TouchableOpacity >
            <Text>Mentor</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text>Mentee</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleModal}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {selectedRole && (
        <Text>You selected: {selectedRole}</Text>
      )}
    </View>
  )
}

export default DefaultUser

const styles = StyleSheet.create({})