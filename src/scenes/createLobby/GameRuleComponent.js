import { TouchableOpacity } from "react-native";
import styles from "../styles";
import { useState, useEffect } from "react";
import { Text, View, Image, Input, ScrollView, Button, Picker } from 'react-native';
import { getAllGames, getOneGameRule, createLobby } from '../../services/CreateLobbyServices';
import { useFocusEffect } from '@react-navigation/native';
import RadioButton from '../../component/molecules/radioButtons.js'

const GameRuleComponent = (props) => {
    const [gameRule, setGameRule] = useState({});
    const [difficulte, setDifficulte] = useState(0)
    const [regle, setRegle] = useState()

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
    const handleRegle = (event) => {
        console.log('regle', event)
        setRegle(event)
    }

    const submitLobby = () => { // créer une nouvelle table lobby et lui associer les champs nécessaire 
        // nbJoueurs, idDifficulte, idJeux, idRegle, idUser
        var result = createLobby(0, difficulte, props.selectedValue, regle, 'extract from token')
        console.log("return", result)
    }

    const [isLiked, setIsLiked] = useState([
        { id: 1, value: true, name: "Yes", selected: false },
        { id: 2, value: false, name: "No", selected: false }
    ]); // AJOUTÉ POUR LES BOUTONS RADIOS // SHUN
    
    const onRadioBtnClick = (item) => {
        let updatedState = isLiked.map((isLikedItem) =>
            isLikedItem.id === item.id ? { ...isLikedItem, selected: true } : { ...isLikedItem, selected: false }
        ); // Operateur Ternaire
    setIsLiked(updatedState);
    }; // AJOUTÉ POUR LES BOUTONS RADIOS // SHUN

    if (gameRule.hasOwnProperty('reglesjeux')) {

        return (
            <View>
                <Text style={styles.popUpTextCenter}>coucou</Text>
                <Text style={styles.popUpText}>Type de carte : {gameRule.nom}</Text>
                {gameRule.hasOwnProperty('reglesjeux') && gameRule.reglesjeux.map((res, i) => <>

                    <View style={{ backgroundColor: 'green' }}>
                        <Text style={styles.popUpTextSimple}>id: {res.id}</Text>
                        <Text>Nombre de joueur minimum: {res.nbjoueurmin}</Text>
                        <Text>Nombre de joueur maximum: {res.nbjoueurmax}</Text>
                        <Text>Regle: {res.nomregle}</Text>
                        <Text>Description: {res.regle}</Text>
                        <View style={{}}>
                            {isLiked.map((item) => (
                                <RadioButton
                                onPress={() => onRadioBtnClick(item)}
                                selected={item.selected}
                                key={item.id}
                                >
                                {item.name}
                                </RadioButton>
                            ))}
                        </View>
                        <Button
                            title="cccc"
                            accessibilityLabel="Appuyez sur ce bouton pour selectionner une regle"
                            id={res.id}
                            onPress={() => handleRegle(res.id)}
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