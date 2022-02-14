const ProfilScreen = ({ route, navigation }) => {
    const { pseudo, password } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles}>Nom du profil: {pseudo}</Text>
            <Text style={styles}>Password: {password}</Text>
            <Text style={styles}>Parties Jouées</Text>
            <Text style={styles}>Parties Gagnées</Text>
            <Button
                style={styles.buttonRegisterLogin}
                title="Retour au menu"
                accessibilityLabel="Appuyez sur ce bouton pour vous inscrire"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}
// export default function ProfilScreen() { }
