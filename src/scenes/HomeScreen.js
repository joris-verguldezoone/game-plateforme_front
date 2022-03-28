import * as React from 'react';
import styles from './styles.js';

import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { getValueFor, useToken } from '../services/AuthService';

const HomeScreen = ({ navigation }) => {
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
        </View>
    );
}

export default HomeScreen;