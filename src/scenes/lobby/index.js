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
import { getLobbyInfo } from '../../services/LobbyService';



const AllPlayerSlot = (props) => {

    let slots = []
    console.log(props.lobbyInfo.nbMax, ' kooookqodkgdofk')
    // soit client , soit socket 
    console.log(props.lobbyInfo.nbMax, 'before loop')
    for (let i = 0; i <= (props.lobbyInfo.nbMax - 1); i++) {
        let test = i
        // trouver un id a mettre
        // appeler joinTeam
        // stocker les slots valide ou pas 
        // mettre son payload dans la team et envoyer un evenement socket , state relié a ce meme evenement pour connaitre 
        // le placement des autre joueurs playerInLobby
        // {props.playerInLobby[i]} .username?
        console.log(props.playerInLobby, "in AllplayerSlot function component")

        slots.push(<>
            <Text key={"img_" + i + "_team"} style={styles.ImagePlayerLobby}>eeetooo{i}iii </Text>
            <Text key={"username_" + i + "_team"} style={styles.TextPlayerLobby}>goootooo</Text>
            <Button
                key={"join_" + i + "_team"}
                onPress={() => props.joinTeam(i)}
                title={"join team " + (i + 1)}
                color="#841584"
                accessibilityLabel="Join a team" />
            {/* <Text>Equipe: {getTeam}</Text> */}
        </>
        )
        console.log(slots, 'SLOTS in for')

    }
    console.log(slots, 'SLOTS outside for')
    return (
        <>
            <View>
                {/* {slots} */}
                {slots.map(element => {

                    console.log(element, 'element of slot')
                    return element
                })}
            </View>
        </>
    )
}

const LobbyScreen = (navigation) => {
    const [getTeam, setTeam] = useState('0');
    const [userName, setUserName] = useState("")
    const [profil_picture, setProfil_picture] = useState("")
    const [nomLobby, setNomLobby] = useState("")
    const [socket, setSocket] = useState(navigation.route.params.socket);
    const [isLoading, setIsLoading] = useState(true)
    const [lobbyInfo, setLobbyInfo] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const [playerInLobby, setPlayerInLobby] = useState({})

    const getNumberOfPlayer = (nbMaxPlayer) => { // ça v& devenir ce que je recois du .on('slots) 
        let playerInSlot = []
        for (let i = 1; i <= nbMaxPlayer; i++) {
            console.log("gRRRRRRRRRrrrrRrr")
            playerInSlot.push({})
        }
        console.log(playerInSlot, 'PLAYER IN SLOT')
        console.log(playerInSlot)

        return playerInSlot

    }

    // const socket = React.useContext(SocketContext);

    // const manager = new Manager(SOCKET_URL, {
    //     autoConnect: false
    // });

    // const socket = manager.socket("/");




    useFocusEffect(
        React.useCallback(() => {

            let isSocketSubscribed = true;
            console.log('in App useEffect')
            setSocket(navigation.route.params.socket)
            // console.log(socket)
            // console.log(navigation.route.params.currentUser, "navigation.route.params.currentUser")
            console.log(typeof (currentUser), "currentUser")
            let user = navigation.route.params.currentUser
            setCurrentUser([user])


            // console.log(navigation.route.params, "navigation.route.params")
            setNomLobby(navigation.route.params.nomLobby)

            console.log(nomLobby, 'nom lobby')
            console.log(nomLobby.length, 'len')
            console.log(navigation.route.params.nbPlayerMax, 'navigation.route.params.nbPlayerMax')
            if (socket != null) {
                if (isSocketSubscribed) {
                    console.log("emit réussi")
                    socket.emit('join_lobby_validate', [navigation.route.params.nomLobby, navigation.route.params.nbPlayerMax]); // donner nbMax player, puis si c'est déjà set en node ne pas le re set

                }

            }
            if (socket != null) {
                return () => isSocketSubscribed = false;
            }

        }, [socket])
    );

    useEffect(() => {
        // React.useCallback(() => {
        let isLobbySet = true;
        console.log("lr :ksertlkjesrkegrlkjj")
        // console.log(navigation.route.params, "navigation.route.params")
        const fetchData = async () => {

            const result = await getLobbyInfo(navigation.route.params.nomLobby)
            console.log(typeof (result), 'typeof')
            console.log(typeof (result[0]), 'typeof')
            console.log(result[0], 'result[0]')
            setLobbyInfo([result[0]])
            console.log(result, 'fetchData Result useEffect')
            console.log([result[0]], 'jrage tarpin')

            console.log(result[0].nbMax, "result[0].nbMax")
        }
        console.log(lobbyInfo, 'lobby info useEffect')
        console.log(isLobbySet, '????')
        console.log(lobbyInfo, 'lobby info')
        // if (Object.keys(lobbyInfo).length != 0) {
        console.log(isLobbySet, '????2')
        if (isLobbySet) {
            fetchData()
            console.log(lobbyInfo, 'after fetchData')

        }
        // 
        if (Object.keys(lobbyInfo).length != 0) {
            console.log(lobbyInfo, 'in return')
            console.log(playerInLobby, 'playerInLobby  return ')

            return () => isLobbySet = false;
        }

    }, [])


    useEffect(() => {
        // React.useCallback(() => {
        let arePlayerSet = true;
        if (arePlayerSet) {
            if (Object.keys(lobbyInfo).length != 0) {
                console.log(Object.keys(lobbyInfo).length, 'Object.keys(lobbyInfo).length')
                console.log(lobbyInfo, 'on est dans le if mais pk')
                console.log(lobbyInfo[0].nbMax, 'lobbyInfo.nbMax before result2')
                let result2 = getNumberOfPlayer(lobbyInfo[0].nbMax) // faudra mettre le json du emit slot
                console.log(result2, "result2")
                console.log(typeof (result2), "typeof2")
                console.log('mon vier')
                setPlayerInLobby(result2)
                console.log(playerInLobby, 'playerInLobby after fetchData')
                console.log(playerInLobby)

                console.log(playerInLobby)
            }
        }
        if (playerInLobby.length > 0) {
            console.log(lobbyInfo, 'in return')
            console.log(playerInLobby, 'playerInLobby  return ')

            return () => arePlayerSet = false;
        }

    }, [lobbyInfo])

    useFocusEffect( // componentDidUpdate?
        React.useCallback(() => {
            let isSocketSubscribed = true;
            setSocket(socketIo)

            console.log('in App useEffect')
            console.log(socket)
            if (socket != null) {
                // if (socket.connected == false)
                // socket.connect()

                socket.on("lobby_slots", data => {
                    if (isSocketSubscribed) {

                        console.log(data, 'lobby_slots')

                    }
                });
            }
            if (socket != null) {
                // console.log('disconnect')
                return () => {
                    // socket.disconnect();
                    // setSocket(null)
                    isSocketSubscribed = false;

                }
            }
        }, [socket]))




    const joinTeam = (i) => {

        let tempTab = playerInLobby

        console.log(playerInLobby, 'playerInLobby')
        console.log(currentUser, 'currentUser')

        console.log(tempTab, ' : tempTab')
        console.log(tempTab[0], 'tempTab[0]')
        console.log('iiiiiiiii', i, 'iiiiiiiiii')

        for (let i = 0; i <= (tempTab.length - 1); i++) {

            if (tempTab[i].hasOwnProperty('id') && currentUser[0].hasOwnProperty('id')) {
                console.log('both have properties')
                console.log(tempTab[i].id, currentUser[0].id)
                console.log(tempTab[i].id == currentUser[0].id)
                if (tempTab[i].id == currentUser[0].id) {

                    console.log(tempTab[i], '????', currentUser[0], "égalité vérifiée")
                    tempTab[i] = {}
                }
            }
        }
        // else {
        //     console.log(element, ' heuuu ', currentUser[0], 'ici')
        // }
        console.log(tempTab, "after trie duplicata")
        tempTab[i] = currentUser[0]
        console.log(tempTab[i], ' : tempTab[i]')
        setPlayerInLobby(tempTab)
        console.log(tempTab, ' final')
    }

    return (
        <><>
            {/* <ClientComponent> */}
            {/* </ClientComponent> */}
        </>
            <View style={{ flex: 1, flexDirection: 'row', alignContent: 'flex-start', justifyContent: 'center' }}>
                <View style={styles.ViewLobby1}>

                    {/* {(nomLobby.length > 0) && <Text>Nom du lobby: {nomLobby}</Text>} */}

                    {/* {(lobbyInfo) && console.log(lobbyInfo, 'indiiiiii')}



                    {(lobbyInfo.length > 0) && Array.from(lobbyInfo).forEach(r =>
                        <><Text>joueurs minimum Array.from foreach : {r}</Text></>)}

                    {(lobbyInfo.length > 0) && console.log(lobbyInfo, 'lobby_info_console.log')} */}
                    {/* {(lobbyInfo.length > 0) && console.log(" test okeyyy ", lobbyInfo)} */}
                    {/* {(lobbyInfo.length > 0) && console.log(" test coucou ", lobbyInfo.id)} */}

                    {(Object.keys(lobbyInfo).length != 0) &&
                        <View>
                            {console.log(Object.keys(lobbyInfo).length, 'TARRRRAAAACEEEEE')}
                            {console.log(lobbyInfo)}
                            <Text>
                                id : {lobbyInfo[0].id}
                            </Text>
                            <Text>
                                nom lobby:  {lobbyInfo[0].nomLobby}
                            </Text>
                        </View>}
                    {/* {(playerInLobby.length > 0 && console.log(playerInLobby, 'yooooooo'))} */}
                    {/* {(lobbyInfo.length > 0) && console.log(lobbyInfo.nbMax, ' lobbyInfo.nbMax')} */}
                    {/* {(lobbyInfo.length > 0) && console.log(typeof (lobbyInfo.nbMax), ' lobbyInfo.nbMax typeof')} */}
                    {/* {(playerInLobby.length > 0) && AllPlayerSlot(lobbyInfo.nbMax)} */}
                    {/* {(Object.keys(lobbyInfo).length != 0) &&
                        // AllPlayerSlot(lobbyInfo.nbMax)
                        (() => {
                            for (var i = 1; i <= lobbyInfo.nbMax; i++) {
                                // trouver un id a mettre
                                // appeler joinTeam
                                // stocker les slots valide ou pas 
                                // mettre son payload dans la team et envoyer un evenement socket , state relié a ce meme evenement pour connaitre 
                                // le placement des autre joueurs playerInLobby

                                console.log(playerInLobby, "in AllplayerSlot")

                                return <View key={'lobby_slot' + i} style={styles.LineLobby}>
                                    <Image styles={styles.ImagePlayerLobby} />
                                    <Text style={styles.ImagePlayerLobby}></Text>
                                    <Text style={styles.TextPlayerLobby}>{userName}</Text>
                                    <Button
                                        onPress={joinTeam(i)}
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
                            }
                        })
                    } */}
                    {(Object.keys(lobbyInfo).length != 0) &&
                        <View>
                            {console.log(playerInLobby, 'playerInLobby cccoco')}
                            <AllPlayerSlot setPlayerInLobby={setPlayerInLobby} joinTeam={joinTeam}
                                playerInLobby={playerInLobby} currentUser={currentUser} lobbyInfo={lobbyInfo[0]}></AllPlayerSlot>
                        </View>
                    }


                    {/* // <AllPlayerSlot nbMax={lobbyInfo.nbMax} />} */}

                    {/* {(lobbyInfo.length > 0) && (console.log(lobbyInfo, 'COMMENT.??')) && lobbyInfo.map(element => {
                    
                        <>joueurs minimum foreach   : {element} test {element.id}</>
                    })} */}
                    {/* {(lobbyInfo) && lobbyInfo.map(element => {

                        <><Text>joueurs map minimum foreach   : {element}</Text></>
                    })}  */}





                </View>
                <View style={styles.ViewLobby2}>
                    <Image style={styles.ImageLobby} />
                    <Text style={styles.ImageLobby}>IMAGE REGLES</Text>
                    <TouchableOpacity
                        style={styles.button}
                    // onPress={() => console.log(getTeam)}
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