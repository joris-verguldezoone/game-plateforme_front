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

  const [isSignedIn, setIsSignedIn] = useState();
  const [chibre, setChibre] = useState();

  // const [response, setResponse] = useState("");

  const handleSubmit = () => {
    // console.log('where are in the handleSubmit')
    // socket.emit('create_lobby', 'Joris',);

    // mettre un id concaténé pour rendre l'émit unique et non reproductible 
    // quand on clique pour join dans la list des lobby le join_lobby_id-3443344525747477 fermera ses accès lorsque 
    // la limite de joueur aura été atteinte
    // un fetch des data de la partie permettrons de configurer ces actions

  }

  const blue = () => {
    console.log('where are in the blue')
    socket.emit('blue');

  }

  const red = () => {
    console.log('where are in the red')
    socket.emit('red');

  }
  // const [loadClient, setLoadClient] = useState(true);

  // const SocketContext = React.createContext();

  // console.log(socketIo)

  // const [response, setResponse] = useState("");
  // const socket = React.useContext(SocketContext);

  // useEffect(() => {
  //   const socket = socketIo// maintain connection 
  //   socket.on("FromAPI", data => {

  //     setResponse(data);
  //     console.log(data)
  //   });
  //   return () => socket.disconnect();

  // }, []);





  return (
    <>
      {/* <SocketContext.Provider value={socketIo}>
      </SocketContext.Provider> */}
      {/* <ClientComponent> */}

      {/* </ClientComponent> */}

      <NavigationContainer>
        {/* <ClientComponent> */}
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
          <Stack.Screen name="LobbyList" component={LobbyList} options={{ title: 'LobbyList' }} />
          {/* <Stack.Screen name="Menu" component={MainScreen} options={{ title: 'Menu' }} /> */}
          {/* <Stack.Screen name="InfoJeu" component={GameInfoScreen} options={{ title: 'Info Jeu' }} /> */}

        </Stack.Navigator>
        <View>
          {/* <TextInput
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
        /> */}

          {/* </ClientComponent> */}
        </View>
      </NavigationContainer >
      {/* 
      <Button onPress={() => setLoadClient(prevState => !prevState)}>
        STOP CLIENT
      </Button> */}
      {/* SOCKET IO CLIENT*/}
      {/* {loadClient ? <ClientComponent /> : null} */}
    </>
  );
}





