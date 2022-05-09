import { StyleSheet, Text, View, Button, TextInput, } from 'react-native';
import styles from './styles.js';
import React, { useState, useEffect } from "react";
import { profile } from "../services/AuthService.js";


const ProfilScreen = ({ navigation, accessToken, currentUser, route }) => {
    // const { pseudo, password } = route.params;

    console.log(route.params.accessToken)
    console.log(route.params.currentUser)
    const [user, userState] = useState(route.params.currentUser)
    const [usernameInput, setUsernameInput] = useState(user.username);

    console.log('currentUser + accessToken')

    const handleSubmit = () => {
        console.log(usernameInput)
        profile(user.id, usernameInput)


        // navigation.navigate('HomeScreen');

    }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>

                <TextInput
                    style={styles.inputRegisterLogin}
                    placeholder="Pseudo"
                    // autoComplete="name"
                    name="username"
                    value={usernameInput}
                    onChangeText={e => setUsernameInput(e)}
                />
                {/* <Text style={styles}>Nom du profil: {route.params.currentUser.username}</Text>
            <Text style={styles}>Password: </Text> */}
                <Text style={styles}>Parties Jouées</Text>
                <Text style={styles}>Parties Gagnées</Text>
                <Button
                    style={styles.buttonRegisterLogin}
                    title="Changer"
                    accessibilityLabel="Appuyez sur ce bouton pour changer d'identifiant"
                    onPress={handleSubmit}
                />
            </View>
            <View>
                {/* <Button
                    style={styles.buttonRegisterLogin}
                    title="Retour au menu"
                    accessibilityLabel="Appuyez sur ce bouton pour vous inscrire"
                // onPress={() => navigation.navigate('HomeScreen')}
                /> */}
            </View>
        </View>
    );
}
export default ProfilScreen
