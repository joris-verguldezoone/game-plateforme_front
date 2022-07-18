import * as SecureStore from 'expo-secure-store';
import { apiUrl } from "../const";
import axios from "axios"

export const getLobbyInfo = async (nomLobby) => {
    return await axios.get(apiUrl + 'lobby/find?nomLobby=' + nomLobby)
        .then(async response => {
            console.log(response, ' response services ')
            console.log(response.status, ' response services ')
            console.log(response.data, 'services')
            return await response.data
        })
        .catch(error => {
            console.log("ERR GET LOBBY INFO ====", error)
            return error
        })
}