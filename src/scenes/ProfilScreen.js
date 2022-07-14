import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
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

    // const handleSubmit = () => { // ne pas utiliser la route /profil elle est attribué au token, utiliser les autre route de user 
    //     console.log(usernameInput)
    //     profile(user.id, usernameInput)


    //     // navigation.navigate('HomeScreen');

    // }


    return (
        <View style={styles.mainView}>
            <View style={{ flex: 1 }}>

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
                // onPress={handleSubmit}
                />
            </View>
            <View style={styles.middleView}>
                <Text style={styles.textTitle}>Profil</Text>
                <View style={styles.popUpView}>
                    <Image
                        style={styles.imageProfil}
                        source={require('./logo.png')}
                    />
                    <TextInput
                        style={styles.popUpTextInput}
                        placeholder="Pseudo"
                        // autoComplete="name"
                        name="username"
                        value={usernameInput}
                        onChangeText={e => setUsernameInput(e)}
                    />
                    {/* <Text style={styles}>Nom du profil: {route.params.currentUser.username}</Text>
                <Text style={styles}>Password: </Text> */}
                    <Text style={styles.popUpText}>Parties Jouées: 0</Text>
                    <Text style={styles.popUpText}>Parties Gagnées: 0</Text>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', paddingTop: 10, width: 200 }}>
                        <Button
                            style={styles.buttonRegisterLogin}
                            title="Changer"
                            color="#6CA054"
                            accessibilityLabel="Appuyez sur ce bouton pour changer d'identifiant"
                        // onPress={handleSubmit}
                        />
                        <Button
                            style={styles.buttonRegisterLogin}
                            title="Retour"
                            color="#FE654F"
                            accessibilityLabel="Retour"
                        />
                    </View>

                </View>
            </View>
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>

            </View>
        </View>

    );
}
export default ProfilScreen
