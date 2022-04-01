import axios from "axios"
import apiUrl from "../const";
import * as SecureStore from 'expo-secure-store';

export const login = (username, password) => {

    axios.post(apiUrl + 'auth/login', {
        username,
        password,
    }).then(function (response) {
        let token = response.data['access_token'];

        local_setItem('token', token);

    }).catch(function (error) {
        console.log(error.request)

    })
}

export const useToken = async (token) => {

    try {
        const axios = require('axios');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const user = await axios.get(apiUrl + 'auth/profile', {
            headers: { Authorization: `Bearer ${token}` }
        })

        return (user.data);

    } catch (e) {
        console.log(e + 'wotifk???')
        console.log(e.request)
    }

}

export const local_setItem = async (key, item) => {
    await SecureStore.setItemAsync(key, item);
}

export const getValueFor = async (key) => {
    let result = await SecureStore.getItemAsync(key)
    return result
}
