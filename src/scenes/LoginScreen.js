import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './styles.js';
// import { useForm } from "react-hook-form";
import * as SecureStore from 'expo-secure-store';
import { login } from "../services/AuthService.js";
import { NavigationHelpersContext } from "@react-navigation/native";
import { SOCKET_URL } from '../const.js'
import { io } from "socket.io-client";



const LoginScreen = ({ navigation, route }) => {

  const [usernameInput, setUsernameInput] = useState({});
  const [passwordInput, setPasswordInput] = useState({});
  const [logChange, setLogChange] = useState(0)
  // console.log(usernameInput)
  // console.log(passwordInput)
  const [user, setUser] = useState('');

  // console.log('currentUser :) login screen')
  // console.log(JSON.stringify(route.params.currentUser))
  // console.log('currentUser :) login screen')


  // console.log(route.params.accessToken)
  // console.log(route.params.loading)


  // console.log("navigation.getState()")
  // console.log(navigation.getState())

  // console.log('this.props.navigation.state')
  // console.log(navigation.state)



  // console.log(props.accessToken + 'props.name')
  // console.log(props)
  const handleSubmit = () => {
    login(usernameInput, passwordInput)
    // .then(function (storage) {
    //   console.log('storage as been set')
    // })
    console.log('handleSubmitLogin', usernameInput, passwordInput)
    navigation.navigate('HomeScreen');

  }
  // test socket 


  // socket = io(SOCKET_URL)

  // var socket = io();

  // socket.on('chat message', function (msg) { // ça c'est juste pour du front
  //   var item = document.createElement('li');
  //   item.textContent = msg;
  //   console.log(messages);
  //   messages.appendChild(item);
  //   window.scrollTo(0, document.body.scrollHeight);
  // });

  // test socket 
  // AuthService.getValueFor("username", (data) => {
  //   console.log(data)

  // });

  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <View style={styles.divRound}>
            <Image
                style={styles.imageLogo}
                source={require('./logo.png')}
            />
        </View>
      </View>
      <View style={styles.middleView}>
        <Text style={styles.textTitle}>Connexion</Text>
        <View style={styles.popUpView}>
          <View>
            <Text style={styles.popUpTextError}>Adresse Mail incorrect !</Text>
            <Text style={styles.popUpText}>Identifiant</Text>
            <TextInput style={styles.popUpTextInput}></TextInput>

            <Text style={styles.popUpText}>Mot de passe</Text>
            <TextInput style={styles.popUpTextInput}></TextInput>
            
            <View style={{flex:3}}>
              <Text style={styles.popUpOption}>Mot de passe oublié ?</Text>
              <Button 
              title="Se Connecter"
              color="#6CA054"
              onPress={() => navigation.navigate('LobbyScreen', { currentUser: currentUser, accessToken: accessToken })}
              />
            </View>
          </View>

        </View>
      </View>
      <View style={styles.bottomView}>
        <View>
          <Text></Text>
        </View>
      </View>
    </View>
  );
}

// const login = (username, password) => {

//   console.log(password);
//   axios.post(apiUrl + "auth/login", {
//     username: username,
//     password: password,
//   })
//     .then(function (response) {
//       console.log(response);
//       let token = response.data['access_token'];
//       console.log(token)
//     })
//     .then(function (response2) {
//       // Update the document title using the browser API
//       const payload = useToken(response2);
//       // utiliser des useState() pour initialiser les valeurs que l'on fera passer au useEffect();
//       // rendre cet endroit asynchrone 
//       // le handle submit permet de get les data 
//       // ensuite dans le component on utilise les data dans un useffect dans lequel on appel des fonction et 
//       // le useffect permet de cycler les fonction et d'attendre leur retour avant de passer a la suite du code 
//       console.log(useToken(response2))
//       console.log(payload);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
// }




export default LoginScreen
// export { login }
