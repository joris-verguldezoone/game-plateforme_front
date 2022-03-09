import * as React from 'react';
import { Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles.js';

const HomeScreen = ({ navigation }) => {
    // localStorage.clear();
    return (
        <View style={styles.pageContainer}>
            <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
                <Text style={styles.Title}>Bienvenue sur CBGames!</Text>
            </View>

            <View style={styles.container}>
                <View style={{flex:1, justifyContent:"center",alignItems:"center", borderTopLeftRadius:20, borderTopRightRadius:20}}>
                    <Text style={styles.smTitle}>Veuillez vous connecter/vous enregistrer</Text>
                </View>
                <View style={{flex: 2, flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <Button
                        style={styles.buttonRegisterLogin}
                        title="Connexion"
                        color="#3F9B33"
                        accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de connexion"
                        onPress={() => {
                            navigation.navigate('Connexion'), { name: "monChibre" }
                        }
                        }
                    />
                    <Text> </Text>
                    <Text style={styles.smTitle}>- OU -</Text>
                    <Text> </Text>
                    <Button
                        style={styles.buttonRegisterLogin}
                        title="Inscription"
                        color="#3F9B33"
                        accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de inscription"
                        onPress={() => navigation.navigate('Inscription')}
                    />
                </View>
            </View>

            <View style={{flex: 1, justifyContent:'center',alignItems:'center', borderTopWidth:1,borderTopColor:'gray',marginTop:30}}>
                <Text style={styles.smTitle}>Développé par:</Text>
                <Text style={styles.smTitle}>Joris V., Mathis C., Marwanne B., Shun L.</Text>
                <Text style={styles.smTitle}>@LaPlateforme_</Text>
            </View>
        </View>
    );
}

export default HomeScreen;