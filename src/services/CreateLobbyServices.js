// import { AsyncStorage } from 'react-native-community/async-storage';
// import { AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { apiUrl } from "../const";
import axios from "axios"

export const getAllGames = async () => {
    // console.log('getallGamesServices')
    const promise = axios.get(apiUrl + 'jeux/find')
    // console.log(promise)
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data)
        .catch(function (error) {
            console.log(error.request)

        })

    // console.log('dataPromise services')
    // console.log(dataPromise)
    return dataPromise
}

export const getOneGameRule = async (id) => {

    const promise = axios.get(apiUrl + 'jeux/find?id=' + id)
    // console.log(apiUrl + 'jeux/find?id=' + id)

    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data)
        .catch(function (error) {
            console.log(error.request)

        })
    // console.log('CreateLobbyScreenServices')
    // console.log('CreateLobbyScreenServices')
    return dataPromise
}
export const createLobby = async (nbJoueurs, idDifficulte, idJeux, idRegle, idUser) => {

    // déduire le nombre de joueurs via nbmax - nbmin dans le composant d'appel


    axios.post(apiUrl + "parties", {
        "nbjoueurs": 0,
        "iddifficulte": idDifficulte,
        "idjeux": idJeux,
        "createdat": "2022-06-08T20:18:22.452Z",
        "finishedat": "2022-07-08T20:18:22.452Z"
    })
        .then(function (response) {
            console.log(response);
            return response
        })
        .catch(function (error) {
            console.log(error);
        })
}


