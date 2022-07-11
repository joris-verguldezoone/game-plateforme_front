import axios from "axios"
import { apiUrl } from "../const";
import * as SecureStore from 'expo-secure-store';

export const login = async (username, password) => {
    console.log("loginAuth")
    console.log(username, password)

    return await axios.post(apiUrl + 'auth/login', {
        username,
        password,
    }).then(async (response) => {
        let token = response.data.access_token
        console.log(response, 'iciii')
        console.log(response.data.access_token, 'iciii.data LOGIn')
        // setTimeout(async () => {
        await local_setItem("token", response.data.access_token).then(async () => {
            return token // n'est pas sensé servir a qqchose 

            // console.log(await getValueFor('token'), "console.log(getValueFor('token'), )")
        }) // Si on est en mobile on va l"utiliser sinon nn  
        //     // console.log("Delayed for 1 second.");
        // }, "1000")
    }).catch(e => {
        console.log(e)
        console.log("login services error")
    })
}
// ne sert pas au profil, sert a décoder le token #boloss




export const useToken = async () => { // obtenir le payload qui est décodé dans le back 
    const token = await getValueFor("token")
    // .then((response) => {
    //     console.log('AuthServices UseToken getToken', response)
    //     console.log(response, "le token officiel qui vient d'etre get")

    // })
    console.log(token, ' verif nico')
    return await axios.get(apiUrl + 'auth/profile', {
        headers: { Authorization: `Bearer ${token}` }
    }).then(response => {
        console.log(response)
        console.log(response.data, 'AuthServices UseToken response.data')
        return response.data
    }).catch(async e => {
        await signOut() // autant vider le localStorage

        console.log(e + 'wotifk???')
        console.log(e.request)
    })

}

export const local_setItem = async (key, item) => {
    console.log(SecureStore.isAvailableAsync("token"), "SecureStore.isAvailableAsync")
    console.log(key, item, "SecureStore")
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