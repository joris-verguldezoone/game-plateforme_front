
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './styles.js';

const RegisterScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfpassword] = useState('');
    const [formRef, setFormRef] = useState();

    return (

            <View style={styles.mainView}>
                <View style={styles.topView}>
                    <View style={styles.divRound}>
                        <Image
                            style={styles.imageLogo}
                            source={require('./logo.png')}
                        />
                    </View>
                </View>
                <View style={styles.middleView}>
                    <Text style={styles.textTitle}>Inscription</Text>
                    <View style={styles.popUpView}>
                        <View>
                            <Text style={styles.popUpTextError}></Text>

                            <Text style={styles.popUpText}>Pseudo</Text>
                            <TextInput style={styles.popUpTextInput}></TextInput>

                            <Text style={styles.popUpText}>Mot de passe</Text>
                            <TextInput style={styles.popUpTextInput}></TextInput>
        
                            <Text style={styles.popUpText}>Confirm. Mot de passe</Text>
                            <TextInput style={styles.popUpTextInput}></TextInput>
                    

                            <Text style={styles.popUpTextError}></Text>
                            
                            <View style={{flex:3}}>
                                <Button 
                                title="S'inscrire"
                                color="#6CA054"
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <View>
                        <Text></Text>
                    </View>
                </View>
            </View>
            // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            //     <Text style={styles}>Inscription</Text>
            //     <TextInput
            //         style={styles.inputRegisterLogin}
            //         placeholder="Username"
            //         autoComplete="MyName"
            //         onChange={e => setUsername(e.target.value)}
            //     />
            //     <TextInput
            //         style={styles.inputRegisterLogin}
            //         placeholder="Mot de passe"
            //         autoComplete="password"
            //         onChange={e => setPassword(e.target.value)}
            //     />
            //     <TextInput
            //         style={styles.inputRegisterLogin}
            //         placeholder="Conf. Mot de passe"
            //         autoComplete="password"
            //         onChange={e => setConfpassword(e.target.value)}
            //     />
            //     <Button
            //         style={styles.buttonRegisterLogin}
            //         title="S'inscrire"
            //         accessibilityLabel="Appuyez sur ce bouton pour vous inscrire"
            //         onPress={() => Register(username, password, confPassword)}
            //     />
            // </View>
    );
};

// export { RegisterScreen }

// const Register = (username, password, confPassword) => {
//     // set state ici qui sera récupéré apres la requete axios 
//     if (password == confPassword) {
//         console.log(password);
//         axios.post('http://localhost/' + "users", {
//             username: username,
//             password: password,
//             role: 1,
//             id_avatar: 1
//         })
//             .then(function (response) {
//                 console.log(response);
//                 let prout = JSON.stringify(response)
//                 console.log(prout);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//             .then(function () {
//             });
//     }
//     else {
//         return "Confirmation du mot de passe incorrect"
//     }
// }
export default RegisterScreen;

// export default function RegisterScreen() { }
