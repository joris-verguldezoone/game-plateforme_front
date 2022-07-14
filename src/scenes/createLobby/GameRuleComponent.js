import { TextInput, TouchableOpacity } from "react-native";
import styles from "../styles";
import { useState, useEffect } from "react";
import { Text, View, Image, Input, ScrollView, Button, Picker } from 'react-native';
import { getAllGames, getOneGameRule, createLobby } from '../../services/CreateLobbyServices';
import { useFocusEffect } from '@react-navigation/native';
import ClientComponent from "../../component/ClientComponent";
import { io } from "socket.io-client";
import { SOCKET_URL } from '../../const';
import RadioButton from '../../component/molecules/radioButtons.js'

const GameRuleComponent = (props) => {
    const [gameRule, setGameRule] = useState({});
    const [difficulte, setDifficulte] = useState(0);
    const [regle, setRegle] = useState();
    const [nomLobby, setNomLobby] = useState("");
    const [radioGameRule, setRadioGameRule] = useState([])

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


    const onRadioBtnClick = (item) => { // item est a la fois l'index du table du state radioButton && l'id selected , voir constructRadioButton pour l'initialisation
        console.log(radioGameRule, "radioGameRule")
        let updatedState = radioGameRule.map((radioElement) =>
            radioElement.id === item ? { ...radioElement, selected: true } : { ...radioElement, selected: false }

        ); // Operateur Ternaire
        console.log(updatedState, 'updatedState');
        setRadioGameRule(updatedState);
        console.log(item, 'item')
    }; // AJOUTÉ POUR LES BOUTONS RADIOS // SHUN


    const constructRadioButton = (response) => {
        let radioConstruct = [];
        let tarace = response.reglesjeux
        let i = 1
        console.log('resposososo', response.reglesjeux)
        console.log('tarace', tarace)
        response.reglesjeux.map(element => {

            console.log(element, "response.reglesjeux[i]")
            radioConstruct.push({ id: i, value: true, name: i, selected: false })
            element['buttonRadio'] = { id: i, value: true, name: i, selected: false }
            // }
            i++
        })
        console.log('tarace2', tarace)
        console.log('tarace3', response)
        console.log('radioConstruct', radioConstruct)
        setRadioGameRule(radioConstruct);
        setGameRule(response);


    }



    // console.log("before the if", props.selectedValue)

    useEffect(() => {
        let stop = true
        if (props.selectedValue != 0) {
            // console.log(props.selectedValue + "in the if")

            getOneGameRule(props.selectedValue).then(response => {
                console.log(response, 'gamerule response')
                if (stop)
                    constructRadioButton(response)

            })
        }
        return () => {
            stop = false
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
        // je crois qu'on s'en cogne d'utiliser les sockets mtn 
        // io.connect(SOCKET_URL).emit('create_lobby', [regle.nbjoueurmin, regle.nbjoueurmax, props.selectedValue, regle.id, difficulte, 21, nomLobby]); // mettre un id concaténé pour rendre l'émit unique et non reproductible 
        console.log(props.navigation)
        console.log("return", result)
        console.log(props.socket)
        console.log(props)
        console.log(regle.nbjoueurmax, " regle.nbjoueurmax")
        props.navigation.navigation.navigate('LobbyScreen', { nomLobby: nomLobby, socket: props.socket, currentUser: props.currentUser, nbPlayerMax: regle.nbjoueurmax })
    }

    if (gameRule.hasOwnProperty('reglesjeux')) {

        return (
            <View>
                <Text style={styles.popUpTextCenter}>coucou</Text>
                <Text style={styles.popUpText}>Type de carte : {gameRule.nom}</Text>
                <ScrollView>
                    {gameRule.hasOwnProperty('reglesjeux') && gameRule.reglesjeux.map((res) => <>

                        <View style={{ backgroundColor: 'green' }}>
                            <Text style={styles.popUpTextSimple}>id: {res.id}</Text>
                            <Text>Nombre de joueur minimum: {res.nbjoueurmin}</Text>
                            <Text>Nombre de joueur maximum: {res.nbjoueurmax}</Text>
                            <Text>Regle: {res.nomregle}</Text>
                            <Text>Description: {res.regle}</Text>

                            <View style={{ backgroundColor: 'blue' }}>
                                <Text>difficulté: {res.iddifficulte2.difficulte}</Text>
                                <Text>id: {res.iddifficulte2.id}</Text>
                                <Text>multiplicateurscore: {res.iddifficulte2.multiplicateurscore}</Text>
                            </View>
                            <View style={{}}>
                                <RadioButton
                                    onPress={() => { onRadioBtnClick(res.buttonRadio.id), handleRegle(res), handleDifficulte(res.iddifficulte2.id) }}
                                    selected={radioGameRule[res.buttonRadio.id - 1].selected}
                                    key={'cc'}
                                >
                                </RadioButton>
                            </View>

                        </View></>
                    )}
                </ScrollView>

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