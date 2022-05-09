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
import { io } from "socket.io-client";
import CreateLobbyScreen from './src/scenes/createLobby';
import ProfilScreen from './src/scenes/ProfilScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  // const [isSignedIn, setIsSignedIn] = useState();
  // const [chibre, setChibre] = useState();
  const socket = io("http://51.75.241.128:3002",
    // const socket = io("http://127.0.0.1:3002/",
    {
      reconnectionDelayMax: 10000,
    }
  );

  // socket.on("connect", () => {
  //   console.log(socket.connected); // true
  // });

  const handleSubmit = () => {
    console.log('where are in the handleSubmit')
    socket.emit('join lobby');

  }

  const blue = () => {
    console.log('where are in the blue')
    socket.emit('blue');

  }

  const red = () => {
    console.log('where are in the red')
    socket.emit('red');

  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* props contient déjà la navigation */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Accueil" }} />
        {/* {(props) => <HomeScreen {...props} />} */}

        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: 'Register' }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Connexion' }} />
        {/* {(props) => <LoginScreen accessToken={accessToken} currentUser={currentUser} />} */}
        {/* </Stack.Screen> */}

        <Stack.Screen name="LobbyScreen" component={LobbyScreen} options={{ title: 'Lobby', orientation: 'landscape', animation: 'flip' }} />

        {/* On navigue ves le stackScreen et son name */}
        <Stack.Screen name="ProfilScreen" component={ProfilScreen} options={{ title: 'Profil' }} />
        <Stack.Screen name="CreateLobbyScreen" component={CreateLobbyScreen} options={{ title: 'CreateLobby' }} />
        {/* <Stack.Screen name="Menu" component={MainScreen} options={{ title: 'Menu' }} /> */}
        {/* <Stack.Screen name="InfoJeu" component={GameInfoScreen} options={{ title: 'Info Jeu' }} /> */}

      </Stack.Navigator>
      <View>
        <TextInput
          placeholder="try something useless :)"
          // autoComplete="password"
          name="password"
        // value={user.password}

        />
        <Button
          title="send socket Event"
          accessibilityLabel="Appuyez sur ce bouton pour vous connecter"
          // onPress={() => {
          //   handleSubmit,
          //     navigation.navigate('ProfilScreen');
          // }}
          onPress={handleSubmit}
        // sur le onpress je change les props
        //ref={(c) => {
        //setLogChange(1);
        //}}
        />
        <Button
          title="Blue"
          accessibilityLabel="Appuyez sur ce bouton pour vous connecter"
          // onPress={() => {
          //   handleSubmit,
          //     navigation.navigate('ProfilScreen');
          // }}
          onPress={blue}
        // sur le onpress je change les props
        //ref={(c) => {
        //setLogChange(1);
        //}}
        />
        <Button
          title="red"
          accessibilityLabel="Appuyez sur ce bouton pour vous connecter"
          // onPress={() => {
          //   handleSubmit,
          //     navigation.navigate('ProfilScreen');
          // }}
          onPress={red}
        // sur le onpress je change les props
        //ref={(c) => {
        //setLogChange(1);
        //}}
        />

      </View>
    </NavigationContainer >
  );
}





