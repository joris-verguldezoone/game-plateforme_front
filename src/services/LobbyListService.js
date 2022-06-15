import { apiUrl } from "../const";
import axios from "axios"

export const getAllLobby = async () => {
    // console.log('getallGamesServices')
    const promise = axios.get(apiUrl + 'lobby/find')
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



