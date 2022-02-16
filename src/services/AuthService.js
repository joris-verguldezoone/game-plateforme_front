import jwt from "jsonwebtoken";
// import { AsyncStorage } from 'react-native-community/async-storage';

class AuthService {
    login(username, password) {

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        console.log(localStorage)
        const axios = require('axios');
        const apiUrl = "http://localhost:3000/";
        console.log(password);
        console.log(username);
        axios.post(apiUrl + "auth/login", {
            username,
            password,
        })
            .then(function (response) {
                console.log(response);

                let token = response.data['access_token'];
                localStorage.setItem('token', token);
                window.location.reload();
                // _storeData = async () => {
                //     try {
                //         await AsyncStorage.setItem(
                //             'token', token
                //         );
                //     } catch (error) {
                //         // Error saving data
                //     }
                // }; console.log(token)
            })
            .then(function (response2) {
                // Update the document title using the browser API
                // const payload = this.useToken(response2);
                // utiliser des useState() pour initialiser les valeurs que l'on fera passer au useEffect();
                // rendre cet endroit asynchrone 
                // le handle submit permet de get les data 
                // ensuite dans le component on utilise les data dans un useffect dans lequel on appel des fonction et 
                // le useffect permet de cycler les fonction et d'attendre leur retour avant de passer a la suite du code 
                // console.log(payload);
                window.reload;
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    // callApi = async () => {
    //     const response = await axios.get(URL);
    //     const data = response.data;
    //     this.setState({
    //         inDollars: data.bpi.USD.rate,
    //         inEuro: data.bpi.EUR.rate,
    //         inPounds: data.bpi.GBP.rate,
    //     });
    // }

    async useToken(token) {
        try {

            const axios = require('axios');
            console.log(token)
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const response = await axios.get(
                'http://localhost:3000/profile',
                config
            )
            const data = await response.data
            console.log(data)
            return data
        } catch (err) {
            console.error(err);
        }

    }











    getCurrentUser() {
        return localStorage.getItem("username");
    }
    getToken() {
        return localStorage.getItem('token');
    }
}

export default new AuthService();
