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
    console.log(props.lobbyInfo.nbMax, 'before loop')
    for (let i = 0; i <= (props.lobbyInfo.nbMax - 1); i++) {
        console.log(props.playerInLobby, "in AllplayerSlot function component")

        slots.push(<View key={"view_slot_" + i}>
            <View >
                <Text key={"img_" + i + "_team"}>{props.playerInLobby[i].username}</Text>
                <Text key={"username_" + i + "_team"}></Text>
            </View>
            {!props.playerInLobby[i].hasOwnProperty('id') &&
                <Button
                    key={"join_" + i + "_team"}
                    onPress={() => props.joinTeam(i)}
                    title={"join team " + (i + 1)}
                    color="#841584"
                    accessibilityLabel="Join a team" />
            }
        </View>
        )
        console.log(slots, 'SLOTS in for')

    }
    console.log(slots, 'SLOTS outside for')
    return (
        <>
            {/* {slots} */}
            {slots.map(element => {

                console.log(element, 'element of slot')
                return element
            })}
        </>
    )
}

const LobbyScreen = (navigation) => {
    const [getTeam, setTeam] = useState('0');
    const [userName, setUserName] = useState("")
    const [profil_picture, setProfil_picture] = useState("")
    const [nomLobby, setNomLobby] = useState("")
    const [socket, setSocket] = useState(navigation.route.params.socket);
    const [lobbyInfo, setLobbyInfo] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const [playerInLobby, setPlayerInLobby] = useState({})

    const joinTeam = (slotTarget) => {

        let tempTab = playerInLobby
        let user = navigation.route.params.currentUser
        console.log(playerInLobby, 'playerInLobby')
        console.log(user, 'user')

        console.log(tempTab, ' : tempTab')
        console.log(tempTab[0], 'tempTab[0]')
        console.log('iiiiiiiii', slotTarget, 'iiiiiiiiii')

        for (let i = 0; i <= (tempTab.length - 1); i++) {
            console.log(i, 'kkkll???')
            if (tempTab[i].hasOwnProperty('id')) {
                console.log('both have properties')
                console.log(tempTab[i].id, user.id)
                console.log(tempTab[i].id == user.id)
                if (tempTab[i].id == user.id) {
                    console.log(tempTab[i].id, '????', user.id, "égalité vérifiée")
                    tempTab[i] = {}
                    console.log(tempTab, 'apres légalité')
                }
            }
        }

        console.log(tempTab, "after trie duplicata")
        if (!tempTab[slotTarget].hasOwnProperty("id")) {
            tempTab[slotTarget] = user
            setPlayerInLobby(tempTab)
            console.log('changement de team')
            socket.emit('lobby_slot_update', tempTab)
        }
        else {
            console.log('slot déjà occupé')
        }
        console.log(tempTab[slotTarget], ' : tempTab[slotTarget]')
        console.log(tempTab, ' final')
    }
    const initPlayerInSlot = (playerInLobby) => {
        let tempTab = playerInLobby
        let user = navigation.route.params.currentUser

        console.log(currentUser, 'currentUser')

        console.log(tempTab[0], 'tempTab[0]')
        console.log(tempTab[1], 'tempTab[1]')
        console.log('iiiiiiiii', tempTab, 'iiiiiiiiii')

        const selfSlotFilter = (tempTab, user) => {
            for (let i = 0; i <= (tempTab.length - 1); i++) {

                if (tempTab[i].id == navigation.route.params.currentUser.id) { // si currentUSer est set
                    console.log("both have same property", tempTab[i].id, navigation.route.params.currentUser.id);
                    console.log("both have", tempTab[i], tempTab[i].id)
                    console.log("tempTab[i].hasOwnProperty('id')", tempTab[i].hasOwnProperty('id'))
                    return false

                }
            }
            return true
        }
        const otherUserSlotFilter = (tempTab, user) => {
            for (let i = 0; i <= (tempTab.length - 1); i++) {

                if (!tempTab[i].hasOwnProperty('id')) {
                    console.log("both have different property", tempTab[i]);
                    console.log("navigation.route.params.currentUser.id", navigation.route.params.currentUser.id)

                    console.log("tempTab[i].hasOwnProperty('id')", tempTab[i].hasOwnProperty('id'))
                    console.log(tempTab[i], i, ':)')
                    console.log(tempTab, ':(')
                    tempTab[i] = navigation.route.params.currentUser;
                    socket.emit('lobby_slot_update', tempTab)
                    setPlayerInLobby(tempTab)
                    console.log(tempTab, "after init")

                    return '200'
                }
                else {
                    return "403 : slot déjà initialisé pour un autre joueur"
                }
            }
        }

        let result1 = selfSlotFilter(tempTab, user)
        if (result1) {
            let result2 = otherUserSlotFilter(tempTab, user)
            return result2
        }
        else {
            return "403 : slot déjà initialisé à votre nom"
        }

    }



    useFocusEffect(
        React.useCallback(() => {
            let isSocketSubscribed = true;
            console.log('in App useEffect')
            setSocket(navigation.route.params.socket)
            console.log(typeof (currentUser), "currentUser")
            let user = navigation.route.params.currentUser
            setCurrentUser([user])
            setNomLobby(navigation.route.params.nomLobby)

            socket.on("FromAPI", data => {
                console.log(data, 'socketSignal in lobby')

            });

            if (socket != null) {
                if (isSocketSubscribed) {
                    console.log("emit réussi")
                    socket.emit('join_lobby_validate', [navigation.route.params.nomLobby, navigation.route.params.nbPlayerMax]); // donner nbMax player, puis si c'est déjà set en node ne pas le re set
                }
            }
        }, [socket])
    );


    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        // let isLobbySet = true;
        const fetchData = async () => {

            const result = await getLobbyInfo(navigation.route.params.nomLobby)
            if (result[0] == undefined) { // logik
                console.log(result)
                console.log(result[0])
                console.log('loaded false')
            }
            else {
                setIsLoading(false)
                console.log('loaded true')
            }
            setLobbyInfo([result[0]])
            console.log(result, "????")

        }
        console.log(lobbyInfo, 'lobby info')

        if (isLoading) {
            fetchData()
        }

        if (Object.keys(lobbyInfo).length != 0) {
            return () => {
                // isLobbySet = false;
            }
        }

    }, [lobbyInfo]);


    useEffect(() => {
        let bool = true
        console.log('bool', bool)
        socket.on('lobby_slots_init', result => {
            if (bool) { // marche pas ça render deux fois quand meme

                console.log('helpppp1')
                console.log(result, "lobby_slots_init")
                setPlayerInLobby(result)
                let resultReturn = initPlayerInSlot(result)
                console.log(' resultReturn ', resultReturn)
            }
        })
        return () => {
            // socket.disconnect();
            // setSocket(null)
            bool = false;

        }
    }, [])

    // useEffect(() => {
    //     socket.on('lobby_slots_init', result => {
    //         console.log('helpppp2', socket)
    //         console.log(result, "lobby_slots_init")
    //         setPlayerInLobby(result)

    //     })
    // }, [])



    return (
        <>
            {/* 
            <View style={{ flex: 1, flexDirection: 'row', alignContent: 'flex-start', justifyContent: 'center' }}>
                 */}

            <View style={styles.mainView}>
                <ScrollView>
                    {/* <View style={styles.lobbyTopView}>
                </View> */}
                    <View style={styles.middleView}>
                        <View style={styles.popUpView}>


                            <View style={styles.popUpLobbyPart1}>


                                {/* <View>
                            
                            <Text>
                                id : {lobbyInfo[0].id}
                            </Text>
                            <Text>
                                nom lobby:  
                            </Text> */}
                                {/* </View>} */}

                                {(Object.keys(lobbyInfo).length != 0 && lobbyInfo[0] != undefined) && // le createur de la partie c un peu plus compliqué a faire figurer pcq ça passe par les socket
                                    <Text style={styles.popUpText}>{lobbyInfo[0].idjeux.nom} : {lobbyInfo[0].nomLobby}</Text>
                                }
                                <ScrollView style={{ width: 300, backgroundColor: "#DFE2DF", borderRadius: 5, marginTop: 5, }}>
                                    {(Object.keys(lobbyInfo).length != 0 && lobbyInfo[0] != undefined && playerInLobby.length > 0) &&
                                        <View>
                                            {console.log(playerInLobby, 'playerInLobby cccoco')}
                                            <AllPlayerSlot setPlayerInLobby={setPlayerInLobby} joinTeam={joinTeam}
                                                playerInLobby={playerInLobby} currentUser={currentUser} lobbyInfo={lobbyInfo[0]} ></AllPlayerSlot>
                                        </View>
                                    }
                                </ScrollView>

                            </View>

                            <View style={styles.popUpLobbyPart2}>
                                <View>

                                    <Text style={styles.popUpLobbyRegles}>REGLES</Text>
                                    {/* <Image
                                    style={styles}
                                    source={require('../testimageRegle.png')}
                                /> */}
                                    {(Object.keys(lobbyInfo).length != 0 && lobbyInfo[0] != undefined) &&
                                        <>
                                            <Text style={styles.popUpLobbyTextRegles}>Nom : {lobbyInfo[0].idregle.nomregle}  </Text>
                                            <Text style={styles.popUpLobbyTextRegles}>Description : {lobbyInfo[0].idregle.regle}  </Text>
                                            <Text style={styles.popUpLobbyTextRegles}>nombre de jeux max : {lobbyInfo[0].idregle.nbjoueurmax}  </Text>
                                            <Text style={styles.popUpLobbyTextRegles}>nombre de jeux min : {lobbyInfo[0].idregle.nbjoueurmin}  </Text>
                                        </>
                                    }

                                </View>
                                <View style={styles.popUpLobbyPart2}>

                                    <Text style={styles.popUpLobbyRegles}>DIFFICULTE</Text>

                                    {(Object.keys(lobbyInfo).length != 0 && lobbyInfo[0] != undefined) &&
                                        <>
                                            <Text style={styles.popUpLobbyTextRegles}>Nom : {lobbyInfo[0].iddifficulte.difficulte}  </Text>
                                            <Text style={styles.popUpLobbyTextRegles}>Multiplicateur de score : {lobbyInfo[0].iddifficulte.multiplicateurscore}  </Text>
                                        </>
                                    }
                                </View>


                                <Button
                                    style={styles.buttonRegisterLogin}
                                    color="#6CA054"
                                    title="Prêt"
                                    onPress={() => console.log(getTeam)}
                                />
                                <View style={styles.ViewOptionsLobby}>
                                    <TouchableOpacity style={styles.ButtonOptionLobby1}>
                                        <Text style={styles.popUpOptionLobby}>Options</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.ButtonOptionLobby2}>
                                        <Text style={styles.popUpOptionLobby}>Commencer</Text>
                                    </TouchableOpacity>
                                </View>
                                <Button
                                    style={styles.buttonRegisterLogin}
                                    color="#FE654F"
                                    title="Retour"
                                    onPress={() => console.log(getTeam)}
                                />

                            </View>

                        </View>

                    </View>

                    <View style={styles.ViewLobby2}>

                    </View>
                </ScrollView>
            </View>
        </>
    );
}

export default LobbyScreen;