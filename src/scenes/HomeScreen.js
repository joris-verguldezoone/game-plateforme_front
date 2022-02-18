import * as React from 'react';
import { Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles.js';

const HomeScreen = ({ navigation }) => {
    // localStorage.clear();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title='test'>Test</Button>
            <Text style={styles}>Bienvenue sur CBGames!</Text>
            <Text style={styles}>Veuillez vous connecter/vous enregistrer</Text>
            <Button
                style={styles.buttonRegisterLogin}

                title="Connexion"
                onPress={() => {

                    navigation.navigate('Connexion'), { name: "monChibre" }
                }
                }
                //aaaaaaaaaaaaaaaaaaaa
                // onPress={() => navigation.navigate('Connexion')}
                // title="Connexion"
                accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de connexion"
            />
            <Button
                style={styles.buttonRegisterLogin}
                onPress={() => navigation.navigate('Inscription')}
                title="Inscription"
                accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de inscription"
            />
            <Button
                style={styles.buttonRegisterLogin}
                onPress={() => navigation.navigate('Menu')}
                title="Menu des jeux"
                accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de inscription"
            />
        </View>
    );
}

export default HomeScreen;