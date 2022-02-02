
// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';

// const apiURL = "http://localhost:3000/";



// // Make a request for a user with a given ID
// axios.get("http://localhost:3000/users")
//   .then(function (response) {
//     // handle success
//     console.log(response);
//     let prout = JSON.stringify(response)
//     console.log(prout);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

// const App = () => {
//   // const [isLoading, setLoading] = useState(true);
//   // const [data, setData] = useState([]);
//   // const [title, setTitle] = useState([]);
//   // const [description, setDescription] = useState([]);

//   // useEffect(() => {
//   fetch(apiURL + '/users', {
//     mode: 'cors',
//     method: 'GET',
//     // headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//     // }
//   })
//     // .then((response) => { response.json() })
//     .then((response) => {
//       console.log(response);
//       response.json();
//     })
//     .then((json) => {

//       console.log(apiURL + '/users');
//       console.log(JSON.stringify(json));
//       return json;
//       //   // setData(json.username);
//       //   // setTitle(json.id_avatar);
//       //   // setDescription(json.role);

//     })
//   // .catch((error) => alert(error))
//   // .finally(setLoading(false));
//   // }, []); // cycle de vie du hook
//   return (
//     <Text>coucou</Text>
//   );
// };

// const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

// // export default App;

// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View, TextInput, SafeAreaView, FlatList, ActivityIndicator, Button } from 'react-native';



const axios = require('axios');
const apiUrl = "http://localhost:3000/";

const Register = (username, password, confPassword) => {

  if (password == confPassword) {
    console.log(password);
    axios.post(apiUrl + "users", {
      username: username,
      password: password,
      role: 1,
      id_avatar: 1
    })
      .then(function (response) {
        console.log(response);
        let prout = JSON.stringify(response)
        console.log(prout);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
  }
  else {
    return "Confirmation du mot de passe incorrect"
  }
}

// const RegisterForm = () => {

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confPassword, setConfpassword] = useState('');

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={styles}>Inscription</Text>
//       <TextInput
//         style={styles.inputRegisterLogin}
//         placeholder="Username"
//         autoComplete="MyName"
//         onChange={e => setUsername(e.target.value)}

//       />
//       <TextInput
//         style={styles.inputRegisterLogin}
//         placeholder="Mot de passe"
//         autoComplete="password"
//         onChange={e => setPassword(e.target.value)}

//       />
//       <TextInput
//         style={styles.inputRegisterLogin}
//         placeholder="Conf. Mot de passe"
//         autoComplete="password"
//         onChange={e => setConfpassword(e.target.value)}

//       />
//       <Button
//         style={styles.buttonRegisterLogin}
//         title="S'inscrire"
//         accessibilityLabel="Appuyez sur ce bouton pour vous inscrire"
//         onPress={() => Register(username, password, confPassword)}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;

// 

// TODO LIST:
/*
1. STYLING
2. STORE DATA
3. CALL API

CELUI QUI TOUCHE JE L'ENCULE C'EST BON ??


*/

import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer, useFocusEffect, useNavigationState } from '@react-navigation/native';
import { useRoute } from '@react-navigation/core';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles}>Bienvenue sur CBGames!</Text>
      <Text style={styles}>Veuillez vous connecter/vous enregistrer</Text>
      <Button
        style={styles.buttonRegisterLogin}
        onPress={() => navigation.navigate('Connexion')}
        title="Connexion"
        accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de connexion"
      />
      <Button
        style={styles.buttonRegisterLogin}
        onPress={() => navigation.navigate('Inscription')}
        title="Inscription"
        accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de inscription"
      />
      <Button
        style={styles.buttonRegisterLogin}
        onPress={() => navigation.navigate('Menu')}
        title="Menu des jeux"
        accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de inscription"
      />
    </View>
  );
}



const ConnexionScreen = ({ navigation }) => {
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
        onPress={() => {
          navigation.navigate('Profil', {
            pseudo: pseudo,
            password: password,
          });
          console.log('Pseudo: ' + JSON.stringify(pseudo) + ' / ' + 'Password: ' + JSON.stringify(password));
        }}
      />
    </View>
  );
}

const InscriptionScreen = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfpassword] = useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles}>Inscription</Text>
      <TextInput
        style={styles.inputRegisterLogin}
        placeholder="Username"
        autoComplete="MyName"
        onChange={e => setUsername(e.target.value)}

      />
      <TextInput
        style={styles.inputRegisterLogin}
        placeholder="Mot de passe"
        autoComplete="password"
        onChange={e => setPassword(e.target.value)}

      />
      <TextInput
        style={styles.inputRegisterLogin}
        placeholder="Conf. Mot de passe"
        autoComplete="password"
        onChange={e => setConfpassword(e.target.value)}

      />
      <Button
        style={styles.buttonRegisterLogin}
        title="S'inscrire"
        accessibilityLabel="Appuyez sur ce bouton pour vous inscrire"
        onPress={() => Register(username, password, confPassword)}
      />
    </View>
  );
};


const ProfilScreen = ({ route, navigation }) => {
  const { pseudo, password } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles}>Nom du profil: {pseudo}</Text>
      <Text style={styles}>Password: {password}</Text>
      <Text style={styles}>Parties Jouées</Text>
      <Text style={styles}>Parties Gagnées</Text>
      <Button
        style={styles.buttonRegisterLogin}
        title="Retour au menu"
        accessibilityLabel="Appuyez sur ce bouton pour vous inscrire"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function MainScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles}>Menu des jeux</Text>
      <ScrollView>

        <TouchableOpacity
          style={styles}
          onPress={() => navigation.navigate('InfoJeu')}
        >
          <Text style={styles}>Jeu 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles}>Jeu 2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles}>Jeu 3</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

function GameInfoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles}>Nom du jeu</Text>
      <View>
        <Text style={styles}>Nombre de joueurs: </Text>
        <Text style={styles}>Durée de la partie: </Text>
        <Text style={styles}>Description/Règles du jeu: </Text>
        <Button
          style={styles.buttonRegisterLogin}
          placeholder="Jouer!"
          accessibilityLabel="Appuyez sur ce bouton pour jouer"
        />
      </View>
    </View>
  );
}

/*
function GameScreen(){
  return (
  
  );
}
*/

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Inscription" component={InscriptionScreen} options={{ title: 'Inscription' }} />
        <Stack.Screen name="Connexion" component={ConnexionScreen} options={{ title: 'Connexion' }} />
        <Stack.Screen name="Profil" component={ProfilScreen} options={{ title: 'Profil' }} />
        <Stack.Screen name="Menu" component={MainScreen} options={{ title: 'Menu' }} />
        <Stack.Screen name="InfoJeu" component={GameInfoScreen} options={{ title: 'Info Jeu' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRegisterLogin: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderColor: '#797979',
    borderRadius: 5,
  },

  buttonRegisterLogin: {
    paddingTop: 10,
  },


});
