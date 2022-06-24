import * as React from 'react';
import styles from './styles.js';
import { useFocusEffect } from '@react-navigation/native';
import axios from "axios"
import apiUrl from "../const";

import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { getValueFor, useToken, signOut } from '../services/AuthService';

const HomeScreen = ({ navigation }) => {
    // localStorage.clear();
    const [accessToken, setAccessToken] = useState('Chibrosaure');
    const [currentUser, setCurrentUser] = useState('');
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    // faut set un state loading, quand il est validé par loginScreen alors App nous fait switch sur profil par exemple   



    // useFocusEffect(
    //     React.useCallback(() => {
    //         getValueFor('token').then(response => {

    //             setAccessToken(response)
    //             console.log(response)
    //             console.log('response acessToken')
    //             console.log('old acesstoken')
    //             console.log(accessToken)
    //             console.log('old acesstoken')

    //             useToken(response).then(payload => {
    //                 setCurrentUser({
    //                     id: payload.userId,
    //                     username: payload.username,
    //                     role: payload.role,
    //                     idavatar: payload.idavatar,
    //                     expiresIn: payload.exp
    //                 });
    //                 console.log(currentUser)
    //                 console.log('mangez moi le ooo')
    //             })

    //         }).catch((error) => {
    //             console.log('on est dans le catch')
    //         })
    //     }, [accessToken]) // mettre accessToken pour tester si ça vient de la le fait que ça s'update pas 
    // )

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
                <Text style={styles.textTitle}>Bienvenue sur CBGames !</Text>
                <View style={styles.popUpView}>
                    
                    <Text style={styles.popUpTextStart}>Rejoignez-nous:</Text>

                    <Button
                        style={styles.buttonRegisterLogin}
                        title="Connexion"
                        color='#6CA054'
                        onPress={() => {
                            navigation.navigate('LoginScreen', { currentUser: currentUser, accessToken: accessToken })
                            // navigation.setOptions
                        }
                        }
                        // onPress={() => navigation.navigate('Connexion')}
                        // title="Connexion"
                        accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de connexion"
                    />

                    <View style={{flex:2, alignItems:'center', justifyContent:'center', width:300}}>
                        <Text style={{fontSize:20, padding:5, color:'#DFE2DF'}}>- OU -</Text>
                    </View>

                    <Button
                        style={styles.buttonRegisterLogin}
                        onPress={() => navigation.navigate('RegisterScreen')}
                        title="Inscription"
                        color="#6CA054"
                        accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de inscription"
                    />
                    
                    
                </View>
            </View>
            <View style={{flex:2, alignItems: 'center', justifyContent: 'center'}}>

            </View>
        </View>
    );
}

export default HomeScreen;

{/* <Button
                        style={styles.buttonRegisterLogin}
                        onPress={() => navigation.navigate('Menu')}
                        title="Menu des jeux"
                        accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de inscription"
                    /> */}
                    {/*
                    <Button
                        style={styles.buttonRegisterLogin}
                        onPress={() => navigation.navigate('ProfilScreen', { currentUser: currentUser, accessToken: accessToken })}
                        title="Profil"
                        accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page Profil"
                    />
                    <Button
                        style={styles.buttonRegisterLogin}
                        onPress={() => navigation.navigate('LobbyScreen', { currentUser: currentUser, accessToken: accessToken })}
                        title="Menu du lobby"
                        accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de inscription"
                    />
                    <Button
                        style={styles.buttonRegisterLogin}
                        onPress={() => navigation.navigate('CreateLobbyScreen', { currentUser: currentUser, accessToken: accessToken })}
                        title="Créer un nouveau lobby"
                        accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de création de partie"
                    />
                    */}