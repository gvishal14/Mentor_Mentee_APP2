import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Intro from './src/screens/intro';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Intro2 from './src/screens/intro2';
import Intro3 from './src/screens/intro3';
import login from './src/screens/login';
import signup from './src/screens/signup';
import signup2 from './src/screens/signup2';
import forget from './src/screens/forget';
import otp from './src/screens/otp';
import reset from './src/screens/reset';
import dashboard from './src/screens/dashboard';
import Spash from './src/screens/Spash';
import Done from './src/screens/done';

const Stack = createNativeStackNavigator();
const App = () => {
 
 
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Spash} />
        <Stack.Screen name="Intro1" component={Intro} />
        <Stack.Screen name="Intro2" component={Intro2} />
        <Stack.Screen name="Intro3" component={Intro3} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Signup" component={signup} />
        {/* <Stack.Screen name="Signup2" component={signup2} /> */}
        <Stack.Screen name="forget" component={forget} />
        <Stack.Screen name="otp" component={otp} />
        <Stack.Screen name="Reset" component={reset} />
        <Stack.Screen name="dashboard" component={dashboard} /> 
        <Stack.Screen name="alldone" component={Done}/>
      </Stack.Navigator>
    </NavigationContainer>
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
