import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer, useFocusEffect, useNavigationState } from '@react-navigation/native';
import { NavigationContext } from '@react-navigation/core';
import { useRoute } from '@react-navigation/core';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/scenes/HomeScreen';
import RegisterScreen from './src/scenes/RegisterScreen';
import LoginScreen from './src/scenes/LoginScreen';
import LobbyScreen from './src/scenes/lobby/index';
import { getValueFor, useToken } from './src/services/AuthService';
import { io } from "socket.io-client";
import CreateLobbyScreen from './src/scenes/createLobby';
import ProfilScreen from './src/scenes/ProfilScreen';
import LobbyList from './src/scenes/lobbyList/index';
import ClientComponent from './src/component/ClientComponent';
import { SOCKET_URL } from './src/const';
import { SocketContext, socketIo } from './src/scenes/socketContext';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Accueil" }} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: 'Register' }} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Connexion' }} />
          <Stack.Screen name="LobbyScreen" component={LobbyScreen} options={({ route, navigation }) => ({ title: 'Lobby', orientation: 'landscape', animation: 'flip' })} />
          <Stack.Screen name="ProfilScreen" component={ProfilScreen} options={{ title: 'Profil' }} />
          <Stack.Screen name="CreateLobbyScreen" component={CreateLobbyScreen} options={{ title: 'CreateLobby' }} />
          <Stack.Screen name="LobbyList" component={LobbyList} options={{ title: 'LobbyList' }} />
        </Stack.Navigator>
      </NavigationContainer >
    </>
  );
}





