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
    const [gameRule, setGameRule] = useState([]);
    const [selectedValue, setSelectedValue] = useState("select Game");

    const handleSubmit = () => {
        console.log(selectedValue)
        getOneGameRule(selectedValue).then(response => {
            console.log("getTheRule")
            console.log(response)
            console.log("getTheRule")
            setGameRule(response)
        })
        useFocusEffect(
            React.useCallback(() => {
                getAllGames().then(response => {
                    console.log("getAllGames")
                    console.log(response)
                    console.log("getAllGames")
                    setMyData(response)
                })
            }, []))

    }
    useFocusEffect(
        React.useCallback(() => {
            handleSubmit

        }), [selectedValue])

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
                    {myData.map(r => <Picker.Item label={r.nom} value={r.id} />)}

                </Picker>
                <Button
                    style={styles.buttonRegisterLogin}
                    title="Créer la partie"
                    disabled={true}
                    accessibilityLabel="Appuyez sur ce bouton pour créer une nouvelle partie"
                    // onPress={() => {
                    //   handleSubmit,
                    //     navigation.navigate('ProfilScreen');
                    // }}
                    onPress={handleSubmit}

                />
            </View>
            <View>
                <Text>{gameRule.nomregle}</Text>
                <Text>{gameRule.nbjoueurmin}</Text>
                <Text>{gameRule.nbjoueurmax}</Text>
            </View>
        </View>
    );
}

export default CreateLobbyScreen;