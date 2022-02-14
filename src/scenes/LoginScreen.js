import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles.js';

const axios = require('axios');
const apiUrl = "http://localhost:3000/";


const LoginScreen = ({ navigation }) => {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={styles.inputRegisterLogin}
        placeholder="Pseudo"
        autoComplete="name"
        onChange={e => setPseudo(e.target.value)}
      />
      <TextInput
        style={styles.inputRegisterLogin}
        placeholder="Mot de passe"
        autoComplete="password"
        onChange={e => setPassword(e.target.value)}
      />
      <Button
        style={styles.buttonRegisterLogin}
        title="Se connecter"
        accessibilityLabel="Appuyez sur ce bouton pour vous connecter"
        // onPress={() => {
        //   navigation.navigate('profile', {
        //     pseudo: pseudo,
        //     password: password,
        //   });
        //   console.log('Pseudo: ' + JSON.stringify(pseudo) + ' / ' + 'Password: ' + JSON.stringify(password));
        // }}
        onPress={() => login(pseudo, password)}

      />
    </View>
  );
}

const login = (username, password) => {

  console.log(password);
  axios.post(apiUrl + "auth/login", {
    username: username,
    password: password,
  })
    .then(function (response) {
      console.log(response);
      let token = response.data['access_token'];
      console.log(token)
    })
    .then(function (response2) {
      useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        const payload = useToken(response2);
        // utiliser des useState() pour initialiser les valeurs que l'on fera passer au useEffect();
        // rendre cet endroit asynchrone 
        // le handle submit permet de get les data 
        // ensuite dans le component on utilise les data dans un useffect dans lequel on appel des fonction et 
        // le useffect permet de cycler les fonction et d'attendre leur retour avant de passer a la suite du code 
        console.log(useToken(response2))
        console.log(payload);
      });
    })
    .catch(function (error) {
      console.log(error);
    })
}


async function useToken(token) {

  const config = await {
    headers: { Authorization: `Bearer ${token}` }
  };
  axios.get(
    'http://localhost:3000/profile',
    config
  ).then(function (response) {

    return response;
  }
  ).catch(console.log);
}


export default LoginScreen
export { useToken }
export { login } 
