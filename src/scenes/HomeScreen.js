import * as React from 'react';
import styles from './styles.js';
import { useFocusEffect } from '@react-navigation/native';
import axios from "axios"
import apiUrl from "../const";

import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { getValueFor, useToken, signOut } from '../services/AuthService';
// import ClientComponent from '../component/ClientComponent';
import { socketIo } from './socketContext'
const HomeScreen = ({ navigation }) => {
    // localStorage.clear();
    const [accessToken, setAccessToken] = useState('');
    const [currentUser, setCurrentUser] = useState({
        "exp": 1757568992,
        "idavatar": 0,
        "role": 0,
        "id": 38,
        "username": "cc",
    });
    // const [currentUser, setCurrentUser] = useState({});

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [socket, setSocket] = useState(null);

    // faut set un state loading, quand il est validé par loginScreen alors App nous fait switch sur profil par exemple   

    useFocusEffect(
        React.useCallback(() => {
            console.log(navigation.route, "navigation.route")
            const fetchPayload = async () => {
                const payload = await useToken().then((response) => {
                    // console.log(response, ' in use effect')
                    setCurrentUser({
                        id: response.userId,
                        username: response.username,
                        role: response.role,
                        idavatar: response.idavatar,
                        expiresIn: response.exp
                    });
                    console.log(currentUser)
                })


            }
            // fetchPayload()

            return () => {
                // socket.disconnect();
                // setSocket(null)

            }

        }, []) // mettre accessToken pour tester si ça vient de la le fait que ça s'update pas 
    )

    useFocusEffect( // componentDidUpdate?
        React.useCallback(() => {
            let isSocketSubscribed = true;
            setSocket(socketIo)

            console.log('in App useEffect')
            console.log(socket)
            console.log(currentUser)
            if (socket != null) {
                // if (socket.connected == false)
                // socket.connect()

                socket.on("FromAPI", data => {
                    if (isSocketSubscribed) {

                        console.log(data, 'FromAPI')
                        console.log("HomeScreen")
                    }
                });

            }
            if (socket != null) {
                // console.log('disconnect')
                return () => {
                    // socket.disconnect();
                    // setSocket(null)
                    isSocketSubscribed = false;

                }
            }
        }, [socket]))





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
                onPress={() => navigation.navigate('RegisterScreen')}
                title="Inscription"
                accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de inscription"
            />
            {/* <Button
                style={styles.buttonRegisterLogin}
                onPress={() => navigation.navigate('Menu')}
                title="Menu des jeux"
                accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de inscription"
            /> */}
            <Button
                style={styles.buttonRegisterLogin}
                onPress={() => navigation.navigate('ProfilScreen', { currentUser: currentUser, accessToken: accessToken })}
                title="Profil"
                accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page Profil"
            />
            <Button
                style={styles.buttonRegisterLogin}
                onPress={() => navigation.navigate('LobbyScreen', { socket: socket, currentUser: currentUser, accessToken: accessToken })}
                title="Menu du lobby"
                accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de inscription"
            />
            <Button
                style={styles.buttonRegisterLogin}
                onPress={() => navigation.navigate('CreateLobbyScreen', { socket: socket, currentUser: currentUser, accessToken: accessToken })}
                title="Créer un nouveau lobby"
                accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de création de partie"
            />
            <Button
                style={styles.buttonRegisterLogin}
                onPress={() => navigation.navigate('LobbyList', { zoulette: 'soulette', socket: socket, currentUser: currentUser, accessToken: accessToken })}
                title="Liste des lobby"
                accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la liste des lobby"
            />
            {/* {socket ? null : */}
            {/* <Button onPress={() => socket.disconnect()}>
                STOP CLIENT
            </Button> */}
            {/* } */}


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