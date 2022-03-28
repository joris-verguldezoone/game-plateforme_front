import { StyleSheet, Text, View, Button, TextInput, } from 'react-native';
import styles from './styles.js';


const ProfilScreen = ({ navigation, accessToken, currentUser }) => {
    // const { pseudo, password } = route.params;
    console.log(accessToken + 'profil')
    console.log(currentUser + 'profil')
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles}>Nom du profil: </Text>
            <Text style={styles}>Password: </Text>
            <Text style={styles}>Parties Jouées</Text>
            <Text style={styles}>Parties Gagnées</Text>
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
