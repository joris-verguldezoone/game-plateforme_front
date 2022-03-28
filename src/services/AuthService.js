import axios from "axios"
import * as SecureStore from 'expo-secure-store';
import apiUrl from "../const";

export const login = (username, password) => {

    // const apiUrl = "http://localhost/auth/login";
    console.log(password);
    console.log(username);

    axios.post(apiUrl + 'auth/login', {
        username,
        password,
    }).then(function (response) {
        let token = response.data['access_token'];

        local_setItem('token', token);

        let userToken = getValueFor('token')
        userToken.then(function (result) {
            console.log(result + 'c mon getValue du Tokynn') // "Some User token"
        })
    }).catch(function (error) {
        console.log(error.request)
        // console.log(error.response.message)
        // console.log(error.response)
        console.log("coucou3")

    })

}

export const useToken = async (token) => {
    // try {

    const axios = require('axios');
    // const apiUrl = "http://localhost/auth/profile";
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    console.log('useToken 1')
    console.log(token)

    axios.get(apiUrl + 'auth/profile', {
        headers: { Authorization: `Bearer ${token}` },
    }).then(response => {

        // console.log("kikooooo")
        // console.log(response)
        // console.log(response.data)
        // console.log('coucou')
        // console.log(response.data.username)
        // console.log('coucou')
        // let result = JSON.stringify(response.data)
        // console.log(result)
        // console.log("kikooooo")
        console.log("monvier")
        console.log(response.data)
        console.log("monvier")
        return response.data // la fonction renvoie un resultat alorq qu'elle est meme pas fini se faire enculer

    })
        .catch(function (error) {
            console.log(error + 'wotifk???')
            console.log(error.request)
            // console.log(error.response.message)
            // console.log(error.response)
            //     const response = await axios.get(
            //         'http://localhost/profile',
            //         config
            //     )
            //     const result = await response.data
            //     console.log(result + 'grrrrrr')
            //     return 'prout'
            // } catch (err) {
            //     console.error(err);
            // }
        })
}




export const local_setItem = async (key, item) => {
    await SecureStore.setItemAsync(key, item);

}

export const getValueFor = async (key) => {
    let result = await SecureStore.getItemAsync(key)
    return result
    // if (result) {
    //     // callback()
    //     return result;
    // } else {
    //     console.log('No values stored under that key.');
    // }
}
