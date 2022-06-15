import { TextInput, TouchableOpacity } from "react-native";
import styles from "../styles";
import { useState, useEffect } from "react";
import { Text, View, Image, Input, ScrollView, Button, Picker } from 'react-native';
import { getAllGames, getOneGameRule, createLobby } from '../../services/CreateLobbyServices';
import { useFocusEffect } from '@react-navigation/native';
import ClientComponent from "../../component/ClientComponent";

const GameRuleComponent = (props, { navigation }) => {
    const [gameRule, setGameRule] = useState({});
    const [difficulte, setDifficulte] = useState(0);
    const [regle, setRegle] = useState();
    const [nomLobby, setNomLobby] = useState("");

    console.log(props)
    console.log(props.navigation)
    console.log('ici')
    console.log("nomLobby")
    console.log(nomLobby)

    // const socket = io("http://127.0.0.1:3002/",
    //     // const socket = io("http://51.75.241.128:3002",
    //     {
    //         reconnectionDelayMax: 10000,
    //     }
    // );


    // console.log("before the if", props.selectedValue)

    useEffect(() => {

        if (props.selectedValue != 0) {
            // console.log(props.selectedValue + "in the if")

            getOneGameRule(props.selectedValue).then(response => {
                // console.log(response)

                setGameRule(response)
            })
        }
    }, [props.selectedValue])

    const handleDifficulte = (event) => { // a refacto avec des comparateur pour rendre générique
        console.log('HandleDifficulte', event)
        setDifficulte(event)
    }
    // const handleNomLobby = (event) => { // a refacto avec des comparateur pour rendre générique
    //     console.log('HandleDifficulte', event)
    //     setNomLobby(event)
    // }

    const handleRegle = (event) => {
        console.log('regle', event)
        setRegle(event)
    }

    const submitLobby = () => { // créer une nouvelle table lobby et lui associer les champs nécessaire 
        // nbJoueurs, idDifficulte, idJeux,  , idUser
        var result = createLobby(regle.nbjoueurmin, regle.nbjoueurmax, props.selectedValue, regle.id, difficulte, 21, nomLobby)
        // 0,0 je me suis rendu compte que ces champs ne servent a rien, on peut les déduire a partir 
        // de l'id regle en faisant un select + jointure
        // nbMin, nbMax, idJeux, idRegle, idDifficulte, idUser, nomLobby
        props.socket.emit('create_lobby', nomLobby,); // mettre un id concaténé pour rendre l'émit unique et non reproductible 

        console.log("return", result)
        props.navigation.navigation.navigate('LobbyScreen')
    }

    // useFocusEffect(
    //     React.useCallback(() => {

    //         var inUse = true
    //         const unsubscribe = navigation.navigation.addListener('focus', () => {
    //             if (inUse) {

    //                 io(SOCKET_URL).connect().on("FromAPI", data => {
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
    //             })
    //             return unsubscribe;

    //         };
    //     }, [])
    // );



    if (gameRule.hasOwnProperty('reglesjeux')) {

        return (
            <View>
                <Text>coucou</Text>
                <Text>Type de carte : {gameRule.nom}</Text>
                {gameRule.hasOwnProperty('reglesjeux') && gameRule.reglesjeux.map((res, i) => <>

                    <View style={{ backgroundColor: 'green' }}>
                        <Text>id: {res.id}</Text>
                        <Text>Nombre de joueur minimum: {res.nbjoueurmin}</Text>
                        <Text>Nombre de joueur maximum: {res.nbjoueurmax}</Text>
                        <Text>Regle: {res.nomregle}</Text>
                        <Text>Description: {res.regle}</Text>

                        <Button
                            title="cccc"
                            accessibilityLabel="Appuyez sur ce bouton pour selectionner une regle"
                            id={res.id}
                            onPress={() => handleRegle(res)}
                        />
                    </View></>
                )}
                {gameRule.hasOwnProperty('reglesjeux') && gameRule.reglesjeux.map(res => <>
                    <View style={{ backgroundColor: 'blue' }}>
                        <Text>difficulté: {res.iddifficulte2.difficulte}</Text>
                        <Text>id: {res.iddifficulte2.id}</Text>
                        <Text>multiplicateurscore: {res.iddifficulte2.multiplicateurscore}</Text>

                        <Button
                            title="Selectionner"
                            accessibilityLabel="Appuyez sur ce bouton pour selectionner une difficulté"
                            onPress={() => handleDifficulte(res.iddifficulte2.id)}
                            id={res.iddifficulte2.id}
                        />
                    </View></>
                )}
                <TextInput
                    style={styles.inputRegisterLogin}
                    placeholder="Nom Lobby"
                    // autoComplete="password"
                    name="nomLobby"
                    // value={user.password}
                    onChangeText={e => setNomLobby(e)}
                />
                <Button
                    title="Créer le lobby"
                    accessibilityLabel="Appuyez sur ce bouton pour créer un lobby"
                    onPress={submitLobby}
                />
            </View>
        );
    }
    else {
        return (<View>
            <Text>
                bad requeest 400

            </Text>
        </View>);
    }
}


export default GameRuleComponent