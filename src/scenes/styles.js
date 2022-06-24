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

    popUpText: {
        color: '#DFE2DF',fontSize:20, fontWeight: 'bold',
    },  

    popUpOption: {
        color: '#DFE2DF',fontSize:12, padding:10, textAlign:'center'
    },

    popUpTextInput: {
        borderWidth:2, backgroundColor:'#DFE2DF', borderColor:"#AAAAAA", marginTop:10, marginBottom:10, fontSize:20, borderRadius: 5,
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

    // buttonRegisterLogin: {
    //     paddingTop: 10,
    // },

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

    // ButtonOptionLobby1: {

    // },

    // ButtonOptionLobby2: {

    // },

});

export default styles;


