import axios from "axios"
import * as SecureStore from 'expo-secure-store';


export const login = (username, password) => {

    const apiUrl = "http://10.0.4.122:3000/auth/login";
    // const apiUrl = "http://qa-6wy.anonymous.api-front.exp.direct:3306/auth/login";
    console.log(password);
    console.log(username);
    axios.post(apiUrl, {
        username,
        password,
    })
        .then(function (response) {
            let token = response.data['access_token'];

            local_setItem('token', token);

            let userToken = getValueFor('token')
            userToken.then(function (result) {
                console.log(result + 'c mon getValue du Tokynn') // "Some User token"
            })
        })
        .catch(function (error) {
            // console.log(error.request)
            // console.log(error.response.message)
            // console.log(error.response)
        })

}

export const useToken = async (token) => {
    try {

        const axios = require('axios');
        console.log(token)
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const response = await axios.get(
            'http://10.0.4.122:3000/profile',
            config
        )
        const result = await response.data
        console.log(result)
        return result
    } catch (err) {
        console.error(err);
    }

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
