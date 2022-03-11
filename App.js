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
import { getValueFor, useToken } from './src/services/AuthService';

// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { AsyncStorage } from 'react-native';

// import { MainScreen } from './src/scenes/MainScreen';
// import { ProfilScreen } from './src/scenes/ProfilScreen';

// const axios = require('axios');
// const apiUrl = "http://api-board-games.joris-verguldezoone.students-laplateforme.io";

const Stack = createNativeStackNavigator();

export default function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [currentUser, setCurrentUser] = useState();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  // faut set un state loading, quand il est validé par loginScreen alors App nous fait switch sur profil par exemple   


  useEffect(() => {
    let userToken = getValueFor('token')
    userToken.then(function (token) {
      console.log('Token awaited ' + token + ' :) ') // "Some User token"

      console.log('befour' + userToken + 'before')
      console.log('we are in use Effect')
      if (typeof token !== 'undefined' && token !== 'Object { }') {
        console.log(token + 'ki march')
        console.log('App useEffect entry')

        useToken(token).then(function (payload) {
          console.log(payload); // "initResolve"
          console.log('useToken svp')

          if (typeof payload !== 'undefined') {

            setCurrentUser({
              id: payload.userId,
              username: payload.username,
              role: payload.role,
              idavatar: payload.idavatar,
              expiresIn: payload.expiresIn
            });
            console.log(currentUser + 'currentUser')
          }
        })
      }
    })


    //lifecycle sur currentUsr, si il est define alors fetch la liste d'amis avec un module qui s'ajoute 
    // pareil pour la recherchede lobby l'accès son profil etc 


    // accessToken, // async de la résponse pour stocker dans le setUser
    // (decoded) => { // callback 

    // }

    // faire une fonction handleSubmit 
    // si les props de login changent alors j'appel login puis useToken en async vu que c'est du useEffect 
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#0458af',
          borderBottomWidth: 0,
          padding: 0,
          shadowColor:"#0458af",
          shadowOpacity:100,
          shadowRadius:20,
          shadowOffset:{
              height:0,
              width:0,
          }
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
        <Stack.Screen name="Connexion" component={LoginScreen} login='' password='' options={{ title: 'Connexion' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
{/* props contient déjà la navigation */}
{/* {(props) => <HomeScreen {...props} />} */}
{/* On navigue ves le stackScreen et son name */}
{/* <Stack.Screen name="Profil" component={ProfilScreen} options={{ title: 'Profil' }} /> */}
{/* <Stack.Screen name="Menu" component={MainScreen} options={{ title: 'Menu' }} /> */}
{/* <Stack.Screen name="InfoJeu" component={GameInfoScreen} options={{ title: 'Info Jeu' }} /> */}





