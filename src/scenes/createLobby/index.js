import * as React from 'react';
import { TouchableOpacity } from "react-native";
import styles from "../styles";
import { useState, useEffect } from "react";
import { Text, View, Image, Input, ScrollView, Button, Picker } from 'react-native';
import { getAllGames, getOneGameRule } from '../../services/CreateLobbyServices';
import { useFocusEffect } from '@react-navigation/native';


const CreateLobbyScreen = (navigation) => {
    const [getTeam, setTeam] = useState('0');
    const [myData, setMyData] = useState([]);
    const [selectedValue, setSelectedValue] = useState("select Game");
    const [changeGame, setChangeGame] = useState(false);

    const [buttonSubmit, setbuttonSubmit] = useState(false);

    const GameRuleComponent = (props) => {
        const [gameRule, setGameRule] = useState({});
        // if (props.changeGame == true) {
        // console.log(props.selectedValue)
        if (props.selectedValue != 'select Game') {
            // console.log(props.selectedValue + "in the if")


            getOneGameRule(props.selectedValue).then(response => {

                // console.log('response getOneGameRule')
                console.log(response)

                setGameRule(response)

                console.log('gameRule.idtype2.id')

                console.log('hello', gameRule.idtype2.id)
                console.log('gameRule.idtype2.id')

            })


            console.log('gameRule.idtype2')
            console.log('ici', gameRule)
            // console.log(gameRule.idtype2)
            // console.log(gameRule.idtype2.id)
            console.log('gameRule.idtype2')
            return (
                <View>
                    <Text>coucou</Text>
                    <Text>Type de carte : {gameRule.nom}</Text>
                    {gameRule.hasOwnProperty('reglesjeux') && gameRule.reglesjeux.map(res => <><Text>id: {res.id}</Text><Text>Nombre de joueur minimum: {res.nbjoueurmin}</Text><Text>Nombre de joueur maximum: {res.nbjoueurmax}</Text><Text>Regle: {res.nomregle}</Text><Text>Description: {res.regle}</Text><Text>difficulté: {res.difficulte}</Text></>


                        //               
                        // idjeux": 1,
                        //   "nbjoueurmax": 2,
                        //   "nbjoueurmin": 2,
                        //   "nomregle": "longTurn",


                        // "iddifficulte": 1,
                        //   "iddifficulte2": Object {
                        //     "difficulte": "italienne",
                        //     "id": 1,
                        //     "multiplicateurscore": 2,
                    )}
                    {/* <Text>Type de jeux : {gameRule['idtype2'].typedejeux}</Text> */}
                    {/* <Text>Type de carte : {gameRule['idtype2']["typedecarte"]}</Text>
                    <Text>Nombre de carte : {gameRule['idtype2']['nbcartes']}</Text>
                    <Text>Nombre de jeux carte : {gameRule['idtype2']['nbdejeux']}</Text> */}
                    {/* <Text>Regle de jeux : {gameRule.reglesjeux[0].nomregle}</Text>
                    <Text>Description : {gameRule.reglesjeux[0].regle}</Text> */}
                    {/* <Text>Multiplicateur score : {props.gameRule['reglesjeux'][0].iddifficulte2.multiplicateurscore}</Text> */}
                    {/* <Text>Difficulté : {props.gameRule['reglesjeux'][0].iddifficulte2.difficulte}</Text> */}
                    {/* <Text>{props.gameRule['reglesjeux'][1].iddifficulte2.difficulte}</Text>
                        <Text>{props.gameRule['reglesjeux'][0].iddifficulte2.difficulte}</Text> */}
                </View>
            )
        }
        else {
            return (<View>
                <Text>
                    bad requeest 400

                </Text>
            </View>
            );
        }

        // }
        // else {
        //     return (<View><Text>ccccccccc</Text></View>);

        // }
    }



    useFocusEffect(
        React.useCallback(() => {
            // console.log(selectedValue)

            getAllGames().then(response => {

                setMyData(response)
            })

            // return () => { // cleanup
            // setSelectedValue("select Game")
            // }

        }, [selectedValue]));


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
        <View style={{ flex: 1, flexDirection: 'row', alignContent: 'flex-start', justifyContent: 'center' }}>
            <View style={styles.container}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemIndex) => setSelectedValue(itemIndex)}
                >
                    <Picker.Item label='Selectionnez une valeur' value='' />
                    {(myData) && myData.map(r => <Picker.Item label={r.nom} value={r.id} key={r.id} />)}

                </Picker>
                <Button
                    style={styles.buttonRegisterLogin}
                    title="Créer la partie"
                    disabled={true}
                    accessibilityLabel="Appuyez sur ce bouton pour créer une nouvelle partie"
                />
            </View>

            <View>
                <GameRuleComponent selectedValue={selectedValue} />
            </View>



        </View>
    );
}

export default CreateLobbyScreen;