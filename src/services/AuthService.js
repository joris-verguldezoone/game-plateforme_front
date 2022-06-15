import axios from "axios"
import { apiUrl } from "../const";
import * as SecureStore from 'expo-secure-store';

export const login = async (username, password) => {
    console.log("loginAuth")
    console.log(username, password)

    const result = await axios.post(apiUrl + 'auth/login', {
        username,
        password,
    })
    let token = result.data['access_token'];
    const cc = await local_setItem('token', token);
    console.log(token)
    console.log(cc)
    console.log('new token')
    console.log("loginAuth")

    // getValueFor('token').then(response => {
    //     console.log(response)
    //     console.log('AuthService get value for')
    // })

}
// ne sert pas au profil, sert a décoder le token #boloss
export const useToken = async (token) => {

    try {
        // const config = {
        //     headers: { Authorization: `Bearer ${token}` }
        // };

        console.log('AuthServices', token)

        const user = await axios.get(apiUrl + 'auth/profile', {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log(user)
        console.log(user.data)
        return (user.data);

    } catch (e) {
        console.log(e + 'wotifk???')
        console.log(e.request)
    }

}

export const local_setItem = async (key, item) => {
    console.log(SecureStore.isAvailableAsync("token"))
    console.log(SecureStore)
    console.log("SecureStore")
    await SecureStore.setItemAsync(key, item);
}

export const getValueFor = async (key) => {
    let result = await SecureStore.getItemAsync(key)
    if (result) {
        return result;
    } else {
        console.log('No values stored under that key.');
    }
}
export const signOut = async () => {
    await SecureStore.deleteItemAsync('token')
}