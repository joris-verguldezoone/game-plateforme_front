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
<<<<<<< HEAD
import { login } from './src/scenes/LoginScreen';
import AuthService from './src/services/AuthService'
=======
import LobbyScreen from './src/scenes/lobby/index';
>>>>>>> d98fa2f1f8b5d3d9c9e15e4d73cf6c66b00862a7
import { getValueFor, useToken } from './src/services/AuthService';

// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { AsyncStorage } from 'react-native';

// import { MainScreen } from './src/scenes/MainScreen';
import ProfilScreen from './src/scenes/ProfilScreen';

// const axios = require('axios');
// const apiUrl = "http://api-board-games.joris-verguldezoone.students-laplateforme.io";

const Stack = createNativeStackNavigator();

export default function App() {

  // const [isSignedIn, setIsSignedIn] = useState();
  // const [chibre, setChibre] = useState();


  return (
    <NavigationContainer>
<<<<<<< HEAD
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
=======
      <Stack.Navigator>
        {/* props contient déjà la navigation */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Accueil" }} />
        {/* {(props) => <HomeScreen {...props} />} */}

        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: 'Register' }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Connexion' }} />
        {/* {(props) => <LoginScreen accessToken={accessToken} currentUser={currentUser} />} */}
        {/* </Stack.Screen> */}

        <Stack.Screen name="LobbyScreen" component={LobbyScreen} options={{ title: 'Lobby', orientation: 'landscape', animation: 'flip'}}/>

        {/* On navigue ves le stackScreen et son name */}
        <Stack.Screen name="ProfilScreen" component={ProfilScreen} options={{ title: 'Profil' }} />
        {/* <Stack.Screen name="Menu" component={MainScreen} options={{ title: 'Menu' }} /> */}
        {/* <Stack.Screen name="InfoJeu" component={GameInfoScreen} options={{ title: 'Info Jeu' }} /> */}
>>>>>>> d98fa2f1f8b5d3d9c9e15e4d73cf6c66b00862a7
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





