// import { AsyncStorage } from 'react-native-community/async-storage';
// import { AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

class AuthService {

    async local_setItem(key, item) {
        await SecureStore.setItemAsync(key, item);
    }

    async getValueFor(key, callback) {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
            callback()
            return result;
        } else {
            console.log('No values stored under that key.');
        }
    }

    login(username, password) {

        const axios = require('axios');

        const apiUrl = "http://10.0.1.136:3000/auth/login";
        // const apiUrl = "http://qa-6wy.anonymous.api-front.exp.direct:3306/auth/login";
        console.log(password);
        console.log(username);
        axios.post(apiUrl, {
            username,
            password,
        })
            .then(function (response) {
                let token = response.data['access_token'];
                console.log(response);
                console.log('conversion')
                // console.log(JSON.stringify(response));
                // console.log(JSON.parse(response));
                console.log('where is my response')

                // this.local_setItem('token', token);
            })
            .then(function (response2) {

                window.reload;

            })
            .catch(function (error) {
                console.log(apiUrl + ' error fais un effort le sang')
                console.log(error);
            })

    }

    async useToken(token) {
        try {

            const axios = require('axios');
            console.log(token)
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const response = await axios.get(
                'http://localhost:3306/profile',
                config
            )
            const result = await response.data
            console.log(result)
            return result
        } catch (err) {
            console.error(err);
        }

    }

}

export default new AuthService();
