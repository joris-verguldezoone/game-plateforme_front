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

        slots.push(<View key={"view_slot_" + i}>
            <Text key={"img_" + i + "_team"} style={styles.ImagePlayerLobby}>{props.playerInLobby[i].username}</Text>
            <Text key={"username_" + i + "_team"} style={styles.TextPlayerLobby}></Text>
            <Button
                key={"join_" + i + "_team"}
                onPress={() => props.joinTeam(i)}
                title={"join team " + (i + 1)}
                color="#841584"
                accessibilityLabel="Join a team" />
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
    const [isLoading, setIsLoading] = useState(true)
    const [lobbyInfo, setLobbyInfo] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const [playerInLobby, setPlayerInLobby] = useState({})

    // const getNumberOfPlayer = (nbMaxPlayer) => { // ça v& devenir ce que je recois du .on('slots) 
    //     let playerInSlot = []
    //     for (let i = 1; i <= nbMaxPlayer; i++) {
    //         console.log("gRRRRRRRRRrrrrRrr")
    //         playerInSlot.push({})
    //     }
    //     console.log(playerInSlot, 'PLAYER IN SLOT')
    //     console.log(playerInSlot)

    //     return playerInSlot

    // }

    useFocusEffect(
        React.useCallback(() => {
            let koko = 0
            let isSocketSubscribed = true;
            console.log('in App useEffect')
            setSocket(navigation.route.params.socket)
            // console.log(socket)
            // console.log(navigation.route.params.currentUser, "navigation.route.params.currentUser")
            console.log(typeof (currentUser), "currentUser")
            let user = navigation.route.params.currentUser
            setCurrentUser([user])
            setNomLobby(navigation.route.params.nomLobby)

            if (socket != null) {
                if (isSocketSubscribed) {
                    console.log("emit réussi")
                    socket.emit('join_lobby_validate', [navigation.route.params.nomLobby, navigation.route.params.nbPlayerMax]); // donner nbMax player, puis si c'est déjà set en node ne pas le re set



                }

                koko = koko + 1
                console.log(koko, 'KOKO')


            }




            // if (socket != null) {
            //     return () => isSocketSubscribed = false;
            // }

        }, [socket])
    );

    useEffect(() => {
        let isLobbySet = true;
        const fetchData = async () => {

            const result = await getLobbyInfo(navigation.route.params.nomLobby)

            setLobbyInfo([result[0]])
            console.log(result, "????")
        }
        console.log(lobbyInfo, 'lobby info')
        if (isLobbySet) {
            fetchData()
        }
        if (Object.keys(lobbyInfo).length != 0 && lobbyInfo[0] != undefined) {
            return () => isLobbySet = false;
        }

    }, [])

    useFocusEffect( // componentDidUpdate?
        React.useCallback(() => {
            let isSocketSubscribed = true;
            setSocket(socketIo)

            console.log('in App useEffect')
            console.log(socket)
            console.log(currentUser)
            if (socket != null) {
                // if (socket.connected == false)
                // socket.connect()

                socket.on("FromAPI", data => {
                    // if (isSocketSubscribed) {

                    console.log(data, 'FromAPI')
                    console.log("lobby")
                    // }
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

    useEffect(() => {
        let bool = true
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



    // useEffect(() => {
    //     let arePlayerSet = true;
    //     socket.on('lobby_slots_init', result => {
    //         console.log('helpppp', socket)
    //         if (arePlayerSet) {
    //             console.log(result, "lobby_slots_init")
    //             setPlayerInLobby(result)
    //         }
    //     })

    //     if (playerInLobby.length > 0) {

    //         return () => arePlayerSet = false;
    //     }

    // }, [lobbyInfo])

    // useFocusEffect( // componentDidUpdate?
    //     React.useCallback(() => {
    //         let isSocketSubscribed = true;
    //         setSocket(socketIo)

    //         console.log('in App useEffect')
    //         console.log(socket)
    //         if (socket != null) {
    //             // if (socket.connected == false)
    //             // socket.connect()

    //             // socket.on("gimme_lobby_slots", data => {
    //             // if (isSocketSubscribed) {

    //             //     console.log(data, 'lobby_slots')

    //             // }
    //             // });
    //         }
    //         if (socket != null) {
    //             // console.log('disconnect')
    //             return () => {
    //                 // socket.disconnect();
    //                 // setSocket(null)
    //                 isSocketSubscribed = false;

    //             }
    //         }
    //     }, [socket]))




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
        // else {
        //     console.log(element, ' heuuu ', currentUser[0], 'ici')
        // }
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
                    console.log("403 : slot déjà initialisé pour un autre joueur")
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

    // else {
    //     console.log(element, ' heuuu ', currentUser[0], 'ici')
    // }



    return (
        <>

            <View style={{ flex: 1, flexDirection: 'row', alignContent: 'flex-start', justifyContent: 'center' }}>
                <View style={styles.ViewLobby1}>

                    {/* {(nomLobby.length > 0) && <Text>Nom du lobby: {nomLobby}</Text>} */}

                    {/* {(lobbyInfo) && console.log(lobbyInfo, 'indiiiiii')}



                    {(lobbyInfo.length > 0) && Array.from(lobbyInfo).forEach(r =>
                        <><Text>joueurs minimum Array.from foreach : {r}</Text></>)}

                    {(lobbyInfo.length > 0) && console.log(lobbyInfo, 'lobby_info_console.log')} */}
                    {/* {(lobbyInfo.length > 0) && console.log(" test okeyyy ", lobbyInfo)} */}
                    {/* {(lobbyInfo.length > 0) && console.log(" test coucou ", lobbyInfo.id)} */}

                    {(Object.keys(lobbyInfo).length != 0 && lobbyInfo[0] != undefined) &&
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
                    {(Object.keys(lobbyInfo).length != 0 && lobbyInfo[0] != undefined && playerInLobby.length > 0) &&
                        <View>
                            {console.log(playerInLobby, 'playerInLobby cccoco')}
                            <AllPlayerSlot setPlayerInLobby={setPlayerInLobby} joinTeam={joinTeam}
                                playerInLobby={playerInLobby} currentUser={currentUser} lobbyInfo={lobbyInfo[0]} ></AllPlayerSlot>
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
            </View>

            <View style={styles.mainView}>
                <View style={styles.lobbyTopView}>
                </View>
                <View style={styles.middleView}>
                    <View style={styles.popUpView}>


                        <View style={styles.popUpLobbyPart1}>


                            <Text style={styles.popUpText}>Lobby de ******</Text>
                            <ScrollView style={{ width: 300, backgroundColor: "#DFE2DF", borderRadius: 5, marginTop: 5, }}>
                                <View style={styles.LineLobby}>
                                    <Image styles={styles.imagePlayerLobby}
                                    // source={require('./assets/favicon.png')} ICI JE LAISSE, C'EST L'EMPLACEMENT POUR LA PHOTO, RECUPERER PROPS TEXT EN DESSOUS profil_picture    
                                    />
                                    <Text style={styles.ImagePlayerLobby}>{profil_picture}</Text>
                                    <Text style={styles.TextPlayerLobby}>{userName}</Text>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => console.log(getTeam)}
                                    >
                                        <Text>Equipe: {getTeam}</Text>
                                    </TouchableOpacity>
                                    <Button
                                        style={styles.buttonRegisterLogin}
                                        onPress={joinTeam}
                                        title="Rejoindre"
                                        color="#6CA054"
                                        accessibilityLabel="Join a team"
                                    />
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

                        <View style={styles.popUpLobbyPart2}>
                            <Image style={styles.ImageLobby}
                            // source={require('./assets/favicon.png')} JE N'ARRIVE TOUJOURS PAS A METTRE DES IMAGES HEEEEEEEEEEELP #SHUN
                            />
                            <Text style={styles.popUpLobbyRegles}>REGLES</Text>
                            <Image
                                style={styles}
                                source={require('../testimageRegle.png')}
                            />
                            <Text style={styles.popUpLobbyTextRegles}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tincidunt erat, non porta orci. Aliquam mattis ut tortor a posuere. Maecenas facilisis augue ipsum, eu semper mauris malesuada sit amet. Vestibulum sed sodales mauris, non placerat orci. Vestibulum mollis diam fermentum sapien auctor eleifend. Sed porttitor libero metus. Sed nulla mi, pulvinar vel congue eget, ullamcorper ut erat. Pellentesque.  </Text>

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
            </View>
        </>
    );
}

export default LobbyScreen;