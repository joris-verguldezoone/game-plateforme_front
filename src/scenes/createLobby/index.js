import * as React from 'react';
import { TouchableOpacity } from "react-native";
import styles from "../styles";
import { useState, useEffect } from "react";
import { Text, View, Image, Input, ScrollView, Button, Picker } from 'react-native';
import { getAllGames, getOneGameRule } from '../../services/CreateLobbyServices';
import { useFocusEffect } from '@react-navigation/native';
import axios from "axios"
import { apiUrl } from "../../const"
import GameRuleComponent from './GameRuleComponent';
import { io } from "socket.io-client";
import ClientComponent from '../../component/ClientComponent';
// import { SocketContext, socketIo } from '../socketContext';

const CreateLobbyScreen = (navigation, props) => {
    const [myData, setMyData] = useState([]);
    const [selectedValue, setSelectedValue] = useState(0);
    // const socket = io("http://127.0.0.1:3002/",
    //     // const socket = io("http://51.75.241.128:3002",
    //     {
    //         reconnectionDelayMax: 10000,
    //     }
    // );

    // const [getTeam, setTeam] = useState('0');
    // const [changeGame, setChangeGame] = useState(false);
    // const [buttonSubmit, setbuttonSubmit] = useState(false);

    // console.log(props, 'props')

    useFocusEffect( // componentDidUpdate?
        React.useCallback(() => {
            console.log("React.useCallback()", selectedValue)

            getAllGames().then(response => {

                setMyData(response)
            })
            // cleaner
        }, []));


    const [response, setResponse] = useState("");
    // const socket = React.useContext(SocketContext);

    // useFocusEffect(
    //     React.useCallback(() => {
    //         var inUse = true
    //         const unsubscribe = navigation.navigation.addListener('focus', () => {

    //             if (inUse) {

    //                 io.connect(SOCKET_URL).on("FromAPI", data => {
    //                     setResponse(data);
    //                     console.log(data, 'lobby')
    //                 });

    //             }
    //         })
    //         return () => {
    //             io(SOCKET_URL).disconnect()
    //             inUse = false;
    //             setResponse("")
    //             io(SOCKET_URL).on("disconnect", (socket) => {
    //                 console.log(socket.id, ':--)'); // undefined
    //                 return unsubscribe;
    //             })

    //         };
    //     }, [])
    // );
    // const joinTeam = () => {
    //     // .then(function (storage) {
    //     //   console.log('storage as been set')
    //     // })
    //     setUserName(navigation.route.params.currentUser.username)
    //     setProfil_picture(navigation.route.params.currentUser.idavatar)
    //     console.log(userName)
    //     console.log(profil_picture)
    // }
    return (
        <>
            {/* <ClientComponent>
            </ClientComponent> */}

            <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center', justifyContent: 'center', width: '75%' }}>
                <View style={styles.container}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemIndex) => itemIndex === 'Selectionnez une valeur' ? setSelectedValue(0) : setSelectedValue(itemIndex)}
                    >
                        <Picker.Item label='Selectionnez une valeur' value='0' />
                        {(myData) && myData.map(r => <Picker.Item label={r.nom} value={r.id} key={r.id} />)}

                    </Picker>

                </View>

                <View>
                    <GameRuleComponent socket={navigation.route.params.socket} selectedValue={selectedValue} navigation={navigation} />
                </View>
            </View>
        </>
    );
}

export default CreateLobbyScreen;