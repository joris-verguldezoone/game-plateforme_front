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
import { Manager } from "socket.io-client";

const LobbyScreen = (navigation, route) => {
    const [getTeam, setTeam] = useState('0');
    const [userName, setUserName] = useState("")
    const [profil_picture, setProfil_picture] = useState("")
    const [nomLobby, setNomLobby] = useState("")
    const [socket, setSocket] = useState(navigation.route.params.socket);

    console.log(navigation)
    const kk = navigation.route.params.LobbyScreen
    // console.log(route)
    // console.log(route.params)

    const joinLobby = () => {
        io.connect(SOCKET_URL).emit('join_lobby_validate', [nomLobby, "userId"])
    }
    console.log('nomlobby', nomLobby)

    if (nomLobby != undefined)
        joinLobby
    // emit join_lobby_validate

    // useFocusEffect(
    //     React.useCallback({

    //     }, [])
    // )
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

    const manager = new Manager(SOCKET_URL, {
        autoConnect: false
    });

    // const socket = manager.socket("/");


    console.log(navigation.route.params.socket, 'il etait une fois ta grand mere')
    console.log(navigation, ' : navigation')

    useFocusEffect(
        React.useCallback(() => {
            let isSocketSubscribed = true;
            console.log('in App useEffect')
            setSocket(navigation.route.params.socket)
            console.log(socket)

            setNomLobby(navigation.route.params.nomLobby)

            console.log(nomLobby, 'nom lobby')
            console.log(nomLobby.length, 'len')
            if (socket != null) {
                if (isSocketSubscribed) {
                    console.log("emit réussi")
                    socket.emit('join_lobby_validate', navigation.route.params.nomLobby);
                }
            }
            if (socket != null) {
                return () => isSocketSubscribed = false;

                // io(SOCKET_URL).disconnect()
                // console.log(io(SOCKET_URL).disconnect())
                // socket = ""
                // setResponse("")


            }

        }, [socket])
    );






















    return (
        <><>
            {/* <ClientComponent> */}
            {/* </ClientComponent> */}
        </>
            <View style={{ flex: 1, flexDirection: 'row', alignContent: 'flex-start', justifyContent: 'center' }}>
                <View style={styles.ViewLobby1}>

                    <Text>Nom du lobby: {nomLobby}</Text>

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