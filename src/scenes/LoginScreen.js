import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import AuthService from "../services/AuthService";
// import { useForm } from "react-hook-form";

const axios = require('axios');
const apiUrl = "http://localhost:3000/";


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});
  const [logChange, setLogChange] = useState(0)
  console.log(username)
  console.log(password)

  let ok = localStorage.getItem("username");
  console.log(ok)
  // useEffect(() => {
  //   console.log('mabite')
  //   const user = AuthService.getCurrentUser();
  //   console.log(user)
  //   // const payload = this.useToken(response2);
  //   let realaccessToken = AuthService.getToken()
  //   console.log(realaccessToken)
  //   if (accessToken) {
  //     // test = AuthService.useToken(realaccessToken)
  //     // console.log(test)

  //     // accessToken,
  //     // (decoded) => {
  //     setAccessToken(realaccessToken);
  //     // setCurrentUser({
  //     //   id: decoded.sub,
  //     //   username: decoded.username,
  //     //   email: decoded.email,
  //     //   firstname: decoded.firstname,
  //     //   lastname: decoded.lastname,
  //     //   role: decoded.role,
  //     // });

  //     // }
  //   }
  //   // faire une fonction handleSubmit 
  //   // si les props de login changent alors j'appel login puis useToken en async vu que c'est du useEffect 
  // }, [logChange]);




  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={styles.inputRegisterLogin}
        placeholder="Pseudo"
        // autoComplete="name"
        name="username"
        // value={user.username}
        onChange={e => setUsername(e.target.value)}

      />
      <TextInput
        style={styles.inputRegisterLogin}
        placeholder="Mot de passe"
        // autoComplete="password"
        name="password"
        // value={user.password}
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
        onPress={() => AuthService.login(username, password)}
        // sur le onpress je change les props 
        ref={(c) => {
          setLogChange(1);
        }}
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
