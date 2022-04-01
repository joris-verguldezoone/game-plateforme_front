import * as React from 'react';
import styles from './styles.js';
import { useFocusEffect } from '@react-navigation/native';
import axios from "axios"
import apiUrl from "../const";

import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { getValueFor, useToken } from '../services/AuthService';

const HomeScreen = ({ navigation }) => {
    // localStorage.clear();
    const [accessToken, setAccessToken] = useState('Chibrosaure');
    const [currentUser, setCurrentUser] = useState('');
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    // faut set un state loading, quand il est validé par loginScreen alors App nous fait switch sur profil par exemple   



    useFocusEffect(
        React.useCallback(() => {


            getValueFor('token').then(response => {

                setAccessToken(response);
                console.log(response)
                console.log('mange moi le poiro')
                console.log(accessToken)
                console.log('mange moi le poiro')

                useToken(response).then(payload => {
                    console.log('mangez moi le ooo')
                    console.log(payload)
                    setCurrentUser({
                        id: payload.userId,
                        username: payload.username,
                        role: payload.role,
                        idavatar: payload.idavatar,
                        expiresIn: payload.exp
                    });
                    console.log(currentUser)
                    console.log('mangez moi le ooo')
                })

            })
            // je wait mon token avec le .then, je l'utilise a l'intérieur du .then

            // const useToken = async (token) => {
            //     // try {

            //     try {
            //         const axios = require('axios');
            //         // const apiUrl = "http://localhost/auth/profile";
            //         const config = {
            //             headers: { Authorization: `Bearer ${token}` }
            //         };
            //         console.log(token)

            //         const user = await axios.get(apiUrl + 'auth/profile', {
            //             headers: { Authorization: `Bearer ${token}` }
            //         })
            //         console.log('user.response')
            //         console.log(user.data)
            //         let payload = user.data
            //         console.log('user.response')
            //        
            //         console.log('currentUser')
            //         console.log(currentUser);
            //         console.log('currentUser')
            //         return (payload);

            //     } catch (e) {
            //         console.log(e + 'wotifk???')
            //         console.log(e.request)
            //     }

            // }





            // if (typeof token !== 'undefined' && token !== 'Object { }') {
            //     let result = useToken(token)
            //     console.log('then app')
            //     console.log(result)
            //     console.log('then app')

            // console.log(token + '  ki march')
            // useToken(token).then(payload => payload.json())
            //     .then(payload => {
            //         console.log(payload)

            //         console.log('jijijijijij')
            //         if (payload !== 'undefined') {
            //             console.log('jojojojojojojojojojoj')
            //             console.log(payload)
            //             console.log(JSON.stringify(payload))
            //             setCurrentUser({
            //                 id: payload.userId,
            //                 username: payload.username,
            //                 role: payload.role,
            //                 idavatar: payload.idavatar,
            //                 expiresIn: payload.exp
            //             });
            //             console.log('jujujujujujujuj')

            //             console.log(currentUser + 'currentUser')
            // }
            // })
            // }
        }, [accessToken])
    )





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




    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles}>Bienvenue sur CBGames!</Text>
            <Text style={styles}>Veuillez vous connecter/vous enregistrer</Text>
            <Button
                style={styles.buttonRegisterLogin}

                title="Connexion"
                onPress={() => {
                    navigation.navigate('LoginScreen', { currentUser: currentUser, accessToken: accessToken })
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
                onPress={() => navigation.navigate('ProfilScreen', { currentUser: currentUser, accessToken: accessToken })}
                title="Profil"
                accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page Profil"
            />
        </View>
    );
}

export default HomeScreen;