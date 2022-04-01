import * as React from 'react';
<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, ScrollView, TouchableOpacity, CheckBox } from 'react-native';
=======
>>>>>>> d98fa2f1f8b5d3d9c9e15e4d73cf6c66b00862a7
import styles from './styles.js';

import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { getValueFor, useToken } from '../services/AuthService';

const HomeScreen = ({ navigation }) => {
<<<<<<< HEAD

    const [AutoLogSelected, setAutoLogSelection] = useState(false);
    const [pseudo,setPseudo] = useState("");
    const [password,setPassword] = useState("");

    // localStorage.clear();
    return (
        <View style={styles.pageContainer}>
            <View style={styles.homeContainer}>
                <Text style={styles.Title}>
                    CBGames !
                </Text>
            </View>
            <View style={styles.homeContainer2}>
                <View style={{flex:1, justifyContent:"center"}}>
                    <Text style={styles.MediumTitle}>Connexion</Text>
                </View>
                <View style={{flex:3, justifyContent:"center"}}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.LoginRegisterLabel}>
                            Email / Identifiant:
                        </Text>
                        <TextInput
                            style={styles.loginRegisterInput}
                            onChangeText={setPseudo}
                            value={pseudo}
                            placeholder="Mon joli pseudonyme..."
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.LoginRegisterLabel}>
                            Mot de passe:
                        </Text>
                        <TextInput
                            style={styles.loginRegisterInput}
                            onChangeText={setPassword}
                            value={password}
                            placeholder="Mon code secret..."
                        />
                    </View>
                    
                    <TouchableOpacity
                        style={styles.loginRegisterButton}
                        
                    >
                        <Text style={styles.loginRegisterButtonText}>Connexion</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.regle}>
                </View>
                <TouchableOpacity
                    style={styles.loginRegisterButton}
                    onPress={() => {
                        navigation.navigate('Register'), { name: "Register" }
                    }}
                >
                    <Text style={styles.notRegisteredText}>Pas encore inscrit ?</Text>
                </TouchableOpacity>
                <View style={{flex:1, justifyContent:"flex-end", alignItems:"center"}}>
                    <Text style={{fontWeight:"300"}}>Réalisé par Joris V., Marwanne B., Mathis C., Shun L.</Text>
                    <Text style={{paddingBottom:10,fontWeight:"300"}}>LaPlateforme_</Text>
                </View>
            </View>
            
=======
    // localStorage.clear();

    const [accessToken, setAccessToken] = useState('Chibrosaure');
    const [currentUser, setCurrentUser] = useState();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    // faut set un state loading, quand il est validé par loginScreen alors App nous fait switch sur profil par exemple   

    console.log(accessToken + 'App')
    console.log(currentUser + 'App')

    useEffect(() => {

        // const accessToken = AuthService.getCurrentUser();
        // if (accessToken) {
        //   AuthService.verifyToken(
        //     accessToken,
        //     (decoded) => {
        //       setAccessToken(accessToken);
        //       setCurrentUser({
        //         id: decoded.sub,
        //         username: decoded.username,
        //         email: decoded.email,
        //         firstname: decoded.firstname,
        //         lastname: decoded.lastname,
        //         role: decoded.role,
        //       });


        let userToken = getValueFor('token')

        userToken.then(function (token) {

            setAccessToken(userToken);

            console.log('Token awaited ' + token + ' :) ') // "Some User token"

            if (typeof token !== 'undefined' && token !== 'Object { }') {

                console.log(token + '  ki march')

                useToken(token).then(payload => {

                    console.log(payload)

                    console.log('jijijijijij')
                    if (payload !== 'undefined') {
                        console.log('jojojojojojojojojojoj')
                        console.log(payload)
                        console.log(JSON.stringify(payload))
                        setCurrentUser({
                            id: payload.userId,
                            username: payload.username,
                            role: payload.role,
                            idavatar: payload.idavatar,
                            expiresIn: payload.exp
                        });
                        console.log('jujujujujujujuj')

                        console.log(currentUser + 'currentUser')
                    }
                })
            }
        })
    }, ([]));

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles}>Bienvenue sur CBGames!</Text>
            <Text style={styles}>Veuillez vous connecter/vous enregistrer</Text>
            <Button
                style={styles.buttonRegisterLogin}

                title="Connexion"
                onPress={() => {
                    navigation.navigate('LoginScreen', { currentUser: currentUser, accessToken: accessToken, name: "monChibre" })
                    // navigation.setOptions
                }
                }

                // onPress={() => navigation.navigate('Connexion')}
                // title="Connexion"
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
            <Button
                style={styles.buttonRegisterLogin}
                onPress={() => navigation.navigate('ProfilScreen')}
                title="Profil"
                accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page Profil"
            />
            <Button
                style={styles.buttonRegisterLogin}
                onPress={() => navigation.navigate('LobbyScreen')}
                title="Menu du lobby"
                accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de inscription"
            />
>>>>>>> d98fa2f1f8b5d3d9c9e15e4d73cf6c66b00862a7
        </View>
    );
}

export default HomeScreen;

{/* <Button
                        style={styles.buttonRegisterLogin}
                        title="Connexion"
                        color="#3F9B33"
                        accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de connexion"
                        onPress={() => {
                            navigation.navigate('Connexion'), { name: "monChibre" }
                        }
                        }
                    /> */}
                    {/* <Button
                        style={styles.buttonRegisterLogin}
                        title="Inscription"
                        color="#3F9B33"
                        accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de inscription"
                        onPress={() => navigation.navigate('Inscription')}
                    /> */}
                    {/* <View style={{flex: 1, justifyContent:'center',alignItems:'center', borderTopWidth:1,borderTopColor:'gray',marginTop:30}}>
                        <Text style={styles.smTitle}>Développé par:</Text>
                        <Text style={styles.smTitle}>Joris V., Mathis C., Marwanne B., Shun L.</Text>
                        <Text style={styles.smTitle}>@LaPlateforme_</Text>
                    </View> */}