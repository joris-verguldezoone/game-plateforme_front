import * as React from 'react';
import { TouchableOpacity } from "react-native";
// import styles from "../styles";
import { useState, useEffect } from "react";
import { Text, View, Image, Input, ScrollView, Button, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { useFocusEffect } from '@react-navigation/native';
import { getAllLobby } from "../../services/LobbyListService"
const LobbyList = () => {

    const [myData, setMyData] = useState([]);
    const [selectedValue, setSelectedValue] = useState(0);

    var thead = ["id", 'Lobby', 'jeux', "joueurs min", 'joueurs max', 'regle', 'difficulte', 'host']


    // const [buttonSubmit, setbuttonSubmit] = useState(false);


    useFocusEffect( // componentDidUpdate?
        React.useCallback(() => {

            getAllLobby().then(response => {

                // setMyLobbyList(response)
                var array = []
                console.log(response)
                response.map(res =>
                    array.push([<Button
                        title="Selectionner"
                        accessibilityLabel="Appuyez sur ce bouton pour selectionner une difficulté"
                        // onPress={() => handleDifficulte(res.iddifficulte2.id)}
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


    return (
        <View style={styles.container}>
            <Text>roucoul</Text>
            {/* condition a retravailler */}
            {(myData != []) && (
                <><Text>coucou</Text><Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>

                    <Row data={thead} style={styles.head} textStyle={styles.text} />

                    <Rows data={myData} textStyle={styles.text} />

                </Table></>
            )
            }
        </View >
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 60, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});




export default LobbyList;    