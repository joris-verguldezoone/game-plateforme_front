import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';



const axios = require('axios');
const apiUrl = "http://localhost:3000/";

const Register = (username, password, confPassword) => {

    if (password == confPassword) {
        console.log(password);
        axios.post(apiURL + "users", {
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

const registerForm = () => {

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default registerForm;