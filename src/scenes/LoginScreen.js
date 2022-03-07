import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import AuthService from "../services/jeej";
// import { useForm } from "react-hook-form";
import * as SecureStore from 'expo-secure-store';
import { login } from "../services/AuthService.js";




const LoginScreen = ({ navigation }) => {
  const [usernameInput, setUsernameInput] = useState({});
  const [passwordInput, setPasswordInput] = useState({});
  const [logChange, setLogChange] = useState(0)
  console.log(usernameInput)
  console.log(passwordInput)

  const handleSubmit = () => {
    login(usernameInput, passwordInput)
  }

  // AuthService.getValueFor("username", (data) => {
  //   console.log(data)

  // });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={styles.inputRegisterLogin}
        placeholder="Pseudo"
        // autoComplete="name"
        name="username"
        // value={user.username}
        onChangeText={e => setUsernameInput(e)}

      />
      <TextInput
        style={styles.inputRegisterLogin}
        placeholder="Mot de passe"
        // autoComplete="password"
        name="password"
        // value={user.password}
        onChangeText={e => setPasswordInput(e)}
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
        onPress={handleSubmit}
      // sur le onpress je change les props 
      //ref={(c) => {
      //setLogChange(1);
      //}}
      />
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
