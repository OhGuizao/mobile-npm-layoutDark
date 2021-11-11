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



    //Começo do Stories ################################################
    stories: {

    },
    titulostories: {
        color: '#989CAC',
        fontSize: 20,
        margin: 25
    },
    scrollstories: {

    },
    imgstories: {
        width: 200,
        height: 400,
        resizeMode: 'cover',
        borderRadius: 40,
        margin: 10
    },
    blackbox: {
        width: 80,
        height: 40,
        borderRadius: 13,
        backgroundColor: '#090909',
        color: '#989CAC',
        fontSize: 10,
        top: 20,
        left: 20,
        position: 'absolute',
        zIndex: 1000,
        padding: 10,
        textAlign:'center'

    },
    redbox: {
        width: 80,
        height: 40,
        borderRadius: 13,
        backgroundColor: '#600',
        color: '#989CAC',
        fontSize: 10,
        top: 20,
        left: 20,
        position: 'absolute',
        zIndex: 1000,
        padding: 10,
        alignItems:'center'

    },
    txticon: {
        flexDirection: 'row',
        marginLeft:30,
        alignItems:'center'

    },
    txt: {
        color: '#989CAC',
        padding: 20,
        fontSize: 10
    },
    icon: {
        marginLeft:3,
        width: 18,
        height: 18,
        resizeMode: 'contain'
    },

    //Fim do Stories ###################################

    //Começo do Trending ###############################
    trending: {

    },

    trendingcxtitulo: {
        flexDirection: 'row',
        alignItems:'center',
        marginTop:30,
        marginBottom:30
    },
    tredingtitulo: {
        fontSize: 30,
        color: '#989CAC',
        paddingLeft:10
    },
    trendingmore: {
        width: 60,
        height: 10,
        resizeMode: "contain",
        marginLeft:'Auto',
        paddingRight:10
    },
    cxtredingdetalhe: {
        backgroundColor: '#403D40',
        borderRadius: 20,
        padding: 10,
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto'
    },
    detalheimg: {
        width: 340,
        height: 170,
        borderRadius: 10,
        resizeMode: 'cover'
    },
    detalhelike: {
        backgroundColor: '#ff6',
        padding: 10,
        borderWidth: 5,
        borderColor: 'rgba(255,255,10,0.7)',
        position: 'absolute',
        zIndex: 1000,//empilhamento do onjeto
        bottom:0,//bottom foi utilizado para mandaar o like para baixo
        right:0,//right foi utilizado para mandaar o like para direita
        borderBottomRightRadius:10,//borderBottomRightRadius foi usado para arredondar a borda do lado inferior direito
        borderTopLeftRadius:10,//borderTopLeftRadius foi usado para arredondar a borda do lado superior esquerdo
        textAlign:'center'
    },
    dedolike:{

    },
    trendinguser: {
        flexDirection: 'row',
        marginTop:10,
        marginBottom:10,
        
    },
    trendingusuarioimg: {
        width: 50,
        height: 50,
        borderRadius: 800,
        resizeMode: 'contain',
        marginRight:10
    },
    trendingusuariotitulo: {
        fontSize:20,
        color:'#989CAC',
        fontWeight:'bold'
    },
    treendingusuariosub: {
        color:'#989cac'
    },
    trendinggobs: {
        color:'#989cac'
    },
})
