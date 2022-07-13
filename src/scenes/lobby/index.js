import * as React from 'react';
import { TouchableOpacity } from "react-native";
import styles from "../styles";
import { useState, useEffect } from "react";
import { Text, View, Image, Input, ScrollView, Button } from 'react-native';

const LobbyScreen = (navigation) => {
    const [getTeam, setTeam] = useState('0');
    const [userName, setUserName] = useState("")
    const [profil_picture, setProfil_picture] = useState("")
    console.log('cicicic')
    let coco = navigation.route.params.accessToken
    console.log(coco)
    let cc = navigation.route.params.currentUser
    console.log(cc)
    console.log(navigation.route.params.currentUser)
    let currentUser = navigation.route.params.currentUser
    /** 
     * Il faut fetch le type de jeu, ça ordonne le nombre de slot de team et de couleurs
     * 
     * Faire une fonction qui permet de cliquer sur un poste de joueur, une fois cliqué
     * l'image et le pseudo du joueur apparaissent
     * Ce changement provoque un evenement socket qui actualise aussi les données chez l'autre utilisateur
     * il recevra un fetch lui permettant de situer les changement dans son screen et ainsi simuler les interaction entre
     * utilisateurs
     * 
     * quand on rejoins une team c'est inséré dans une table intermédiaire, une vérif a lieu a chaque envoie pour savoir 
     * si les 4 joueurs on rejoins tous les slots disponible
     * 
     * si c'est le cas la partie passe en mode lançable 
     * 
     * 
    */
    const joinTeam = () => {
        // .then(function (storage) {
        //   console.log('storage as been set')
        // })
        setUserName(navigation.route.params.currentUser.username)
        setProfil_picture(navigation.route.params.currentUser.idavatar)
        console.log(userName)
        console.log(profil_picture)
    }

    return (

        <View style={styles.mainView}>
            <View style={styles.lobbyTopView}>
            </View>
            <View style={styles.middleView}>
                <View style={styles.popUpView}>


                    <View style={styles.popUpLobbyPart1}>

                    
                        <Text style={styles.popUpText}>Lobby de ******</Text>
                        <ScrollView style={{width:300, backgroundColor:"#DFE2DF", borderRadius:5, marginTop:5,}}>
                            <View style={styles.LineLobby}>
                                <Image styles={styles.imagePlayerLobby}
                                // source={require('./assets/favicon.png')} ICI JE LAISSE, C'EST L'EMPLACEMENT POUR LA PHOTO, RECUPERER PROPS TEXT EN DESSOUS profil_picture    
                                />
                                <Text style={styles.ImagePlayerLobby}>{profil_picture}</Text>
                                <Text style={styles.TextPlayerLobby}>{userName}</Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => console.log(getTeam)}
                                    >
                                    <Text>Equipe: {getTeam}</Text>
                                </TouchableOpacity>
                                <Button
                                    style={styles.buttonRegisterLogin}
                                    onPress={joinTeam}
                                    title="Rejoindre"
                                    color="#6CA054"
                                    accessibilityLabel="Join a team"
                                />
                            </View>

                            <View style={styles.LineLobby}>
                                <Image styles={styles.ImagePlayerLobby} />
                                <Text style={styles.TextPlayerLobby}>Shun</Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => console.log(getTeam)}
                                    >
                                    <Text>Equipe: {getTeam}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.LineLobby}>
                                <Image styles={styles.ImagePlayerLobby} />
                                <Text style={styles.TextPlayerLobby}>Shun</Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => console.log(getTeam)}
                                    >
                                    <Text>Equipe: {getTeam}</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>

                    </View>

                    <View style={styles.popUpLobbyPart2}>
                        <Image style={styles.ImageLobby}
                        // source={require('./assets/favicon.png')} JE N'ARRIVE TOUJOURS PAS A METTRE DES IMAGES HEEEEEEEEEEELP #SHUN
                        />
                        <Text style={styles.popUpLobbyRegles}>REGLES</Text>
                        <Image
                            style={styles}
                            source={require('../testimageRegle.png')}
                        />
                        <Text style={styles.popUpLobbyTextRegles}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tincidunt erat, non porta orci. Aliquam mattis ut tortor a posuere. Maecenas facilisis augue ipsum, eu semper mauris malesuada sit amet. Vestibulum sed sodales mauris, non placerat orci. Vestibulum mollis diam fermentum sapien auctor eleifend. Sed porttitor libero metus. Sed nulla mi, pulvinar vel congue eget, ullamcorper ut erat. Pellentesque.  </Text>

                        <Button
                            style={styles.buttonRegisterLogin}
                            color="#6CA054"
                            title="Prêt"
                            onPress={() => console.log(getTeam)}
                        />
                        <View style={styles.ViewOptionsLobby}>
                            <TouchableOpacity style={styles.ButtonOptionLobby1}>
                                <Text style={styles.popUpOptionLobby}>Options</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ButtonOptionLobby2}>
                                <Text style={styles.popUpOptionLobby}>Commencer</Text>
                            </TouchableOpacity>
                        </View>
                        <Button
                            style={styles.buttonRegisterLogin}
                            color="#FE654F"
                            title="Retour"
                            onPress={() => console.log(getTeam)}
                        />

                    </View>
                </View>

            </View>

            <View style={styles.ViewLobby2}>
                
            </View>
        </View>
    );
}

export default LobbyScreen;