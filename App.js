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
import LobbyScreen from './src/scenes/lobby/index';
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
        <Stack.Screen name="Lobby" component={LobbyScreen} options={{ title: "Lobby" }}/>
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





