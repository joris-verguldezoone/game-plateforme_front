import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({

    pageContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin:0,
        padding:0,
    },

    homeContainer: {
        flex: 1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        width:width,
    },

    homeContainer2: {
        flex:3,
        backgroundColor:"#9EBE3A",
        justifyContent:"flex-start",
        alignItems:"center",
        alignSelf:"stretch",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        shadowColor:"#778F2B",
        shadowOpacity:100,
        shadowRadius:30,
        shadowOffset:{
            height:0,
            width:0,
        }
    },  

    Title: {
        fontSize: 32,
        fontWeight:"bold",
        textShadowColor:"black",
        textShadowRadius:20,
        textShadowOffset: {
            height:0,
            width:0,
        },
    },

    MediumTitle: {
        fontSize:28,
        fontWeight:"500",
    },

    LoginRegisterLabel: {
        fontSize: 18,
        fontWeight: "600",
    },

    loginRegisterInput: {
        borderColor:"#778F2B",
        borderWidth:1,
        backgroundColor:"#778F2B",
        color:"white",
        fontSize:18,
        padding:10,
        shadowColor:"#778F2B",
        shadowOpacity:100,
        shadowRadius:20,
        shadowOffset:{
            height:0,
            width:0,
        }
    },

    notRegisteredText: {
        fontSize:20,
        fontWeight:"400",
        paddingLeft:20,
        paddingRight:20,
    },

    inputContainer: {
        margin:10,
        width:width-80,
    }, 

    loginRegisterButton: {
        marginTop:20,
        fontSize:24,
        width:60,
    },
});

export default styles;


