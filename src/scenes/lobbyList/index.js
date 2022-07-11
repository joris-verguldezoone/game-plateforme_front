import * as React from 'react';
import { TouchableOpacity } from "react-native";
// import styles from "../styles";
import { useState, useEffect } from "react";
import { Text, View, Image, Input, ScrollView, Button, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { useFocusEffect } from '@react-navigation/native';
import { getAllLobby } from "../../services/LobbyListService"
import { io } from "socket.io-client";
import { SOCKET_URL } from '../../const';
import { socketIo } from '../socketContext'
const LobbyList = (navigation) => {

    const [action, setAction] = useState(false)
    const [myData, setMyData] = useState([]);
    const [selectedValue, setSelectedValue] = useState(0);
    const [socket, setSocket] = useState(navigation.route.params.socket);
    var thead = ["id", 'Lobby', 'jeux', "joueurs min", 'joueurs max', 'regle', 'difficulte', 'host']
    const [nomLobby, setNomLobby] = useState('');

    // const [buttonSubmit, setbuttonSubmit] = useState(false);

    const handleJoinLobby = (socket, array) => {
        console.log(socket)
        setNomLobby(array[0])
        let result = socket.emit('join_lobby', [array])
        console.log('result', result)

        // let coco = io(SOCKET_URL).connect().on('lobby_join_200', (data) => {
        //     console.log(data, 'lobby_join_200 :)')
        //     navigation.navigate('LobbyScreen', { nomLobby: array[0] })
        // });
        // console.log(coco, "coco")
        // setAction(true)
    }
    useFocusEffect( // componentDidUpdate?
        React.useCallback(() => {

            getAllLobby().then(response => {

                // setMyLobbyList(response)
                var array = []
                console.log(response)
                response.map(res =>
                    array.push([<Button
                        title="Selectionner"
                        accessibilityLabel="Appuyez sur ce bouton pour selectionner un lobby"
                        onPress={() => handleJoinLobby(socket, [res.nomLobby, res.idjeux.nom, res.nbMin, res.nbMax, res.idregle.nomregle
                            , res.iddifficulte.difficulte, res.iduser.username, 22])}
                        id={res.id}
                    />,
                        , res.nomLobby, res.idjeux.nom, res.nbMin, res.nbMax, res.idregle.nomregle
                        , res.iddifficulte.difficulte, res.iduser.username,])
                )
                console.log('ici', array)
                setMyData(array)
                // setMyData(response)
            })
            // cleaner
        }, []));
    // useFocusEffect( // componentDidUpdate?
    //     React.useCallback(() => {
    //         console.log('test useeffet')
    //         io.connect(SOCKET_URL).on("lobby_join_200", data => {
    //             console.log(data, 'lobby')
    //             // if (bool) {
    //             // bool = false
    //             // }
    //             // });
    //             // console.log(data, 'lobby_join_200 :)')
    //             navigation.navigate('LobbyScreen', { nomLobby: array[0] })
    //         });
    //         return setAction(false)

    //     }, []))
    console.log(navigation, ' : navigation')
    // console.log(navigation.navigation, "1")
    useFocusEffect( // componentDidUpdate?
        React.useCallback(() => {
            let isSocketSubscribed = true;
            console.log('in App useEffect')
            setSocket(navigation.route.params.socket)
            console.log(socket)
            if (socket != null) {
                // if (socket.connected == false)
                //     socket.connect()

                socket.on("lobby_join_200", data => {
                    if (isSocketSubscribed) {

                        console.log(data, 'lobby')
                        navigation.navigation.navigate('LobbyScreen', { nomLobby: nomLobby, socket: socket })
                    }
                });
            }
            if (socket != null)
                return () => isSocketSubscribed = false;

            // return () => socket.disconnect();
        }, [nomLobby]))










    return (
        <View style={styles.container}>
            {/* condition a retravailler */}
            <ScrollView>

                {(myData != []) && (
                    <><Text>coucou</Text><Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>

                        <Row data={thead} style={styles.head} textStyle={styles.text} />

                        <Rows data={myData} textStyle={styles.text} />

                    </Table></>
                )
                }
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 60, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});




export default LobbyList;    