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
    <NavigationContainer>
      <Stack.Navigator>
        {/* props contient déjà la navigation */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          title: 'Accueil',
          headerStyle: {
            backgroundColor: '#3F403F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',

          },
        }} />
        {/* {(props) => <HomeScreen {...props} />} */}

        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{
          title: 'Inscription',
          headerStyle: {
            backgroundColor: '#3F403F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',

          },
        }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
          title: 'Connexion',
          headerStyle: {
            backgroundColor: '#3F403F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',

          },
        }} />
        {/* {(props) => <LoginScreen accessToken={accessToken} currentUser={currentUser} />} */}
        {/* </Stack.Screen> */}

        <Stack.Screen name="LobbyScreen" component={LobbyScreen} options={{
          title: 'Lobby',
          headerStyle: {
            backgroundColor: '#3F403F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',

          }, animation: 'flip'
        }} />

        <Stack.Screen name="LobbyList" component={LobbyList} options={{
          title: 'LobbyList',
          headerStyle: {
            backgroundColor: '#3F403F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',

          }, animation: 'flip'
        }} />


        {/* On navigue ves le stackScreen et son name */}
        <Stack.Screen name="ProfilScreen" component={ProfilScreen} options={{
          title: 'Profil',
          headerStyle: {
            backgroundColor: '#3F403F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',

          }
        }} />
        <Stack.Screen name="CreateLobbyScreen" component={CreateLobbyScreen} options={{
          title: 'CreateLobby',
          headerStyle: {
            backgroundColor: '#3F403F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',

          }
        }} />
        {/* <Stack.Screen name="Menu" component={MainScreen} options={{ title: 'Menu' }} /> */}
        {/* <Stack.Screen name="InfoJeu" component={GameInfoScreen} options={{ title: 'Info Jeu' }} /> */}

      </Stack.Navigator>
      {/* <View>
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

      </View> */}
    </NavigationContainer >
  );
}
{/* props contient déjà la navigation */ }
{/* {(props) => <HomeScreen {...props} />} */ }
{/* On navigue ves le stackScreen et son name */ }
{/* <Stack.Screen name="Profil" component={ProfilScreen} options={{ title: 'Profil' }} /> */ }
{/* <Stack.Screen name="Menu" component={MainScreen} options={{ title: 'Menu' }} /> */ }
{/* <Stack.Screen name="InfoJeu" component={GameInfoScreen} options={{ title: 'Info Jeu' }} /> */ }





