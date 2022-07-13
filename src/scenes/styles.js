import { WHEN_UNLOCKED_THIS_DEVICE_ONLY } from 'expo-secure-store';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({

    divRound: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#AAAAAA',
        borderRadius: 3000,
        padding: 10,
        width:100,
        height:100,

    },

    buttonValid: {

    },

    imageLogo: {
        marginTop:20,
        padding:30,
        width:200,
        height:150,
    },

    mainView: {
        backgroundColor:'#DFE2DF', flex: 1, alignItems: 'center', justifyContent: 'center',
    },

    topView: {
        flex: 2, alignItems: 'center', justifyContent: 'center',
    },

    middleView: {
        flex:5, alignItems: 'center', justifyContent: 'start',
    },

    bottomView: {
        flex: 2, alignItems: 'center', justifyContent: 'center',
    },

    textTitle: {
        fontSize:30, padding:20, paddingTop:50, paddingBottom:20, shadowOffset:2, textAlign:'center'
    },  

    popUpView: { 
        backgroundColor: '#3F403F',alignItems: 'center', justifyContent: 'center', borderColor: '#AAAAAA', borderWidth:1, borderRadius:5, padding:20, shadowRadius:10, shadowOffset:{width:0,height:5}, shadowColor:'#AAAAAA',
    },

    popUpTextError: {
        alignSelf:'center', color:'#FE654F', padding:5,
    },

    popUpTitleText: {
        color: '#DFE2DF',fontSize:20, paddingBottom:20,
    },

    popUpTextStart: {
        color: '#DFE2DF',fontSize:20, paddingBottom:15, fontWeight: 'bold',
    },

    popUpLobbyRegles: {
        color: '#DFE2DF',fontSize:20, paddingBottom:15, fontWeight: 'bold', textAlign:'center', paddingTop:15,
    },

    popUpText: {
        color: '#DFE2DF',fontSize:20, fontWeight: 'bold', padding:5,
    },

    popUpTextCenter: {
        color: '#DFE2DF',fontSize:20, fontWeight: 'bold', padding:2.5, textAlign:"center",
    },

    popUpOption: {
        color: '#DFE2DF',fontSize:12, padding:10, textAlign:'center'
    },

    popUpTextInput: {
        borderWidth:2, backgroundColor:'#DFE2DF', borderColor:"#AAAAAA", marginTop:10, marginBottom:10, fontSize:20, borderRadius: 5,
    },

    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5
    },

    radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center"
    },

    radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6"
    },
    
    radioButtonText: {
        fontSize: 16,
        marginLeft: 16
    },

    popUpLobbyTextRegles:
    {
        marginBottom:5, color:"white",
    },

    popUpOptionLobby: 
    {
        fontWeight:"bold",
        textAlign:"center",
        fontSize:28,
        color:"white",
        padding:2.5,
    },

    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },

    // inputRegisterLogin: {
    //     backgroundColor: 'white',
    //     borderStyle: 'solid',
    //     borderWidth: 1,
    //     padding: 10,
    //     margin: 5,
    //     borderColor: '#797979',
    //     borderRadius: 5,
    // },

    imageProfil: {
        borderRadius:50,
        width:100,
        height:100,
        marginBottom:10,
    },

    imageProfilLobby: {
        borderRadius:50,
        width:30,
        height:30,
        marginBottom:10,
    },

    buttonRegisterLogin: {
        margin: 10,
    },

    LineLobby: {
        padding:10,
    },

    lobbyTopView: {
        flex:0.5,
    },

    popUpTextSimple: {
        fontSize:14,
        color:"white",
    },

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

    // ButtonOptionLobby1: {

    // },

    // ButtonOptionLobby2: {

    // },

});

export default styles;


