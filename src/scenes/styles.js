import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({

    pageContainer: {
        flex: 1,
        backgroundColor: '#2A201B',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        flex:2,
        backgroundColor: '',
        borderColor: '',
        borderWidth:0,
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
        borderRadius:30,
    },

    Title: {
        fontSize:24,
        color:"white",
        fontWeight:"bold",
    },

    smTitle: {
        fontSize:16,
        fontWeight:"600",
        color:"white",
    },

    smTitleBlack: {
        fontSize:16,
        fontWeight:"400",
        color:"black",
    },

    inputRegisterLogin: {
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderColor: '#797979',
        borderRadius: 5,
    },

    buttonRegisterLogin: {
        backgroundColor: 'green',
    },


});

export default styles;


