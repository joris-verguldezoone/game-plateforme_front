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

const CreateLobbyScreen = (navigation) => {
    const [myData, setMyData] = useState([]);
    const [selectedValue, setSelectedValue] = useState(0);

    // const [getTeam, setTeam] = useState('0');
    // const [changeGame, setChangeGame] = useState(false);
    // const [buttonSubmit, setbuttonSubmit] = useState(false);


    useFocusEffect( // componentDidUpdate?
        React.useCallback(() => {
            console.log("React.useCallback()", selectedValue)

            getAllGames().then(response => {

                setMyData(response)
            })
            // cleaner
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
        <View style={styles.mainView}>
            <View style={styles.topView}>
                <Text style={{color:"black", fontSize:28}}>Selectionnez un jeu:</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemIndex) => itemIndex === 'Selectionnez une valeur' ? setSelectedValue(0) : setSelectedValue(itemIndex)}
                >
                    <Picker.Item label='Selectionnez une valeur' value='0' />
                    {(myData) && myData.map(r => <Picker.Item label={r.nom} value={r.id} key={r.id} />)}

                </Picker>
            </View>

            <View style={styles.middleView}>
                <View style={styles.popUpView}>

                    <GameRuleComponent selectedValue={selectedValue} />
                </View>
            </View>

            <View style={styles.bottomView}>

            </View>
        </View>
    );
}

export default CreateLobbyScreen;