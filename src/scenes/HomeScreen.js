import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, ScrollView, TouchableOpacity, CheckBox } from 'react-native';
import styles from './styles.js';

const HomeScreen = ({ navigation }) => {

    const [AutoLogSelected, setAutoLogSelection] = useState(false);
    const [pseudo,setPseudo] = useState("");
    const [password,setPassword] = useState("");

    // localStorage.clear();
    return (
        <View style={styles.pageContainer}>
            <View style={styles.homeContainer}>
                <Text style={styles.Title}>
                    CBGames !
                </Text>
            </View>
            <View style={styles.homeContainer2}>
                <View style={{flex:1, justifyContent:"center"}}>
                    <Text style={styles.MediumTitle}>Connexion</Text>
                </View>
                <View style={{flex:3, justifyContent:"center"}}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.LoginRegisterLabel}>
                            Email / Identifiant:
                        </Text>
                        <TextInput
                            style={styles.loginRegisterInput}
                            onChangeText={setPseudo}
                            value={pseudo}
                            placeholder="Mon joli pseudonyme..."
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.LoginRegisterLabel}>
                            Mot de passe:
                        </Text>
                        <TextInput
                            style={styles.loginRegisterInput}
                            onChangeText={setPassword}
                            value={password}
                            placeholder="Mon Petit Code Secret..."
                        />
                    </View>
                    
                    <Button
                        style={styles.loginRegisterButton}
                        title="Connexion"
                        color="#778F2B"
                        accessibilityLabel="Connexion"
                    />
                </View>
                <View style={{flex:1, justifyContent:"center", backgroundColor:"white", borderRadius:7}}>
                    <TouchableOpacity
                        // onPress={}
                    >
                        <Text style={styles.notRegisteredText}>Pas encore inscrit ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, justifyContent:"flex-end", alignItems:"center"}}>
                    <Text style={{fontWeight:"300"}}>Réalisé par Joris V., Marwanne B., Mathis C., Shun L.</Text>
                    <Text style={{paddingBottom:10,fontWeight:"300"}}>LaPlateforme_</Text>
                </View>
            </View>
            
        </View>
    );
}

export default HomeScreen;

{/* <Button
                        style={styles.buttonRegisterLogin}
                        title="Connexion"
                        color="#3F9B33"
                        accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de connexion"
                        onPress={() => {
                            navigation.navigate('Connexion'), { name: "monChibre" }
                        }
                        }
                    /> */}
                    {/* <Button
                        style={styles.buttonRegisterLogin}
                        title="Inscription"
                        color="#3F9B33"
                        accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de inscription"
                        onPress={() => navigation.navigate('Inscription')}
                    /> */}
                    {/* <View style={{flex: 1, justifyContent:'center',alignItems:'center', borderTopWidth:1,borderTopColor:'gray',marginTop:30}}>
                        <Text style={styles.smTitle}>Développé par:</Text>
                        <Text style={styles.smTitle}>Joris V., Mathis C., Marwanne B., Shun L.</Text>
                        <Text style={styles.smTitle}>@LaPlateforme_</Text>
                    </View> */}