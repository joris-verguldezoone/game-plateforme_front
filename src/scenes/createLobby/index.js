import * as React from 'react';
import { TouchableOpacity } from "react-native";
import styles from "../styles";
import { useState, useEffect } from "react";
import { Text, View, Image, Input, ScrollView, Button, Picker } from 'react-native';
import { getAllGames, getOneGameRule } from '../../services/CreateLobbyServices';
import { useFocusEffect } from '@react-navigation/native';
import axios from "axios"
import { apiUrl } from "../../const"



export function useIsMounted() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        console
        return () => setIsMounted(false);
    }, []);

    return isMounted;
}

const GameRuleComponent = (props) => {
    const [gameRule, setGameRule] = useState({});
    const [difficulte, setDifficulte] = useState(0)
    const [regle, setRegle] = useState()
    // if (props.changeGame == true) {
    console.log("before the if", props.selectedValue)



    const isMounted = useIsMounted();

    // useEffect(() => {
    //     asyncOperation().then(data => {
    //     })
    // });

    useEffect(() => {

        if (props.selectedValue != 0) {
            console.log(props.selectedValue + "in the if")



            console.log('isMounted')
            console.log(isMounted)
            // if (isMounted) {

            getOneGameRule(props.selectedValue).then(response => {

                // console.log('response getOneGameRule')
                console.log(response)

                setGameRule(response)

                console.log('gameRule.idtype2.id')

                // console.log('hello', gameRule.idtype2.id)
                // console.log('gameRule.idtype2.id')

            })
        }


    }, [props.selectedValue])



    const submitLobby = () => {

        console.log("in submitLobby" + props.selectedValue, difficulte, regle)

        console.log("coucou")
        // axios.post(apiUrl + "partie", {
        //     "nbjoueurs": 0,
        //     "iddifficulte": difficulte,
        //     "idjeux": jeu,
        //     "createdat": "2022-06-08T20:18:22.452Z",
        //     "finishedat": "2022-07-08T20:18:22.452Z"
        // })
        //     .then(function (response) {
        //         console.log(response);
        //         let prout = JSON.stringify(response)
        //         console.log("ici", prout, 'ici');
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
    }


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
                        // onPress={setRegle(res.id)}
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
                            // onPress={s   etDifficulte(res.iddifficulte2.id)}
                            id={(res.iddifficulte2.id)}
                        />
                    </View></>

                )}
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



const CreateLobbyScreen = (navigation) => {
    const [myData, setMyData] = useState([]);
    const [selectedValue, setSelectedValue] = useState(0);

    // const [getTeam, setTeam] = useState('0');
    // const [changeGame, setChangeGame] = useState(false);
    // const [buttonSubmit, setbuttonSubmit] = useState(false);

    console.log('lucas');


    const handleSubmit = (event) => {
        console.log("ici", event, "ici")
    }

    useFocusEffect( // componentDidUpdate?
        React.useCallback(() => {
            console.log("React.useCallback()", selectedValue)

            getAllGames().then(response => {

                setMyData(response)
            })

            // return () => { // cleanup
            // setSelectedValue("select Game")
            // } v

        }, []));


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
                <GameRuleComponent selectedValue={selectedValue} />
            </View>
            {/* <Button
                style={styles.buttonRegisterLogin}
                title="Créer la partie"
                disabled={true}
                accessibilityLabel="Appuyez sur ce bouton pour créer une nouvelle partie"
            /> */}
        </View>
    );
}

export default CreateLobbyScreen;