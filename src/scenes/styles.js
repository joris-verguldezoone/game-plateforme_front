import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({

    pageContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
    },

    homeContainer: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        width: width,
    },

    homeContainer2: {
        flex: 3,
        backgroundColor: "#0458af",
        justifyContent: "flex-start",
        alignItems: "center",
        alignSelf: "stretch",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "#0458af",
        shadowOpacity: 100,
        shadowRadius: 30,
        shadowOffset: {
            height: 0,
            width: 0,
        }
    },

    Title: {
        fontSize: 32,
        fontWeight: "bold",
    },

    MediumTitle: {
        fontSize: 28,
        fontWeight: "800",
        color: "white",
    },

    LoginRegisterLabel: {
        fontSize: 18,
        fontWeight: "600",
        color: "white",
    },

    loginRegisterInput: {
        borderRadius: 8,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "white",
        color: "black",
        fontSize: 18,
        padding: 10,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {
            height: 5,
            width: 0,
        },
    },

    // LineLobby: {
    //     flex:1,
    //     flexDirection:'row',
    //     alignContent: 'flex-start',
    //     justifyContent: 'center',
    //     backgroundColor:'white',
    //     maxHeight:20,
    //     width:300,
    //     margin:10,
    // },

    // ViewLobby1: {
    //     flex: 2,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: 'darkgreen',
    // },

    // ViewLobby2: {
    //     flex: 1,
    //     flexDirection: 'column',
    //     alignItems: 'flex-start',
    //     justifyContent: 'flex-start',
    //     backgroundColor: 'lightblue'
    // },

    // ButtonEquipeLobby: {
    //     flex: 1
    // },

    // TextPlayerLobby: {
    //     flex: 3,
    // },

    // TextButtonLobby: {
    //     flex: 1,
    //     backgroundColor: 'orange',
    // },

    // ImageLobby: {
    //     flex: 1,

    // },

    // ImagePlayerLobby: {
    //     flex: 1,
    // },

    // ViewOptionsLobby: {

    // },

    // InputCheckboxLobby: {

    // },

    notRegisteredText: {
        fontSize: 18,
        fontWeight: "600",
        color: "black",
        padding: 5,
    },

    inputContainer: {
        margin: 8,
        width: width - 80,
    },


    // },

    // ButtonOptionLobby2: {

    // },

    loginRegisterButton: {
        backgroundColor: "white",
        alignItems: "center",
        alignSelf: "center",
        padding: 6,
        width: 200,
        margin: 7,
        borderRadius: 8,
        borderColor: "black",
        borderWidth: 1,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {
            height: 5,
            width: 0,
        }
    },

    loginRegisterButtonText: {
        fontSize: 20,
        fontWeight: "500",
        color: "black",
        padding: 3,
    },

    regle: {
        borderTopWidth: 1,
        borderColor: "white",
        width: width - 80,
        padding: 3,
    },
});

export default styles;


