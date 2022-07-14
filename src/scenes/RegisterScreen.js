import * as React from 'react';
import styles from './styles.js';
import { useFocusEffect } from '@react-navigation/native';
import axios from "axios"
import apiUrl from "../const";

import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const RegisterScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfpassword] = useState('');
    const [formRef, setFormRef] = useState();

    return (
        <Form className="auth-form" onSubmit={handleLogin} ref={(c) => { setFormRef(c); }}>
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
        </Form>
    );
};

export { RegisterScreen }

const Register = (username, password, confPassword) => { // refacto dans les services
    // set state ici qui sera récupéré apres la requete axios 
    if (password == confPassword) {
        console.log(password);
        axios.post('http://localhost/' + "users", {
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
        return <Text>"Confirmation du mot de passe incorrect"</Text>
    }
}
export default Register

// export default function RegisterScreen() { }
