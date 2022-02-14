function MainScreen({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles}>Menu des jeux</Text>
            <ScrollView>

                <TouchableOpacity
                    style={styles}
                    onPress={() => navigation.navigate('InfoJeu')}
                >
                    <Text style={styles}>Jeu 1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles}>Jeu 2</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles}>Jeu 3</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}

// export default function MainScreen() { }