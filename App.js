import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import RootStack from './src/navigators/root';
import { Calendar } from 'react-native-calendars';




const Stack = createNativeStackNavigator();
const App = () => {
 
 
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (

    <Provider store={store}>
      <NavigationContainer>
    <RootStack/>

    </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

// import React from 'react';
// import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

// export default function App() {
//   let [quote, setQuote] = React.useState('')
//   let [source, setSource] = React.useState('')

//   const fetchApiCall = () => {
//     fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-host": "quotes15.p.rapidapi.com",
//         "x-rapidapi-key": "yourapikey"
//       }
//     })
//       .then(response => response.json())
//       .then(response => {
//         setQuote(response.content);
//         setSource(response.originator.name)
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Native API Calls</Text>
//       <Text>Example with fetch and Axios</Text>
//       <TouchableHighlight onPress={fetchApiCall}>
//         <View style={styles.button}>
//           <Text style={styles.buttonText}>Use Fetch API</Text>
//         </View>
//       </TouchableHighlight>
//       <View>
//         <Text>{quote}</Text>
//         <Text>{source}</Text>
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#AAA',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: '#fff'
//   },
//   title: {
//     fontSize: 35,
//     color: '#fff'
//   },
//   button: {
//     padding: 10,
//     marginVertical: 15,
//     backgroundColor: '#0645AD'
//   },
//   buttonText: {
//     color: '#fff'
//   }
// });
