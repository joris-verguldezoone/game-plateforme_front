import * as React from 'react';
import { TouchableOpacity } from "react-native";
import styles from "../styles";
import { useState, useEffect } from "react";
import { Text, View, Image, Input, ScrollView, Button } from 'react-native';
import ClientComponent from '../../component/ClientComponent'
// import { socketIo } from '../socketContext'
import { useFocusEffect } from '@react-navigation/native';
import { io } from "socket.io-client";
import { SOCKET_URL } from '../../const';
import { SocketContext, socketIo } from '../socketContext';
const LobbyScreen = (navigation) => {
    const [getTeam, setTeam] = useState('0');
    const [userName, setUserName] = useState("")
    const [profil_picture, setProfil_picture] = useState("")
    // let coco = navigation.route.params.accessToken
    // console.log(coco)
    // let cc = navigation.route.params.currentUser
    // console.log(cc)
    // console.log(navigation.route.params.currentUser)
    // let currentUser = navigation.route.params.currentUser
    /** 
     * Il faut fetch le type de jeu, ça ordonne le nombre de slot de team et de couleurs
     * 
     * Faire une fonction qui permet de cliquer sur un poste de joueur, une fois cliqué
     * l'image et le pseudo du joueur apparaissent
     * Ce changement provoque un evenement socket qui actualise aussi les données chez l'autre utilisateur
     * il recevra un fetch lui permettant de situer les changement dans son screen et ainsi simuler les interaction entre
     * utilisateurs
     * 
     * quand on rejoins une team c'est inséré dans une table intermédiaire, une vérif a lieu a chaque envoie pour savoir 
     * si les 4 joueurs on rejoins tous les slots disponible
     * 
     * si c'est le cas la partie passe en mode lançable 
     * 
     * 
    */
    const joinTeam = () => {
        // .then(function (storage) {
        //   console.log('storage as been set')
        // })
        setUserName(navigation.route.params.currentUser.username)
        setProfil_picture(navigation.route.params.currentUser.idavatar)
        console.log(userName)
        console.log(profil_picture)
    }

    const [response, setResponse] = useState("");
    // const socket = React.useContext(SocketContext);

    // const chaussette = socketIo

    useFocusEffect(
        React.useCallback(() => {
            // Do something when the screen is focused
            // const socket = socketIo// maintain connection 
            var inUse = true
            const unsubscribe = navigation.navigation.addListener('focus', () => {
                // socket
                // console.log(socket, "socket")
                // console.log(data, 'connection'))
                if (inUse) {

                    io.connect(SOCKET_URL).on("FromAPI", data => {
                        setResponse(data);
                        console.log(data, 'lobby')

                        // io(SOCKET_URL).connect().disconnect()
                        // console.log(io(SOCKET_URL).connect().disconnect())
                        // console.log(io(SOCKET_URL).connect().status)
                    });

                }
            })
            return () => {
                io(SOCKET_URL).disconnect()
                // console.log(io(SOCKET_URL).disconnect())
                inUse = false;
                // socket = ""
                setResponse("")
                io(SOCKET_URL).on("disconnect", (socket) => {
                    console.log(socket.id, ':--)'); // undefined
                    return unsubscribe;
                })

            };
        }, [])
    );



    return (
        <><>
            {/* <ClientComponent> */}
            {/* </ClientComponent> */}
        </><View style={{ flex: 1, flexDirection: 'row', alignContent: 'flex-start', justifyContent: 'center' }}>
                <View style={styles.ViewLobby1}>
                    <ScrollView>
                        <View style={styles.LineLobby}>
                            <Image styles={styles.ImagePlayerLobby} />
                            <Text style={styles.ImagePlayerLobby}>{profil_picture}</Text>
                            <Text style={styles.TextPlayerLobby}>{userName}</Text>
                            <Button
                                onPress={joinTeam}
                                title="join"
                                color="#841584"
                                accessibilityLabel="Join a team" />
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => console.log(getTeam)}
                            >
                                <Text>Equipe: {getTeam}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.LineLobby}>
                            <Image styles={styles.ImagePlayerLobby} />
                            <Text style={styles.TextPlayerLobby}>Shun</Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => console.log(getTeam)}
                            >
                                <Text>Equipe: {getTeam}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.LineLobby}>
                            <Image styles={styles.ImagePlayerLobby} />
                            <Text style={styles.TextPlayerLobby}>Shun</Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => console.log(getTeam)}
                            >
                                <Text>Equipe: {getTeam}</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.ViewLobby2}>
                    <Image style={styles.ImageLobby} />
                    <Text style={styles.ImageLobby}>IMAGE REGLES</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => console.log(getTeam)}
                    >
                        <Text style={styles.TextButtonLobby}>Prêt</Text>
                    </TouchableOpacity>
                    <View style={styles.ViewOptionsLobby}>
                        <TouchableOpacity style={styles.ButtonOptionLobby1}>
                            <Text style={styles.TextButtonLobby}>Option</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ButtonOptionLobby2}>
                            <Text style={styles.TextButtonLobby}>Commencer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View></>
    );
}

export default LobbyScreen;