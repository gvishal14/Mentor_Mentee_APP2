// import React, { useEffect, useState } from 'react';
// import { View, Text,Button } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Drawer = ({ navigation }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // checkLoginStatus();
//     navigation.reset({index: 1, routes: [{name: 'AuthStack'}]});
//   }, []);

// //   const checkLoginStatus = async () => {
// //     try {
// //       const loggedInStatus = await AsyncStorage.getItem('isLoggedIn');
// //       setIsLoggedIn(loggedInStatus === 'true');
// //     } catch (error) {
// //       console.error('Error checking login status:', error);
// //     }
// //   };

// //   const handleLogout = async () => {
// //     // Clear user-related data and set isLoggedIn to false
// //     await AsyncStorage.multiRemove(['email', 'userData', 'token', 'isLoggedIn']);
// //     setIsLoggedIn(false);
// //     // Perform any other logout actions you need
// //   };

// //   return (
// //     <View>
// //       {isLoggedIn ? (
// //         <View>
// //           {/* Show components for logged-in user */}
// //           <Text>Welcome, logged-in user!</Text>
// //           <Button title="Logout" onPress={(handleLogout)} />
// //         </View>
// //       ) : (
// //         <View>
// //           {/* Show components for non-logged-in user */}
// //           <Text>Welcome, guest user!</Text>
// //           <Button title="Login" onPress={() => navigation.navigate('Login')} />
// //         </View>
// //       )}
// //     </View>
// //   );
// };

// export default Drawer;
