import * as React from 'react';
import { TouchableOpacity } from "react-native";
import styles from "../styles";
import { useState, useEffect } from "react";
import { Text, View, Image, Input, ScrollView } from 'react-native';

const LobbyScreen = () => {
    const [getTeam,setTeam] = useState('0');
    return (
        <View style={{ flex: 1, flexDirection:'row', alignContent:'flex-start', justifyContent:'center'}}>
            <View style={styles.ViewLobby1}>
                <ScrollView>
                    <View style={styles.LineLobby}>
                        <Image styles={styles.ImagePlayerLobby}
                            // source={require('./assets/favicon.png')} JE N'ARRIVE TOUJOURS PAS A METTRE DES IMAGES HEEEEEEEEEEELP #SHUN
                        />
                        <Text style={styles.ImagePlayerLobby}>IMAGE</Text>
                        <Text style={styles.TextPlayerLobby}>Shun</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => console.log(getTeam)}
                        >
                            <Text>Equipe: {getTeam}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.LineLobby}>
                        <Image styles={styles.ImagePlayerLobby}/>
                        <Text style={styles.TextPlayerLobby}>Shun</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => console.log(getTeam)}
                        >
                            <Text>Equipe: {getTeam}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.LineLobby}>
                        <Image styles={styles.ImagePlayerLobby}/>
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
            <View style={styles.ViewLobby2}>
                <Image style={styles.ImageLobby}
                    // source={require('./assets/favicon.png')} JE N'ARRIVE TOUJOURS PAS A METTRE DES IMAGES HEEEEEEEEEEELP #SHUN
                />
                <Text style={styles.ImageLobby}>IMAGE REGLES</Text>
                <TouchableOpacity
                            style={styles.button}
                            onPress={() => console.log(getTeam)}
                        >
                            <Text style={styles.TextButtonLobby}>Prêt</Text>
                </TouchableOpacity>
                <View style={styles.ViewOptionsLobby}>
                    <TouchableOpacity style={styles.ButtonOptionLobby1}>
                        <Text style={styles.TextButtonLobby}>Option</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonOptionLobby2}>
                        <Text style={styles.TextButtonLobby}>Commencer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default LobbyScreen;