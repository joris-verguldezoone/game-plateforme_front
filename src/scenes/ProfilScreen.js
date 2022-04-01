const ProfilScreen = ({ route, navigation }) => {
    const { pseudo, password } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
