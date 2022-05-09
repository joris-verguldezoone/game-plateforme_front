// import { AsyncStorage } from 'react-native-community/async-storage';
// import { AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { apiUrl } from "../const";
import axios from "axios"

export const getAllGames = async () => {

    const promise = axios.get(apiUrl + 'jeux')

    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data)
        .catch(function (error) {
            console.log(error.request)

        })

    return dataPromise
}

export const getOneGameRule = async (id) => {

    const promise = axios.get(apiUrl + 'reglesjeux/' + id)

    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data)
        .catch(function (error) {
            console.log(error.request)

        })

    return dataPromise
}



