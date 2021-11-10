import { StyleSheet } from "react-native"

export const estilo= StyleSheet.create({
    container:{
    backgroundColor:'#090909',
    flex:1,
    paddingTop:50
    },
    header:{
        width:'100%',
        flexDirection:'row',
        display:'flex',
        paddingLeft:'10',
        paddingRight:'10',
        paddingBottom:'30'
    },
    perfil:{

    },
    imgperfil:{
        width:110,
        height:100,
        resizeMode:'contain',
        borderRadius:800
    },
    titulo:{
        flex:2
    },
    nome:{
        color:'#989CAC',
        textAlign:'left',
        fontSize:30
    },
    descricao:{
        color:'#989CAC',
        textAlign:'left',
        fontSize:15
    },
    pesquisa:{
        width:55,
        height:50,
        backgroundColor:'#989CAC',
        borderRadius:800
    },
    imgpesquisa:{
        flex:1,
        width:40,
        height:40,
        resizeMode:'contain',
        alignContent:'center',
        paddingLeft:'50%'
    },

})
