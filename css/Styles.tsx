import { StyleSheet } from "react-native"

export const estilo = StyleSheet.create({
    //Container
    container: {
        backgroundColor: '#090909',
        flex: 1,
        paddingTop: 50
    },

    //Começo do Header ############################
    header: {
        width: '100%',
        flexDirection: 'row',
        display: 'flex',
        paddingLeft: '10',
        paddingRight: '10',
        paddingBottom: '30'
    },
    perfil: {
        paddingLeft: 10
    },
    imgperfil: {
        width: 110,
        height: 100,
        resizeMode: 'contain',
        borderRadius: 800
    },
    titulo: {
        flex: 2,
        paddingLeft: '10'
    },
    nome: {
        color: '#989CAC',
        textAlign: 'left',
        fontSize: 30,
        paddingLeft: 10
    },
    descricao: {
        color: '#989CAC',
        textAlign: 'left',
        fontSize: 15,
        paddingLeft: 10
    },
    pesquisa: {
        paddingRight: 10
    },
    imgpesquisa: {
        flex: 1,
        width: 40,
        height: 40,
        resizeMode: 'contain',
        alignContent: 'center',

    },
    //Fim do Header #################################################
    stories: {

    },
    titulostories: {
        color: '#989CAC',
        fontSize: 20,
        margin: 10
    },
    scrollstories: {

    },
    imgstories: {
        width: 200,
        height: 300,
        resizeMode: 'contain',
        borderRadius: 60,
        margin: 10
    },
    blackbox: {
        width: 80,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#090909',
        color: '#989CAC',
        fontSize: 15,
        top: 20,
        left: 20,
        position: 'absolute',
        zIndex: 1000,
        padding: 10

    },
    redbox: {
        width: 80,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#600',
        color: '#989CAC',
        fontSize: 15,
        top: 20,
        left: 20,
        position: 'absolute',
        zIndex: 1000,
        padding: 10

    },
    txticon: {
        flexDirection: 'row'
    },
    txt: {
        color: '#989CAC',
        padding: 20,
        fontSize: 10
    },
    icon: {
        width: 18,
        height: 18,
        resizeMode: 'contain'
    }

    //Comeco do Stories
})
