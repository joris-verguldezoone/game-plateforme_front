// function Form() {
//   function handleSubmit(e) {
//     e.preventDefault();

//     console.log('You clicked submit.');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }



// const RegisterForm = () => {

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confPassword, setConfpassword] = useState('');

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={styles}>Inscription</Text>
//       <TextInput
//         style={styles.inputRegisterLogin}
//         placeholder="Username"
//         autoComplete="MyName"
//         onChange={e => setUsername(e.target.value)}

//       />
//       <TextInputw
//         style={styles.inputRegisterLogin}
//         placeholder="Mot de passe"
//         autoComplete="password"
//         onChange={e => setPassword(e.target.value)}

//       />
//       <TextInput
//         style={styles.inputRegisterLogin}
//         placeholder="Conf. Mot de passe"
//         autoComplete="password"
//         onChange={e => setConfpassword(e.target.value)}

//       />
//       <Button
//         style={styles.buttonRegisterLogin}
//         title="S'inscrire"
//         accessibilityLabel="Appuyez sur ce bouton pour vous inscrire"
//         onPress={() => Register(username, password, confPassword)}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer, useFocusEffect, useNavigationState } from '@react-navigation/native';
import { useRoute } from '@react-navigation/core';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/scenes/HomeScreen';
import RegisterScreen from './src/scenes/RegisterScreen';
import LoginScreen from './src/scenes/LoginScreen';
import { login } from './src/scenes/LoginScreen';
import AuthService from './src/services/AuthService'
// import { MainScreen } from './src/scenes/MainScreen';
// import { ProfilScreen } from './src/scenes/ProfilScreen';

// const axios = require('axios');
// const apiUrl = "http://localhost:3000/";

const Stack = createNativeStackNavigator();

export default function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [currentUser, setCurrentUser] = useState();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    console.log(user)
    // console.log('mabite')
    // const payload = this.useToken(response2);
    let realaccessToken = AuthService.getToken()
    console.log(realaccessToken)
    if (user) {
      // test = AuthService.useToken(realaccessToken)
      // console.log(test)
      console.log('cool')
      setAccessToken(realaccessToken);
      console.log(accessToken)

      let toast = AuthService.useToken(realaccessToken)
      console.log(toast)
      // accessToken,
      // (decoded) => {
      // setCurrentUser({
      //   id: decoded.sub,
      //   username: decoded.username,
      //   email: decoded.email,
      //   firstname: decoded.firstname,
      //   lastname: decoded.lastname,
      //   role: decoded.role,
      // });

      // }
    }
    // faire une fonction handleSubmit 
    // si les props de login changent alors j'appel login puis useToken en async vu que c'est du useEffect 
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* props contient déjà la navigation */}
        <Stack.Screen name="Home" options={{ title: "Connexion" }}>
          {(props) => <HomeScreen {...props} />}

        </Stack.Screen>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
        <Stack.Screen name="Connexion" component={LoginScreen} login='' password='' options={{ title: 'Connexion' }} />
        {/* On navigue ves le stackScreen et son name */}
        {/* <Stack.Screen name="Profil" component={ProfilScreen} options={{ title: 'Profil' }} /> */}
        {/* <Stack.Screen name="Menu" component={MainScreen} options={{ title: 'Menu' }} /> */}
        {/* <Stack.Screen name="InfoJeu" component={GameInfoScreen} options={{ title: 'Info Jeu' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}





