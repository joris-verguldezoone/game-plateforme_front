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
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#221711',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        {/* props contient déjà la navigation */}
        <Stack.Screen name="Home" options={{ title: "Home" }}>
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





