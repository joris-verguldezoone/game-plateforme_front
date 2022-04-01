import { StyleSheet, Text, View, Button, TextInput, } from 'react-native';
import styles from './styles.js';


const ProfilScreen = ({ navigation, accessToken, currentUser }) => {
    // const { pseudo, password } = route.params;
    console.log(accessToken + 'profil')
    console.log(currentUser + 'profil')
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<<<<<<< HEAD
            <View style={styles}>
                <Image/>
                <Text style={styles}>uuu</Text>
            </View>
            <View style={styles}>
                <Text style={styles}>A propos de moi:</Text>
                <View style={styles}>
                    <Text style={styles}>'uu'u'u'u'u'u'uuuuuuuuu'uuu'u'uu'u'u'</Text>
                </View>
            </View>
            <View style={styles}>
                <Text style={styles}>{pseudo}</Text>
                <Text style={styles}>Date de création du compte</Text>
                <Text style={styles}>Parties Jouées: </Text>
                <Text style={styles}>Parties Gagnées: </Text>
            </View>
=======
            <Text style={styles}>Nom du profil: </Text>
            <Text style={styles}>Password: </Text>
            <Text style={styles}>Parties Jouées</Text>
            <Text style={styles}>Parties Gagnées</Text>
>>>>>>> d98fa2f1f8b5d3d9c9e15e4d73cf6c66b00862a7
            <Button
                style={styles.buttonRegisterLogin}
                title="Retour au menu"
                accessibilityLabel="Appuyez sur ce bouton pour vous inscrire"
                onPress={() => navigation.navigate('HomeScreen')}
            />
        </View>
    );
}
export default ProfilScreen
